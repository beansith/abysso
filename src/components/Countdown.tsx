import { useState, useEffect } from 'react'

const TARGET_DAYS = [0, 3, 5] // Dimanche, Mercredi, Vendredi

function getNextTarget(): Date {
  const now = new Date()
  let nearest: Date | null = null

  for (const day of TARGET_DAYS) {
    const candidate = new Date(now)
    candidate.setHours(21, 0, 0, 0)
    let daysAhead = (day - now.getDay() + 7) % 7
    if (daysAhead === 0 && now >= candidate) daysAhead = 7
    candidate.setDate(candidate.getDate() + daysAhead)
    if (!nearest || candidate < nearest) nearest = candidate
  }

  return nearest!
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function formatDiff(ms: number): string {
  if (ms <= 0) return 'maintenant'
  const total = Math.floor(ms / 1000)
  const days  = Math.floor(total / 86400)
  const hours = Math.floor((total % 86400) / 3600)
  const mins  = Math.floor((total % 3600) / 60)
  const secs  = total % 60
  const parts: string[] = []
  if (days > 0)  parts.push(`${days}j`)
  if (hours > 0) parts.push(`${hours}h`)
  parts.push(`${mins}min`)
  parts.push(`${pad(secs)}s`)
  return `dans\u00a0${parts.join('\u00a0')}`
}

export default function Countdown() {
  const [label, setLabel] = useState(() => formatDiff(getNextTarget().getTime() - Date.now()))

  useEffect(() => {
    const tick = () => setLabel(formatDiff(getNextTarget().getTime() - Date.now()))
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="countdown-block">
      <p className="countdown-label">Prochain épisode</p>
      <p className="countdown-timer">{label}</p>
      <p className="countdown-sub">Chaque mercredi, vendredi et dimanche à 21h.</p>
    </div>
  )
}
