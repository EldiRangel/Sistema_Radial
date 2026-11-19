# RadioFlow

Sistema de Gestión de Emisión Radial y Continuidad Programática.

> **Estado actual:** Fase 1 — base técnica y shell de navegación.  
> Electron + Vite + React + TypeScript ya están configurados. La aplicación abre, navega entre las seis secciones y muestra pantallas placeholder. El motor de audio y el esquema de base de datos se implementan en la siguiente fase.

## Stack definido

| Capa | Tecnología |
|---|---|
| Aplicación de escritorio | Electron |
| Interfaz | React + TypeScript + Vite |
| Audio | Web Audio API (`AudioBufferSourceNode` + `GainNode`) |
| Base de datos | SQLite + `better-sqlite3` |
| ORM / consultas | Drizzle ORM |
| Pruebas unitarias | Vitest |
| Pruebas end-to-end | Playwright |
| Instalador | electron-builder |

## Cómo ejecutar

Requisitos: Node.js >= 22, npm y Windows 10/11.

```bash
npm install
npm run dev       # abre la aplicación en modo desarrollo
npm run build     # verifica tipos y genera la build de producción
npm test          # pruebas unitarias con Vitest
npm run test:e2e  # build + prueba de humo con Playwright
```

> `better-sqlite3` es una dependencia nativa. Antes de usar la base de datos
> desde Electron hay que ejecutar `npm run rebuild`.

### Scripts disponibles

| Script | Qué hace |
|---|---|
| `npm run dev` | Aplicación en desarrollo con recarga en caliente |
| `npm run build` | Typecheck + build de main, preload y renderer |
| `npm start` | Previsualiza la build de producción |
| `npm run typecheck` | Verifica TypeScript sin emitir archivos |
| `npm run lint` | ESLint sobre todo el repositorio |
| `npm run format` | Formatea con Prettier |
| `npm test` | Pruebas unitarias |
| `npm run test:e2e` | Build + E2E con Playwright y Electron |
| `npm run db:generate` | Genera migraciones de Drizzle |
| `npm run rebuild` | Recompila `better-sqlite3` para Electron |
| `npm run dist:win` | Genera el instalador de Windows |

## Estructura

La estructura completa, el propósito de cada carpeta y los archivos previstos están en:

- [`docs/STRUCTURE.md`](docs/STRUCTURE.md)

Resumen:

```text
src/
├─ main/       Proceso principal de Electron: base de datos, IPC, archivos y servicios.
├─ preload/    Puente seguro entre el proceso principal y la interfaz.
├─ renderer/   Aplicación React: cabina, biblioteca, parrilla, campañas y reportes.
└─ shared/     Tipos, constantes y contratos compartidos.

tests/
├─ unit/          Pruebas de lógica pura.
├─ integration/   Pruebas de base de datos y servicios.
└─ e2e/           Pruebas de la aplicación con Playwright.

docs/         Documentación, ADRs, diagramas y manuales.
drizzle/      Migraciones generadas por Drizzle Kit.
resources/    Audios de demostración, iconos y recursos del instalador.
build/        Recursos de empaquetado.
scripts/      Scripts de apoyo (seed, generación de audios, etc.).
```

## Equipo

| Persona | Rol |
|---|---|
| Eldi Rangel | Líder de producto, análisis y QA |
| Luis Urdaneta | Arquitectura de datos y UX de cabina |
| Luis Chirinos | Tech lead de audio/backend |
| Esteban Ceballos | Frontend, integración y automatización de pruebas |

## Documentos de trabajo

- [Plan de liderazgo y alcance MVP](Plan_RadioFlow_Liderazgo.md)
- [Asignación de tareas y requerimientos del MVP](docs/TAREAS_EQUIPO.md)
- [Encargos exactos por persona](docs/ENCARGOS.md)
- [Guía de contribución](CONTRIBUTING.md)
- [Estructura detallada](docs/STRUCTURE.md)

## Próximos pasos

1. Cerrar el ERD y el diccionario de datos (Luis Urdaneta).
2. Implementar el schema Drizzle, la migración y el seed.
3. Completar el spike de audio y el contrato del motor (Luis Chirinos).
4. Implementar Biblioteca y Parrilla con datos mock (Esteban).
5. Conectar el walking skeleton: parrilla, reproducción y registro en `play_log`.

## Nota sobre documentos locales

Los archivos `.docx` y las capturas personales no se versionan en este repositorio. El plan de trabajo está disponible en Markdown para que todo el equipo lo pueda leer y comentar.
