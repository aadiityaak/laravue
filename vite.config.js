import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from 'tailwindcss' // Import tailwindcss di sini
import autoprefixer from 'autoprefixer' // Import autoprefixer di sini

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss, // Gunakan variabel yang diimpor
        autoprefixer // Gunakan variabel yang diimpor
      ]
    }
  }
})
