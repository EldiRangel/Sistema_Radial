import { CalendarDays, CalendarPlus, CheckCircle2, LayoutGrid, ShieldAlert } from 'lucide-react'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { Panel } from '../components/ui/Panel'
import { StatCard } from '../components/ui/StatCard'

const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

export function ParrillaPage() {
  return (
    <section className="page">
      <PageHeader
        eyebrow="Programación"
        title="Parrilla"
        description="Organiza los bloques, horarios y programas de la emisora."
        actions={
          <button className="btn btn--primary" type="button" disabled>
            <CalendarPlus size={16} />
            Nueva parrilla
          </button>
        }
      />

      <div className="stats-grid stats-grid--three">
        <StatCard label="Bloques" value="0" hint="En la semana actual" icon={LayoutGrid} />
        <StatCard label="Publicados" value="0" hint="Listos para emitir" icon={CheckCircle2} />
        <StatCard label="Conflictos" value="0" hint="Solapamientos o huecos" icon={ShieldAlert} />
      </div>

      <Panel title="Vista semanal" subtitle="Lunes a domingo">
        <div className="week-strip" aria-label="Días de la semana">
          {weekDays.map((day, index) => (
            <div
              key={day}
              className={`week-strip__day ${index === 1 ? 'week-strip__day--active' : ''}`}
            >
              <span>{day}</span>
              <strong>{17 + index}</strong>
            </div>
          ))}
        </div>

        <EmptyState
          icon={CalendarDays}
          title="No hay bloques programados"
          description="La creación de bloques y la asignación de audios se habilitarán en la siguiente fase."
          action={
            <button className="btn btn--primary" type="button" disabled>
              <CalendarPlus size={16} />
              Crear primer bloque
            </button>
          }
        />
      </Panel>
    </section>
  )
}
