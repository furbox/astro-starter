// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-starter-979.pages.dev',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  build: {
    inlineStylesheets: 'auto'
  },

  adapter: cloudflare()
});