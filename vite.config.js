import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    force: true, // Force dependency optimization
    exclude: ['firebase'] // Exclude firebase from optimization if needed
  },
  plugins: [react()],
  base: '/portfolio_web/',
  assetsInclude: ['**/*.JPG']
  
})
