# Código compartido (`shared`)

Tipos, constantes y contratos usados por más de un contexto.

| Carpeta | Uso |
|---|---|
| `types/` | Entidades, DTOs y tipos de la API. |
| `constants/` | Canales IPC, estados, roles y valores por defecto. |
| `schemas/` | Validaciones de entrada compartidas. |

## Regla

`shared` no debe importar Electron, React, SQLite ni código de `main`, `preload` o `renderer`. Debe ser TypeScript puro y portable.
