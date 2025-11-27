import path from 'node:path';
import { build } from 'vite';

const configFile = path.resolve(process.cwd(), 'vite.config.ts');

(async () => {
  try {
    await build({
      configFile,
      mode: process.env.NODE_ENV ?? 'production',
    });
  } catch (error) {
    console.error('Vite build failed:', error);
    process.exitCode = 1;
  }
})();
