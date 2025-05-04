import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://wnseek.com",
  integrations: [
    tailwind(), 
    mdx(), 
    sitemap({
      filter: (page) => !page.includes('/private/')
    }), 
    icon({ /* Icon configuration options can go here if needed */ })
  ],
});
