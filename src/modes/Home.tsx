import { useMode } from '../ModeContext'
import {
  ALL_DOSSIERS, SECTIONS, TOTAL_COUNT, SECTION_COUNT, FREE_COUNT,
  dossiersBySection,
} from '../data/dossiers'
import type { Dossier } from '../data/dossiers'
import { useAccess } from './useAccess'
import { accessLabel, accessColorVar } from './access'

interface Props {
  onOpenDossier: (id: string) => void
  onOpenSection: (code: string) => void
  onPlay: (d: Dossier) => void
  nowId: string | null
  isPlaying: boolean
}

const FEATURED_ID = 'ABY-008'
const LATEST_IDS = ['ABY-003', 'ABY-010', 'ABY-001', 'ABY-011']

export default function Home({ onOpenDossier, onOpenSection, onPlay, nowId, isPlaying }: Props) {
  const { mode } = useMode()
  const { owns } = useAccess()
  const featured = ALL_DOSSIERS.find(d => d.id === FEATURED_ID)!
  const latest = LATEST_IDS.map(id => ALL_DOSSIERS.find(d => d.id === id)!).filter(Boolean)

  const updated = '12.03.2026'

  if (mode === 'interference') {
    return (
      <div className="abysso-page">
        <div className="if-glitchwrap">
          <div className="if-logo">ABYSSO</div>
          <div className="if-logo if-logo--ghost-a" aria-hidden="true">ABYSSO</div>
          <div className="if-logo if-logo--ghost-b" aria-hidden="true">ABYSSO</div>
        </div>
        <div className="if-boot">
          &gt; init navi.psy ... <span className="if-ok">ok</span><br />
          &gt; montage /archive ... <span className="if-ok">ok</span><br />
          &gt; intégrité mémoire ... <span className="if-bad">corrompue (récupérée)</span><br />
          &gt; {TOTAL_COUNT} fichiers · {SECTION_COUNT} répertoires · maj {updated}<br />
          &gt; <span className="if-ready">prêt_<span className="if-cursor" /></span>
        </div>

        <div className="abysso-kicker">// FICHIER_EN_TÊTE</div>
        <div className="if-featured" onClick={() => onOpenDossier(featured.id)}>
          <div className="if-featured-meta">{featured.id}.psy · NIVEAU {featured.level}/V · <span className="if-warn">⚠ HAUTE SENSIBILITÉ</span></div>
          <div className="if-featured-title">{featured.title}</div>
          <div className="if-featured-desc">{featured.synopsis}</div>
          <div className="if-featured-actions">
            <span onClick={(e) => { e.stopPropagation(); onPlay(featured) }}>[▶ EXÉCUTER]</span>
            <span className="if-featured-open">[OUVRIR]</span>
          </div>
        </div>

        <div className="abysso-kicker">// RÉPERTOIRES</div>
        <div className="if-dirgrid">
          {SECTIONS.map(s => (
            <div key={s.code} className="if-dir" onClick={() => onOpenSection(s.code)}>
              <div className="if-dir-icon">▣</div>
              <div className="if-dir-name">{s.name}</div>
              <div className="if-dir-meta">{s.code} · {String(dossiersBySection(s.code).length).padStart(2, '0')} FICH.</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (mode === 'surveillance') {
    return (
      <div className="abysso-page">
        <div className="sv-row">
          <span>SECTEUR CENTRAL — MUR DE CONTRÔLE</span><span>LAT N48.8566 · LON E2.3522</span>
        </div>
        <div className="sv-feature">
          <div className="sv-feature-cam">
            <div className="sv-feature-crosshair" aria-hidden="true" />
            <div className="sv-feature-tag">CAM 08 — FLUX PRINCIPAL</div>
            <div className="sv-feature-rec">● REC</div>
            <div className="sv-feature-bottom">
              <div className="sv-feature-meta">{featured.id} · {sectionLabel(featured)} · NIVEAU {featured.level}/V</div>
              <div className="sv-feature-title" onClick={() => onOpenDossier(featured.id)}>{featured.title}</div>
            </div>
          </div>
          <div className="sv-feature-actions">
            <span onClick={() => onPlay(featured)}>▶ MONITORER CE FLUX</span>
            <span onClick={() => onOpenDossier(featured.id)}>OUVRIR LA FICHE ▸</span>
            <span className="sv-spacer" />
            <span className="sv-dim">DURÉE {featured.dur}</span>
          </div>
        </div>

        <div className="sv-row" style={{ marginTop: 26 }}>
          <span>▸ SECTEURS SOUS SURVEILLANCE</span><span>{SECTION_COUNT} ACTIFS</span>
        </div>
        <div className="sv-camgrid">
          {SECTIONS.map(s => (
            <div key={s.code} className="sv-cam" onClick={() => onOpenSection(s.code)}>
              <div className="sv-cam-feed">
                <div className="sv-cam-tag">CAM {s.code}</div>
                <div className="sv-cam-count">{String(dossiersBySection(s.code).length).padStart(2, '0')} FLUX</div>
              </div>
              <div className="sv-cam-name">{s.name}</div>
            </div>
          ))}
        </div>
        <div className="sv-footer">
          {TOTAL_COUNT} FLUX RÉPERTORIÉS · {SECTION_COUNT} SECTEURS · {String(FREE_COUNT).padStart(2, '0')} EN ACCÈS LIBRE · <span className="sv-positive">SYSTÈME OPÉRATIONNEL</span>
        </div>
      </div>
    )
  }

  // mode === 'clinique'
  return (
    <div className="abysso-page">
      <div className="cl-kicker">ARCHIVE PSYCHOLOGIQUE — RAPPORT GÉNÉRAL N° ABY/2026</div>
      <div className="cl-logo">ABYSSO</div>
      <div className="cl-rule" />
      <div className="abysso-kicker">// NOTE LIMINAIRE</div>
      <div className="cl-note">Nous n'enquêtons pas sur des fantômes. Nous enquêtons sur ce que l'esprit fait lorsqu'on le laisse seul avec lui-même. Chaque dossier est une observation — froide, datée, archivée.</div>
      <div className="cl-stats">
        <span>DOSSIERS : <b>{TOTAL_COUNT}</b></span>
        <span>SECTIONS : <b>{SECTION_COUNT}</b></span>
        <span>ACCÈS LIBRES : <b>{String(FREE_COUNT).padStart(2, '0')}</b></span>
        <span>MISE À JOUR : <b>{updated}</b></span>
      </div>

      <div className="abysso-kicker" style={{ marginTop: 40 }}>// PIÈCE EN UNE</div>
      <div className="cl-feature">
        <div className="cl-stamp">CONFIDENTIEL</div>
        <div className="cl-feature-meta">DOSSIER {featured.id} — NIVEAU {featured.level}/V</div>
        <div className="cl-feature-title" onClick={() => onOpenDossier(featured.id)}>{featured.title}</div>
        <div className="cl-feature-sub">{sectionLabel(featured)} · {featured.dur} · ENR. {featured.date}</div>
        <div className="cl-feature-syn">{featured.synopsis}</div>
        <div className="cl-feature-actions">
          <span onClick={() => onPlay(featured)}>▶ ÉCOUTER LE DOCUMENT</span>
          <span onClick={() => onOpenDossier(featured.id)}>OUVRIR LA FICHE</span>
        </div>
      </div>

      <div className="abysso-kicker" style={{ marginTop: 42 }}>// REGISTRE DES SECTIONS</div>
      <div className="cl-list">
        {SECTIONS.map(s => (
          <div key={s.code} className="cl-list-row" onClick={() => onOpenSection(s.code)}>
            <span className="cl-list-code">{s.code}</span>
            <span className="cl-list-name">{s.name}</span>
            <span className="cl-list-dots" />
            <span className="cl-list-count">{String(dossiersBySection(s.code).length).padStart(2, '0')} PIÈCES</span>
          </div>
        ))}
      </div>

      <div className="abysso-kicker" style={{ marginTop: 42 }}>// DERNIÈRES PIÈCES VERSÉES</div>
      <div className="cl-list">
        {latest.map(d => {
          const owned = owns(d)
          const playing = nowId === d.id && isPlaying
          return (
            <div key={d.id} className="cl-list-row cl-list-row--ep">
              <span className="cl-list-num">{numLabel(d.id)}</span>
              <div className="cl-list-ep" onClick={() => onOpenDossier(d.id)}>
                <div className="cl-list-ep-title">{d.title}</div>
                <div className="cl-list-ep-meta">{d.id} · {sectionLabel(d)} · {d.dur}</div>
              </div>
              <span className="cl-access" style={{ color: accessColorVar(d, owned) }}>{accessLabel(d, owned)}</span>
              <button className="cl-play-btn" onClick={() => onPlay(d)}>{playing ? '❚❚' : '▶'}</button>
            </div>
          )
        })}
      </div>
      <div className="cl-footer">PAGE 1 / 1 — DOCUMENT CONTRÔLÉ · NE PAS DIFFUSER · © ABYSSO 2026</div>
    </div>
  )
}

function sectionLabel(d: Dossier): string {
  return SECTIONS.find(s => s.code === d.section)?.name ?? ''
}
function numLabel(id: string): string {
  const idx = ALL_DOSSIERS.findIndex(d => d.id === id)
  return String(idx + 1).padStart(3, '0')
}
