import { defineConfig } from 'vite';

export default defineConfig({
  root: 'front_v2',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './front_v2/index.html',
        builder: './front_v2/builder.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  define: {
    'process.env': {}
  }
});
