import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server:{
    port: 3000,
    proxy:{
      '/api':{
        target: 'http://192.168.1.23:8080/',
        changeOrigin:true,
        ws: false,
        secure: false
      },
    }
  }
})
