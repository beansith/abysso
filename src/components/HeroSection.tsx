import type { RefObject } from 'react'

interface Props {
  contentRef: RefObject<HTMLDivElement | null>
}

export default function HeroSection({ contentRef }: Props) {
  const handleEnter = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" aria-label="Accueil">
      <h1 className="hero-title">ABYSSO</h1>
      <p className="hero-sub">Ce que tu vas entendre est réel.</p>
      <button className="hero-enter" onClick={handleEnter}>
        Entrer
      </button>
    </section>
  )
}
