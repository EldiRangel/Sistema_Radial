import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string
  hint: string
  icon: LucideIcon
}

export function StatCard({ label, value, hint, icon: Icon }: StatCardProps) {
  return (
    <article className="stat-card">
      <div className="stat-card__icon">
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <span className="stat-card__label">{label}</span>
      <strong>{value}</strong>
      <span className="stat-card__hint">{hint}</span>
    </article>
  )
}
