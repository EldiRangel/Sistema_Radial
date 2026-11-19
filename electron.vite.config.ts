import { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

// En desarrollo, Vite y el plugin de React inyectan scripts y estilos inline
// (Fast Refresh y HMR). En producción la CSP se mantiene estricta.
const DEV_CSP =
  "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob: file:; font-src 'self' data:; connect-src 'self' ws:"
const PROD_CSP =
  "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob: file:; font-src 'self' data:; connect-src 'self'"

function cspPlugin(): Plugin {
  return {
    name: 'radioflow:csp',
    transformIndexHtml: {
      order: 'pre',
      handler(html, context) {
        return html.replace('__RADIOFLOW_CSP__', context.server ? DEV_CSP : PROD_CSP)
      }
    }
  }
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@shared': resolve('src/shared')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@shared': resolve('src/shared')
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared')
      }
    },
    plugins: [react(), cspPlugin()]
  }
})
