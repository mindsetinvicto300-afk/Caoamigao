import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' corrige o problema de tela branca por caminhos absolutos na Hostinger
  base: './', 
  build: {
    // Define a pasta de saída conforme solicitado
    outDir: 'dist-hostinger',
    assetsDir: 'assets',
    // Otimizações para produção
    minify: 'esbuild',
    sourcemap: false,
  },
});