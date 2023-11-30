import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/broadcasting': {
        target: 'http://127.0.0.1:6001', // Update this to match your WebSocket server's domain or IP
        changeOrigin: true,
      },
    },
  },
  
})
