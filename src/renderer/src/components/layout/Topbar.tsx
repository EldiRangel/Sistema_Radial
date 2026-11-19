import { formatClock } from '@shared/utils/format'
import { useClock } from '../../hooks/useClock'
import { StatusBadge } from '../ui/StatusBadge'

interface TopbarProps {
  title: string
  description: string
}

export function Topbar({ title, description }: TopbarProps) {
  const now = useClock()
  const dateLabel = new Intl.DateTimeFormat('es-VE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }).format(now)

  return (
    <header className="topbar">
      <div className="topbar__title">
        <span className="topbar__breadcrumb">RadioFlow / {title}</span>
        <strong>{description}</strong>
      </div>

      <div className="topbar__meta">
        <div className="topbar__clock">
          <span>{dateLabel}</span>
          <strong>{formatClock(now)}</strong>
        </div>
        <StatusBadge tone="neutral">
          <span className="status-dot status-dot--muted" />
          Fuera del aire
        </StatusBadge>
      </div>
    </header>
  )
}
