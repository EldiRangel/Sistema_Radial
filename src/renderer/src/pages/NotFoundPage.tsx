import { Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { Panel } from '../components/ui/Panel'

export function NotFoundPage() {
  return (
    <section className="page">
      <PageHeader
        eyebrow="Navegación"
        title="Página no encontrada"
        description="La ruta que buscas no existe dentro de RadioFlow."
      />

      <Panel title="Ruta inválida" subtitle="Verifica la dirección">
        <EmptyState
          icon={Compass}
          title="No encontramos esta pantalla"
          description="Vuelve a la cabina para continuar operando el sistema."
          action={
            <Link className="btn btn--primary" to="/cabina">
              Ir a la cabina
            </Link>
          }
        />
      </Panel>
    </section>
  )
}
