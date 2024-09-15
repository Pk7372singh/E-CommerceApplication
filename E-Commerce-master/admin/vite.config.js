// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5678,    // Specify the port you want to use
    host: true     // Make Vite accessible from external networks
  }
});
