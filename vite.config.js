import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/Context-Api-Shopping-Cart/",
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['json', 'verbose'],
    outputFile: './resultz.json',
  },
});
