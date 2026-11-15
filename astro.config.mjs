// @ts-check
import { defineConfig } from 'astro/config';

// Adresse publique du site (Cloudflare Pages). Peut être remplacée par la variable SITE_URL.
const site = process.env.SITE_URL || 'https://mohamed-yahya-obbad.pages.dev';

export default defineConfig({
  site,
  build: { format: 'directory' },
  compressHTML: true,
});
