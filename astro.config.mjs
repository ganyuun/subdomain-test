import { defineConfig } from 'astro/config';

// dark mode
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

export default defineConfig({
  integrations: [preact(), tailwind()],
  site: 'https://vastaya.ganyuun.com',
});
