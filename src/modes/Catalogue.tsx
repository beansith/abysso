import { useState } from 'react'
import { useMode } from '../ModeContext'
import { SECTIONS, dossiersBySection, ALL_DOSSIERS } from '../data/dossiers'
import type { Dossier, SectionCode } from '../data/dossiers'
import { useAccess } from './useAccess'
import { accessLabel, accessColorVar } from './access'

interface Props {
  onOpenDossier: (id: string) => void
  onPlay: (d: Dossier) => void
  initialFilter?: SectionCode | 'all'
  nowId: string | null
  isPlaying: boolean
}

export default function Catalogue({ onOpenDossier, onPlay, initialFilter = 'all', nowId, isPlaying }: Props) {
  const { mode } = useMode()
  const { owns } = useAccess()
  const [filter, setFilter] = useState<SectionCode | 'all'>(initialFilter)

  const sections = filter === 'all' ? SECTIONS : SECTIONS.filter(s => s.code === filter)
  const chips: { code: SectionCode | 'all'; name: string }[] = [
    { code: 'all', name: 'TOUT' },
    ...SECTIONS.map(s => ({ code: s.code, name: s.name })),
  ]

  const numLabel = (id: string) => String(ALL_DOSSIERS.findIndex(d => d.id === id) + 1).padStart(3, '0')

  if (mode === 'interference') {
    return (
      <div className="abysso-page">
        <div className="if-path">C:\ABYSSO\ARCHIVE\*.psy</div>
        <div className="if-page-title">Gestionnaire de fichiers</div>
        <div className="if-chips">
          {chips.map(c => (
            <span
              key={c.code}
              className={`if-chip${filter === c.code ? ' if-chip--active' : ''}`}
              onClick={() => setFilter(c.code)}
            >{c.name}</span>
          ))}
        </div>
        <div className="if-table-head">
          <span style={{ width: 30 }} /><span style={{ flex: 1 }}>NOM</span>
          <span style={{ width: 70, textAlign: 'right' }}>DURÉE</span>
          <span style={{ width: 128, textAlign: 'right' }}>ACCÈS</span><span style={{ width: 32 }} />
        </div>
        {sections.map(sec => (
          <div key={sec.code}>
            <div className="if-section-head">▸ /{sec.code} <span className="if-dim">— {sec.name}</span></div>
            {dossiersBySection(sec.code).map(d => {
              const owned = owns(d)
              const playing = nowId === d.id && isPlaying
              return (
                <div key={d.id} className="if-row">
                  <span className="if-row-icon">▤</span>
                  <div className="if-row-main" onClick={() => onOpenDossier(d.id)}>
                    <div className="if-row-id">{d.id}.psy</div>
                    <div className="if-row-title">{d.title}</div>
                  </div>
                  <span className="if-row-dur">{d.dur}</span>
                  <span className="if-row-access" style={{ color: owned ? accessColorVar(d, owned) : undefined }}>
                    {owned ? accessLabel(d, owned) : '[VERROUILLÉ] 0,99€'}
                  </span>
                  <button className="if-row-play" onClick={() => onPlay(d)}>{playing ? '❚❚' : '▶'}</button>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    )
  }

  if (mode === 'surveillance') {
    return (
      <div className="abysso-page">
        <div className="sv-dim sv-kicker">MUR DE CONTRÔLE — TOUS LES FLUX</div>
        <div className="sv-page-title">Flux disponibles</div>
        <div className="sv-chips">
          {chips.map(c => (
            <span
              key={c.code}
              className={`sv-chip${filter === c.code ? ' sv-chip--active' : ''}`}
              onClick={() => setFilter(c.code)}
            >{c.name}</span>
          ))}
        </div>
        {sections.map(sec => (
          <div key={sec.code}>
            <div className="sv-section-head">▸ SECTEUR {sec.code} — {sec.name}</div>
            <div className="sv-card-grid">
              {dossiersBySection(sec.code).map(d => {
                const owned = owns(d)
                const playing = nowId === d.id && isPlaying
                return (
                  <div key={d.id} className="sv-card">
                    <div className="sv-card-feed" onClick={() => onOpenDossier(d.id)}>
                      <div className="sv-card-tag">CAM {numLabel(d.id)}</div>
                      {!owned && (
                        <div className="sv-card-locked">
                          <div>⊘ SIGNAL BROUILLÉ</div>
                          <div className="sv-card-locked-price">ACCÈS — 0,99€</div>
                        </div>
                      )}
                      {d.free && <div className="sv-card-live">● LIVE · ACCÈS LIBRE</div>}
                    </div>
                    <div className="sv-card-foot">
                      <div className="sv-card-info" onClick={() => onOpenDossier(d.id)}>
                        <div className="sv-card-title">{d.title}</div>
                        <div className="sv-card-meta">{d.id} · {d.dur} · NIV {d.level}/V</div>
                      </div>
                      <button className="sv-card-play" onClick={() => onPlay(d)}>{playing ? '❚❚' : '▶'}</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    )
  }

  // clinique
  return (
    <div className="abysso-page">
      <div className="cl-dim cl-kicker-sm">DOCUMENT B — INVENTAIRE</div>
      <div className="cl-page-title">Registre des pièces</div>
      <div className="cl-chips">
        {chips.map(c => (
          <span
            key={c.code}
            className={`cl-chip${filter === c.code ? ' cl-chip--active' : ''}`}
            onClick={() => setFilter(c.code)}
          >{c.name}</span>
        ))}
      </div>
      <div className="cl-table-head">
        <span style={{ width: 34 }}>№</span><span style={{ flex: 1 }}>INTITULÉ DE LA PIÈCE</span>
        <span style={{ width: 64, textAlign: 'right' }}>DURÉE</span>
        <span style={{ width: 120, textAlign: 'right' }}>ACCÈS</span><span style={{ width: 34 }} />
      </div>
      {sections.map(sec => (
        <div key={sec.code}>
          <div className="cl-section-head">{sec.code} — <span className="cl-dim">{sec.name}</span></div>
          {dossiersBySection(sec.code).map(d => {
            const owned = owns(d)
            const playing = nowId === d.id && isPlaying
            return (
              <div key={d.id} className="cl-list-row cl-list-row--ep">
                <span className="cl-list-num">{numLabel(d.id)}</span>
                <div className="cl-list-ep" onClick={() => onOpenDossier(d.id)}>
                  <div className="cl-list-ep-title">{d.title}</div>
                  <div className="cl-list-ep-meta">{d.id} · NIV {d.level}/V</div>
                </div>
                <span className="cl-dur">{d.dur}</span>
                <span className="cl-access" style={{ color: accessColorVar(d, owned) }}>{accessLabel(d, owned)}</span>
                <button className="cl-play-btn" onClick={() => onPlay(d)}>{playing ? '❚❚' : '▶'}</button>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
