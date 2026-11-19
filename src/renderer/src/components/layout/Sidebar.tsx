import { Radio } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { APP_NAME } from '@shared/constants'
import { useAppInfo } from '../../hooks/useAppInfo'
import { NAV_ITEMS } from '../../lib/navigation'

export function Sidebar() {
  const appInfo = useAppInfo()

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand__mark">
          <Radio size={22} strokeWidth={2} />
        </div>
        <div>
          <strong>{APP_NAME}</strong>
          <span>Emisión radial</span>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label="Navegación principal">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-item ${isActive ? 'nav-item--active' : ''}`}
            >
              <span className="nav-item__icon">
                <Icon size={18} strokeWidth={1.9} />
              </span>
              <span className="nav-item__text">
                <strong>{item.label}</strong>
                <small>{item.description}</small>
              </span>
            </NavLink>
          )
        })}
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__status">
          <span className="status-dot" />
          <span>Fase 1 · Shell</span>
        </div>
        <div className="sidebar__meta">
          <span>v{appInfo?.version ?? '0.1.0'}</span>
          <span>{appInfo?.platform ?? 'win32'}</span>
        </div>
      </div>
    </aside>
  )
}
