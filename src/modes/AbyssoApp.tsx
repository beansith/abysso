import { useState, useRef, useCallback, useEffect } from 'react'
import type { ReactNode } from 'react'
import { useMode } from '../ModeContext'
import { ALL_DOSSIERS, dossierById } from '../data/dossiers'
import type { Dossier } from '../data/dossiers'
import { useAccess } from './useAccess'
import Gate from './Gate'
import ModeSwitcher from './ModeSwitcher'
import AbyssoHeader from './AbyssoHeader'
import type { Route } from './AbyssoHeader'
import Home from './Home'
import Catalogue from './Catalogue'
import DossierPage from './DossierPage'
import Abonnement from './Abonnement'
import StickyPlayer from './StickyPlayer'
import PaywallModal from './PaywallModal'

const SEEN_GATE_KEY = 'abysso_seen_gate'

interface Props {
  authSlot?: ReactNode
}

export default function AbyssoApp({ authSlot }: Props) {
  const { mode } = useMode()
  const { markPurchased, owns } = useAccess()

  const [seenGate, setSeenGate] = useState(() => {
    try { return localStorage.getItem(SEEN_GATE_KEY) === 'true' } catch { return false }
  })
  const [route, setRoute] = useState<Route>('accueil')
  const [activeDossierId, setActiveDossierId] = useState<string | null>(null)
  const [sectionFilter, setSectionFilter] = useState<string | undefined>(undefined)

  const [nowId, setNowId] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [curSec, setCurSec] = useState(0)
  const [clock, setClock] = useState('')
  const [paywallDossier, setPaywallDossier] = useState<Dossier | null>(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  const tickRef = useRef<number | null>(null)

  // Horloge temps réel (affichage façon CCTV / terminal)
  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const p = (n: number) => String(n).padStart(2, '0')
      setClock(`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`)
    }
    tick()
    const iv = window.setInterval(tick, 1000)
    return () => window.clearInterval(iv)
  }, [])

  // Simulation de lecture (placeholder tant qu'il n'y a pas de vrai flux audio par dossier)
  useEffect(() => {
    if (tickRef.current) window.clearInterval(tickRef.current)
    if (isPlaying && nowId) {
      tickRef.current = window.setInterval(() => {
        setCurSec(prev => {
          const ep = dossierById(nowId)
          if (!ep) return prev
          const next = Math.min(prev + 1, ep.durSec)
          if (next >= ep.durSec) setIsPlaying(false)
          return next
        })
      }, 1000)
    }
    return () => { if (tickRef.current) window.clearInterval(tickRef.current) }
  }, [isPlaying, nowId])

  // Retour Stripe : ?unlocked=true&dossier_id=ABY-00X&type=episode|subscription
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('unlocked') === 'true') {
      const id = params.get('dossier_id')
      const type = params.get('type')
      if (type === 'subscription') {
        try { localStorage.setItem('abysso_subscribed', 'true') } catch { /* noop */ }
      } else if (id) {
        markPurchased(id)
      }
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [markPurchased])

  const dismissGate = useCallback(() => {
    setSeenGate(true)
    try { localStorage.setItem(SEEN_GATE_KEY, 'true') } catch { /* noop */ }
  }, [])

  const goRoute = useCallback((r: Route) => {
    setActiveDossierId(null)
    if (r !== 'catalogue') setSectionFilter(undefined)
    setRoute(r)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const openDossier = useCallback((id: string) => {
    setActiveDossierId(id)
    setRoute('dossier')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const openSection = useCallback((code: string) => {
    setSectionFilter(code)
    setRoute('catalogue')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const startPlayback = useCallback((d: Dossier) => {
    setNowId(prev => {
      if (prev !== d.id) setCurSec(0)
      return d.id
    })
    setIsPlaying(true)
  }, [])

  const handlePlay = useCallback((d: Dossier) => {
    if (!owns(d)) { setPaywallDossier(d); return }
    if (nowId === d.id) { setIsPlaying(p => !p); return }
    startPlayback(d)
  }, [nowId, owns, startPlayback])

  const handleToggle = useCallback((d: Dossier) => { handlePlay(d) }, [handlePlay])

  const handleScrub = useCallback((pct: number) => {
    const ep = nowId ? dossierById(nowId) : null
    if (!ep) return
    setCurSec(Math.round(pct * ep.durSec))
  }, [nowId])

  const handleSeek = useCallback((delta: number) => {
    const ep = nowId ? dossierById(nowId) : null
    if (!ep) return
    setCurSec(prev => Math.max(0, Math.min(ep.durSec, prev + delta)))
  }, [nowId])

  const handleUnlockRequest = useCallback((d: Dossier) => { setPaywallDossier(d) }, [])

  const checkout = useCallback(async (type: 'episode' | 'subscription', dossierId: string) => {
    setCheckoutLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ episodeId: dossierId, origin: window.location.origin, type }),
      })
      const { url } = await res.json()
      window.location.href = url
    } catch {
      setCheckoutLoading(false)
    }
  }, [])

  const nowDossier = nowId ? dossierById(nowId) ?? null : null

  if (!seenGate) {
    return (
      <>
        {authSlot && <div className="gate-auth-slot">{authSlot}</div>}
        <Gate onSelect={dismissGate} />
      </>
    )
  }

  const content = (() => {
    if (route === 'dossier' && activeDossierId) {
      return (
        <DossierPage
          dossierId={activeDossierId}
          onBack={() => goRoute('catalogue')}
          onOpenDossier={openDossier}
          onUnlockRequest={handleUnlockRequest}
          nowId={nowId}
          isPlaying={isPlaying}
          curSec={curSec}
          durSec={nowDossier?.durSec ?? 0}
          onToggle={handleToggle}
          onScrub={handleScrub}
          onSeek={handleSeek}
        />
      )
    }
    if (route === 'catalogue') {
      return (
        <Catalogue
          onOpenDossier={openDossier}
          onPlay={handlePlay}
          initialFilter={(sectionFilter as 'all' | undefined) ?? 'all'}
          nowId={nowId}
          isPlaying={isPlaying}
        />
      )
    }
    if (route === 'abonnement') {
      return (
        <Abonnement
          onGoCatalogue={() => goRoute('catalogue')}
          onSubscribe={() => checkout('subscription', activeDossierId ?? ALL_DOSSIERS[0].id)}
          subLoading={checkoutLoading}
        />
      )
    }
    return (
      <Home
        onOpenDossier={openDossier}
        onOpenSection={openSection}
        onPlay={handlePlay}
        nowId={nowId}
        isPlaying={isPlaying}
      />
    )
  })()

  const body = mode === 'interference' ? (
    <div className="if-window-wrap">
      <div className="if-window">
        <div className="if-titlebar">
          <span className="if-titlebar-name">NAVI://ABYSSO/ARCHIVE<span className="if-titlebar-cursor" /></span>
          <span className="if-titlebar-spacer" />
          <span className="if-titlebar-controls">▢ ◻ ✕</span>
        </div>
        <div className="if-window-body">{content}</div>
      </div>
    </div>
  ) : content

  return (
    <div className="abysso-shell">
      <div className="abysso-fx abysso-fx--scanlines" aria-hidden="true" />
      <div className="abysso-fx abysso-fx--vignette" aria-hidden="true" />
      <div className="abysso-fx abysso-fx--flicker" aria-hidden="true" />
      <div className="abysso-fx abysso-fx--sweep" aria-hidden="true" />
      <div className="cl-creak-fx" aria-hidden="true" />

      <ModeSwitcher onGate={() => setSeenGate(false)}>{authSlot}</ModeSwitcher>
      <AbyssoHeader route={route} clock={clock} onGo={goRoute} />

      {body}

      <StickyPlayer
        nowDossier={nowDossier}
        isPlaying={isPlaying}
        curSec={curSec}
        onTogglePlay={() => setIsPlaying(p => !p)}
        onScrub={handleScrub}
        onClose={() => { setNowId(null); setIsPlaying(false); setCurSec(0) }}
        onOpenNow={() => { if (nowId) openDossier(nowId) }}
      />

      {paywallDossier && (
        <PaywallModal
          dossier={paywallDossier}
          loading={checkoutLoading}
          onUnit={() => checkout('episode', paywallDossier.id)}
          onSub={() => checkout('subscription', paywallDossier.id)}
          onClose={() => setPaywallDossier(null)}
        />
      )}
    </div>
  )
}
