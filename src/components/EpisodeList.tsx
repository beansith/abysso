import type { Episode } from '../data/episodes'
import { EpisodeArtwork } from './EpisodeArtwork'
import { BloodDrops } from './EpisodeMeta'

interface Props {
  episodes: Episode[]
  onEpisodeOpen: (id: number) => void
}


export default function EpisodeList({ episodes, onEpisodeOpen }: Props) {
  return (
    <div className="ep-grid">
      {episodes.map((ep) => (
        <div
          key={ep.id}
          className={`ep-card ep-card-clickable${ep.locked ? ' ep-locked' : ''}`}
          onClick={() => onEpisodeOpen(ep.id)}
          role="button"
          tabIndex={0}
        >
          <div className="ep-card-art-wrap">
            <EpisodeArtwork id={ep.id} className="ep-card-art" />
          </div>
          <div className="ep-card-info">
            <span className="ep-card-num">{ep.number}</span>
            <span className="ep-card-title">{ep.title}{ep.locked && <span className="ep-card-lock-emoji" aria-hidden="true"> 🔒</span>}</span>
            <BloodDrops level={ep.fearLevel ?? 0} size="sm" />
            <span className="ep-card-sub">{ep.subtitle}</span>
            <span className="ep-card-meta">{ep.duration} · {ep.genre}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
