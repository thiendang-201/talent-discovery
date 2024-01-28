import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'
import { createRequire } from 'node:module'
import million from 'million/compiler'

import { defineConfig, normalizePath } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import shimReactPdf from 'vite-plugin-shim-react-pdf'

// https://vitejs.dev/config/

const require = createRequire(import.meta.url)
const cMapsDir = normalizePath(
  path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps')
)

export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
    svgr(),
    viteStaticCopy({
      targets: [
        {
          src: cMapsDir,
          dest: '',
        },
      ],
    }),
    shimReactPdf(),
  ],
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@theme': path.resolve(__dirname, './src/theme/index.ts'),
      '@layout': path.resolve(__dirname, './src/layout/index.ts'),
      '@routes': path.resolve(__dirname, './src/routes/index.ts'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@illustrations': path.resolve(__dirname, 'src/assets/illustrations'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
