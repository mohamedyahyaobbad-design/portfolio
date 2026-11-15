// @ts-check
import { defineConfig } from 'astro/config';

// Netlify fournit automatiquement l'URL du site (variable URL) pendant le build.
const site = process.env.URL || 'https://mohamed-yahya-obbad.netlify.app';

export default defineConfig({
  site,
  build: { format: 'directory' },
  compressHTML: true,
});
