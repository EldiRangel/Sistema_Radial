# Workflows de CI

Aquí vivirán los workflows de GitHub Actions.

## CI previsto

| Workflow | Cuándo | Qué hace |
|---|---|---|
| `ci.yml` | Push y Pull Request | Instala dependencias, corre lint, typecheck, pruebas unitarias y build. |
| `release.yml` | Tag `v*` | Genera el instalador con electron-builder y lo adjunta al release. |

## Regla

Ningún PR se aprueba con el CI en rojo.
