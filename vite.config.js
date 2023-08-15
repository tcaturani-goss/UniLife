import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fontsPlugin from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
