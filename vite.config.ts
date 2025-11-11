import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './redirect-liso/',
  server: {
    port: 5090, 
    open: true,
  },
})
