import path from 'node:path';
import { build } from 'vite';

// Strip any stray args forwarded by hosting build commands so the Vite API
// does not attempt to interpret them as entry points.
process.argv = process.argv.slice(0, 2);

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
