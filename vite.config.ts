import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2015'
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.join(__dirname, './src')
      }, {
        find: '~',
        replacement: path.join(__dirname, './public')
      }
    ]
  }
})
