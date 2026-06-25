export type CategoryId = 'fiction' | 'darkfacts' | 'paranormal' | 'existentiel' | 'morbide' | 'recommandations'

export interface ArchiveSource {
  title: string
  author?: string
  year: string
  url?: string
}

export interface Episode {
  id: number
  number: string
  title: string
  subtitle: string
  duration: string
  genre: string
  locked: boolean
  audioSrc?: string
  categoryId: CategoryId
  isRecommendation?: boolean
  recommendationBody?: string
  fact?: string
  fearLevel?: number
  triggerWarnings?: string[]
  archive?: ArchiveSource[]
}

export interface Category {
  id: CategoryId
  label: string
  icon: 'book' | 'skull' | 'eye' | 'infinity' | 'drop' | 'star'
}

export const CATEGORIES: Category[] = [
  { id: 'fiction',         label: 'Histoires',        icon: 'book'     },
  { id: 'darkfacts',       label: 'Dark Facts',        icon: 'skull'    },
  { id: 'paranormal',      label: 'Paranormal',        icon: 'eye'      },
  { id: 'existentiel',     label: 'Existentiel',       icon: 'infinity' },
  { id: 'morbide',         label: 'Morbide',           icon: 'drop'     },
  { id: 'recommandations', label: 'Recommandations',   icon: 'star'     },
]

export const ALL_EPISODES: Episode[] = [

  // ── Histoires (Fiction) ──
  {
    id: 1, categoryId: 'fiction', number: 'Histoires 01', locked: false,
    title: 'La Maison des Ombres', subtitle: "Ils sont partis en pleine nuit. Ils n'ont rien expliqué.",
    duration: '15 min', genre: 'Horreur atmosphérique',
    audioSrc: '/565822__audiomirage__tension-in-the-air.mp3',
    fact: "La famille DeFeo a été assassinée un par un. Personne ne s'est réveillé. Les chambres étaient séparées. Personne n'a entendu les coups de feu. Curieux, n'est-ce pas.",
    fearLevel: 3,
    triggerWarnings: ['Mort', 'Disparition'],
    archive: [
      { title: 'The Night the DeFeos Died', author: 'Ric Osuna', year: '2021', url: 'https://books.google.com/books?id=amityville' },
      { title: 'Archives originales affaire DeFeo', author: 'New York Times', year: '1974', url: 'https://www.nytimes.com/1974/11/14/archives' },
      { title: 'Réf. The Conjuring (2013) / Haunting of Hill House (Netflix 2018)', year: '2013' },
    ],
  },
  {
    id: 2, categoryId: 'fiction', number: 'Histoires 02', locked: true,
    title: 'Le Miroir du Couloir', subtitle: "Dans plusieurs cultures, on les retourne après un décès.",
    duration: '18 min', genre: 'Paranormal',
    fact: "Dans certaines cultures, retourner les miroirs après un décès c'est pas de la superstition. C'est une précaution. Contre quoi exactement, personne ne s'accorde vraiment. Tu as des miroirs chez toi.",
    fearLevel: 2,
    triggerWarnings: ['Mort', 'Psychologie'],
    archive: [
      { title: 'The Golden Bough — rituels funéraires', author: 'James George Frazer', year: '1890', url: 'https://archive.org/details/goldenbough00fraz' },
      { title: 'Mirror Taboos in Mourning Practices', author: 'Journal of Folklore Research', year: '2001', url: 'https://www.jstor.org/stable/3814645' },
      { title: 'Réf. Oculus (2013) / Black Mirror S1E1', year: '2013' },
    ],
  },
  {
    id: 3, categoryId: 'fiction', number: 'Histoires 03', locked: true,
    title: 'La Forêt qui Respire', subtitle: "Certains biologistes pensent qu'ils s'entraident. D'autres préfèrent ne pas y penser.",
    duration: '22 min', genre: 'Horreur nature',
    fact: "Les arbres s'envoient des nutriments. S'alertent en cas de danger. Communiquent. La question c'est pas si ça se passe. C'est ce que ça dit de nous, qui pensions être les seuls à le faire.",
    fearLevel: 3,
    triggerWarnings: ['Mort', 'Psychologie'],
    archive: [
      { title: 'Finding the Mother Tree', author: 'Suzanne Simard — Knopf', year: '2021', url: 'https://www.penguinrandomhouse.com/books/578326/finding-the-mother-tree-by-suzanne-simard' },
      { title: 'Net transfer of carbon between ectomycorrhizal tree species', author: 'Simard et al. — Nature', year: '1997', url: 'https://www.nature.com/articles/41129' },
      { title: 'Réf. Avatar (2009) / The Last of Us (HBO 2023)', year: '2009' },
    ],
  },
  {
    id: 4, categoryId: 'fiction', number: 'Histoires 04', locked: true,
    title: "L'Enfant du Sous-sol", subtitle: "Jusqu'à 7 ans, ils entendent des fréquences que les adultes ne perçoivent plus.",
    duration: '19 min', genre: 'Psychologique',
    fact: "Jusqu'à 7 ans, les enfants perçoivent des fréquences que les adultes ne peuvent plus entendre. T'as déjà demandé à un enfant ce qu'il entend la nuit.",
    fearLevel: 4,
    triggerWarnings: ['Mort', 'Psychologie'],
    archive: [
      { title: 'Frequency sensitivity in children vs adults', author: 'Journal of the Acoustical Society of America', year: '1963', url: 'https://asa.scitation.org/journal/jas' },
      { title: 'Age and sex differences in pure-tone thresholds', author: 'J.F. Corso — Archives of Otolaryngology', year: '1963', url: 'https://pubmed.ncbi.nlm.nih.gov' },
      { title: 'Réf. Sixième Sens (1999) / Hereditary (2018)', year: '1999' },
    ],
  },
  {
    id: 5, categoryId: 'fiction', number: 'Histoires 05', locked: true,
    title: 'La Voix dans les Murs', subtitle: "18,98 Hz. Personne ne sait quels bâtiments les émettent.",
    duration: '21 min', genre: 'Atmosphérique',
    fact: "18,98 Hz. La fréquence à laquelle l'œil humain entre en résonance. Hallucinations, terreur inexpliquée, sentiment de présence. C'était un ventilateur. Cette fois.",
    fearLevel: 3,
    triggerWarnings: ['Mort', 'Psychologie'],
    archive: [
      { title: 'The Ghost in the Machine', author: 'Tandy & Lawrence — Journal of the Society for Psychical Research', year: '1998', url: 'https://www.jspr.org' },
      { title: 'Effets des infrarasons sur le corps humain', author: 'NASA Technical Memorandum', year: '1972', url: 'https://ntrs.nasa.gov' },
      { title: 'Réf. Sinister (2012) / Silent Hill (2006)', year: '2012' },
    ],
  },
  {
    id: 6, categoryId: 'fiction', number: 'Histoires 06', locked: true,
    title: 'Le Train de Minuit', subtitle: "Observé depuis 1908. Aucun rapport définitif n'a été publié.",
    duration: '17 min', genre: 'Horreur urbaine',
    fact: "Depuis 1908, une lumière traverse les rails désaffectés de St-Louis. Des scientifiques se sont déplacés. Aucun rapport définitif n'a été publié. Ils n'ont pas expliqué pourquoi non plus.",
    fearLevel: 3,
    triggerWarnings: ['Mort', 'Psychologie'],
    archive: [
      { title: 'St. Louis Ghost Train', author: 'The Canadian Encyclopedia', year: '2006', url: 'https://www.thecanadianencyclopedia.ca/en/article/st-louis-ghost-train' },
      { title: 'Reportage télévisé — phénomène de Saint-Louis', author: 'CBC Archives', year: '1996', url: 'https://www.cbc.ca/archives' },
      { title: 'Réf. Train to Busan (2016) / Snowpiercer (2013)', year: '2016' },
    ],
  },

  // ── Dark Facts ──
  {
    id: 11, categoryId: 'darkfacts', number: 'Dark Facts 01', locked: true,
    title: 'Les Catacombes de Paris', subtitle: "Six millions de personnes. Certaines galeries n'ont jamais été cartographiées.",
    duration: '12 min', genre: 'Histoire morbide',
    fact: "300 kilomètres de galeries sous Paris. 100 ne sont pas cartographiées. Des gens y entrent encore. Certains n'en sont pas ressortis. Les dossiers sont classés sans suite.",
    fearLevel: 3,
    triggerWarnings: ['Corps', 'Mort'],
    archive: [
      { title: 'Rapport officiel DRAC — 300 km de galeries', author: 'Direction Régionale des Affaires Culturelles', year: '2018', url: 'https://www.culture.gouv.fr/Regions/Drac-Ile-de-France' },
      { title: "L'Homme devant la mort", author: 'Philippe Ariès — Seuil', year: '1977', url: 'https://www.seuil.com' },
      { title: 'Réf. As Above So Below (2014) / Dark Netflix S1', year: '2014' },
    ],
  },
  {
    id: 12, categoryId: 'darkfacts', number: 'Dark Facts 02', locked: true,
    title: 'Le Syndrome de Cotard', subtitle: "Convaincus d'être morts. Certains cessent de manger.",
    duration: '10 min', genre: 'Neurologie sombre',
    fact: "Des patients convaincus d'être morts. Qui refusent de manger parce que les morts n'ont pas faim. Jules Cotard a décrit ça en 1880. On appelle encore ça un délire. Comme si avoir tort était la seule option acceptable.",
    fearLevel: 4,
    triggerWarnings: ['Psychologie', 'Corps'],
    archive: [
      { title: 'Du délire des négations', author: 'Jules Cotard — Archives de Neurologie', year: '1882', url: 'https://gallica.bnf.fr' },
      { title: "Cotard's Delusion or Syndrome?", author: 'Berrios & Luque — Comprehensive Psychiatry', year: '1995', url: 'https://pubmed.ncbi.nlm.nih.gov/7641567' },
      { title: 'Réf. iZombie (CW) / Death Becomes Her (1992)', year: '1992' },
    ],
  },
  {
    id: 13, categoryId: 'darkfacts', number: 'Dark Facts 03', locked: true,
    title: 'La Momification des Capucins', subtitle: "8 000 corps exposés habillés depuis le 16ème siècle. Certains sourient encore.",
    duration: '11 min', genre: 'Rituels funéraires',
    fact: "8 000 corps habillés, exposés, certains assis. Depuis le XVIe siècle. La plus jeune a deux ans. Elle s'appelle Rosalia. Elle a l'air de dormir. Personne ne sait comment.",
    fearLevel: 2,
    triggerWarnings: ['Corps', 'Mort'],
    archive: [
      { title: 'Mummies of the World', author: 'Dario Piombino-Mascali — Prestel', year: '2010', url: 'https://www.prestel.com' },
      { title: 'Sleeping Beauty of Palermo: Rosalia Lombardo', author: 'Scientific American', year: '2009', url: 'https://www.scientificamerican.com' },
      { title: 'Réf. Coco (Pixar 2017) / The House (Netflix 2022)', year: '2017' },
    ],
  },
  {
    id: 14, categoryId: 'darkfacts', number: 'Dark Facts 04', locked: true,
    title: 'La Nuit de Jonestown', subtitle: "918 morts en moins de 5 minutes. La plupart avaient moins de 17 ans.",
    duration: '14 min', genre: 'Catastrophe humaine',
    fact: "918 morts en moins de 20 minutes. Dont 304 enfants. Les enregistrements audio de cette nuit existent. Ils sont en accès libre sur internet. T'as juste à chercher.",
    fearLevel: 5,
    triggerWarnings: ['Mort', 'Suicide', 'Sectes', 'Enfants'],
    archive: [
      { title: 'Jonestown — dossier complet, 53 000 pages déclassifiées', author: 'FBI Records Vault', year: '1978', url: 'https://vault.fbi.gov/jonestown' },
      { title: 'Alternative Considerations of Jonestown & Peoples Temple', author: 'San Diego State University', year: '1998', url: 'https://jonestown.sdsu.edu' },
      { title: 'Réf. Wild Wild Country (Netflix 2018) / The Path (Hulu)', year: '2018' },
    ],
  },
  {
    id: 15, categoryId: 'darkfacts', number: 'Dark Facts 05', locked: true,
    title: "L'Expérience de Stanford", subtitle: "Arrêtée au bout de 6 jours. Les enregistrements sont restés secrets 40 ans.",
    duration: '13 min', genre: 'Psychologie noire',
    fact: "Des étudiants normaux. Un sous-sol. Des rôles assignés au hasard. Au bout de 6 jours Zimbardo a tout arrêté. Ce qui s'était passé en si peu de temps, il a mis des années à l'écrire. Les gardiens étaient des volontaires.",
    fearLevel: 4,
    triggerWarnings: ['Manipulation psychologique', 'Violence'],
    archive: [
      { title: 'Stanford Prison Experiment — archive officielle', author: 'Philip Zimbardo', year: '1971', url: 'https://www.prisonexp.org' },
      { title: 'The Lucifer Effect', author: 'Philip Zimbardo — Random House', year: '2007', url: 'https://www.penguinrandomhouse.com' },
      { title: 'Réf. Das Experiment (2001) / The Stanford Prison Experiment (2015)', year: '2001' },
    ],
  },

  // ── Paranormal ──
  {
    id: 21, categoryId: 'paranormal', number: 'Paranormal 01', locked: true,
    title: 'La Chambre 428', subtitle: "Deux tueurs en série. La même chambre. Les registres ont disparu.",
    duration: '13 min', genre: 'Faits inexpliqués',
    fact: "Deux tueurs en série ont séjourné à l'Hôtel Cecil à des années d'intervalle. Même hôtel. La direction n'a jamais fait le lien. Les registres ont disparu.",
    fearLevel: 3,
    triggerWarnings: ['Mort', 'Psychologie'],
    archive: [
      { title: 'Hôtel Cecil — archives 1985–2016', author: 'Los Angeles Times', year: '2016', url: 'https://www.latimes.com/archives' },
      { title: 'Crime Scene: The Vanishing at the Cecil Hotel', author: 'Netflix Documentary', year: '2021', url: 'https://www.netflix.com' },
      { title: 'Réf. American Horror Story: Hotel (FX 2015)', year: '2015' },
    ],
  },
  {
    id: 22, categoryId: 'paranormal', number: 'Paranormal 02', locked: true,
    title: 'Le Signal WOW', subtitle: "72 secondes. Critères d'une communication extraterrestre. Jamais reçu à nouveau.",
    duration: '11 min', genre: 'Signal inexpliqué',
    fact: "72 secondes. C'est la durée du signal reçu le 15 août 1977 par l'observatoire Big Ear. Jerry Ehman a annoté la feuille d'un seul mot. On n'a jamais rien reçu de semblable depuis. On cherche encore.",
    fearLevel: 1,
    triggerWarnings: ['Psychologie', 'Existentiel'],
    archive: [
      { title: 'Transcription originale annotée par Jerry Ehman', author: 'Big Ear Radio Observatory', year: '1977', url: 'https://www.bigear.org/wow.htm' },
      { title: 'Analyse officielle du Signal WOW', author: 'SETI Institute', year: '2012', url: 'https://www.seti.org' },
      { title: 'Réf. Contact (1997) / Arrival (2016)', year: '1997' },
    ],
  },
  {
    id: 23, categoryId: 'paranormal', number: 'Paranormal 03', locked: true,
    title: "Les Portes de l'Enfer", subtitle: "Ils ont allumé le gaz pour quelques semaines. C'était en 1971.",
    duration: '10 min', genre: 'Phénomène naturel',
    fact: "En 1971 des géologues soviétiques ont allumé le cratère de Darvaza pour brûler le gaz. Ils pensaient que ça prendrait quelques jours. Ça brûle encore. Personne n'a vraiment expliqué pourquoi.",
    fearLevel: 2,
    triggerWarnings: ['Psychologie'],
    archive: [
      { title: 'Door to Hell — reportage complet', author: 'National Geographic', year: '2014', url: 'https://www.nationalgeographic.com/travel/article/darvaza-crater' },
      { title: 'Études soviétiques gisement Karakoum — archives déclassifiées', author: 'CIA FOIA Reading Room', year: '1971', url: 'https://www.cia.gov/readingroom' },
      { title: "Réf. Dante's Peak (1997) / Journey to the Center of the Earth (2008)", year: '1997' },
    ],
  },
  {
    id: 24, categoryId: 'paranormal', number: 'Paranormal 04', locked: true,
    title: 'Voynich', subtitle: "Analysé par les meilleurs cryptographes du monde depuis 1912. Zéro ligne déchiffrée.",
    duration: '15 min', genre: 'Mystère historique',
    fact: "240 pages. Une langue inconnue. Des illustrations de plantes qui n'existent pas. Des corps dans des structures circulaires. Daté du XVe siècle. Les meilleurs cryptographes du monde s'y sont cassé les dents. Le manuscrit est toujours là. Toujours illisible.",
    fearLevel: 1,
    triggerWarnings: ['Psychologie'],
    archive: [
      { title: 'MS 408 — manuscrit Voynich numérisé intégralement', author: 'Beinecke Rare Book & Manuscript Library, Yale', year: '1912', url: 'https://beinecke.library.yale.edu/collections/highlights/voynich-manuscript' },
      { title: 'Site de référence mondial sur le manuscrit', author: 'René Zandbergen', year: '2023', url: 'https://www.voynich.nu' },
      { title: 'Réf. Da Vinci Code (2006) / Warehouse 13 (Syfy)', year: '2006' },
    ],
  },
  {
    id: 25, categoryId: 'paranormal', number: 'Paranormal 05', locked: true,
    title: 'Dyatlov', subtitle: "9 randonneurs expérimentés. Tente découpée de l'intérieur. Pieds nus dans la neige.",
    duration: '12 min', genre: 'Mort inexpliquée',
    fact: "9 randonneurs. Une tente découpée de l'intérieur. Des corps retrouvés en sous-vêtements par -30°C. L'un d'eux manquait sa langue. Les archives russes ont été déclassifiées en 2019. La conclusion officielle : avalanche. Personne n'y croit vraiment.",
    fearLevel: 4,
    triggerWarnings: ['Mort', 'Psychologie'],
    archive: [
      { title: 'Archives déclassifiées 2019 — dossier Dyatlov', author: 'Fondation Dyatlov Pass', year: '2019', url: 'https://dyatlovpass.com' },
      { title: 'Dead Mountain', author: 'Donnie McCloskey — Chronicle Books', year: '2013', url: 'https://www.chroniclebooks.com' },
      { title: "Réf. Devil's Pass (2013) / Dark (Netflix)", year: '2013' },
    ],
  },

  // ── Existentiel ──
  {
    id: 31, categoryId: 'existentiel', number: 'Existentiel 01', locked: false,
    title: 'Le Paradoxe de Fermi', subtitle: "Des milliards de planètes habitables. Zéro signal. Personne n'a d'explication satisfaisante.",
    duration: '09 min', genre: 'Cosmologie',
    fact: "L'univers a 13,8 milliards d'années. Des milliards de planètes potentiellement habitables. Et silence total. Fermi a posé la question en 1950 autour d'un déjeuner. On n'a toujours pas de réponse. C'est ça qui devrait t'inquiéter.",
    fearLevel: 2,
    triggerWarnings: ['Psychologie', 'Existentiel'],
    archive: [
      { title: 'Where Are They?', author: 'Nick Bostrom — MIT Technology Review', year: '2008', url: 'https://www.technologyreview.com' },
      { title: 'Archive des recherches officielles SETI', author: 'SETI Institute', year: '2023', url: 'https://www.seti.org' },
      { title: 'Réf. Interstellar (2014) / Le Problème à Trois Corps (Netflix 2024)', year: '2014' },
    ],
  },
  {
    id: 32, categoryId: 'existentiel', number: 'Existentiel 02', locked: true,
    title: 'La Théorie de la Simulation', subtitle: "En 2003, Bostrom démontre mathématiquement que c'est probable. Plusieurs physiciens le prennent au sérieux.",
    duration: '11 min', genre: 'Philosophie scientifique',
    fact: "Nick Bostrom a publié l'argument en 2003. La conclusion logique c'est qu'on vit probablement dans une simulation. Il ne dit pas que c'est certain. Il dit juste que c'est la possibilité la plus probable. T'as rien remarqué d'étrange ces derniers temps.",
    fearLevel: 2,
    triggerWarnings: ['Psychologie', 'Existentiel'],
    archive: [
      { title: 'Are You Living in a Computer Simulation?', author: 'Nick Bostrom', year: '2003', url: 'https://www.simulation-argument.com' },
      { title: 'Our Mathematical Universe', author: 'Max Tegmark — Knopf', year: '2014', url: 'https://www.penguinrandomhouse.com' },
      { title: 'Réf. Matrix (1999) / Westworld (HBO)', year: '1999' },
    ],
  },
  {
    id: 33, categoryId: 'existentiel', number: 'Existentiel 03', locked: true,
    title: 'Le Dernier Homme', subtitle: "Le dernier humain vivant est aussi le dernier à se souvenir. Cette responsabilité dure le temps de sa vie.",
    duration: '10 min', genre: 'Philosophie',
    fact: "Mary Shelley a écrit le premier roman post-apocalyptique en 1826. Une extinction progressive. Pas de monstre. Juste la disparition. Elle avait déjà tout compris sur ce qui nous ferait vraiment peur. On l'a à peine lue.",
    fearLevel: 2,
    triggerWarnings: ['Mort', 'Existentiel'],
    archive: [
      { title: 'The Last Man — domaine public', author: 'Mary Shelley', year: '1826', url: 'https://archive.org/details/lastman00shel' },
      { title: 'Archives Mary Shelley', author: 'British Library', year: '2023', url: 'https://www.bl.uk' },
      { title: 'Réf. Je suis une légende (2007) / Station Eleven (HBO Max)', year: '2007' },
    ],
  },
  {
    id: 34, categoryId: 'existentiel', number: 'Existentiel 04', locked: true,
    title: "L'Effet Sonder", subtitle: "Chaque personne que tu croises vit une vie aussi complexe que la tienne. Tu n'en sauras rien.",
    duration: '12 min', genre: 'Phénoménologie',
    fact: "Chaque personne que tu croises a une vie aussi dense que la tienne. Des angoisses, des souvenirs, des nuits qui n'en finissent pas. Tu le sais. Tu l'oublies dès que tu passes la porte. C'est peut-être mieux comme ça.",
    fearLevel: 1,
    triggerWarnings: ['Psychologie', 'Existentiel'],
    archive: [
      { title: 'The Dictionary of Obscure Sorrows', author: 'John Koenig — Simon & Schuster', year: '2021', url: 'https://www.simonandschuster.com' },
      { title: 'Sonder — vidéo originale', author: 'John Koenig — YouTube', year: '2012', url: 'https://www.youtube.com/c/dictionaryofobscuresorrows' },
      { title: 'Réf. Her (Spike Jonze, 2013) / Everything Everywhere All at Once (2022)', year: '2013' },
    ],
  },
  {
    id: 35, categoryId: 'existentiel', number: 'Existentiel 05', locked: true,
    title: "La Mort de l'Univers", subtitle: "Dans 10¹⁰⁰ ans, le dernier trou noir s'évapore. Il ne reste rien.",
    duration: '08 min', genre: 'Cosmologie',
    fact: "Dans suffisamment longtemps, les étoiles s'éteignent une à une. La matière se désintègre. Il ne reste rien. Pas même le vide. Les physiciens appellent ça la mort thermique. C'est la fin la plus probable. Et la plus silencieuse.",
    fearLevel: 2,
    triggerWarnings: ['Existentiel'],
    archive: [
      { title: 'The Fabric of the Cosmos', author: 'Brian Greene — Knopf', year: '2004', url: 'https://www.penguinrandomhouse.com' },
      { title: 'The Fate of the Universe', author: 'NASA Science', year: '2023', url: 'https://science.nasa.gov/universe' },
      { title: 'Réf. Avengers Endgame (2019) / Doctor Strange in the Multiverse of Madness', year: '2019' },
    ],
  },

  // ── Morbide ──
  {
    id: 41, categoryId: 'morbide', number: 'Morbide 01', locked: true,
    title: 'Ce que la Mort fait à ton Corps', subtitle: "Dans les 4 premières minutes, les cellules cérébrales commencent à mourir.",
    duration: '13 min', genre: 'Science forensique',
    fact: "Dans les 4 minutes qui suivent l'arrêt cardiaque, les cellules cérébrales commencent à mourir. Mais le cerveau, lui, reste actif encore un moment. Ce qu'il traite pendant ce temps, on ne sait pas exactement. Certains chercheurs préfèrent ne pas savoir.",
    fearLevel: 3,
    triggerWarnings: ['Mort', 'Corps'],
    archive: [
      { title: 'Stiff: The Curious Lives of Human Cadavers', author: 'Mary Roach — Norton', year: '2003', url: 'https://www.wwnorton.com' },
      { title: 'Postmortem Changes and Time of Death', author: 'Journal of Forensic Sciences', year: '2018', url: 'https://onlinelibrary.wiley.com/journal/15564029' },
      { title: 'Réf. Six Feet Under (HBO) / The Returned (Canal+)', year: '2001' },
    ],
  },
  {
    id: 42, categoryId: 'morbide', number: 'Morbide 02', locked: true,
    title: 'La Conscience après la Mort', subtitle: "2 000 patients. Certains ont décrit la salle de réanimation. Ils étaient cliniquement morts.",
    duration: '10 min', genre: 'Neuroscience',
    fact: "2 000 patients réanimés. Certains ont décrit avec précision ce qui s'est passé dans la salle pendant leur arrêt cardiaque. Des détails vérifiables. Que personne n'arrive vraiment à expliquer.",
    fearLevel: 2,
    triggerWarnings: ['Mort', 'Psychologie'],
    archive: [
      { title: 'AWARE Study', author: 'Sam Parnia et al. — Resuscitation Journal', year: '2014', url: 'https://www.resuscitationjournal.com' },
      { title: 'Consciousness Beyond Life', author: 'Pim van Lommel — HarperOne', year: '2010', url: 'https://www.harpercollins.com' },
      { title: 'Réf. Flatliners (1990) / The OA (Netflix)', year: '1990' },
    ],
  },
  {
    id: 43, categoryId: 'morbide', number: 'Morbide 03', locked: true,
    title: "Mourir dans l'Espace", subtitle: "Sans combinaison, inconscience en 15 secondes. Ton corps gonfle. Tu ne souffres probablement pas.",
    duration: '11 min', genre: 'Science spatiale',
    fact: "En cas d'exposition au vide spatial sans combinaison, tu as environ 15 secondes de conscience. Après, l'eau de ton corps commence à s'évaporer. La NASA a des données là-dessus. Elles viennent de quelque part.",
    fearLevel: 2,
    triggerWarnings: ['Mort'],
    archive: [
      { title: 'Physiological Effects of Space Vacuum Exposure', author: 'NASA Technical Report', year: '1965', url: 'https://ntrs.nasa.gov' },
      { title: 'Fundamentals of Space Medicine', author: 'Gilles Clément — Springer', year: '2011', url: 'https://link.springer.com' },
      { title: 'Réf. Gravity (2013) / The Martian (2015)', year: '2013' },
    ],
  },
  {
    id: 44, categoryId: 'morbide', number: 'Morbide 04', locked: true,
    title: 'Le Corps à −196°C', subtitle: "Des centaines de personnes cryogénisées. Aucune technologie pour les ranimer n'existe.",
    duration: '12 min', genre: 'Biologie extrême',
    fact: "Plus de 200 corps cryogénisés en ce moment à Scottsdale, Arizona. Ils attendent une technologie qui n'existe pas encore. Certains ont payé des centaines de milliers de dollars. La question c'est pas si c'est possible. C'est ce qui se passe si ça l'est.",
    fearLevel: 2,
    triggerWarnings: ['Mort'],
    archive: [
      { title: 'Rapports officiels et protocoles', author: 'Alcor Life Extension Foundation', year: '2023', url: 'https://www.alcor.org' },
      { title: 'The Prospect of Immortality — domaine public', author: 'Robert Ettinger', year: '1962', url: 'https://archive.org/details/prospectofimmort00etti' },
      { title: 'Réf. Futurama (Fox) / Passengers (2016)', year: '2016' },
    ],
  },
  {
    id: 45, categoryId: 'morbide', number: 'Morbide 05', locked: true,
    title: 'Les 6 Minutes après la Mort', subtitle: "Ranimés après 6 minutes. Expériences cohérentes et détaillées. La science n'a pas de modèle.",
    duration: '14 min', genre: 'NDE',
    fact: "L'étude van Lommel. 344 patients en arrêt cardiaque. 18% ont rapporté une expérience de mort imminente. Des tunnels, des lumières, des proches décédés. Pim van Lommel est cardiologue. Pas médium. Il a publié dans The Lancet. T'en penses quoi.",
    fearLevel: 3,
    triggerWarnings: ['Mort', 'Psychologie'],
    archive: [
      { title: 'Near-death experience in survivors of cardiac arrest', author: 'Pim van Lommel et al. — The Lancet', year: '2001', url: 'https://www.thelancet.com' },
      { title: 'AWARE Study — University of Southampton', author: 'Sam Parnia', year: '2014', url: 'https://www.southampton.ac.uk' },
      { title: 'Réf. The Discovery (Netflix 2017) / Hereafter (Clint Eastwood, 2010)', year: '2017' },
    ],
  },

  // ── Recommandations (no audio, all free) ──
  {
    id: 51, categoryId: 'recommandations', number: 'Reco 01', locked: false,
    title: 'Maxime Chattam — La Conjuration Primitive', subtitle: "Si tu aimes Abysso, tu aimeras ça.",
    duration: '', genre: '', isRecommendation: true,
    recommendationBody: "Il y a des livres qui te lisent en même temps que tu les lis. La Conjuration Primitive est de ceux-là. Des crimes partout en France. Sadiques, coordonnés, signés. Deux tueurs qui opèrent ensemble alors que tout dans leur profil dit qu'ils devraient être seuls. C'est ça qui fout le vertige dès le départ, pas la violence en elle-même, mais l'organisation derrière. Quelqu'un a planifié ça. Quelqu'un a trouvé quelqu'un d'autre qui pense pareil. Et ils se sont mis au travail.\n\nChattam construit son enquête lentement, avec des indices qui mènent nulle part, des pistes qui s'effondrent, et un criminologue qu'on va chercher parce qu'il a déjà regardé ce genre de chose en face. À un moment tu comprends pourquoi il avait arrêté.\n\nCe qui rend ce livre différent c'est ce qui arrive à la fin de la première partie. Je dirai pas ce que c'est. Mais c'est le genre de moment où tu poses le livre, tu regardes le mur, et tu reprends. Parce que t'as pas le choix. Et le final qui suit aurait pu facilement partir dans quelque chose de trop grand, trop dramatique. Il part pas. Il tient. Et c'est rare.\n\nLa Conjuration Primitive se lit trop vite. Tu te retrouves à 3h du matin sans avoir vu le temps passer. Et quand tu finis tu restes là avec cette pensée simple et un peu froide : deux personnes ont décidé de faire ça ensemble. Deux personnes se sont trouvées. C'est peut-être ça le plus dérangeant.",
  },
  {
    id: 52, categoryId: 'recommandations', number: 'Reco 02', locked: false,
    title: 'Bugonia', subtitle: "Si tu aimes Abysso, tu aimeras ça.",
    duration: '', genre: '', isRecommendation: true,
    recommendationBody: "Lanthimos filme l'humanité comme quelqu'un qui l'a regardée trop longtemps et qui a arrêté d'avoir de la tendresse pour elle. Bugonia c'est ça, un film qui te met en face de ce qu'on est vraiment. D'un côté des technocrates qui servent un système sans se poser de questions. De l'autre des complotistes convaincus d'avoir compris quelque chose que personne d'autre a vu. Et au milieu la nature, qui n'a rien demandé à personne et qu'on empoisonne quand même.\n\nCe qui est fort c'est que le film renvoie tout le monde dos à dos sans prendre parti. Personne est le héros. Personne a complètement tort. Il y a juste des gens enfermés dans leur logique qui avancent jusqu'au bout parce que c'est tout ce qu'ils savent faire. Emma Stone et Jesse Plemons portent ça avec quelque chose de déstabilisant, pas du cabotinage, une conviction froide qui met mal à l'aise exactement comme prévu.\n\nBugonia est clivant. Il est fait pour l'être. Il piétine parfois, il pousse trop loin parfois, mais c'est aussi pour ça qu'il reste. Les films qui restent dans leur couloir font rarement autant de dégâts.",
  },
  {
    id: 53, categoryId: 'recommandations', number: 'Reco 03', locked: false,
    title: 'Délivrance', subtitle: "Si tu aimes Abysso, tu aimeras ça.",
    duration: '', genre: '', isRecommendation: true,
    recommendationBody: "Tout le monde connaît la scène. Peu de gens savent que c'est un livre avant d'être un film, et que le livre fait aussi mal. Quatre hommes qui descendent une rivière en canoë un weekend. Une rivière qui va bientôt disparaître sous les eaux d'un barrage. Personne reconnait le terrain, personne sonde les rapides, personne prend vraiment au sérieux ce dans quoi ils s'engagent. Et c'est exactement ça le problème, cette arrogance tranquille de citadins qui pensent que la nature c'est un décor.\n\nDickey instille le malaise lentement. Un couteau dans les mains d'un gamin. Un marchandage qui tourne mal. Une végétation qui semble avaler les personnages à mesure qu'ils avancent. Et quand tout bascule ça bascule vraiment, sans filet, sans musique qui prévient, sans sortie propre. Les quatre deviennent à la fois proies et chasseurs et la rivière continue d'avancer quoi qu'il arrive.\n\nCe que Délivrance dit vraiment c'est que le retour à la nature que fantasment ces hommes n'existe pas. La nature a ses règles. Elle s'en fout des leurs. Et la confrontation entre les deux ne produit pas de la sagesse, elle produit de la violence et des choix qu'on peut pas défaire.\n\nLe film date de 1972. Le livre aussi. Rien n'a vieilli.",
  },
  {
    id: 54, categoryId: 'recommandations', number: 'Reco 04', locked: false,
    title: 'Resident Evil 7 & 8', subtitle: "Si tu aimes Abysso, tu aimeras ça.",
    duration: '', genre: '', isRecommendation: true,
    recommendationBody: "Le 7 t'a pris quelque chose. Il te l'a pas rendu. L'ambiance est glauque, humide, elle sue la mort à chaque couloir. Le bayou autour de la maison des Baker fait le travail avant même que t'entres, cette atmosphère marécageuse qui colle à tout, qui pourrit tout, qui donne l'impression que l'endroit existe depuis trop longtemps et qu'il devrait plus exister. À l'intérieur c'est pareil. Tout est crade, tout est pourri, tout a une histoire qu'on te donne pas entière. T'avances avec rien et la famille Baker a ses règles que tu comprends pas et qu'elle va pas t'expliquer.\n\nCe qui distingue le 7 c'est qu'il est petit. Intime. T'as nulle part où aller qui soit vraiment sûr. Le gameplay est lourd, les mouvements patauds, l'inventaire serré, mais c'est voulu, ça fait partie de la tension. Le scénario est bancal par moments mais le jeu arrive à te faire oublier ça parce que l'atmosphère prend le dessus sur tout le reste.\n\nLe 8 est plus grand, plus gothique, avec un village et un château et un bestiaire qui lorgne plus vers Underworld que vers Resident Evil classique. Moins oppressant que le 7, plus spectaculaire. Les deux se complètent mais le 7 reste celui qui fait mal différemment.\n\nLes deux se jouent casque sur les oreilles, lumières éteintes. C'est pas une suggestion.",
  },
  {
    id: 55, categoryId: 'recommandations', number: 'Reco 05', locked: false,
    title: 'Lovecraft', subtitle: "Si tu aimes Abysso, tu aimeras ça.",
    duration: '', genre: '', isRecommendation: true,
    recommendationBody: "Lovecraft écrit pas des histoires de monstres. Il écrit des histoires sur ce qui arrive quand quelqu'un regarde trop loin et comprend quelque chose que le cerveau humain était pas fait pour tenir. L'idée centrale de tout son univers c'est simple et elle dévaste tout ce qu'elle touche : l'humanité n'est pas au centre de quoi que ce soit. Il existe des entités si anciennes, si vastes, que nous croiser ne serait même pas un événement pour elles. On serait pas des ennemis. On serait pas des proies. On serait une curiosité minuscule dans quelque chose qui nous précède de millions d'années et qui continuera longtemps après qu'on soit partis.\n\nC'est ça la dissolution cosmique. Cette conscience froide que chercher à comprendre l'univers dans sa totalité mène pas à la sagesse, ça mène à la fracture. Les personnages de Lovecraft qui s'approchent trop près de cette vérité reviennent pas intacts. Certains reviennent pas du tout. Pas parce qu'ils ont été tués. Parce qu'ils ont vu quelque chose que l'esprit humain peut pas digérer sans se fissurer.\n\nCe qui est fort c'est que Lovecraft te convainc que cette peur est rationnelle. Si l'univers est aussi grand qu'on le dit, si le temps est aussi long, alors notre existence est tellement marginale que ça devrait nous terrifier bien plus qu'elle le fait. On continue quand même. Parce qu'on a pas le choix. Parce qu'on peut pas vraiment tenir cette pensée trop longtemps sans la reposer.\n\nUne fois que t'as lu Lovecraft tu regardes le ciel différemment. Pas avec de la peur exactement. Avec cette conscience tranquille et un peu froide que là-haut, quelque chose existe peut-être. Et que si c'est le cas, on compte pas.",
  },
]

export function getEpisodesByCategory(categoryId: CategoryId): Episode[] {
  return ALL_EPISODES.filter(ep => ep.categoryId === categoryId)
}
