// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Full_Stack_Dovel/Day_20/', // 👈 Replace with your actual repo name
})

