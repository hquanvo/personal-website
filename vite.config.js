import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base:"/personal-website",
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
