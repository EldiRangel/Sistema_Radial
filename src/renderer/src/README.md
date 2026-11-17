# Código React

| Carpeta | Uso |
|---|---|
| `pages/` | Una página por sección de la aplicación. |
| `components/layout/` | Sidebar, header, contenedores y estructura general. |
| `components/cabina/` | Reproductor, controles, cola, reloj y cartwall. |
| `components/biblioteca/` | Tabla, filtros, importación y detalle de audios. |
| `components/parrilla/` | Calendario, bloques y asignación de elementos. |
| `components/campanas/` | Anunciantes, campañas y pautas. |
| `components/reportes/` | Tablas, filtros y exportación. |
| `components/ui/` | Botones, tarjetas, badges, modales y estados vacíos. |
| `hooks/` | `usePlayer`, `useLibrary`, `useSchedule`, `useCampaigns`, `useReports`, `useSettings`. |
| `audio/` | `AudioEngine`, `PlaybackQueue` y helpers de tiempo. |
| `lib/` | Cliente IPC, formato de fechas/duraciones y utilidades. |
| `styles/` | Variables, reset y estilos globales. |

## Convención

- Componentes en PascalCase.
- Hooks con prefijo `use`.
- Un componente por archivo.
- Los componentes de dominio no llaman a IPC directamente; usan hooks.
