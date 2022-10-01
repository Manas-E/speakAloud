import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "types": ["node"],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      external: [            
        '@aws-amplify/predictions',           
        '@aws-amplify/*',
        'aws-amplify'
      ]
  }}
})
