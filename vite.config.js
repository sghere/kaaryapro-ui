import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  { resolve } from 'path'

// https://vite.dev/config/

export default defineConfig({
  
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@pages": resolve(__dirname, "src/pages"),
      "@assets": resolve(__dirname, "src/assets"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@common": resolve(__dirname, "src/common"),
    },
  }
})
