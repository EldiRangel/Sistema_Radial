import {
  ClipboardList,
  Disc3,
  ListMusic,
  Mic,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Square
} from 'lucide-react'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { Panel } from '../components/ui/Panel'
import { StatusBadge } from '../components/ui/StatusBadge'

export function CabinaPage() {
  return (
    <section className="page">
      <PageHeader
        eyebrow="Operación"
        title="Cabina de emisión"
        description="Controla la continuidad, la cola y los eventos de alta prioridad."
        actions={<StatusBadge tone="warning">Fase 1 · Shell</StatusBadge>}
      />

      <div className="booth-grid">
        <Panel
          title="Ahora al aire"
          subtitle="Reproductor principal"
          actions={<StatusBadge tone="neutral">Detenido</StatusBadge>}
        >
          <div className="now-playing">
            <div className="now-playing__cover">
              <Disc3 size={42} strokeWidth={1.4} />
            </div>
            <div className="now-playing__info">
              <span className="eyebrow">Elemento actual</span>
              <h3>Sin elemento en reproducción</h3>
              <p>El motor de audio se conectará en la siguiente fase.</p>
            </div>
          </div>

          <div className="progress-bar" aria-hidden="true">
            <span style={{ width: '0%' }} />
          </div>
          <div className="time-row">
            <span>00:00</span>
            <span>-00:00</span>
          </div>

          <div className="transport" aria-label="Controles de reproducción">
            <button className="icon-button" type="button" disabled aria-label="Anterior">
              <SkipBack size={19} />
            </button>
            <button
              className="icon-button icon-button--primary"
              type="button"
              disabled
              aria-label="Reproducir"
            >
              <Play size={20} />
            </button>
            <button className="icon-button" type="button" disabled aria-label="Pausar">
              <Pause size={19} />
            </button>
            <button className="icon-button" type="button" disabled aria-label="Detener">
              <Square size={18} />
            </button>
            <button className="icon-button" type="button" disabled aria-label="Siguiente">
              <SkipForward size={19} />
            </button>
          </div>

          <div className="live-strip">
            <button className="live-button" type="button" disabled>
              <Mic size={17} />
              EN VIVO
            </button>
            <p>La interrupción en vivo se habilitará con el motor de audio.</p>
          </div>
        </Panel>

        <Panel
          title="Cola de emisión"
          subtitle="Siguientes elementos"
          actions={<StatusBadge tone="neutral">0 elementos</StatusBadge>}
        >
          <EmptyState
            icon={ListMusic}
            title="La cola está vacía"
            description="Cuando exista una parrilla publicada, aquí aparecerán los siguientes elementos."
          />
        </Panel>
      </div>

      <Panel title="Bitácora reciente" subtitle="Eventos de emisión y auditoría">
        <EmptyState
          icon={ClipboardList}
          title="Todavía no hay eventos"
          description="Cada reproducción, interrupción e incidencia quedará registrada aquí."
        />
      </Panel>
    </section>
  )
}
