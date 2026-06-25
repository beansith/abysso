import type { ReactElement } from 'react'
import type { CategoryId } from '../data/episodes'

/* Histoires — abandoned house silhouette */
function ArtHistoires() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" fill="#0a0705"/>
      {/* Sky — near black */}
      <rect width="56" height="38" fill="#0c0907"/>
      {/* Ground */}
      <rect y="38" width="56" height="18" fill="#090603"/>
      {/* Moon — faint */}
      <circle cx="44" cy="10" r="3.5" fill="#1e1610" opacity="0.7"/>
      {/* House body */}
      <rect x="11" y="22" width="26" height="16" fill="#100c09"/>
      {/* Roof */}
      <polygon points="8,22 28,10 48,22" fill="#0d0a07"/>
      {/* Left chimney */}
      <rect x="15" y="12" width="3" height="8" fill="#0e0b08"/>
      {/* Right chimney */}
      <rect x="34" y="13" width="3" height="7" fill="#0e0b08"/>
      {/* Door */}
      <rect x="22" y="30" width="6" height="8" fill="#080604"/>
      {/* Left window — cracked glow */}
      <rect x="14" y="25" width="6" height="5" fill="#150a08"/>
      <rect x="14" y="25" width="6" height="5" fill="none" stroke="#3a0a0a" strokeWidth="0.5"/>
      {/* Right window — dark */}
      <rect x="29" y="25" width="6" height="5" fill="#0e0b08"/>
      <rect x="29" y="25" width="6" height="5" fill="none" stroke="#1e1410" strokeWidth="0.4"/>
      {/* Ground line */}
      <line x1="0" y1="38" x2="56" y2="38" stroke="#1c1510" strokeWidth="0.5" opacity="0.5"/>
      {/* Bare tree left */}
      <line x1="5" y1="38" x2="5" y2="20" stroke="#0e0b08" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="24" x2="1" y2="18" stroke="#0e0b08" strokeWidth="1" strokeLinecap="round"/>
      <line x1="5" y1="27" x2="9" y2="22" stroke="#0e0b08" strokeWidth="0.8" strokeLinecap="round"/>
      {/* Crack in facade */}
      <path d="M28,22 L26,29 L28,34" stroke="#3a0a0a" strokeWidth="0.4" fill="none" opacity="0.6"/>
    </svg>
  )
}

/* Dark Facts — cold geometric medical diagram */
function ArtDarkFacts() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" fill="#0a0705"/>
      {/* Grid */}
      <line x1="0" y1="14" x2="56" y2="14" stroke="#1c1410" strokeWidth="0.4"/>
      <line x1="0" y1="28" x2="56" y2="28" stroke="#1c1410" strokeWidth="0.4"/>
      <line x1="0" y1="42" x2="56" y2="42" stroke="#1c1410" strokeWidth="0.4"/>
      <line x1="14" y1="0" x2="14" y2="56" stroke="#1c1410" strokeWidth="0.4"/>
      <line x1="28" y1="0" x2="28" y2="56" stroke="#1c1410" strokeWidth="0.4"/>
      <line x1="42" y1="0" x2="42" y2="56" stroke="#1c1410" strokeWidth="0.4"/>
      {/* Outer circle */}
      <circle cx="28" cy="28" r="18" fill="none" stroke="#241814" strokeWidth="0.8"/>
      {/* Inner circle */}
      <circle cx="28" cy="28" r="10" fill="none" stroke="#301a14" strokeWidth="0.6"/>
      {/* Cross — medical */}
      <line x1="28" y1="10" x2="28" y2="46" stroke="#3a1414" strokeWidth="0.7"/>
      <line x1="10" y1="28" x2="46" y2="28" stroke="#3a1414" strokeWidth="0.7"/>
      {/* Center dot — red */}
      <circle cx="28" cy="28" r="2.5" fill="#3a0a0a"/>
      <circle cx="28" cy="28" r="1.2" fill="#5a1010" opacity="0.8"/>
      {/* Measurement marks */}
      <line x1="28" y1="46" x2="28" y2="50" stroke="#241814" strokeWidth="1"/>
      <line x1="46" y1="28" x2="50" y2="28" stroke="#241814" strokeWidth="1"/>
      <line x1="10" y1="28" x2="6" y2="28" stroke="#241814" strokeWidth="1"/>
      <line x1="28" y1="10" x2="28" y2="6" stroke="#241814" strokeWidth="1"/>
      {/* Diagonal measurement */}
      <line x1="13" y1="13" x2="43" y2="43" stroke="#1e1210" strokeWidth="0.35" opacity="0.6"/>
    </svg>
  )
}

/* Paranormal — blurry unstable silhouette */
function ArtParanormal() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" fill="#0a0705"/>
      {/* Layered blurred figure — head */}
      <ellipse cx="28" cy="18" rx="9" ry="9.5" fill="#140e0a" opacity="0.5"/>
      <ellipse cx="29" cy="17" rx="8" ry="9" fill="#1a1208" opacity="0.35"/>
      <ellipse cx="27" cy="19" rx="7" ry="8" fill="#160e0a" opacity="0.45"/>
      <ellipse cx="30" cy="16" rx="6" ry="7" fill="#1e1410" opacity="0.25"/>
      {/* Body */}
      <ellipse cx="28" cy="34" rx="12" ry="10" fill="#120e09" opacity="0.55"/>
      <ellipse cx="30" cy="35" rx="11" ry="9" fill="#160e0a" opacity="0.35"/>
      <ellipse cx="26" cy="33" rx="10" ry="8" fill="#140a08" opacity="0.4"/>
      {/* Unstable edge fragments */}
      <ellipse cx="16" cy="28" rx="4" ry="6" fill="#100a06" opacity="0.3"/>
      <ellipse cx="40" cy="30" rx="3" ry="5" fill="#120c08" opacity="0.25"/>
      <ellipse cx="14" cy="20" rx="2" ry="3" fill="#1a1208" opacity="0.2"/>
      <ellipse cx="42" cy="22" rx="2.5" ry="3.5" fill="#160e0a" opacity="0.18"/>
      {/* Faint red glow — presence */}
      <ellipse cx="28" cy="26" rx="8" ry="10" fill="#3a0a0a" opacity="0.08"/>
      {/* Ground fog */}
      <ellipse cx="28" cy="48" rx="24" ry="5" fill="#0e0a06" opacity="0.6"/>
    </svg>
  )
}

/* Existentiel — empty space, distant horizon */
function ArtExistentiel() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" fill="#0a0705"/>
      {/* Deep sky gradient effect */}
      <rect width="56" height="40" fill="#0c0907"/>
      <rect width="56" height="30" fill="#0a0806"/>
      {/* Ground — near black */}
      <rect y="40" width="56" height="16" fill="#080604"/>
      {/* Horizon line */}
      <line x1="0" y1="40" x2="56" y2="40" stroke="#201410" strokeWidth="0.6"/>
      {/* Stars — barely visible */}
      <circle cx="8"  cy="8"  r="0.6" fill="#2a1e14" opacity="0.7"/>
      <circle cx="20" cy="5"  r="0.5" fill="#241a10" opacity="0.6"/>
      <circle cx="35" cy="10" r="0.7" fill="#2a1e14" opacity="0.65"/>
      <circle cx="48" cy="6"  r="0.5" fill="#241a10" opacity="0.5"/>
      <circle cx="12" cy="18" r="0.4" fill="#201810" opacity="0.5"/>
      <circle cx="44" cy="15" r="0.5" fill="#201810" opacity="0.55"/>
      <circle cx="28" cy="12" r="0.6" fill="#2a1e14" opacity="0.45"/>
      <circle cx="52" cy="22" r="0.4" fill="#1e1610" opacity="0.4"/>
      <circle cx="4"  cy="28" r="0.4" fill="#1e1610" opacity="0.4"/>
      {/* Figure — tiny silhouette on horizon */}
      <rect x="26.5" y="37" width="1.5" height="3" fill="#1c1410"/>
      {/* Vast emptiness — very subtle vertical lines */}
      <line x1="28" y1="0"  x2="28" y2="40" stroke="#140e0a" strokeWidth="0.2" opacity="0.3"/>
    </svg>
  )
}

/* Morbide — dark organic forms, anatomical */
function ArtMorbide() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" fill="#0a0705"/>
      {/* Main organic drop form */}
      <path
        d="M28,8 C28,8 14,24 14,36 C14,44.4 20.3,50 28,50 C35.7,50 42,44.4 42,36 C42,24 28,8 28,8 Z"
        fill="#120a08"
      />
      {/* Inner layer — darker */}
      <path
        d="M28,18 C28,18 18,30 18,37 C18,43 22.5,47 28,47 C33.5,47 38,43 38,37 C38,30 28,18 28,18 Z"
        fill="#3a0a0a" opacity="0.35"
      />
      {/* Outer outline */}
      <path
        d="M28,8 C28,8 14,24 14,36 C14,44.4 20.3,50 28,50 C35.7,50 42,44.4 42,36 C42,24 28,8 28,8 Z"
        fill="none" stroke="#2a1010" strokeWidth="0.7"
      />
      {/* Vein-like structure — left */}
      <path d="M21,28 C18,32 16,36 17,40" stroke="#3a0a0a" strokeWidth="0.6" fill="none" opacity="0.55" strokeLinecap="round"/>
      {/* Vein-like structure — right */}
      <path d="M35,28 C38,32 40,36 39,40" stroke="#3a0a0a" strokeWidth="0.5" fill="none" opacity="0.45" strokeLinecap="round"/>
      {/* Center detail */}
      <ellipse cx="28" cy="36" rx="5" ry="6" fill="#1e0808" opacity="0.5"/>
      {/* Organic cells */}
      <ellipse cx="22" cy="33" rx="2.5" ry="3.5" fill="#160806" opacity="0.3" transform="rotate(-20 22 33)"/>
      <ellipse cx="34" cy="35" rx="2" ry="3" fill="#160806" opacity="0.25" transform="rotate(15 34 35)"/>
      {/* Top highlight — dark red */}
      <ellipse cx="28" cy="16" rx="2" ry="3" fill="#3a0a0a" opacity="0.2"/>
    </svg>
  )
}

const artMap: Record<CategoryId, ReactElement | null> = {
  fiction:          <ArtHistoires />,
  darkfacts:        <ArtDarkFacts />,
  paranormal:       <ArtParanormal />,
  existentiel:      <ArtExistentiel />,
  morbide:          <ArtMorbide />,
  recommandations:  null,
}

export function CategoryArtwork({ categoryId, className }: { categoryId: CategoryId; className?: string }) {
  const art = artMap[categoryId]
  if (!art) return null
  return (
    <div className={`ep-art ${className ?? 'ep-row-art'}`}>
      {art}
    </div>
  )
}
