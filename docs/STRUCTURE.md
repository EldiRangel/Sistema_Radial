# Estructura del proyecto

> Documento de referencia para el equipo. La estructura todavía no contiene código de aplicación; solo define dónde vivirá cada responsabilidad.

## 1. Principios de arquitectura

1. **El proceso principal manda:** la base de datos, el acceso a archivos y los servicios viven en `src/main`.
2. **La interfaz no habla con la base de datos:** React consume la API expuesta por `preload` y los handlers IPC.
3. **El audio no bloquea la UI:** el motor de audio y la cola se mantienen separados de las pantallas.
4. **Contratos compartidos:** los tipos que cruzan main/preload/renderer viven en `src/shared`.
5. **Una sola fuente de verdad:** la documentación y las decisiones están en el repositorio, no solo en el chat.
6. **Pruebas desde el inicio:** la lógica pura se prueba con Vitest y los flujos completos con Playwright.

## 2. Árbol actual

```text
.
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  └─ workflows/
├─ build/
│  └─ icons/
├─ docs/
│  ├─ adr/
│  ├─ diagrams/
│  └─ manuals/
├─ drizzle/
│  └─ meta/
├─ resources/
│  ├─ audio-demo/
│  └─ icons/
├─ scripts/
├─ src/
│  ├─ main/
│  │  ├─ audio/
│  │  ├─ db/
│  │  │  ├─ migrations/
│  │  │  ├─ schema/
│  │  │  └─ seed/
│  │  ├─ ipc/
│  │  ├─ services/
│  │  └─ utils/
│  ├─ preload/
│  ├─ renderer/
│  │  ├─ public/
│  │  └─ src/
│  │     ├─ assets/
│  │     ├─ audio/
│  │     ├─ components/
│  │     │  ├─ cabina/
│  │     │  ├─ biblioteca/
│  │     │  ├─ campanas/
│  │     │  ├─ layout/
│  │     │  ├─ parrilla/
│  │     │  ├─ reportes/
│  │     │  └─ ui/
│  │     ├─ hooks/
│  │     ├─ lib/
│  │     ├─ pages/
│  │     ├─ styles/
│  │     └─ types/
│  └─ shared/
│     ├─ constants/
│     ├─ schemas/
│     └─ types/
├─ tests/
│  ├─ e2e/
│  ├─ integration/
│  └─ unit/
├─ .editorconfig
├─ .gitignore
├─ .nvmrc
├─ CONTRIBUTING.md
├─ package.json
├─ Plan_RadioFlow_Liderazgo.md
└─ README.md
```

## 3. Archivos previstos por carpeta

### Raíz

| Archivo | Responsabilidad |
|---|---|
| `package.json` | Metadatos, dependencias y scripts del proyecto. |
| `electron.vite.config.ts` | Configuración de Electron + Vite para main, preload y renderer. |
| `electron-builder.yml` | Configuración del instalador de Windows. |
| `drizzle.config.ts` | Configuración de Drizzle Kit y migraciones. |
| `tsconfig.json`, `tsconfig.node.json`, `tsconfig.web.json` | Configuración de TypeScript por contexto. |
| `vitest.config.ts` | Configuración de pruebas unitarias. |
| `playwright.config.ts` | Configuración de pruebas end-to-end. |
| `.env.example` | Variables de entorno de ejemplo, si se necesitan. |

### `src/main/`

| Archivo / carpeta | Responsabilidad |
|---|---|
| `index.ts` | Punto de entrada del proceso principal de Electron. |
| `audio/` | Servicio de audio del proceso principal si se necesita (protocolo de medios, dispositivos). |
| `db/client.ts` | Conexión a SQLite, configuración de WAL y creación del cliente Drizzle. |
| `db/schema.ts` | Definición de tablas y relaciones. |
| `db/seed.ts` | Datos iniciales: estación, configuración, programas y audios demo. |
| `db/migrations/` | Migraciones SQL generadas por Drizzle Kit. |
| `ipc/` | Handlers de comunicación con el renderer. |
| `services/` | Lógica de negocio: parrilla, campañas, reportes, recuperación. |
| `utils/` | Utilidades de fechas, archivos y validación. |

### `src/preload/`

| Archivo | Responsabilidad |
|---|---|
| `index.ts` | Expone una API segura con `contextBridge`. |
| `index.d.ts` | Tipos de la API disponible en `window.radioflow`. |

### `src/renderer/`

| Archivo / carpeta | Responsabilidad |
|---|---|
| `index.html` | Documento base de la interfaz. |
| `src/main.tsx` | Punto de entrada de React. |
| `src/App.tsx` | Composición de rutas y layout. |
| `src/pages/` | Pantallas: Cabina, Biblioteca, Parrilla, Campañas, Reportes y Configuración. |
| `src/components/layout/` | Sidebar, header y estructura visual. |
| `src/components/cabina/` | Reproductor, cola, controles y cartwall. |
| `src/components/biblioteca/` | Tabla, filtros e importación de audios. |
| `src/components/parrilla/` | Bloques, calendario y validaciones. |
| `src/components/campanas/` | Anunciantes, campañas y pautas. |
| `src/components/reportes/` | Tablas, filtros y exportación. |
| `src/components/ui/` | Botones, tarjetas, badges, modales y estados vacíos. |
| `src/audio/` | Motor Web Audio, cola de reproducción y utilidades de tiempo. |
| `src/hooks/` | Hooks de datos y estado de la aplicación. |
| `src/lib/` | Cliente IPC, formateadores y helpers. |
| `src/styles/` | Variables CSS y estilos globales. |
| `src/types/` | Tipos propios del renderer. |

### `src/shared/`

| Archivo / carpeta | Responsabilidad |
|---|---|
| `types/` | Entidades y DTOs compartidos. |
| `constants/` | Canales IPC, estados y valores por defecto. |
| `schemas/` | Validaciones compartidas de entrada. |

### `tests/`

| Carpeta | Responsabilidad |
|---|---|
| `unit/` | Funciones puras: cola, reglas, formateo, validaciones. |
| `integration/` | Base de datos, migraciones y servicios. |
| `e2e/` | Flujos completos con Playwright y Electron. |

### `docs/`

| Carpeta | Responsabilidad |
|---|---|
| `adr/` | Decisiones de arquitectura. |
| `diagrams/` | Diagramas UML, arquitectura y modelo de datos. |
| `manuals/` | Manual de usuario y guía de instalación. |
| `STRUCTURE.md` | Este documento. |

### Otras carpetas

| Carpeta | Responsabilidad |
|---|---|
| `drizzle/` | Migraciones generadas por Drizzle Kit y su journal. |
| `resources/` | Audios demo, iconos y recursos que no son código. |
| `build/` | Iconos y recursos del instalador. |
| `scripts/` | Scripts de apoyo: seed, generación de audios, verificación. |
| `.github/` | Plantillas de issues/PR y workflows de CI. |

## 4. Convenciones de nombres

| Tipo | Convención | Ejemplo |
|---|---|---|
| Componentes React | PascalCase | `NowPlaying.tsx` |
| Hooks | camelCase con prefijo `use` | `usePlayer.ts` |
| Servicios | camelCase con sufijo `Service` | `playbackService.ts` |
| Tipos e interfaces | PascalCase | `MediaItem` |
| Constantes | UPPER_SNAKE_CASE | `IPC_CHANNELS` |
| Tablas SQL | snake_case plural | `play_log` |
| Archivos de prueba | `*.test.ts` / `*.spec.ts` | `queue.test.ts` |

## 5. Responsables por área

| Área | Responsable principal | Apoyo |
|---|---|---|
| Requisitos, QA y documentación | Eldi Rangel | Todo el equipo |
| Base de datos, migraciones y UX | Luis Urdaneta | Luis Chirinos |
| Motor de audio, scheduler y backend | Luis Chirinos | Luis Urdaneta |
| Frontend, integración y E2E | Esteban Ceballos | Eldi Rangel |

## 6. Orden de implementación

1. Configuración base: `package.json`, TypeScript, Electron/Vite, lint y formato.
2. Ventana de Electron + React vacía.
3. SQLite + Drizzle + primera migración.
4. Protocolo de medios y spike de audio.
5. Biblioteca y parrilla.
6. Cola, crossfade y cabina.
7. Campañas, log y reportes.
8. Recuperación, configuración, pruebas y empaquetado.
