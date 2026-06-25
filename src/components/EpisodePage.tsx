import { useState } from 'react'
import type { MouseEvent } from 'react'
import type { Episode } from '../data/episodes'
import { ALL_EPISODES } from '../data/episodes'
import { EpisodeArtwork } from './EpisodeArtwork'
import { CategoryArtwork } from './CategoryArtwork'
import EpisodeRow from './EpisodeRow'
import { BloodDrops, TriggerWarning } from './EpisodeMeta'

function BackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7"/>
    </svg>
  )
}
function PlayIcon()  { return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> }
function PauseIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg> }
function LockIcon()  {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  )
}

function ShareButton({ title, subtitle }: { title: string; subtitle: string }) {
  const [copied, setCopied] = useState(false)
  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title: `Abysso — ${title}`, text: subtitle, url }).catch(() => {})
    } else {
      await navigator.clipboard.writeText(url).catch(() => {})
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  return (
    <button className="ep-page-share" onClick={handleShare}>
      {copied ? 'Lien copié' : 'Partager'}
    </button>
  )
}

function formatTime(s: number) {
  if (!isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  return `${m}:${Math.floor(s % 60).toString().padStart(2, '0')}`
}

interface Props {
  episode: Episode
  onBack: () => void
  isPlaying: boolean
  currentTime: number
  duration: number
  paid: boolean
  paywallSeconds: number
  onPlay: () => void
  onSeek: (time: number) => void
  onUnlockRequest: () => void
  onEpisodeOpen: (id: number) => void
}

export default function EpisodePage({
  episode, onBack,
  isPlaying, currentTime, duration, paid, paywallSeconds,
  onPlay, onSeek, onUnlockRequest, onEpisodeOpen,
}: Props) {
  const { id, categoryId, title, subtitle, genre, duration: dur, locked, audioSrc, fact, number } = episode

  const useFictionArt = categoryId === 'fiction' && id <= 8
  const hasAudio = !!audioSrc
  const progress   = duration > 0 ? (currentTime / duration) * 100 : 0
  const paywallPct = duration > 0 ? (paywallSeconds / duration) * 100 : 0

  const handleBarClick = (e: MouseEvent<HTMLDivElement>) => {
    if (duration <= 0) return
    const rect = e.currentTarget.getBoundingClientRect()
    onSeek(((e.clientX - rect.left) / rect.width) * duration)
  }

  const related = ALL_EPISODES
    .filter(e => e.categoryId === categoryId && e.id !== id && !e.isRecommendation)
    .slice(0, 2)

  return (
    <div className="ep-page">
      <button className="ep-page-back" onClick={onBack}>
        <BackIcon />
        Retour
      </button>

      <div className="ep-page-layout">

        {/* ── Artwork + Player ── */}
        <div className="ep-page-art-col">
          {useFictionArt
            ? <EpisodeArtwork id={id} className="ep-page-art" />
            : <CategoryArtwork categoryId={categoryId} className="ep-page-art" />
          }
          {hasAudio && !locked && (
            <div className="ep-page-player">
              <div className="ep-page-bar" onClick={handleBarClick} role="slider" aria-valuenow={currentTime} aria-valuemin={0} aria-valuemax={duration} tabIndex={0}>
                <div className="ep-page-bar-fill" style={{ width: `${progress}%` }} />
                {duration > 0 && !paid && (
                  <div className="ep-page-bar-marker" style={{ left: `calc(${paywallPct}% - 1px)` }} />
                )}
              </div>
              <div className="ep-page-player-row">
                <button className="ep-page-play-btn" onClick={onPlay} aria-label={isPlaying ? 'Pause' : 'Lecture'}>
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
                <span className="ep-page-time">
                  {formatTime(currentTime)}
                  <span className="ep-page-time-sep"> / </span>
                  {formatTime(duration)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ── Info ── */}
        <div className="ep-page-info-col">
          <p className="ep-page-num">{number}</p>
          <h2 className="ep-page-title">{title}</h2>
          <BloodDrops level={episode.fearLevel ?? 0} size="md" />
          {episode.triggerWarnings && (
            <TriggerWarning warnings={episode.triggerWarnings} />
          )}
          <p className="ep-page-sub">{subtitle}</p>

          <div className="ep-page-tags">
            <span className="ep-page-tag">{genre}</span>
            {dur && <span className="ep-page-tag">{dur}</span>}
            {locked
              ? <span className="ep-page-tag ep-page-tag-lock"><LockIcon /> Verrouillé</span>
              : <span className="ep-page-tag ep-page-tag-free">Gratuit</span>
            }
          </div>

          <ShareButton title={title} subtitle={subtitle} />

          {locked && (
            <button className="unlock-btn ep-page-unlock" onClick={onUnlockRequest}>
              Débloquer cet épisode — 0,99€
            </button>
          )}

          {!hasAudio && !locked && (
            <p className="ep-page-soon">Audio indisponible.</p>
          )}
        </div>
      </div>

      {/* Fact */}
      {fact && (
        <div className="ep-page-fact">
          <span className="ep-page-fact-label">Le saviez-vous ?</span>
          <p className="ep-page-fact-text">{fact}</p>
        </div>
      )}

      {/* Archive */}
      {episode.archive && episode.archive.length > 0 && (
        <div className="ep-archive">
          <div className="ep-archive-sep" />
          <p className="ep-archive-label">DOSSIER — SOURCES &amp; DOCUMENTS</p>
          <ul className="ep-archive-list">
            {episode.archive.map((src, i) => (
              <li key={i} className="ep-archive-item">
                <div className="ep-archive-item-inner">
                  {src.url ? (
                    <a href={src.url} className="ep-archive-link" target="_blank" rel="noopener noreferrer">
                      {src.title}
                    </a>
                  ) : (
                    <span className="ep-archive-link ep-archive-link--static">{src.title}</span>
                  )}
                  <span className="ep-archive-meta">
                    {src.author && `${src.author}`}{src.author && ` · `}{src.year}
                    {src.url && <span className="ep-archive-ext"> ↗</span>}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <div className="ep-page-related">
          <p className="ep-page-related-label">Tu pourrais aussi aimer</p>
          <div className="ep-list">
            {related.map(ep => (
              <EpisodeRow
                key={ep.id}
                episode={ep}
                onPlay={() => onEpisodeOpen(ep.id)}
                onUnlockRequest={() => onEpisodeOpen(ep.id)}
                onEpisodeOpen={onEpisodeOpen}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
