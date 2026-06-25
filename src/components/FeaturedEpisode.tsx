import type { Episode } from '../data/episodes'
import { EpisodeArtwork } from './EpisodeArtwork'
import { BloodDrops } from './EpisodeMeta'

interface Props {
  episode: Episode
  isPlaying: boolean
  currentTime: number
  duration: number
  onPlay: () => void
  onEpisodeOpen: () => void
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </svg>
  )
}

export default function FeaturedEpisode({ episode, isPlaying, currentTime, duration, onPlay, onEpisodeOpen }: Props) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="featured">
      <div className="featured-inner" onClick={onEpisodeOpen}>
        <EpisodeArtwork id={episode.id} className="featured-art" />
        <div className="featured-info">
          <span className="featured-ep-num">Épisode 1</span>
          <h2 className="featured-title">{episode.title}</h2>
          <BloodDrops level={episode.fearLevel ?? 0} size="sm" />
          <p className="featured-sub">{episode.subtitle}</p>
          <div className="featured-meta">
            <span>{episode.duration}</span>
            <span className="meta-dot">·</span>
            <span className="meta-free">Gratuit 7 min</span>
          </div>
        </div>
        <button
          className="featured-play"
          onClick={(e) => { e.stopPropagation(); onPlay() }}
          aria-label={isPlaying ? 'Pause' : 'Écouter'}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <div className="featured-bar">
        <div className="featured-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
