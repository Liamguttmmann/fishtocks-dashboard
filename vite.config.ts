import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: [
      '3f19718a-0c43-4950-9957-fb8a6bcecb1b-00-36yg2ovoavgog.kirk.replit.dev',
    ],
    hmr: false,
  },
});
