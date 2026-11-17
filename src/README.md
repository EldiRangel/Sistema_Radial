# Código fuente

El código se divide en tres contextos de Electron más una capa compartida:

| Carpeta | Contexto | Responsabilidad |
|---|---|---|
| `main/` | Proceso principal | Base de datos, archivos, IPC, servicios y protocolo de medios. |
| `preload/` | Puente | Expone una API segura a la interfaz con `contextBridge`. |
| `renderer/` | Interfaz | React, pantallas, componentes, hooks y motor de audio Web Audio. |
| `shared/` | Compartido | Tipos, constantes y contratos que cruzan contextos. |

## Regla de dependencias

```text
renderer  ->  preload  ->  main
    \                     /
     ->  shared  <-------/
```

- `shared` no importa código de `main`, `preload` ni `renderer`.
- `renderer` no importa código de `main`.
- `preload` solo expone funciones concretas; no contiene lógica de negocio.
- `main` no importa componentes de React.
