import { useMode } from '../ModeContext'
import { dossierById, ALL_DOSSIERS, levelToNumber } from '../data/dossiers'
import type { Dossier } from '../data/dossiers'
import { useAccess } from './useAccess'
import { statusLabel, accessColorVar } from './access'

interface Props {
  dossierId: string
  onBack: () => void
  onOpenDossier: (id: string) => void
  onUnlockRequest: (d: Dossier) => void
  nowId: string | null
  isPlaying: boolean
  curSec: number
  durSec: number
  onToggle: (d: Dossier) => void
  onScrub: (pct: number) => void
  onSeek: (delta: number) => void
}

function fmt(sec: number): string {
  const s = Math.max(0, Math.floor(sec))
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

export default function DossierPage({
  dossierId, onBack, onOpenDossier, onUnlockRequest,
  nowId, isPlaying, curSec, durSec, onToggle, onScrub, onSeek,
}: Props) {
  const { mode } = useMode()
  const { owns } = useAccess()
  const d = dossierById(dossierId)
  if (!d) return null

  const owned = owns(d)
  const locked = !owned
  const isNow = nowId === d.id
  const playing = isNow && isPlaying
  const curLabel = fmt(isNow ? curSec : 0)
  const durLabel = fmt(isNow ? durSec : d.durSec)
  const progressPct = isNow && d.durSec > 0 ? Math.min(100, (curSec / d.durSec) * 100) : 0
  const related = ALL_DOSSIERS.filter(e => e.section === d.section && e.id !== d.id).slice(0, 3)
  const levelPct = (levelToNumber(d.level) / 5) * 100

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    onScrub(pct)
  }

  const VERBATIM = (
    <>
      <div>00:04:12&nbsp;&nbsp; SUJET — « Je continue parce qu'on me demande de continuer. »</div>
      <div>00:09:47&nbsp;&nbsp; OPÉRATEUR — « L'expérience exige que vous poursuiviez. »</div>
      <div>00:14:03&nbsp;&nbsp; <span className="abysso-redacted">████████████ caviardé ████████████</span></div>
    </>
  )

  if (mode === 'interference') {
    return (
      <div className="abysso-page">
        <div className="if-back" onClick={onBack}>‹ ../FICHIERS</div>
        <div className="if-dim if-dossier-kicker">{d.id}.psy · OUVERTURE · {d.section}</div>
        <div className="if-dossier-title">{d.title}</div>

        <div className="if-player">
          <div className="if-player-row">
            <button className="if-player-btn" onClick={() => onToggle(d)}>{playing ? '❚❚' : '▶'}</button>
            <div className="if-player-mid">
              <div className="if-player-label">▶ PSY-PLAYER v0.9</div>
              <div className="if-player-bar" onClick={handleScrub}>
                <div className="if-player-bar-fill" style={{ width: `${progressPct}%` }} />
              </div>
              <div className="if-player-times">
                <span>{curLabel}</span>
                <span><span onClick={() => onSeek(-15)}>«15</span> <span onClick={() => onSeek(15)}>15»</span></span>
                <span>{durLabel}</span>
              </div>
            </div>
          </div>
          <div className="abysso-eq abysso-eq--if" style={{ animationPlayState: playing ? 'running' : 'paused' }}>
            {[50,100,38,82,60,90,44,74].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
          </div>
        </div>

        <div className="if-meta-grid">
          <div className="if-meta-cell"><span className="if-dim">RÉF&gt; </span>{d.id}</div>
          <div className="if-meta-cell"><span className="if-dim">RÉP&gt; </span>{d.section}</div>
          <div className="if-meta-cell"><span className="if-dim">DATE&gt; </span>{d.date}</div>
          <div className="if-meta-cell"><span className="if-dim">DURÉE&gt; </span>{d.dur}</div>
          <div className="if-meta-cell"><span className="if-dim">SENS&gt; </span><span className="if-accent">{d.level}/V</span></div>
          <div className="if-meta-cell"><span className="if-dim">ÉTAT&gt; </span><span style={{ color: accessColorVar(d, owned) }}>{statusLabel(d, owned)}</span></div>
        </div>

        <div className="if-synopsis-wrap">
          <div className="if-accent if-kicker-sm">cat synopsis.txt</div>
          <div className="if-synopsis" style={{ filter: locked ? 'blur(7px)' : 'none', userSelect: locked ? 'none' : 'auto' }}>{d.synopsis}</div>
          {locked && (
            <div className="abysso-lock-overlay abysso-lock-overlay--if">
              <div className="abysso-lock-title">⚠ FICHIER VERROUILLÉ — CLÉ REQUISE</div>
              <div className="abysso-lock-actions">
                <span onClick={() => onUnlockRequest(d)}>[DÉVERROUILLER 0,99€]</span>
                <span onClick={() => onUnlockRequest(d)}>[ACCÈS ROOT 6,99€/MOIS]</span>
              </div>
            </div>
          )}
        </div>

        <div className="if-verbatim">
          <div className="if-accent if-kicker-sm">cat verbatim.log</div>
          <div className="if-verbatim-body">{VERBATIM}</div>
        </div>

        {related.length > 0 && (
          <div className="if-related">
            <div className="if-dim if-kicker-sm">// FICHIERS_LIÉS</div>
            {related.map(it => (
              <div key={it.id} className="if-related-row" onClick={() => onOpenDossier(it.id)}>
                <span className="if-accent">▤</span>
                <span className="if-related-title">{it.title}</span>
                <span className="if-dim">{it.id}.psy · {it.dur}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (mode === 'surveillance') {
    return (
      <div className="abysso-page">
        <div className="sv-back" onClick={onBack}>‹ MUR DE CONTRÔLE</div>
        <div className="sv-dossier-grid">
          <div className="sv-dossier-cam">
            <div className="sv-dossier-feed">
              <div className="sv-feature-crosshair" aria-hidden="true" />
              <div className="sv-feature-tag">CAM {d.id.slice(-3)} — {d.section}</div>
              <div className="sv-feature-rec">● REC</div>
              <button className="sv-dossier-playbtn" onClick={() => onToggle(d)}>{playing ? '❚❚' : '▶'}</button>
            </div>
            <div className="sv-dossier-controls">
              <div className="sv-player-bar" onClick={handleScrub}>
                <div className="sv-player-bar-fill" style={{ width: `${progressPct}%` }} />
              </div>
              <div className="sv-player-times">
                <span>{curLabel}</span>
                <span><span onClick={() => onSeek(-15)}>«15</span> <span onClick={() => onSeek(15)}>15»</span></span>
                <span>{durLabel}</span>
              </div>
              <div className="abysso-eq abysso-eq--sv" style={{ animationPlayState: playing ? 'running' : 'paused' }}>
                {[55,100,40,78,62,88].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
              </div>
            </div>
          </div>
          <div className="sv-telemetry">
            <div className="sv-telemetry-head">TÉLÉMÉTRIE</div>
            <div className="sv-telemetry-row"><span>RÉF</span><span>{d.id}</span></div>
            <div className="sv-telemetry-row"><span>SECTEUR</span><span>{d.section}</span></div>
            <div className="sv-telemetry-row"><span>HORODATAGE</span><span>{d.date}</span></div>
            <div className="sv-telemetry-row"><span>DURÉE</span><span>{d.dur}</span></div>
            <div className="sv-telemetry-row sv-telemetry-row--bar">
              <div className="sv-telemetry-row-top"><span>SENSIBILITÉ</span><span>{d.level}/V</span></div>
              <div className="sv-level-bar"><span style={{ width: `${levelPct}%` }} /></div>
            </div>
            <div className="sv-telemetry-row"><span>STATUT</span><span style={{ color: accessColorVar(d, owned) }}>{statusLabel(d, owned)}</span></div>
          </div>
        </div>
        <div className="sv-dossier-title">{d.title}</div>

        <div className="sv-synopsis-wrap">
          <div className="sv-dim sv-kicker-sm">RAPPORT D'OBSERVATION</div>
          <div className="sv-synopsis" style={{ filter: locked ? 'blur(7px)' : 'none', userSelect: locked ? 'none' : 'auto' }}>{d.synopsis}</div>
          {locked && (
            <div className="abysso-lock-overlay abysso-lock-overlay--sv">
              <div className="abysso-lock-title">⊘ FLUX BROUILLÉ — ACCÈS RESTREINT</div>
              <div className="abysso-lock-actions">
                <span onClick={() => onUnlockRequest(d)}>DÉBROUILLER — 0,99€</span>
                <span onClick={() => onUnlockRequest(d)}>CLEARANCE TOTALE — 6,99€/MOIS</span>
              </div>
            </div>
          )}
        </div>

        <div className="sv-verbatim">
          <div className="sv-dim sv-kicker-sm">JOURNAL AUDIO (EXTRAIT)</div>
          <div className="sv-verbatim-body">{VERBATIM}</div>
        </div>

        {related.length > 0 && (
          <div>
            <div className="sv-dim sv-kicker-sm" style={{ marginTop: 30 }}>▸ FLUX ADJACENTS</div>
            <div className="sv-related-grid">
              {related.map(it => (
                <div key={it.id} className="sv-related-card" onClick={() => onOpenDossier(it.id)}>
                  <div className="sv-dim" style={{ fontSize: 9 }}>CAM {it.id.slice(-3)}</div>
                  <div className="sv-related-title">{it.title}</div>
                  <div className="sv-related-meta">{it.dur}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // clinique
  return (
    <div className="abysso-page">
      <div className="cl-back" onClick={onBack}>‹ REGISTRE DES PIÈCES</div>
      <div className="cl-stamp cl-stamp--pos">PIÈCE N° {String(ALL_DOSSIERS.findIndex(e => e.id === d.id) + 1).padStart(3, '0')}</div>
      <div className="cl-dossier-kicker">FICHE D'OBSERVATION</div>
      <div className="cl-dossier-title">{d.title}</div>

      <div className="cl-meta-grid">
        <div className="cl-meta-cell"><div className="cl-meta-label">RÉFÉRENCE</div><div className="cl-meta-value">{d.id}</div></div>
        <div className="cl-meta-cell"><div className="cl-meta-label">SECTION</div><div className="cl-meta-value">{d.section}</div></div>
        <div className="cl-meta-cell"><div className="cl-meta-label">ENREGISTREMENT</div><div className="cl-meta-value">{d.date}</div></div>
        <div className="cl-meta-cell"><div className="cl-meta-label">DURÉE</div><div className="cl-meta-value">{d.dur}</div></div>
        <div className="cl-meta-cell">
          <div className="cl-meta-label">SENSIBILITÉ</div>
          <div className="cl-meta-value-bar">
            <span>{d.level}/V</span>
            <span className="cl-level-bar"><span style={{ width: `${levelPct}%` }} /></span>
          </div>
        </div>
        <div className="cl-meta-cell"><div className="cl-meta-label">STATUT D'ACCÈS</div><div className="cl-meta-value" style={{ color: accessColorVar(d, owned) }}>{statusLabel(d, owned)}</div></div>
      </div>

      <div className="cl-player">
        <button className="cl-player-btn" onClick={() => onToggle(d)}>{playing ? '❚❚' : '▶'}</button>
        <div className="cl-player-mid">
          <div className="cl-dim cl-kicker-sm">ÉCOUTE DU DOCUMENT</div>
          <div className="cl-player-bar" onClick={handleScrub}>
            <div className="cl-player-bar-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="cl-player-times">
            <span>{curLabel}</span>
            <span><span onClick={() => onSeek(-15)}>«15</span>&nbsp;&nbsp;<span onClick={() => onSeek(15)}>15»</span></span>
            <span>{durLabel}</span>
          </div>
        </div>
      </div>

      <div className="cl-synopsis-wrap">
        <div className="cl-accent cl-kicker-sm">RÉSUMÉ CLINIQUE</div>
        <div className="cl-synopsis" style={{ filter: locked ? 'blur(7px)' : 'none', userSelect: locked ? 'none' : 'auto' }}>{d.synopsis}</div>
        {locked && (
          <div className="abysso-lock-overlay abysso-lock-overlay--cl">
            <div className="abysso-lock-title">⊘ COMMUNICATION RESTREINTE</div>
            <div className="abysso-lock-desc">Le contenu de cette pièce est sous accès. Débloquez-la à l'unité ou activez l'accès intégral.</div>
            <div className="abysso-lock-actions">
              <span onClick={() => onUnlockRequest(d)}>DÉBLOQUER — 0,99€</span>
              <span onClick={() => onUnlockRequest(d)}>ACCÈS INTÉGRAL — 6,99€/MOIS</span>
            </div>
          </div>
        )}
      </div>

      <div className="cl-verbatim">
        <div className="cl-accent cl-kicker-sm">VERBATIM (EXTRAIT)</div>
        <div className="cl-verbatim-body">{VERBATIM}</div>
      </div>

      {related.length > 0 && (
        <>
          <div className="abysso-kicker" style={{ marginTop: 38 }}>// PIÈCES LIÉES</div>
          <div className="cl-list">
            {related.map(it => (
              <div key={it.id} className="cl-list-row cl-list-row--ep">
                <div className="cl-list-ep" onClick={() => onOpenDossier(it.id)}>
                  <div className="cl-list-ep-title">{it.title}</div>
                  <div className="cl-list-ep-meta">{it.id} · {it.dur}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
