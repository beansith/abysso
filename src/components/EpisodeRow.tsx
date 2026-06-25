import type { Episode } from '../data/episodes'
import { EpisodeArtwork } from './EpisodeArtwork'
import { CategoryArtwork } from './CategoryArtwork'
import { BloodDrops, TriggerWarning } from './EpisodeMeta'


interface Props {
  episode: Episode
  onUnlockRequest: () => void
  onPlay?: () => void
  onRecoOpen?: (episodeId: number) => void
  onEpisodeOpen?: (episodeId: number) => void
}

export default function EpisodeRow({ episode, onUnlockRequest, onPlay, onRecoOpen, onEpisodeOpen }: Props) {
  const { id, categoryId, number, title, subtitle, duration, genre, locked, isRecommendation, recommendationBody } = episode

  const useFictionArt = categoryId === 'fiction' && id <= 8

  const handleClick = () => {
    if (isRecommendation && onRecoOpen) { onRecoOpen(id); return }
    if (!isRecommendation && onEpisodeOpen) { onEpisodeOpen(id); return }
    if (locked) { onUnlockRequest(); return }
    if (onPlay) onPlay()
  }

  const isClickable = true

  return (
    <div
      className={`ep-row${locked ? ' ep-row-locked' : ''}${isClickable ? ' ep-row-clickable' : ''}`}
      onClick={handleClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      {useFictionArt
        ? <EpisodeArtwork id={id} className="ep-row-art" />
        : <CategoryArtwork categoryId={categoryId} />
      }

      <div className="ep-row-info">
        <span className="ep-row-num">{number} {genre && `· ${genre}`}</span>
        <span className="ep-row-title">{title}</span>
        {!isRecommendation && <BloodDrops level={episode.fearLevel ?? 0} size="sm" />}
        {!isRecommendation && episode.triggerWarnings && (
          <TriggerWarning warnings={episode.triggerWarnings} />
        )}
        <span className="ep-row-sub">{subtitle}</span>
        {isRecommendation && !locked && recommendationBody && (
          <p className="ep-row-reco-body">{recommendationBody}</p>
        )}
      </div>

      <div className="ep-row-meta">
        {duration && <span className="ep-row-duration">{duration}</span>}
        {!locked && !isRecommendation && <span className="ep-row-free">Gratuit</span>}
      </div>
    </div>
  )
}
