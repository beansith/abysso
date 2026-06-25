import { useState } from 'react'
import type { CategoryId } from '../data/episodes'
import { CATEGORIES, getEpisodesByCategory } from '../data/episodes'
import EpisodeRow from './EpisodeRow'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className={`reco-acc-chevron${open ? ' reco-acc-chevron-open' : ''}`}
    >
      <path d="M6 9l6 6 6-6"/>
    </svg>
  )
}

interface Props {
  categoryId: CategoryId
  onPlayEpisode: (episodeId: number) => void
  onUnlockRequest: () => void
  onRecoOpen?: (episodeId: number) => void
  onEpisodeOpen?: (episodeId: number) => void
}

export default function CategoryPage({ categoryId, onPlayEpisode, onUnlockRequest, onRecoOpen, onEpisodeOpen }: Props) {
  const [expanded, setExpanded] = useState<number | null>(null)
  const episodes = getEpisodesByCategory(categoryId)
  const category = CATEGORIES.find(c => c.id === categoryId)!

  if (categoryId === 'recommandations') {
    return (
      <div className="cat-page">
        <p className="cat-breadcrumb">VOUS ÊTES DANS : {category.label.toUpperCase()} — {episodes.length} DOSSIERS</p>
        <div className="cat-header">
          <h2 className="cat-title">{category.label}</h2>
        </div>
        <div className="reco-accordion">
          {episodes.map(ep => (
            <div key={ep.id} className="reco-acc-item">
              <button
                className="reco-acc-btn"
                onClick={() => setExpanded(expanded === ep.id ? null : ep.id)}
                aria-expanded={expanded === ep.id}
              >
                <span className="reco-acc-num">{ep.number}</span>
                <span className="reco-acc-title">{ep.title}</span>
                <ChevronIcon open={expanded === ep.id} />
              </button>
              {expanded === ep.id && ep.recommendationBody && (
                <div className="reco-acc-body">
                  {ep.recommendationBody.split('\n\n').map((p, i) => (
                    <p key={i} className="reco-acc-para">{p}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="cat-page">
      <p className="cat-breadcrumb">VOUS ÊTES DANS : {category.label.toUpperCase()} — {episodes.length} DOSSIERS</p>
      <div className="cat-header">
        <h2 className="cat-title">{category.label}</h2>
        <p className="cat-count">{episodes.filter(e => !e.locked).length} épisodes en accès libre</p>
      </div>
      <div className="ep-list">
        {episodes.map(ep => (
          <EpisodeRow
            key={ep.id}
            episode={ep}
            onPlay={() => onPlayEpisode(ep.id)}
            onUnlockRequest={onUnlockRequest}
            onRecoOpen={onRecoOpen}
            onEpisodeOpen={onEpisodeOpen}
          />
        ))}
      </div>
    </div>
  )
}
