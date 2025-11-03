import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necesario para que los assets funcionen al desplegar en GitHub Pages.
  base: '/Liliana_Tapia_PFY2202_Semana2/',
})
