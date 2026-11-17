# Preload

El preload es el único puente entre la interfaz y el proceso principal.

## Responsabilidades

- Exponer una API mínima con `contextBridge`.
- Encapsular los canales IPC.
- Definir los tipos de `window.radioflow`.
- No contener lógica de negocio.
- No exponer `ipcRenderer` completo ni `require` al renderer.

## Archivos previstos

| Archivo | Uso |
|---|---|
| `index.ts` | Implementación del puente. |
| `index.d.ts` | Declaración de tipos para el renderer. |
