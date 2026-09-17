// Build-time prerendering: after `vite build`, render each known static route
// to an HTML string in pure Node (via react-dom/server, through Vite's SSR
// module loader so entry-server.jsx's JSX gets transformed) and write it to
// dist/<route>.html. Vercel's `cleanUrls` (see vercel.json) resolves a
// request for /a/b to that flat file before falling through to the SPA
// rewrite, so non-JS crawlers get real rendered content instead of the empty
// SPA shell, while client-side navigation is unaffected.
//
// Deliberately does NOT use a headless browser (no Playwright/Chromium) —
// that was tried first and failed in Vercel's build container (missing
// system libs for headless Chrome, exit code 127). Pure Node SSR has no such
// dependency and is faster.
//
// Intentionally skips routes whose content comes from a live API call
// (/notice, /results/10-em, /results/10-gm, /results/12-commerce) — those
// stay pure client-side-rendered; see the plan doc for why.

import { createServer } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
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

async function main() {
  // The unmodified build output — used as the HTML template for every route
  // (correct hashed <script>/<link> tags), read once before we start
  // overwriting dist/index.html for the "/" route.
  const template = await readFile(path.join(distDir, 'index.html'), 'utf-8')

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
  })

  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

  let ok = 0
  let failed = 0

  for (const route of STATIC_ROUTES) {
    try {
      const { appHtml, headHtml } = render(route)

      const html = template
        .replace(/<title>.*?<\/title>/s, headHtml)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

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

  await vite.close()

  console.log(`\nprerender done: ${ok} succeeded, ${failed} failed/skipped`)
  if (failed > 0 && ok === 0) {
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error('prerender failed:', err)
  process.exitCode = 1
})
