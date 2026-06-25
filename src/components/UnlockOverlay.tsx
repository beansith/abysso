interface Props {
  onUnlock: (type: 'episode' | 'subscription') => void
  onDismiss: () => void
  loading?: boolean
}

function LockIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6b0f0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export default function UnlockOverlay({ onUnlock, onDismiss, loading }: Props) {
  return (
    <div
      className="overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onDismiss() }}
    >
      <div className="overlay-sheet" role="dialog" aria-modal="true">
        <div className="overlay-icon">
          <LockIcon />
        </div>
        <h2 className="overlay-title">La suite vous attend dans l'obscurité</h2>
        <p className="overlay-desc">
          Vous avez écouté les 7 premières minutes gratuitement.<br />
          Débloquez l'histoire complète pour entendre la fin avant qu'Elle ne t'entende.
        </p>

        <button
          className="unlock-btn"
          onClick={() => onUnlock('episode')}
          disabled={loading}
        >
          {loading ? 'Redirection…' : 'Débloquer cet épisode — 0,99€'}
        </button>

        <button
          className="unlock-btn-sub"
          onClick={() => onUnlock('subscription')}
          disabled={loading}
        >
          Tout débloquer — 6,99€ / mois
        </button>

        <button className="overlay-cancel" onClick={onDismiss}>
          Recommencer depuis le début
        </button>
      </div>
    </div>
  )
}
