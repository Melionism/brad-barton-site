import { defineConfig } from 'astro/config';

// SITE_URL задаётся при сборке (Docker build-arg). Домен: bradbarton.link
const site = process.env.SITE_URL || 'https://bradbarton.link';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
