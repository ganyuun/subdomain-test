import { defineConfig } from 'astro/config';

// dark mode
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [preact(), tailwind()],
  site: 'https://vastaya.ganyuun.com',
});
