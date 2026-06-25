import { useState, useRef, useEffect } from 'react'
import { useUser, useClerk } from '@clerk/clerk-react'
import AbyssoApp from './modes/AbyssoApp'
import OnboardingFlow from './components/OnboardingFlow'
import './modes/modes.css'
import './modes/shared.css'
import './modes/clinique.css'
import './modes/surveillance.css'
import './modes/interference.css'
import './clerk-overrides.css'

function AuthArea() {
  const { isSignedIn, user, isLoaded } = useUser()
  const { openSignIn, signOut } = useClerk()
  if (!isLoaded) return <div className="auth-area" />
  if (isSignedIn && user) {
    return (
      <div className="auth-area">
        <span className="auth-name">{user.firstName}</span>
        <button className="auth-btn" onClick={() => signOut()}>Déco.</button>
      </div>
    )
  }
  return (
    <div className="auth-area">
      <button className="auth-btn" onClick={() => openSignIn()}>Connexion</button>
    </div>
  )
}

export default function App() {
  const { isSignedIn, user } = useUser()
  const [onboardingDone, setOnboardingDone] = useState(false)
  const needsOnboarding = isSignedIn && user && !user.unsafeMetadata?.onboardingComplete && !onboardingDone

  const ambientPlayedRef = useRef(false)

  // Son d'ambiance au montage (inchangé par rapport à l'ancienne version)
  useEffect(() => {
    if (ambientPlayedRef.current) return
    ambientPlayedRef.current = true
    const a = new Audio('/454705__lilmati__logotype-raw-intro-outro-trailer-03.wav')
    a.volume = 0.08
    a.play().catch(() => {})
    setTimeout(() => {
      let vol = 0.08
      const fade = setInterval(() => {
        vol = Math.max(0, vol - 0.008)
        a.volume = vol
        if (vol <= 0) { a.pause(); clearInterval(fade) }
      }, 50)
    }, 2000)
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <AbyssoApp authSlot={<AuthArea />} />

      {needsOnboarding && (
        <OnboardingFlow onComplete={() => setOnboardingDone(true)} />
      )}
    </>
  )
}
