import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://wnseek.com",
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  integrations: [
    tailwind(), 
    mdx(), 
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          zh: 'zh-CN'
        }
      },
      filter: (page) => !page.includes('/private/')
    }), 
    icon({ /* Icon configuration options can go here if needed */ })
  ],
});
