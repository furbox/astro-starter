// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-website.com',
  compressHTML: true,
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  build: {
    inlineStylesheets: 'auto'
  },

  server: {
    host: true,
    port: 4321
  },

  adapter: node({
    mode: 'standalone'
  })
});