// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gatitosworld-community.github.io",
  base: "homepage",
  integrations: [tailwind()],
});