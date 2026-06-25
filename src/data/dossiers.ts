// Modèle de données du catalogue ABYSSO — système "dossiers" (post-migration prototype).
// Remplace l'ancien src/data/episodes.ts pour la nouvelle UX à 3 modes (Clinique / Surveillance / Interférence).

export type SectionCode = 'SEC-01' | 'SEC-02' | 'SEC-03' | 'SEC-04' | 'SEC-05' | 'SEC-06'
export type FearLevel = 'I' | 'II' | 'III' | 'IV' | 'V'

export interface Section {
  code: SectionCode
  name: string
  short: string
}

export interface Dossier {
  id: string
  section: SectionCode
  title: string
  /** mm:ss, affichage */
  dur: string
  /** durée en secondes, pour le lecteur */
  durSec: number
  /** date d'enregistrement affichée (peut être une chaîne libre, ex. "1961 · RÉ-ÉD. 2026") */
  date: string
  level: FearLevel
  /** accès libre (gratuit) si true, sinon payant à l'unité ou via abonnement */
  free: boolean
  synopsis: string
  /** placeholder tant qu'aucun vrai fichier audio n'est attaché */
  audioSrc?: string
}

export const SECTIONS: Section[] = [
  { code: 'SEC-01', name: 'Identité numérique',    short: 'IDENT'  },
  { code: 'SEC-02', name: 'Web horror',             short: 'WEBHOR' },
  { code: 'SEC-03', name: 'Philosophie / Science',  short: 'PHILO'  },
  { code: 'SEC-04', name: 'Psychologie sociale',    short: 'PSYSOC' },
  { code: 'SEC-05', name: 'Mythologies collectives',short: 'MYTHO'  },
  { code: 'SEC-06', name: 'Surveillance',           short: 'SURV'   },
]

export const ALL_DOSSIERS: Dossier[] = [
  {
    id: 'ABY-001', section: 'SEC-01', title: 'Le visage que vous ne portez pas',
    dur: '41:12', durSec: 2472, date: '12.11.2025', level: 'III', free: true,
    synopsis: "Étude de la dissociation entre l'identité civile et les avatars que nous laissons agir à notre place. Ce que devient un visage lorsque des milliers d'inconnus le regardent sans jamais le voir.",
  },
  {
    id: 'ABY-002', section: 'SEC-01', title: 'Profils fantômes',
    dur: '36:48', durSec: 2208, date: '03.09.2025', level: 'II', free: false,
    synopsis: "Les comptes survivent à leurs propriétaires. Enquête sur la persistance des morts dans les bases de données, et sur ce que les algorithmes font de nos absents.",
  },
  {
    id: 'ABY-003', section: 'SEC-02', title: 'Les fichiers qui se réécrivent',
    dur: '52:07', durSec: 3127, date: '27.01.2026', level: 'IV', free: false,
    synopsis: "Un dossier consacré aux récits qui se modifient à chaque consultation. Mémoire corrompue, archives vivantes, et la peur très ancienne de ne plus pouvoir relire la même chose deux fois.",
  },
  {
    id: 'ABY-004', section: 'SEC-02', title: 'Couloir sans onzième étage',
    dur: '44:31', durSec: 2671, date: '18.10.2025', level: 'III', free: true,
    synopsis: "Topologie des espaces qui ne devraient pas exister. Pourquoi le cerveau refuse certains lieux, et ce qu'il invente pour les fuir.",
  },
  {
    id: 'ABY-005', section: 'SEC-03', title: "L'expérience de la pièce muette",
    dur: '39:55', durSec: 2395, date: '02.02.2026', level: 'III', free: true,
    synopsis: "Privation sensorielle et lente érosion du moi. Mesurer combien de temps il faut au silence pour devenir une voix.",
  },
  {
    id: 'ABY-006', section: 'SEC-03', title: 'Thanatose',
    dur: '47:20', durSec: 2840, date: '21.12.2025', level: 'IV', free: false,
    synopsis: "La mort simulée comme stratégie de survie, de l'insecte à l'humain. Jouer le cadavre pour rester en vie — et ce que l'on devient à force de s'y exercer.",
  },
  {
    id: 'ABY-007', section: 'SEC-04', title: "La foule n'a qu'un œil",
    dur: '33:09', durSec: 1989, date: '14.08.2025', level: 'II', free: true,
    synopsis: "Désindividuation et dilution de la responsabilité. Comment un individu disparaît, geste après geste, dans le nombre.",
  },
  {
    id: 'ABY-008', section: 'SEC-04', title: 'Étude 1961',
    dur: '58:14', durSec: 3494, date: '1961 · RÉ-ÉD. 2026', level: 'V', free: false,
    synopsis: "Réexamen clinique de l'obéissance à l'autorité. Le bouton, la blouse blanche, et la voix calme qui répète : continuez, l'expérience l'exige.",
  },
  {
    id: 'ABY-009', section: 'SEC-05', title: 'Le témoin et son double',
    dur: '42:50', durSec: 2570, date: '09.03.2026', level: 'III', free: false,
    synopsis: "Entités nées de l'attention soutenue. Lorsqu'une croyance partagée commence à répondre à ceux qui la regardent.",
  },
  {
    id: 'ABY-010', section: 'SEC-05', title: "Naissance d'un dieu mineur",
    dur: '49:33', durSec: 2973, date: '30.06.2025', level: 'IV', free: true,
    synopsis: "Anatomie d'une mythologie née en ligne. Comment un personnage inventé par tout le monde finit par acquérir des témoins, puis des fidèles.",
  },
  {
    id: 'ABY-011', section: 'SEC-06', title: 'Vous êtes le produit',
    dur: '37:41', durSec: 2261, date: '17.02.2026', level: 'III', free: false,
    synopsis: "Économie de l'attention et capture méthodique du regard. Le modèle d'affaires qui transforme votre insomnie en revenu.",
  },
  {
    id: 'ABY-012', section: 'SEC-06', title: 'Caméra 7, couloir B',
    dur: '31:26', durSec: 1886, date: '05.05.2025', level: 'II', free: true,
    synopsis: "Esthétique de la vidéosurveillance et sentiment permanent d'être vu. Qui regarde les écrans lorsque plus personne ne regarde ?",
  },
]

export function sectionByCode(code: SectionCode): Section | undefined {
  return SECTIONS.find(s => s.code === code)
}

export function dossierById(id: string): Dossier | undefined {
  return ALL_DOSSIERS.find(d => d.id === id)
}

export function dossiersBySection(code: SectionCode): Dossier[] {
  return ALL_DOSSIERS.filter(d => d.section === code)
}

export function levelToNumber(level: FearLevel): number {
  return { I: 1, II: 2, III: 3, IV: 4, V: 5 }[level]
}

export const TOTAL_COUNT = ALL_DOSSIERS.length
export const SECTION_COUNT = SECTIONS.length
export const FREE_COUNT = ALL_DOSSIERS.filter(d => d.free).length
