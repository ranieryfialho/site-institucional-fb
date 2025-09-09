import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // <-- Adicione esta linha

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adicione a seção 'resolve' abaixo
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})