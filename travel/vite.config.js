import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import { viteBabel } from 'vite-plugin-babel';
// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/api': {
        // target: 'http://192.168.0.124:8455',
        // target: 'http://30.0.45.32:8456',
        target: 'http://192.168.246.9:8457',
        
        
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  build: {
    chunkSizeWarningLimit: 1500,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "vue": "vue/dist/vue.common.prod.js"
    }
  },
  esbuild:{
    target:'esnext',
    supported:{
      'async-generator':true
    }

  }
})
