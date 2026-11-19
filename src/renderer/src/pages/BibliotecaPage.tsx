import { AlertTriangle, Clock3, Filter, Music2, Search, Upload } from 'lucide-react'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { Panel } from '../components/ui/Panel'
import { StatCard } from '../components/ui/StatCard'

export function BibliotecaPage() {
  return (
    <section className="page">
      <PageHeader
        eyebrow="Contenido"
        title="Biblioteca multimedia"
        description="Importa, clasifica y encuentra los audios de la emisora."
        actions={
          <button className="btn btn--primary" type="button" disabled>
            <Upload size={16} />
            Importar audio
          </button>
        }
      />

      <div className="stats-grid stats-grid--three">
        <StatCard label="Audios" value="0" hint="Pistas, cuñas y jingles" icon={Music2} />
        <StatCard label="Duración total" value="0:00" hint="Horas de contenido" icon={Clock3} />
        <StatCard
          label="Archivos faltantes"
          value="0"
          hint="Requieren atención"
          icon={AlertTriangle}
        />
      </div>

      <Panel title="Audios de la emisora" subtitle="Biblioteca local">
        <div className="toolbar">
          <label className="search-field">
            <Search size={16} />
            <input
              type="search"
              placeholder="Buscar por título, artista o género..."
              disabled
              aria-label="Buscar audios"
            />
          </label>
          <button className="btn btn--ghost" type="button" disabled>
            <Filter size={16} />
            Filtros
          </button>
        </div>

        <EmptyState
          icon={Music2}
          title="Aún no hay audios importados"
          description="La importación de MP3, WAV y OGG se conectará en la siguiente fase."
          action={
            <button className="btn btn--primary" type="button" disabled>
              <Upload size={16} />
              Importar el primer audio
            </button>
          }
        />
      </Panel>
    </section>
  )
}
