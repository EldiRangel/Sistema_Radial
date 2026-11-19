/**
 * Playwright inyecta su propio loader para controlar `app.whenReady()`.
 * En Electron 45 el puerto DevTools se abre después de `app.ready`, así que el
 * loader original y Playwright se esperan mutuamente y el lanzamiento expira.
 *
 * Este shim conserva el único punto que Playwright necesita
 * (`globalThis.__playwright_run`) y deja que la aplicación arranque normal.
 */
globalThis.__playwright_run = async () => {}
