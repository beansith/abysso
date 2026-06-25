import { useState, useEffect } from 'react'

function getRange(): [number, number] {
  const h = new Date().getHours()
  if (h >= 18 && h < 23) return [18, 31]  // soirée
  if (h >= 23 || h < 6)  return [8, 14]   // nuit
  return [12, 20]                           // journée
}

function randomCount() {
  const [min, max] = getRange()
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function SocialCounter() {
  const [count, setCount] = useState(randomCount)

  useEffect(() => {
    const id = setInterval(() => setCount(randomCount()), 45000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="archive-stats-live">
      <span className="pulse-dot" aria-hidden="true">●</span> {count} PERSONNES PLONGENT EN CE MOMENT
    </span>
  )
}
