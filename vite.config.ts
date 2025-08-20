/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Otimizações de build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          markdown: ['react-markdown'],
          router: ['react-router-dom'],
        },
      },
    },
    // Minificação otimizada
    minify: 'terser',
    // Otimização de chunks
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 8080,
    host: true,
    strictPort: false,
  },
  optimizeDeps: {
    // Pré-bundling de dependências comuns
    include: ['react', 'react-dom', 'react-router-dom', 'react-markdown'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
