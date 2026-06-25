interface Story {
  title: string
  description: string
  duration: string
  genre: string
}

interface Props {
  story: Story
  onPlay: () => void
  isPlaying: boolean
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
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

function StoryArtwork() {
  return (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="story-art">
      <defs>
        <radialGradient id="moonGlow" cx="75%" cy="28%" r="32%">
          <stop offset="0%" stopColor="#8B0000" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0a0005" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04000a" />
          <stop offset="100%" stopColor="#0d0005" />
        </linearGradient>
        <linearGradient id="groundFog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d0005" stopOpacity="0" />
          <stop offset="100%" stopColor="#1a0010" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#skyGrad)" />
      <rect width="400" height="220" fill="url(#moonGlow)" />
      {/* Moon */}
      <circle cx="300" cy="60" r="30" fill="#220000" opacity="0.95" />
      <circle cx="300" cy="60" r="25" fill="#6B0000" opacity="0.85" />
      <circle cx="300" cy="60" r="20" fill="#8B0000" opacity="0.65" />
      <circle cx="291" cy="53" r="4" fill="#4a0000" opacity="0.6" />
      <circle cx="308" cy="66" r="3" fill="#4a0000" opacity="0.5" />
      {/* Left trees */}
      <polygon points="0,220 18,118 36,220" fill="#050003" />
      <polygon points="28,220 44,140 60,220" fill="#040002" />
      <polygon points="52,220 70,103 88,220" fill="#060004" />
      <polygon points="78,220 93,128 108,220" fill="#040002" />
      {/* Right trees */}
      <polygon points="294,220 312,108 330,220" fill="#060004" />
      <polygon points="322,220 337,133 352,220" fill="#040002" />
      <polygon points="348,220 365,112 382,220" fill="#050003" />
      <polygon points="373,220 388,138 403,220" fill="#040002" />
      {/* House */}
      <rect x="152" y="128" width="96" height="72" fill="#06000a" />
      <polygon points="138,128 200,80 262,128" fill="#040008" />
      <rect x="218" y="86" width="14" height="26" fill="#030006" />
      <rect x="185" y="158" width="26" height="42" fill="#0d0015" rx="2" />
      {/* Windows */}
      <rect x="162" y="136" width="22" height="18" fill="#0d0010" rx="1" />
      <rect x="162" y="136" width="22" height="18" fill="#8B0000" opacity="0.18" rx="1" />
      <rect x="216" y="136" width="22" height="18" fill="#0d0010" rx="1" />
      <rect x="216" y="136" width="22" height="18" fill="#8B0000" opacity="0.18" rx="1" />
      {/* Ground fog */}
      <rect x="0" y="178" width="400" height="42" fill="url(#groundFog)" />
      {/* Stars */}
      <circle cx="50" cy="28" r="1" fill="#fff" opacity="0.3" />
      <circle cx="118" cy="16" r="1" fill="#fff" opacity="0.25" />
      <circle cx="178" cy="43" r="0.8" fill="#fff" opacity="0.2" />
      <circle cx="222" cy="22" r="1" fill="#fff" opacity="0.3" />
      <circle cx="348" cy="14" r="0.8" fill="#fff" opacity="0.25" />
      <circle cx="382" cy="38" r="1" fill="#fff" opacity="0.2" />
      <circle cx="98" cy="52" r="0.8" fill="#fff" opacity="0.15" />
      <circle cx="162" cy="13" r="1" fill="#fff" opacity="0.2" />
      <circle cx="240" cy="50" r="0.8" fill="#fff" opacity="0.15" />
    </svg>
  )
}

export default function StoryCard({ story, onPlay, isPlaying }: Props) {
  return (
    <article className="story-card">
      <div className="story-artwork-wrap">
        <StoryArtwork />
      </div>
      <div className="story-info">
        <div className="story-meta">
          <span className="story-genre">{story.genre}</span>
          <span className="story-duration">
            <ClockIcon />
            {story.duration}
          </span>
        </div>
        <h2 className="story-title">{story.title}</h2>
        <p className="story-desc">{story.description}</p>
        <button className="play-btn" onClick={onPlay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
          {isPlaying ? 'Pause' : 'Écouter maintenant'}
        </button>
      </div>
    </article>
  )
}
