import { html } from 'hono/html'
import { jsxRenderer } from 'hono/jsx-renderer'

const jsPath = () => import.meta.env.PROD ? "/static/client.js" : "/src/client.ts"
const stylePath = () => import.meta.env.PROD ? html`<link href="/static/style.css" rel="stylesheet" />` : null

export const renderer = jsxRenderer(({ children, title }) => {
  return html`
    <html>
      <head>
        <script type='module' src=${jsPath()}></script>
        ${stylePath()}
        <title>${title}</title>
      </head>
      <body>
        <main>
          ${children}
        </main>
      </body>
    </html>
  `
})
