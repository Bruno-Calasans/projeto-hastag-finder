import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    'env': {
      API_KEY: 'keyz8BAZKCTGY5dB1',
      BASE_KEY: 'app6wQWfM6eJngkD4',
      SQUAD_ID: '07-22'
    }
  }
})
