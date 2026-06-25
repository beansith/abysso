interface BloodDropsProps {
  level: number
  size?: 'sm' | 'md'
}

export function BloodDrops({ level, size = 'md' }: BloodDropsProps) {
  if (!level || level <= 0) return null
  return (
    <span
      className={`ep-fear ep-fear--${size}`}
      aria-label={`Niveau de peur : ${level} sur 5`}
      title={`Niveau de peur : ${level}/5`}
    >
      {'🩸'.repeat(level)}
    </span>
  )
}

interface TriggerWarningProps {
  warnings: string[]
}

export function TriggerWarning({ warnings }: TriggerWarningProps) {
  if (!warnings || warnings.length === 0) return null
  return (
    <p className="ep-tw">
      <span className="ep-tw-label">TW</span>
      {' '}{warnings.join(' · ')}
    </p>
  )
}
