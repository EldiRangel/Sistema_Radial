# Pruebas

| Carpeta | Herramienta | Qué se prueba |
|---|---|---|
| `unit/` | Vitest | Funciones puras: cola, reglas de pauta, formateo, validaciones. |
| `integration/` | Vitest | SQLite, migraciones, servicios y handlers IPC. |
| `e2e/` | Playwright | Flujos completos de la aplicación Electron. |

## Flujos E2E prioritarios

1. Abrir la aplicación y navegar entre secciones.
2. Importar un audio y verlo en la biblioteca.
3. Crear un bloque de parrilla y asignar un elemento.
4. Emitir un elemento, ver el estado y registrar el log.
5. Interrumpir con en vivo y reanudar.
6. Generar un reporte y exportarlo.
7. Simular un archivo faltante y verificar la incidencia.

## Regla

Ninguna funcionalidad se considera terminada sin al menos una prueba automatizada o un caso manual documentado.
