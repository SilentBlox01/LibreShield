import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      root: projectRoot,
      server: {
        port: 5000,
        host: '0.0.0.0',
        allowedHosts: true,
      },
      build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',
        rollupOptions: {
          input: path.resolve(projectRoot, 'index.html'),
        },
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(projectRoot, '.'),
        }
      }
    };
});
