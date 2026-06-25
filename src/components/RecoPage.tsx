import type { Episode } from '../data/episodes'

interface Props {
  episode: Episode
  onBack: () => void
}

function BackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7"/>
    </svg>
  )
}

export default function RecoPage({ episode, onBack }: Props) {
  const paragraphs = episode.recommendationBody?.split('\n\n') ?? []

  return (
    <div className="reco-page">
      <button className="reco-back" onClick={onBack}>
        <BackIcon />
        Recommandations
      </button>

      <h2 className="reco-title">{episode.title}</h2>
      <p className="reco-hook">{episode.subtitle}</p>

      <div className="reco-divider" />

      <div className="reco-body">
        {paragraphs.map((p, i) => (
          <p key={i} className="reco-para">{p}</p>
        ))}
      </div>

    </div>
  )
}
