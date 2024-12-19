// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gatitosworld-community.github.io",
  integrations: [tailwind()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
      themes: {
        light: "vesper",
        dark: "github-dark-dimmed",
      },
    },
  },
});
