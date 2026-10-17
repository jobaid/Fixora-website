import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/marketing/',
  server: {
    port: 5174,
    proxy: {
      '/api': 'http://localhost:8082',
    },
  },
  build: { outDir: 'dist' },
})
