import { AlertTriangle, BarChart3, CheckCircle2, FileDown, Megaphone, Radio } from 'lucide-react'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { Panel } from '../components/ui/Panel'
import { StatCard } from '../components/ui/StatCard'

export function ReportesPage() {
  return (
    <section className="page">
      <PageHeader
        eyebrow="Auditoría"
        title="Reportes"
        description="Consulta lo emitido, el cumplimiento comercial y las incidencias."
        actions={
          <button className="btn btn--ghost" type="button" disabled>
            <FileDown size={16} />
            Exportar CSV
          </button>
        }
      />

      <div className="stats-grid">
        <StatCard label="Emisiones" value="0" hint="Elementos registrados" icon={Radio} />
        <StatCard label="Cuñas emitidas" value="0" hint="Cumplimiento comercial" icon={Megaphone} />
        <StatCard label="Incidencias" value="0" hint="Errores o cortes" icon={AlertTriangle} />
        <StatCard label="Cumplimiento" value="0%" hint="Pauta del período" icon={CheckCircle2} />
      </div>

      <Panel title="Bitácora de emisión" subtitle="Lo programado vs. lo emitido">
        <EmptyState
          icon={BarChart3}
          title="Todavía no hay datos para reportar"
          description="Cuando el motor de audio registre emisiones, aquí aparecerán los totales y el detalle."
        />
      </Panel>
    </section>
  )
}
