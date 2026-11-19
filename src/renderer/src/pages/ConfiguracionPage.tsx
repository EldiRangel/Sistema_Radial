import { PageHeader } from '../components/ui/PageHeader'
import { Panel } from '../components/ui/Panel'
import { StatusBadge } from '../components/ui/StatusBadge'
import { useAppInfo } from '../hooks/useAppInfo'

export function ConfiguracionPage() {
  const appInfo = useAppInfo()

  return (
    <section className="page">
      <PageHeader
        eyebrow="Sistema"
        title="Configuración"
        description="Ajustes de audio, biblioteca, respaldo y aplicación."
        actions={<StatusBadge tone="warning">Valores por defecto</StatusBadge>}
      />

      <div className="settings-grid">
        <Panel title="Audio" subtitle="Salida y transiciones">
          <div className="setting-row">
            <div>
              <strong>Dispositivo de salida</strong>
              <span>Salida predeterminada de Windows</span>
            </div>
            <span className="setting-value">Predeterminado</span>
          </div>
          <div className="setting-row">
            <div>
              <strong>Crossfade</strong>
              <span>Duración de la transición entre elementos</span>
            </div>
            <span className="setting-value">3 segundos</span>
          </div>
          <div className="setting-row">
            <div>
              <strong>Volumen maestro</strong>
              <span>Nivel de salida del motor de audio</span>
            </div>
            <span className="setting-value">80%</span>
          </div>
        </Panel>

        <Panel title="Biblioteca" subtitle="Archivos y respaldo">
          <div className="setting-row">
            <div>
              <strong>Carpeta de audios</strong>
              <span>Ubicación de la biblioteca local</span>
            </div>
            <StatusBadge tone="warning">Pendiente</StatusBadge>
          </div>
          <div className="setting-row">
            <div>
              <strong>Respaldo automático</strong>
              <span>Copia diaria de la base de datos</span>
            </div>
            <StatusBadge tone="neutral">Desactivado</StatusBadge>
          </div>
        </Panel>

        <Panel title="Aplicación" subtitle="Información del sistema">
          <div className="setting-row">
            <div>
              <strong>Versión</strong>
              <span>RadioFlow Desktop</span>
            </div>
            <span className="setting-value">{appInfo?.version ?? '0.1.0'}</span>
          </div>
          <div className="setting-row">
            <div>
              <strong>Plataforma</strong>
              <span>Entorno de ejecución</span>
            </div>
            <span className="setting-value">{appInfo?.platform ?? 'win32'}</span>
          </div>
          <div className="setting-row">
            <div>
              <strong>Modo</strong>
              <span>Desarrollo o aplicación instalada</span>
            </div>
            <span className="setting-value">
              {appInfo?.isPackaged ? 'Producción' : 'Desarrollo'}
            </span>
          </div>
        </Panel>
      </div>
    </section>
  )
}
