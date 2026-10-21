import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev runs at http://localhost:5174/ (clean root).
// Default base is '/'. Override with VITE_BASE at build time if the site must
// be served under a sub-path.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  server: {
    port: 5174,
    proxy: {
      // Dev proxies /api → the deployed Fixora backend behind nginx.
      // Set VITE_API_TARGET=http://localhost:8082 to hit a local Go backend.
      '/api': {
        target: process.env.VITE_API_TARGET || 'https://www.fixoraerp.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  build: { outDir: 'dist' },
}))
