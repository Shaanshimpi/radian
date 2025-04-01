import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    allowedHosts: ['f79748a7-13e0-411b-b6e5-305d75e56894-00-1ss45ui1eplqh.pike.replit.dev']
  }
})
