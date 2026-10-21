import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev runs at http://localhost:5174/ (clean root).
// Production build serves under /marketing/ on apps.2set.com.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/marketing/' : '/',
  server: {
    port: 5174,
    proxy: {
      '/api': 'http://localhost:8082',
    },
  },
  build: { outDir: 'dist' },
}))
