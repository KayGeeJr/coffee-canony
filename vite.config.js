import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://kaygeejr.github.io/coffee-canony/
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: isGitHubPages ? '/coffee-canony/' : '/',
})
