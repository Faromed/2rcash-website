import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');
  const brand = env.VITE_BRAND || (mode === 'melbet' ? 'melbet' : '1xbet');
  const brandFile = brand === 'melbet' ? 'src/brands/melbet.js' : 'src/brands/1xbet.js';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@brand-config': path.resolve(__dirname, brandFile),
      },
    },
  };
});
