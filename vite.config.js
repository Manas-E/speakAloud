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
        'aws-amplify',
        "@aws-amplify/core",
        "@aws-amplify/ui-react",
        "@aws-amplify/api",
        /^@aws-amplify.*/,
        "core-js-pure/stable/object/assign.js",
        /^core-js-pure.*/
      ]
  }}
})
