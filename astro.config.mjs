import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://emmettforrestel.github.io',
  base: 'personal-website',
  integrations: [tailwind()]
});