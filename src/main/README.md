# Proceso principal (`main`)

Aquí vive todo lo que necesita privilegios del sistema operativo:

- Ciclo de vida de Electron y creación de la ventana.
- Conexión a SQLite y migraciones con Drizzle.
- Acceso al sistema de archivos y biblioteca de audios.
- Protocolo seguro para servir archivos de audio al renderer.
- Handlers IPC y servicios de aplicación.
- Registro de emisión, reportes y respaldos.

## Carpetas

| Carpeta | Uso |
|---|---|
| `audio/` | Protocolo de medios, dispositivos y utilidades del lado principal. |
| `db/` | Cliente SQLite, esquema, migraciones y datos iniciales. |
| `ipc/` | Registro de canales IPC y validación de entradas. |
| `services/` | Lógica de negocio: parrilla, campañas, emisión, reportes y recuperación. |
| `utils/` | Fechas, archivos, hashing y helpers. |

## Regla

El proceso principal no debe contener componentes de React ni lógica de presentación.
