# RadioFlow

Sistema de Gestión de Emisión Radial y Continuidad Programática.

> **Estado actual:** Fase 1 — estructura del proyecto.  
> Todavía no hay código de aplicación. Este repositorio contiene la organización de carpetas, la documentación base y las convenciones de trabajo del equipo.

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
- [Guía de contribución](CONTRIBUTING.md)
- [Estructura detallada](docs/STRUCTURE.md)

## Próximos pasos

1. Aprobar la estructura y el alcance MVP.
2. Crear el `package.json` con dependencias y scripts.
3. Configurar Electron + Vite + React + TypeScript.
4. Configurar SQLite, Drizzle y la primera migración.
5. Implementar el spike de audio de la semana 1.

## Nota sobre documentos locales

Los archivos `.docx` y las capturas personales no se versionan en este repositorio. El plan de trabajo está disponible en Markdown para que todo el equipo lo pueda leer y comentar.
