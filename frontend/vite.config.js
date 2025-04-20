import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    //host: '192.168.111.126',
    port:3000,
    //strictPort: true,
    watch:{
      usePolling: true,
    },
    //open: true,
  },
})
