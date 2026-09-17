// Build-time prerendering: after `vite build`, boot the built dist/ on a local
// preview server, visit each known static route in headless Chromium, wait for
// Framer Motion's mount animations to settle, and write the fully-rendered HTML
// to dist/<route>/index.html. Vercel serves an exact static-file match before
// falling through to the SPA rewrite in vercel.json, so these become what
// non-JS crawlers (and first paint) see, while client-side navigation and the
// dynamic/backend-driven routes keep working exactly as before.
//
// Intentionally skips routes whose content comes from a live API call
// (/notice, /results/10-em, /results/10-gm, /results/12-commerce) — those stay
// pure client-side-rendered for now; see the plan doc for why.

import { preview } from 'vite'
import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')

const STATIC_ROUTES = [
  '/',
  '/about',
  '/about/management',
  '/about/message',
  '/academics',
  '/academics/kg',
  '/academics/primary',
  '/academics/higher-secondary',
  '/activities',
  '/co-curricular',
  '/competitive-exams',
  '/sports',
  '/results',
  '/gallery',
  '/alumni',
  '/transportation',
  '/stationery',
  '/inquiry',
  '/contact',
  '/privacy-policy',
]

const PORT = 4321

async function main() {
  const server = await preview({ root, preview: { port: PORT, strictPort: true } })
  const baseUrl = `http://localhost:${PORT}`

  const browser = await chromium.launch()
  const page = await browser.newPage()

  let ok = 0
  let failed = 0

  for (const route of STATIC_ROUTES) {
    try {
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle', timeout: 30000 })
      // Let Framer Motion's initial/whileInView animations settle so the
      // captured markup has final (not opacity:0) inline styles.
      await page.waitForTimeout(1200)

      const html = await page.content()
      // Vercel's `cleanUrls` resolves a request for /a/b to a flat file at
      // dist/a/b.html (not dist/a/b/index.html) — see vercel.json. "/" stays
      // dist/index.html, which the build already produces.
      const outFile = route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, `${route.slice(1)}.html`)
      await mkdir(path.dirname(outFile), { recursive: true })
      await writeFile(outFile, html, 'utf-8')

      console.log(`  prerendered  ${route}`)
      ok++
    } catch (err) {
      console.warn(`  SKIPPED  ${route} — ${err.message.split('\n')[0]}`)
      failed++
    }
  }

  await browser.close()
  await server.httpServer.close()

  console.log(`\nprerender done: ${ok} succeeded, ${failed} failed/skipped`)
  if (failed > 0 && ok === 0) {
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error('prerender failed:', err)
  process.exitCode = 1
})
