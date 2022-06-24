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
        target: '주소 감추기 신공',
        changeOrigin:true,
        ws: false,
        secure: false
      },
    }
  }
})
