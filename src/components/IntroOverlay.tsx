import { useEffect, useState } from 'react'

const KEY = 'intro_played'

export default function IntroOverlay({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'hold' | 'fly' | 'done'>('hold')

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) {
      onDone()
      setPhase('done')
      return
    }
    const t1 = setTimeout(() => setPhase('fly'), 800)
    const t2 = setTimeout(() => {
      sessionStorage.setItem(KEY, '1')
      onDone()
      setPhase('done')
    }, 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  if (phase === 'done') return null

  return (
    <div className={`intro-overlay${phase === 'fly' ? ' intro-fly' : ''}`} aria-hidden="true">
      <span className="intro-text">ABYSSO</span>
    </div>
  )
}
