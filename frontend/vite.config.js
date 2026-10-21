import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev runs at http://localhost:5174/ (clean root).
// Production build serves under /marketing/ on apps.2set.com.
// Default base is '/'. Override with VITE_BASE at build time if the site must
// be served under a sub-path (e.g. VITE_BASE=/marketing/ for apps.2set.com).
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  server: {
    port: 5174,
    proxy: {
      // Dev proxies /api → the deployed Fixora backend behind nginx.
      // nginx routes /marketing/api/* to the Go service on 127.0.0.1:8082.
      // Set VITE_API_TARGET=http://localhost:8082 locally (no /marketing)
      // if you prefer running the Go backend directly.
      '/api': {
        target: process.env.VITE_API_TARGET || 'https://apps.2set.com',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => (process.env.VITE_API_TARGET ? p : '/marketing' + p),
      },
    },
  },
  build: { outDir: 'dist' },
}))
