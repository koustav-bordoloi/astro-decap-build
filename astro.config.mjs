// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import decapCmsOauth from 'astro-decap-cms-oauth';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [decapCmsOauth()],
  output: 'server', // required for serverless routes
  adapter: netlify({})
});