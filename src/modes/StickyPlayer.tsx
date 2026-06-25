import { useMode } from '../ModeContext'
import type { Dossier } from '../data/dossiers'

interface Props {
  nowDossier: Dossier | null
  isPlaying: boolean
  curSec: number
  onTogglePlay: () => void
  onScrub: (pct: number) => void
  onClose: () => void
  onOpenNow: () => void
}

function fmt(sec: number): string {
  const s = Math.max(0, Math.floor(sec))
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

export default function StickyPlayer({ nowDossier, isPlaying, curSec, onTogglePlay, onScrub, onClose, onOpenNow }: Props) {
  const { mode } = useMode()
  if (!nowDossier) return null

  const progressPct = nowDossier.durSec > 0 ? Math.min(100, (curSec / nowDossier.durSec) * 100) : 0
  const curLabel = fmt(curSec)
  const durLabel = fmt(nowDossier.durSec)

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    onScrub(Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)))
  }

  const cls = mode === 'interference' ? 'if' : mode === 'surveillance' ? 'sv' : 'cl'

  return (
    <div className={`abysso-sticky abysso-sticky--${cls}`}>
      <div className={`abysso-sticky-bar abysso-sticky-bar--${cls}`} onClick={handleScrub}>
        <div className={`abysso-sticky-bar-fill abysso-sticky-bar-fill--${cls}`} style={{ width: `${progressPct}%` }} />
      </div>
      <div className="abysso-sticky-row">
        <button className={`abysso-sticky-btn abysso-sticky-btn--${cls}`} onClick={onTogglePlay}>
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <div className="abysso-sticky-info" onClick={onOpenNow}>
          <div className="abysso-sticky-title">{nowDossier.title}</div>
          <div className="abysso-sticky-meta">{nowDossier.id} · {nowDossier.section}</div>
        </div>
        {mode !== 'clinique' && (
          <div className={`abysso-eq abysso-eq--${cls}`} style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
            {[55,100,40,78].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
          </div>
        )}
        <div className="abysso-sticky-time">{curLabel} / {durLabel}</div>
        <button className="abysso-sticky-close" onClick={onClose}>✕</button>
      </div>
    </div>
  )
}
