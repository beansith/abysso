import type { ReactElement } from 'react'

/* Ep1 — Porte ancienne entrebâillée */
function Art1() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a03010" stopOpacity="0.88"/>
          <stop offset="55%" stopColor="#5a0800" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#1a0000" stopOpacity="0.04"/>
        </linearGradient>
      </defs>
      <rect width="56" height="56" fill="#090603"/>
      <rect x="0" y="0" width="7" height="56" fill="#060402"/>
      <rect x="49" y="0" width="7" height="56" fill="#060402"/>
      <rect x="7" y="2" width="3" height="54" fill="#0f0b07"/>
      <rect x="46" y="2" width="3" height="54" fill="#0f0b07"/>
      <rect x="7" y="2" width="42" height="4" fill="#0f0b07"/>
      <polygon points="10,6 42,7.5 42,56 10,56" fill="#07050400"/>
      <polygon points="10,6 42,7.5 42,56 10,56" fill="#070504"/>
      <line x1="14" y1="6" x2="14" y2="56" stroke="#0d0906" strokeWidth="0.55" opacity="0.8"/>
      <line x1="20" y1="6" x2="20" y2="56" stroke="#0c0805" strokeWidth="0.5" opacity="0.75"/>
      <line x1="26" y1="6" x2="26" y2="56" stroke="#0d0906" strokeWidth="0.5" opacity="0.7"/>
      <line x1="32" y1="6" x2="32" y2="56" stroke="#0c0805" strokeWidth="0.45" opacity="0.65"/>
      <line x1="38" y1="6" x2="38" y2="56" stroke="#0d0906" strokeWidth="0.4" opacity="0.6"/>
      <rect x="12" y="9" width="28" height="18" rx="0.5" fill="none" stroke="#14110a" strokeWidth="0.8"/>
      <rect x="12" y="31" width="28" height="22" rx="0.5" fill="none" stroke="#14110a" strokeWidth="0.8"/>
      <rect x="42" y="6" width="7" height="50" fill="url(#g1)"/>
      <line x1="42" y1="6" x2="42" y2="56" stroke="#c04020" strokeWidth="0.5" opacity="0.55"/>
      <circle cx="39" cy="33" r="2" fill="#1c1408"/>
      <circle cx="39" cy="33" r="1" fill="#28200e" opacity="0.8"/>
      <rect x="0" y="50" width="56" height="6" fill="#060402" opacity="0.7"/>
    </svg>
  )
}

/* Ep2 — Miroir fissuré silhouette floue */
function Art2() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" fill="#060610"/>
      <rect x="6" y="4" width="44" height="50" rx="2" fill="#0e0e1e"/>
      <rect x="6" y="4" width="44" height="50" rx="2" fill="none" stroke="#1e1e35" strokeWidth="2.5"/>
      <rect x="9" y="7" width="38" height="44" fill="#07071a"/>
      <rect x="11" y="9" width="34" height="40" fill="none" stroke="#131328" strokeWidth="0.5"/>
      {/* Ghostly silhouette — head */}
      <ellipse cx="29" cy="21" rx="6" ry="6.5" fill="#0d0d24" opacity="0.65"/>
      <ellipse cx="31" cy="22" rx="5.5" ry="6" fill="#10102e" opacity="0.4"/>
      {/* Shoulders */}
      <ellipse cx="29" cy="33" rx="11" ry="6" fill="#0c0c20" opacity="0.6"/>
      <ellipse cx="31" cy="34" rx="10" ry="5" fill="#0f0f28" opacity="0.35"/>
      {/* Primary crack */}
      <path d="M22,7 L24,19 L20,28 L18,40" stroke="#28285a" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      {/* Branching cracks */}
      <path d="M24,19 L31,24" stroke="#222248" strokeWidth="0.9" fill="none"/>
      <path d="M24,19 L17,13 L11,15" stroke="#222248" strokeWidth="0.8" fill="none"/>
      <path d="M20,28 L26,30" stroke="#1e1e40" strokeWidth="0.7" fill="none"/>
      {/* Red seep */}
      <path d="M22,7 L24,19" stroke="#6B0000" strokeWidth="0.6" fill="none" opacity="0.45"/>
      <path d="M22,7 L24,19 L20,28" stroke="#6B0000" strokeWidth="0.3" fill="none" opacity="0.25"/>
    </svg>
  )
}

/* Ep3 — Pins sombres brouillard dense */
function Art3() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1c0a" stopOpacity="0"/>
          <stop offset="55%" stopColor="#0d1c0a" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#111e0e" stopOpacity="0.95"/>
        </linearGradient>
      </defs>
      <rect width="56" height="56" fill="#030904"/>
      <circle cx="38" cy="10" r="4.5" fill="#0e0900"/>
      <circle cx="38" cy="10" r="3" fill="#1a0e00" opacity="0.5"/>
      {/* Dense pines — narrow, varying heights */}
      <polygon points="0,56 3,22 6,56" fill="#020703"/>
      <polygon points="3,56 8,14 13,56" fill="#030905"/>
      <polygon points="9,56 15,19 21,56" fill="#020703"/>
      <polygon points="15,56 21,11 27,56" fill="#030905"/>
      <polygon points="22,56 28,16 34,56" fill="#020703"/>
      <polygon points="29,56 35,13 41,56" fill="#030905"/>
      <polygon points="36,56 42,19 48,56" fill="#020703"/>
      <polygon points="43,56 49,15 55,56" fill="#030905"/>
      {/* Fog layer */}
      <rect x="0" y="38" width="56" height="18" fill="url(#g3)"/>
      <ellipse cx="14" cy="50" rx="18" ry="7" fill="#0f1d0c" opacity="0.55"/>
      <ellipse cx="42" cy="52" rx="20" ry="6" fill="#0d1b0a" opacity="0.5"/>
      <ellipse cx="28" cy="46" rx="22" ry="6" fill="#0a1508" opacity="0.45"/>
    </svg>
  )
}

/* Ep4 — Main sortant d'un sol en terre */
function Art4() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="56" height="30" fill="#060409"/>
      <rect x="0" y="30" width="56" height="26" fill="#100a06"/>
      {/* Earth cracks */}
      <line x1="6" y1="32" x2="20" y2="38" stroke="#1c1208" strokeWidth="0.65"/>
      <line x1="38" y1="30" x2="52" y2="36" stroke="#1c1208" strokeWidth="0.65"/>
      <line x1="20" y1="42" x2="34" y2="47" stroke="#160e06" strokeWidth="0.5"/>
      <line x1="4" y1="47" x2="16" y2="52" stroke="#140c06" strokeWidth="0.45"/>
      {/* Rupture crack around hand */}
      <path d="M22,30 L16,35 L10,33" stroke="#261a08" strokeWidth="1.1" fill="none"/>
      <path d="M34,30 L40,35 L48,33" stroke="#261a08" strokeWidth="1.1" fill="none"/>
      <path d="M24,30 L22,34" stroke="#1e1408" strokeWidth="0.7" fill="none"/>
      <path d="M32,30 L34,34" stroke="#1e1408" strokeWidth="0.7" fill="none"/>
      {/* Wrist */}
      <rect x="22" y="27" width="12" height="11" rx="3" fill="#0d0809"/>
      {/* Palm */}
      <rect x="21" y="17" width="14" height="12" rx="3" fill="#0d0809"/>
      {/* Thumb */}
      <rect x="17.5" y="21" width="4.5" height="9" rx="2.25" fill="#0c0708"/>
      {/* Index */}
      <rect x="22" y="7" width="3.5" height="12" rx="1.75" fill="#0d0809"/>
      {/* Middle — tallest */}
      <rect x="26" y="4" width="3.5" height="15" rx="1.75" fill="#0c0708"/>
      {/* Ring */}
      <rect x="30" y="7" width="3.5" height="12" rx="1.75" fill="#0d0809"/>
      {/* Little */}
      <rect x="33.5" y="11" width="3" height="9" rx="1.5" fill="#0c0708"/>
      {/* Dirt particles */}
      <circle cx="20" cy="27" r="1.2" fill="#1c1408" opacity="0.8"/>
      <circle cx="36" cy="26" r="1" fill="#1c1408" opacity="0.75"/>
      <circle cx="17" cy="30" r="0.8" fill="#201608" opacity="0.65"/>
      <circle cx="40" cy="29" r="0.8" fill="#201608" opacity="0.65"/>
      <circle cx="22" cy="25" r="0.6" fill="#181008" opacity="0.6"/>
    </svg>
  )
}

/* Ep5 — La Voix dans les Murs */
function Art5() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" fill="#070508"/>
      {/* Wall section */}
      <rect x="0" y="0" width="26" height="56" fill="#090609"/>
      <line x1="0" y1="16" x2="26" y2="16" stroke="#120a12" strokeWidth="0.4" opacity="0.5"/>
      <line x1="0" y1="32" x2="26" y2="32" stroke="#120a12" strokeWidth="0.4" opacity="0.5"/>
      <line x1="0" y1="48" x2="26" y2="48" stroke="#120a12" strokeWidth="0.4" opacity="0.5"/>
      {/* Floor */}
      <rect x="0" y="46" width="56" height="10" fill="#060405"/>
      {/* Figure body */}
      <rect x="10" y="18" width="12" height="24" rx="2" fill="#0f0810"/>
      {/* Head */}
      <ellipse cx="16" cy="13" rx="5.5" ry="6" fill="#0f0810"/>
      {/* Arm pressed to wall */}
      <rect x="7" y="12" width="5" height="14" rx="2.5" fill="#0f0810"/>
      {/* Hand on wall */}
      <ellipse cx="8" cy="12" rx="3" ry="2" fill="#0f0810"/>
      {/* Distorted shadow on wall — head bigger, reaching up */}
      <ellipse cx="7" cy="8" rx="7" ry="7" fill="#0c060c" opacity="0.55"/>
      <rect x="2" y="14" width="10" height="28" rx="2" fill="#0a050a" opacity="0.5"/>
      <polygon points="0,14 2,6 8,14" fill="#0a050a" opacity="0.4"/>
      {/* Crack near figure */}
      <path d="M22,16 L24,26 L20,38" stroke="#1c001c" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M22,16 L24,26" stroke="#6B0000" strokeWidth="0.5" fill="none" opacity="0.45"/>
    </svg>
  )
}

/* Ep6 — Le Train de Minuit */
function Art6() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g6l" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#902010" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#6B0000" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="g6r" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#902010" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#6B0000" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="56" height="56" fill="#03030a"/>
      <path d="M0,56 L0,28 A28,28 0 0,1 56,28 L56,56 Z" fill="#06060f"/>
      {/* Rails */}
      <line x1="22" y1="56" x2="26" y2="34" stroke="#0e0e1e" strokeWidth="2"/>
      <line x1="34" y1="56" x2="30" y2="34" stroke="#0e0e1e" strokeWidth="2"/>
      {/* Sleepers */}
      <line x1="21" y1="50" x2="35" y2="50" stroke="#0b0b18" strokeWidth="1.5"/>
      <line x1="22" y1="44" x2="34" y2="44" stroke="#0b0b18" strokeWidth="1.2"/>
      <line x1="23" y1="38" x2="33" y2="38" stroke="#0b0b18" strokeWidth="1"/>
      {/* Glow halos */}
      <ellipse cx="19" cy="32" rx="11" ry="9" fill="url(#g6l)"/>
      <ellipse cx="37" cy="32" rx="11" ry="9" fill="url(#g6r)"/>
      {/* Train silhouette */}
      <rect x="14" y="26" width="28" height="10" rx="1" fill="#06060f"/>
      {/* Left headlight */}
      <circle cx="19" cy="32" r="4.5" fill="#09091c"/>
      <circle cx="19" cy="32" r="2.8" fill="#6B1000" opacity="0.9"/>
      <circle cx="19" cy="32" r="1.4" fill="#c03510" opacity="0.9"/>
      {/* Right headlight */}
      <circle cx="37" cy="32" r="4.5" fill="#09091c"/>
      <circle cx="37" cy="32" r="2.8" fill="#6B1000" opacity="0.9"/>
      <circle cx="37" cy="32" r="1.4" fill="#c03510" opacity="0.9"/>
    </svg>
  )
}

/* Ep7 — La Dernière Neige */
function Art7() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g7s" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050812"/>
          <stop offset="100%" stopColor="#080d18"/>
        </linearGradient>
        <linearGradient id="g7n" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e1520"/>
          <stop offset="100%" stopColor="#131d2c"/>
        </linearGradient>
      </defs>
      <rect width="56" height="35" fill="url(#g7s)"/>
      <rect x="0" y="35" width="56" height="21" fill="url(#g7n)"/>
      <line x1="0" y1="35" x2="56" y2="35" stroke="#1a2535" strokeWidth="0.5"/>
      {/* Bare tree */}
      <line x1="11" y1="35" x2="11" y2="10" stroke="#0d1220" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="11" y1="14" x2="4" y2="7" stroke="#0d1220" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="11" y1="19" x2="20" y2="13" stroke="#0d1220" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="11" y1="23" x2="3" y2="19" stroke="#0d1220" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="11" y1="27" x2="19" y2="23" stroke="#0d1220" strokeWidth="1" strokeLinecap="round"/>
      <line x1="11" y1="31" x2="6" y2="28" stroke="#0d1220" strokeWidth="0.8" strokeLinecap="round"/>
      {/* Footprints — pairs, leading to center, then stopping */}
      <ellipse cx="46" cy="53" rx="2" ry="3" fill="#0a1022" opacity="0.7" transform="rotate(-12 46 53)"/>
      <ellipse cx="41" cy="51" rx="2" ry="3" fill="#0a1022" opacity="0.65" transform="rotate(12 41 51)"/>
      <ellipse cx="38" cy="47" rx="1.8" ry="2.8" fill="#0a1022" opacity="0.6" transform="rotate(-12 38 47)"/>
      <ellipse cx="33" cy="44" rx="1.8" ry="2.8" fill="#0a1022" opacity="0.55" transform="rotate(12 33 44)"/>
      <ellipse cx="30" cy="40" rx="1.5" ry="2.2" fill="#0a1022" opacity="0.5" transform="rotate(-12 30 40)"/>
      <ellipse cx="26" cy="37" rx="1.5" ry="2.2" fill="#0a1022" opacity="0.4" transform="rotate(12 26 37)"/>
      {/* Stars */}
      <circle cx="30" cy="8" r="0.7" fill="#fff" opacity="0.28"/>
      <circle cx="42" cy="5" r="0.6" fill="#fff" opacity="0.22"/>
      <circle cx="48" cy="13" r="0.5" fill="#fff" opacity="0.18"/>
      <circle cx="22" cy="15" r="0.5" fill="#fff" opacity="0.15"/>
    </svg>
  )
}

/* Ep8 — Ce Qui Reste de Toi */
function Art8() {
  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" fill="#06050c"/>
      <rect x="0" y="0" width="56" height="44" fill="#08060f"/>
      <rect x="0" y="44" width="56" height="12" fill="#060409"/>
      {/* Shadow of sitting figure on wall — visible but chair empty */}
      <ellipse cx="40" cy="13" rx="6" ry="6.5" fill="#0e0b1c" opacity="0.65"/>
      <rect x="33" y="19" width="13" height="18" rx="2" fill="#0d0a1a" opacity="0.55"/>
      <rect x="24" y="20" width="10" height="4" rx="2" fill="#0c091a" opacity="0.45"/>
      <rect x="33" y="36" width="4" height="10" rx="2" fill="#0c091a" opacity="0.4"/>
      <rect x="40" y="36" width="4" height="10" rx="2" fill="#0c091a" opacity="0.35"/>
      {/* Empty chair */}
      <rect x="18" y="34" width="20" height="3" rx="1" fill="#12101e"/>
      <rect x="20" y="22" width="16" height="12" rx="1" fill="none" stroke="#12101e" strokeWidth="1.8"/>
      <line x1="20" y1="37" x2="17" y2="50" stroke="#12101e" strokeWidth="2" strokeLinecap="round"/>
      <line x1="36" y1="37" x2="39" y2="50" stroke="#12101e" strokeWidth="2" strokeLinecap="round"/>
      <line x1="22" y1="37" x2="22" y2="50" stroke="#12101e" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="34" y1="37" x2="34" y2="50" stroke="#12101e" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="28" cy="52" rx="14" ry="1.5" fill="#1c1430" opacity="0.35"/>
    </svg>
  )
}

const arts: Record<number, ReactElement> = {
  1: <Art1/>, 2: <Art2/>, 3: <Art3/>, 4: <Art4/>,
  5: <Art5/>, 6: <Art6/>, 7: <Art7/>, 8: <Art8/>,
}

export function EpisodeArtwork({ id, className }: { id: number; className?: string }) {
  return (
    <div className={`ep-art${className ? ` ${className}` : ''}`}>
      {arts[id] ?? null}
    </div>
  )
}
