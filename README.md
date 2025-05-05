# WNSeek Max - Multi-Platform Search Aggregator

![WNSeek Max Logo](public/favicon.svg)

This repository contains the source code for the WNSeek Max landing page, built with Astro. WNSeek Max is a powerful multi-platform search aggregator that lets you search across multiple search engines, social platforms, AI tools, and professional websites simultaneously.

## 🌟 Features

* **Multi-Platform Search:** Search across Google, Bing, DuckDuckGo, Baidu, GitHub, Stack Overflow, YouTube, Twitter and more all at once
* **Open URL Technology:** Efficiently navigate between search platforms with a single click
* **AI Integration:** Seamless integration with AI search tools including ChatGPT and other LLMs
* **Customizable Experience:** Configure your preferred search engines and create custom search combinations
* **Privacy Focused:** No personal search data collection, prioritizing your privacy
* **Clean UI:** Elegant design with light and dark mode support
* **Multilingual Support:** Available in 10 languages (English, Chinese Simplified, Chinese Traditional, Spanish, Japanese, Korean, French, Arabic, Russian, Portuguese)

## 🛠️ Technology Stack

* [Astro](https://astro.build/) - The web framework for content-driven websites
* [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
* [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for better code quality
* [Astro SEO](https://github.com/jonasmerlin/astro-seo) - SEO optimization for Astro sites

## 🌐 Multilingual Architecture

The website follows a language-based routing structure:
* `/en/` - English version
* `/zh/` - Chinese Simplified version
* `/zh_tw/` - Chinese Traditional version
* `/es/` - Spanish version
* etc.

Implemented features:
* Proper hreflang tags for all language variants
* Language selector component
* Localized SEO metadata for each language
* Structured data in multiple languages

## 🔍 SEO Optimization

* **Complete Meta Tags:** Each page is optimized with proper meta title, description, and keywords
* **OpenGraph Support:** Rich previews when shared on social media
* **Structured Data:** Schema.org formatted structured data for better search engine visibility
* **Hreflang Implementation:** Proper language variant signals for international SEO
* **Sitemap:** Dynamic sitemap generation for all languages and pages
* **Robots.txt:** Properly configured for search engine crawling

## 📊 Analytics

* Google Analytics 4 integration
* Performance optimization tracking
* User engagement metrics

## 🚀 Getting Started

### Prerequisites

* Node.js 16+
* npm 7+ or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wnseek.com.git
   cd wnseek.com
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
pnpm dev
```

The site will be available at `http://localhost:4321`.

### Building for Production

Build the static site:

```bash
npm run build
# or
pnpm build
```

Preview the production build:

```bash
npm run preview
# or
pnpm preview
```

## 📂 Project Structure

```
wnseek.com/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── i18n/            # Internationalization resources
│   │   ├── locales/     # UI text translations
│   │   └── seo/         # SEO metadata for each language
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages
│   │   ├── [lang]/      # Language-specific routes
│   │   └── ...
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🔗 Important Links

* **Official Website:** [https://wnseek.com](https://wnseek.com)
* **Chrome Web Store:** [WNSeek Max Extension](https://chromewebstore.google.com/detail/wnseek-max/idnggfmcbibblkcobnobnjgameidlhhl)
* **Privacy Policy:** [https://wnseek.com/privacy](https://wnseek.com/privacy)
* **Terms of Service:** [https://wnseek.com/terms](https://wnseek.com/terms)

## 📜 License

Copyright © 2025 WNSeek Max. All rights reserved.

## Other Productions

* **Products in Linktr:** https://linktr.ee/CarlSmith2025
* **Products in Bento:** https://bento.me/carlsmith
* **Products in Pinterset:** https://www.pinterest.com/CarlSmith2025/
* **Products in twitch:** https://m.twitch.tv/carlsmith2025/home

