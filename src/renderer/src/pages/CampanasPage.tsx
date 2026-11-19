import { AudioLines, Megaphone, Plus, Users } from 'lucide-react'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { Panel } from '../components/ui/Panel'
import { StatCard } from '../components/ui/StatCard'

export function CampanasPage() {
  return (
    <section className="page">
      <PageHeader
        eyebrow="Comercial"
        title="Campañas y pauta"
        description="Gestiona anunciantes, cuñas, vigencias y reglas de emisión."
        actions={
          <button className="btn btn--primary" type="button" disabled>
            <Plus size={16} />
            Nueva campaña
          </button>
        }
      />

      <div className="stats-grid stats-grid--three">
        <StatCard label="Anunciantes" value="0" hint="Registrados" icon={Users} />
        <StatCard label="Campañas activas" value="0" hint="Dentro de vigencia" icon={Megaphone} />
        <StatCard label="Cuñas" value="0" hint="Asociadas a campañas" icon={AudioLines} />
      </div>

      <Panel title="Campañas" subtitle="Vigencia y prioridad">
        <EmptyState
          icon={Megaphone}
          title="No hay campañas registradas"
          description="Cada campaña tendrá anunciante, vigencia, cuñas y reglas de pauta."
          action={
            <button className="btn btn--primary" type="button" disabled>
              <Plus size={16} />
              Crear primera campaña
            </button>
          }
        />
      </Panel>
    </section>
  )
}
