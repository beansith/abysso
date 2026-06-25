import type { MouseEvent } from 'react'

interface Props {
  title: string
  isPlaying: boolean
  currentTime: number
  duration: number
  onPlayPause: () => void
  onSeek: (time: number) => void
  paywallSeconds: number
}

function formatTime(s: number): string {
  if (!isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </svg>
  )
}

export default function AudioPlayer({
  title, isPlaying, currentTime, duration,
  onPlayPause, onSeek, paywallSeconds,
}: Props) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0
  const paywallPct = duration > 0 ? (paywallSeconds / duration) * 100 : 0

  const handleTrackClick = (e: MouseEvent<HTMLDivElement>) => {
    if (duration <= 0) return
    const rect = e.currentTarget.getBoundingClientRect()
    onSeek(((e.clientX - rect.left) / rect.width) * duration)
  }

  return (
    <div className="player">
      <div className="player-track" onClick={handleTrackClick} role="slider" aria-valuenow={currentTime} aria-valuemin={0} aria-valuemax={duration} tabIndex={0}>
        <div className="player-fill" style={{ width: `${progress}%` }} />
        {duration > 0 && (
          <div className="player-marker" style={{ left: `calc(${paywallPct}% - 1px)` }} />
        )}
      </div>
      <div className="player-row">
        <button className="player-btn" onClick={onPlayPause} aria-label={isPlaying ? 'Pause' : 'Lecture'}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <span className="player-title">{title}</span>
        <span className="player-time">{formatTime(currentTime)}</span>
      </div>
    </div>
  )
}
