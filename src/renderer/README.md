# Renderer

Aplicación React que corre dentro de Electron.

## Estructura

| Carpeta | Uso |
|---|---|
| `src/pages/` | Pantallas principales: Cabina, Biblioteca, Parrilla, Campañas, Reportes y Configuración. |
| `src/components/` | Componentes organizados por dominio y componentes UI reutilizables. |
| `src/audio/` | Motor Web Audio, cola de reproducción y utilidades de tiempo. |
| `src/hooks/` | Hooks de datos, estado y efectos. |
| `src/lib/` | Cliente IPC, formateadores y helpers. |
| `src/styles/` | Variables CSS, estilos globales y utilidades visuales. |
| `src/types/` | Tipos exclusivos del renderer. |
| `src/assets/` | Imágenes, fuentes y recursos estáticos. |

## Reglas

- No acceder a Node.js ni a la base de datos directamente.
- Toda comunicación con el proceso principal pasa por `window.radioflow`.
- El motor de audio no debe bloquear la interfaz.
- Las pantallas no contienen reglas de negocio complejas; esas viven en los servicios.
