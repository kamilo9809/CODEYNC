import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@primer/css/index.scss";`,
      },
    },
    modules: {
      resolveHref: (id, css) => {
        if (id.startsWith('primeicons/')) {
          return new URL(`../node_modules/${id}`, import.meta.url).toString();
        }
        return id;
      },
    },
  },
})
