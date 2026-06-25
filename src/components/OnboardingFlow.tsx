import { useState } from 'react'
import { useUser } from '@clerk/clerk-react'

const QUESTIONS = [
  {
    q: "Tu entends un bruit la nuit dans la maison. Quelle est ta première pensée ?",
    options: [
      "C'est le bâtiment qui se dilate. Rien d'autre.",
      "Je fais semblant de dormir.",
      "Je vérifie. Je préfère savoir.",
      "Je sais que c'est rien. Mais je me lève pas quand même.",
    ],
  },
  {
    q: "Quelqu'un te dit qu'il a vu quelque chose dans un miroir. Tu penses quoi ?",
    options: [
      "Son cerveau qui joue des tours. Explication simple.",
      "Je l'écoute. Sans commentaire.",
      "Je veux les détails exacts.",
      "J'aurais pas posé la question.",
    ],
  },
  {
    q: "Juste avant de t'endormir, tu penses à quoi ?",
    options: [
      "À rien. Je dors vite.",
      "À des choses que j'aurais dû dire.",
      "À ce qui pourrait arriver.",
      "À des questions sans réponse. Souvent les mêmes.",
    ],
  },
  {
    q: "Forêt dense. 3h du matin. Pas de réseau. Seul·e. Tu te sens comment ?",
    options: [
      "À l'aise. J'aime le silence.",
      "Prudent·e. Pas paniqué·e.",
      "Mal à l'aise. Je rentrerais.",
      "Je sais pas. Je n'y suis jamais allé·e exprès.",
    ],
  },
  {
    q: "Un document classifié devient public. Il contient quelque chose d'impossible à expliquer. Tu fais quoi ?",
    options: [
      "Je lis tout. Plusieurs fois.",
      "Je lis, je referme, je passe à autre chose.",
      "Je partage. Les gens méritent de savoir.",
      "Je préférerais ne pas avoir vu.",
    ],
  },
  {
    q: "Tu apprends que tu as 6 mois à vivre. Qu'est-ce qui change vraiment ?",
    options: [
      "Tout. Je recommence à zéro.",
      "Rien. Je continue comme avant.",
      "Je dis les choses que j'ai jamais dites.",
      "Je cherche à comprendre pourquoi. Jusqu'au bout.",
    ],
  },
  {
    q: "Un inconnu dans le train te fixe pendant 10 minutes. Tu fais quoi ?",
    options: [
      "Je soutiens le regard.",
      "Je change de place.",
      "Je l'ignore. Il existe pas.",
      "Je me demande ce qu'il sait.",
    ],
  },
  {
    q: "On prouve scientifiquement que la conscience survit à la mort. Ta réaction ?",
    options: [
      "Soulagement immédiat.",
      "Inquiétude. Ça dépend ce qui suit.",
      "Je veux voir les données brutes.",
      "Je l'avais toujours senti. Sans pouvoir l'expliquer.",
    ],
  },
  {
    q: "Tu trouves une pièce dans ta maison que tu n'avais jamais remarquée. Elle est vide. Tu entres ?",
    options: [
      "Oui, sans hésiter.",
      "Oui, mais je laisse la porte ouverte.",
      "Non. Il y a des choses qu'on n'est pas censé trouver.",
      "Je cherche d'abord comment elle est apparue.",
    ],
  },
  {
    q: "En 2003, Nick Bostrom a calculé que si une seule civilisation avait survécu assez longtemps pour créer des simulations — nous vivons presque certainement dans l'une d'elles. La probabilité dépasse 99%. Ce qui veut dire que quelqu'un, quelque part, peut éteindre tout ça. Tu fais quoi avec cette information ?",
    options: [
      "Je l'accepte. Ça change rien à ma journée.",
      "Je refuse d'y penser. C'est trop.",
      "Je trouve ça libérateur bizarrement.",
      "Je l'avais déjà envisagé. Seul. La nuit.",
    ],
  },
]

type Step = 'profile' | 'questionnaire' | 'ending'

export default function OnboardingFlow({ onComplete }: { onComplete: () => void }) {
  const { user } = useUser()
  const [step, setStep]     = useState<Step>('profile')
  const [qIndex, setQIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [name, setName]     = useState(user?.firstName ?? '')
  const [city, setCity]     = useState('')
  const [savedCity, setSavedCity] = useState('')

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !city.trim()) return
    setSaving(true)
    try {
      await user?.update({ firstName: name.trim(), unsafeMetadata: { city: city.trim() } })
      setSavedCity(city.trim())
      setStep('questionnaire')
    } finally {
      setSaving(false)
    }
  }

  const handleAnswer = async () => {
    if (qIndex < QUESTIONS.length - 1) {
      setFading(true)
      setTimeout(() => { setQIndex(i => i + 1); setFading(false) }, 280)
    } else {
      setStep('ending')
      await user?.update({ unsafeMetadata: { city: savedCity, onboardingComplete: true } })
      setTimeout(onComplete, 2400)
    }
  }

  if (step === 'profile') {
    return (
      <div className="onboarding-overlay">
        <p className="onboarding-eyebrow">Avant de plonger.</p>
        <h2 className="onboarding-title">Qui es-tu ?</h2>
        <form className="onboarding-form" onSubmit={handleProfileSubmit}>
          <div className="onboarding-field">
            <label className="onboarding-label">Prénom</label>
            <input
              className="onboarding-input"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Ton prénom"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="onboarding-field">
            <label className="onboarding-label">Ville</label>
            <input
              className="onboarding-input"
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Ta ville"
              autoComplete="address-level2"
              required
            />
          </div>
          <button
            className="onboarding-submit"
            type="submit"
            disabled={saving || !name.trim() || !city.trim()}
          >
            {saving ? 'Un instant…' : 'Continuer →'}
          </button>
        </form>
      </div>
    )
  }

  if (step === 'questionnaire') {
    const q = QUESTIONS[qIndex]
    return (
      <div className="onboarding-overlay">
        <p className="q-progress">
          <span className="q-progress-fill" style={{ width: `${((qIndex + 1) / QUESTIONS.length) * 100}%` }} />
        </p>
        <div className={`q-content${fading ? ' q-fading' : ''}`}>
          <p className="q-index">{qIndex + 1} / {QUESTIONS.length}</p>
          <p className="q-text">{q.q}</p>
          <div className="q-options">
            {q.options.map((opt, i) => (
              <button key={i} className="q-option" onClick={handleAnswer}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="onboarding-overlay">
      <p className="onboarding-end-text">On sait ce qu'il te faut.</p>
    </div>
  )
}
