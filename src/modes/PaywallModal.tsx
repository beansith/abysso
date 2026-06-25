import { useMode } from '../ModeContext'
import type { Dossier } from '../data/dossiers'

interface Props {
  dossier: Dossier
  onUnit: () => void
  onSub: () => void
  onClose: () => void
  loading: boolean
}

export default function PaywallModal({ dossier, onUnit, onSub, onClose, loading }: Props) {
  const { mode } = useMode()
  const cls = mode === 'interference' ? 'if' : mode === 'surveillance' ? 'sv' : 'cl'

  return (
    <div className="abysso-modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`abysso-modal abysso-modal--${cls}`} onClick={(e) => e.stopPropagation()}>
        <div className={`abysso-modal-stamp abysso-modal-stamp--${cls}`}>RESTREINT</div>
        <div className={`abysso-modal-kicker abysso-modal-kicker--${cls}`}>⊘ ACCÈS RESTREINT</div>
        <div className="abysso-modal-title">{dossier.title}</div>
        <div className="abysso-modal-meta">{dossier.id} · {dossier.section} · {dossier.dur}</div>
        <div className="abysso-modal-desc">Ce dossier nécessite un accès. Débloquez-le à l'unité, ou ouvrez l'archive entière.</div>
        <button className={`abysso-modal-btn abysso-modal-btn--${cls}`} onClick={onUnit} disabled={loading}>
          {loading ? 'Redirection…' : 'DÉBLOQUER CE DOSSIER — 0,99€'}
        </button>
        <button className={`abysso-modal-btn-outline abysso-modal-btn-outline--${cls}`} onClick={onSub} disabled={loading}>
          ACCÈS INTÉGRAL — 6,99€ / MOIS
        </button>
        <div className="abysso-modal-later" onClick={onClose}>PEUT-ÊTRE PLUS TARD</div>
      </div>
    </div>
  )
}
