import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: './src/client.ts',
          output: {
            entryFileNames: 'static/client.js',
            assetFileNames: `static/style.css`,
          },
        },
      },
    }
  } else {
    return {
      plugins: [
        build(),
        devServer({
          entry: 'src/index.tsx',
        }),
      ],
    }
  }
})
