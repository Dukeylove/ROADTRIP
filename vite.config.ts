import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // BASE_PATH is provided by GitHub Actions (e.g. "/repo-name/")
  base: process.env.BASE_PATH || '/',
})
