import { join } from 'node:path'
import { createRequire } from 'node:module'
import { test, expect, _electron as electron } from '@playwright/test'
import type { ElectronApplication, Page } from '@playwright/test'

const require = createRequire(__filename)
const electronPath = require('electron') as string
const loaderShim = join(__dirname, 'electron-loader-shim.cjs')

let app: ElectronApplication
let page: Page

test.beforeAll(async () => {
  app = await electron.launch({
    executablePath: electronPath,
    args: ['-r', loaderShim, '.'],
    cwd: process.cwd()
  })

  page = await app.firstWindow()
  page.setDefaultTimeout(20_000)
  await page.waitForLoadState('domcontentloaded')
})

test.afterAll(async () => {
  await app?.close().catch(() => {})
})

test('abre en la cabina y navega entre las secciones', async () => {
  await expect(page).toHaveTitle('RadioFlow')
  await expect(page.getByRole('heading', { name: 'Cabina de emisión' })).toBeVisible()

  await page.getByRole('link', { name: /Biblioteca/ }).click()
  await expect(page.getByRole('heading', { name: 'Biblioteca multimedia' })).toBeVisible()

  await page.getByRole('link', { name: /Parrilla/ }).click()
  await expect(page.getByRole('heading', { name: 'Parrilla', exact: true })).toBeVisible()

  await page.getByRole('link', { name: /Campañas/ }).click()
  await expect(page.getByRole('heading', { name: 'Campañas y pauta' })).toBeVisible()

  await page.getByRole('link', { name: /Reportes/ }).click()
  await expect(page.getByRole('heading', { name: 'Reportes', exact: true })).toBeVisible()

  await page.getByRole('link', { name: /Configuración/ }).click()
  await expect(page.getByRole('heading', { name: 'Configuración', exact: true })).toBeVisible()

  await page.getByRole('link', { name: /Cabina/ }).click()
  await expect(page.getByRole('heading', { name: 'Cabina de emisión' })).toBeVisible()
})
