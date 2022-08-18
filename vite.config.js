import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'env': {
      API_KEY: 'keyz8BAZKCTGY5dB1',
      BASE_KEY: 'app6wQWfM6eJngkD4',
      SQUAD_ID: '7-22'
    }
  }
})
