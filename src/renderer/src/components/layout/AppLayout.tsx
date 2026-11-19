import { Outlet, useLocation } from 'react-router-dom'
import { getPageMeta } from '../../lib/navigation'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppLayout() {
  const location = useLocation()
  const pageMeta = getPageMeta(location.pathname)

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Topbar title={pageMeta.label} description={pageMeta.description} />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
