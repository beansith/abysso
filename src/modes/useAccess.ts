import { useCallback, useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import type { Dossier } from '../data/dossiers'

const PURCHASES_KEY = 'abysso_purchased_dossiers'
const SUBSCRIBED_KEY = 'abysso_subscribed'

function readPurchases(): string[] {
  try {
    const raw = localStorage.getItem(PURCHASES_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

function writePurchases(ids: string[]) {
  try { localStorage.setItem(PURCHASES_KEY, JSON.stringify(ids)) } catch { /* noop */ }
}

function readSubscribedLocal(): boolean {
  try { return localStorage.getItem(SUBSCRIBED_KEY) === 'true' } catch { return false }
}

interface AccessApi {
  /** true si l'utilisateur a un abonnement actif (Stripe subscription confirmée côté Clerk) */
  subscribed: boolean
  /** ids des dossiers achetés à l'unité (localStorage) */
  purchasedIds: string[]
  /** un dossier est consultable s'il est gratuit, acheté, ou si l'abonnement est actif */
  owns: (d: Dossier) => boolean
  /** marque un dossier comme acheté à l'unité (après retour Stripe success) */
  markPurchased: (id: string) => void
}

export function useAccess(): AccessApi {
  const { user } = useUser()
  const [purchasedIds, setPurchasedIds] = useState<string[]>(() => readPurchases())
  const [subscribedLocal, setSubscribedLocal] = useState<boolean>(() => readSubscribedLocal())

  // TODO: remplacer par la vraie source de vérité (webhook Stripe -> Clerk unsafeMetadata)
  // dès qu'un endpoint serveur est en place. En attendant, le flag localStorage posé au
  // retour de checkout fait foi sur cet appareil.
  const subscribed = Boolean(user?.unsafeMetadata?.abyssoSubscribed) || subscribedLocal

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === PURCHASES_KEY) setPurchasedIds(readPurchases())
      if (e.key === SUBSCRIBED_KEY) setSubscribedLocal(readSubscribedLocal())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const markPurchased = useCallback((id: string) => {
    setPurchasedIds(prev => {
      if (prev.includes(id)) return prev
      const next = [...prev, id]
      writePurchases(next)
      return next
    })
  }, [])

  const owns = useCallback((d: Dossier) => {
    return d.free || subscribed || purchasedIds.includes(d.id)
  }, [subscribed, purchasedIds])

  return { subscribed, purchasedIds, owns, markPurchased }
}
