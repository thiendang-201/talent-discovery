import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
    svgr(),
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
