import type { ReactElement } from 'react'
import type { CategoryId } from '../data/episodes'
import { CATEGORIES } from '../data/episodes'

function BookIcon()     { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> }
function SkullIcon()    { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a9 9 0 0 0-9 9c0 3.18 1.62 5.97 4.06 7.54L7 22h10l-.06-3.46A9 9 0 0 0 21 11a9 9 0 0 0-9-9z"/><line x1="9" y1="15" x2="9" y2="15.01"/><line x1="15" y1="15" x2="15" y2="15.01"/></svg> }
function EyeIcon()      { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> }
function InfinityIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z"/><path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"/></svg> }
function DropIcon()     { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg> }
function StarIcon()     { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> }

const ICONS: Record<string, ReactElement> = {
  book:     <BookIcon />,
  skull:    <SkullIcon />,
  eye:      <EyeIcon />,
  infinity: <InfinityIcon />,
  drop:     <DropIcon />,
  star:     <StarIcon />,
}

interface Props {
  open: boolean
  activeCategory: CategoryId | null
  onNavigate: (id: CategoryId) => void
  onClose: () => void
}

export default function Drawer({ open, activeCategory, onNavigate, onClose }: Props) {
  if (!open) return null

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />
      <nav className="drawer" role="navigation" aria-label="Catégories">
        <div className="drawer-header">
          <span className="drawer-logo">ABYSSO</span>
        </div>
        <ul className="drawer-nav" role="list">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <button
                className={`drawer-item${activeCategory === cat.id ? ' drawer-item-active' : ''}`}
                onClick={() => { onNavigate(cat.id); onClose() }}
              >
                <span className="drawer-item-icon">{ICONS[cat.icon]}</span>
                <span className="drawer-item-label">{cat.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
