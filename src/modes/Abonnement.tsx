import { useMode } from '../ModeContext'
import { TOTAL_COUNT } from '../data/dossiers'
import { useAccess } from './useAccess'

interface Props {
  onGoCatalogue: () => void
  onSubscribe: () => void
  subLoading: boolean
}

export default function Abonnement({ onGoCatalogue, onSubscribe, subLoading }: Props) {
  const { mode } = useMode()
  const { subscribed } = useAccess()
  const total = String(TOTAL_COUNT).padStart(2, '0')

  if (mode === 'interference') {
    return (
      <div className="abysso-page">
        <div className="if-accent if-kicker-sm">connexion --niveau-acces</div>
        <div className="if-page-title">Deux niveaux de connexion</div>
        {subscribed && <div className="abysso-positive-banner abysso-positive-banner--if">✓ ACCÈS ROOT ACCORDÉ — {total} FICHIERS DÉVERROUILLÉS</div>}
        <div className="if-plan-grid">
          <div className="if-plan">
            <div className="if-dim">$ acces --unitaire</div>
            <div className="if-plan-price"><span>0,99€</span><span className="if-dim">/ FICHIER</span></div>
            <div className="if-plan-rule" />
            <div className="if-plan-features">
              <div>&gt; clé d'un fichier, sans compte</div>
              <div>&gt; accès permanent au fichier</div>
              <div>&gt; lecture hors-ligne</div>
              <div>&gt; aucun engagement</div>
            </div>
            <span className="if-plan-cta" onClick={onGoCatalogue}>[OUVRIR LES FICHIERS]</span>
          </div>
          <div className="if-plan if-plan--root">
            <div className="if-plan-badge">ROOT</div>
            <div className="if-accent">$ acces --root</div>
            <div className="if-plan-price"><span>6,99€</span><span className="if-dim">/ MOIS</span></div>
            <div className="if-plan-rule if-plan-rule--accent" />
            <div className="if-plan-features">
              <div>&gt; accès à tous les {total} fichiers</div>
              <div>&gt; nouveaux fichiers en continu</div>
              <div>&gt; lecture hors-ligne &amp; player complet</div>
              <div>&gt; révocable à tout moment</div>
            </div>
            {subscribed
              ? <div className="if-plan-active">✓ ACCÈS ROOT ACTIF</div>
              : <button className="if-plan-btn" onClick={onSubscribe} disabled={subLoading}>{subLoading ? 'REDIRECTION…' : '[ ACCORDER L\'ACCÈS ROOT ]'}</button>}
          </div>
        </div>
        <div className="if-dim if-fineprint">PAIEMENT SÉCURISÉ · STRIPE · AUCUNE PUBLICITÉ · AUCUN PISTAGE · TVA INCLUSE</div>
      </div>
    )
  }

  if (mode === 'surveillance') {
    return (
      <div className="abysso-page">
        <div className="sv-accent sv-kicker-sm">AUTORISATION D'ACCÈS — NIVEAU DE CLEARANCE</div>
        <div className="sv-page-title">Deux niveaux d'accès</div>
        {subscribed && <div className="abysso-positive-banner abysso-positive-banner--sv">✓ CLEARANCE TOTALE ACCORDÉE — {total} FLUX DÉBROUILLÉS</div>}
        <div className="sv-plan-grid">
          <div className="sv-plan">
            <div className="sv-dim">CLEARANCE A — PONCTUELLE</div>
            <div className="sv-plan-price"><span>0,99€</span><span className="sv-dim">/ FLUX</span></div>
            <div className="sv-plan-rule" />
            <div className="sv-plan-features">
              <div>› Débrouillage d'un flux, sans compte</div>
              <div>› Accès permanent à ce flux</div>
              <div>› Écoute hors-ligne incluse</div>
              <div>› Aucun engagement</div>
            </div>
            <span className="sv-plan-cta" onClick={onGoCatalogue}>SÉLECTIONNER UN FLUX</span>
          </div>
          <div className="sv-plan sv-plan--total">
            <div className="sv-plan-badge">TOTALE</div>
            <div className="sv-plan-label-accent">CLEARANCE B — TOTALE</div>
            <div className="sv-plan-price"><span className="sv-plan-price--bright">6,99€</span><span className="sv-dim">/ MOIS</span></div>
            <div className="sv-plan-rule sv-plan-rule--accent" />
            <div className="sv-plan-features">
              <div>› Accès à tous les {total} flux</div>
              <div>› Nouveaux flux inclus en continu</div>
              <div>› Écoute hors-ligne &amp; lecteur complet</div>
              <div>› Révocable à tout moment</div>
            </div>
            {subscribed
              ? <div className="sv-plan-active">✓ CLEARANCE TOTALE ACTIVE</div>
              : <button className="sv-plan-btn" onClick={onSubscribe} disabled={subLoading}>{subLoading ? 'REDIRECTION…' : 'ACCORDER LA CLEARANCE TOTALE'}</button>}
          </div>
        </div>
        <div className="sv-dim sv-fineprint">PAIEMENT SÉCURISÉ · STRIPE · AUCUNE PUBLICITÉ · AUCUN PISTAGE · TVA INCLUSE</div>
      </div>
    )
  }

  // clinique
  return (
    <div className="abysso-page">
      <div className="cl-accent cl-kicker-sm">CONDITIONS DE COMMUNICATION DES PIÈCES</div>
      <div className="cl-page-title">Deux formules,<br />aucune friction.</div>
      <div className="cl-page-italic">Payez la pièce qui vous intéresse, ou ouvrez l'archive entière. Sans publicité, sans pistage, résiliable à tout instant.</div>
      {subscribed && <div className="abysso-positive-banner abysso-positive-banner--cl">✓ ACCÈS TOTAL ACTIF — LES {total} PIÈCES SONT COMMUNICABLES</div>}
      <div className="cl-plan-grid">
        <div className="cl-plan">
          <div className="cl-dim">FORMULE A — À L'UNITÉ</div>
          <div className="cl-plan-price"><span>0,99€</span><span className="cl-dim">/ PIÈCE</span></div>
          <div className="cl-plan-rule" />
          <div className="cl-plan-features">
            <div>— Paiement ponctuel, sans compte</div>
            <div>— Accès permanent à la pièce</div>
            <div>— Écoute hors-ligne incluse</div>
            <div>— Aucun engagement</div>
          </div>
          <span className="cl-plan-cta" onClick={onGoCatalogue}>CHOISIR UNE PIÈCE →</span>
        </div>
        <div className="cl-plan cl-plan--total">
          <div className="cl-plan-badge">ACCÈS TOTAL</div>
          <div className="cl-accent">FORMULE B — INTÉGRAL</div>
          <div className="cl-plan-price"><span>6,99€</span><span className="cl-dim">/ MOIS</span></div>
          <div className="cl-plan-rule cl-plan-rule--accent" />
          <div className="cl-plan-features">
            <div>— Accès illimité aux {total} pièces</div>
            <div>— Toutes les nouvelles pièces incluses</div>
            <div>— Écoute hors-ligne &amp; lecteur complet</div>
            <div>— Résiliable à tout moment</div>
          </div>
          {subscribed
            ? <div className="cl-plan-active">✓ ACCÈS TOTAL ACTIF</div>
            : <button className="cl-plan-btn" onClick={onSubscribe} disabled={subLoading}>{subLoading ? 'Redirection…' : 'ACTIVER L\'ACCÈS TOTAL'}</button>}
        </div>
      </div>
      <div className="cl-dim cl-fineprint">PAIEMENT SÉCURISÉ · STRIPE · AUCUNE PUBLICITÉ · AUCUN PISTAGE · TVA INCLUSE</div>
    </div>
  )
}
