import { useMode } from '../ModeContext'
import type { Mode } from '../ModeContext'
import type { ReactNode } from 'react'

interface Props {
  onGate: () => void
  children?: ReactNode
}

const ITEMS: { mode: Mode; label: string; title: string }[] = [
  { mode: 'clinique',      label: 'I',   title: 'Clinique' },
  { mode: 'surveillance',  label: 'II',  title: 'Surveillance' },
  { mode: 'interference',  label: 'III', title: 'Interférence' },
]

export default function ModeSwitcher({ onGate, children }: Props) {
  const { mode, setMode } = useMode()

  return (
    <div className="mode-switcher-row">
      {children}
      <div className="mode-switcher">
        <span className="mode-switcher-label">MODE</span>
        {ITEMS.map(item => (
          <span
            key={item.mode}
            className={`mode-switcher-btn${mode === item.mode ? ' mode-switcher-btn--active' : ''}`}
            title={item.title}
            onClick={() => setMode(item.mode)}
          >
            {item.label}
          </span>
        ))}
        <span className="mode-switcher-gate" title="Écran de sélection" onClick={onGate}>⊞</span>
      </div>
    </div>
  )
}
