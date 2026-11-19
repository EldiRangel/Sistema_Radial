import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { BibliotecaPage } from './pages/BibliotecaPage'
import { CabinaPage } from './pages/CabinaPage'
import { CampanasPage } from './pages/CampanasPage'
import { ConfiguracionPage } from './pages/ConfiguracionPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ParrillaPage } from './pages/ParrillaPage'
import { ReportesPage } from './pages/ReportesPage'

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/cabina" replace />} />
        <Route path="/cabina" element={<CabinaPage />} />
        <Route path="/biblioteca" element={<BibliotecaPage />} />
        <Route path="/parrilla" element={<ParrillaPage />} />
        <Route path="/campanas" element={<CampanasPage />} />
        <Route path="/reportes" element={<ReportesPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
