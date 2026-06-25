import type { Dossier } from '../data/dossiers'

/** Libellé d'accès affiché à côté d'un dossier (libre / restreint / débloqué). */
export function accessLabel(d: Dossier, owned: boolean): string {
  if (d.free) return 'ACCÈS LIBRE'
  if (owned) return 'DÉBLOQUÉ'
  return 'RESTREINT · 0,99€'
}

/** Statut long, utilisé sur la fiche dossier. */
export function statusLabel(d: Dossier, owned: boolean): string {
  if (d.free) return 'ACCÈS LIBRE'
  if (owned) return 'DÉBLOQUÉ'
  return 'ACCÈS RESTREINT'
}

/**
 * Couleur de statut : on lit directement les variables CSS du mode actif
 * (posées sur <body data-mode="...">) pour rester cohérent sans dupliquer
 * une palette par mode ici.
 */
export function accessColorVar(d: Dossier, owned: boolean): string {
  if (d.free) return 'var(--mode-positive)'
  if (owned) return 'var(--mode-accent-bright)'
  return 'var(--mode-accent)'
}
