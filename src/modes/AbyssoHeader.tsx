import { useMode } from '../ModeContext'

export type Route = 'accueil' | 'catalogue' | 'dossier' | 'abonnement'

interface Props {
  route: Route
  clock: string
  onGo: (r: Route) => void
}

export default function AbyssoHeader({ route, clock, onGo }: Props) {
  const { mode } = useMode()

  if (mode === 'interference') {
    return (
      <div className="if-header">
        <span className="if-header-logo" onClick={() => onGo('accueil')}><span className="if-accent">◉</span> ABYSSO</span>
        <span className={`if-header-link${route === 'accueil' ? ' if-header-link--active' : ''}`} onClick={() => onGo('accueil')}>accueil</span>
        <span className={`if-header-link${route === 'catalogue' ? ' if-header-link--active' : ''}`} onClick={() => onGo('catalogue')}>fichiers</span>
        <span className={`if-header-link${route === 'abonnement' ? ' if-header-link--active' : ''}`} onClick={() => onGo('abonnement')}>connexion</span>
        <span className="if-header-spacer" />
        <span className="if-accent">SIGNAL: INSTABLE</span>
        <span className="if-header-clock">{clock}<span className="if-header-cursor" /></span>
      </div>
    )
  }

  if (mode === 'surveillance') {
    return (
      <div className="sv-header">
        <span className="sv-header-logo" onClick={() => onGo('accueil')}>ABYSSO<span className="sv-accent">//</span>SURVEILLANCE</span>
        <span className="sv-header-sep">|</span>
        <span className="sv-header-link" onClick={() => onGo('accueil')}>MUR</span>
        <span className="sv-header-link" onClick={() => onGo('catalogue')}>FLUX</span>
        <span className="sv-header-link" onClick={() => onGo('abonnement')}>CLEARANCE</span>
        <span className="sv-header-spacer" />
        <span className="sv-header-clock">{clock}</span>
        <span className="sv-header-rec"><span className="sv-rec-dot" />REC</span>
      </div>
    )
  }

  // clinique
  return (
    <div className="cl-header">
      <div className="cl-header-inner">
        <div className="cl-header-brand" onClick={() => onGo('accueil')}>
          <span className="cl-header-logo">ABYSSO</span>
          <span className="cl-header-tag">DOC. CONTRÔLÉ</span>
        </div>
        <span className="cl-header-spacer" />
        <div className="cl-header-nav">
          <span onClick={() => onGo('accueil')}>ACCUEIL</span>
          <span onClick={() => onGo('catalogue')}>REGISTRE</span>
          <span onClick={() => onGo('abonnement')}>ACCÈS</span>
        </div>
      </div>
    </div>
  )
}
