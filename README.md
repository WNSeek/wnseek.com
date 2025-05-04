# WNSeek Max - Multi-Platform Search Extension

This repository contains the source code for the WNSeek Max landing page, built with Astro.

WNSeek Max is an efficient multi-platform aggregated search tool designed as a Chrome Extension. This landing page provides information about the extension, its features, and download links.

## Key Features Highlighted on Landing Page

*   **One Search, All Platforms:** Search across Google, Baidu, Bing, DuckDuckGo, GitHub, Stack Overflow, YouTube, Twitter, and more from a single interface.
*   **Efficient Workflow:** Features like "Open URL" and "Open All URL" streamline the search process.
*   **Customizable:** Configure preferred search engines and platforms.
*   **Privacy Focused:** The extension does not collect personal search data.
*   **Clean UI:** Minimalist design with light and dark mode support.
*   **AI Integration:** Supports integration with AI search tools.

## Technology Stack

*   [Astro](https://astro.build/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Astro Icon](https://github.com/natemoo-re/astro-icon#readme)

## Website Optimization

*   **SEO Optimization:** Complete meta tags and OpenGraph support
*   **Structured Data:** Schema.org formatted structured data for better search engine visibility
*   **Google Analytics:** GA4 integration for website analytics
*   **Performance Optimization:** Using content-visibility for improved page load speed

## Getting Started

### Prerequisites

*   Node.js (Check `.nvmrc` if available, otherwise use a recent LTS version)
*   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd wnseek.com 
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Project

To start the development server:

```bash
npm run dev
```

This will typically start the server on `http://localhost:4321`.

## Building for Production

To build the static site for deployment:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

*   `public/`: Static assets (images, downloads like `WNSeek_V1.0.1.zip`, robots.txt, etc.).
*   `src/`: Source code.
    *   `components/`: Reusable Astro components (Hero, Features, CTA, Footer, etc.).
    *   `layouts/`: Base page layouts (`Layout.astro`).
    *   `pages/`: Site pages (`index.astro`, `privacy.astro`, `terms.astro`).
    *   `styles/`: Global styles.
    *   `assets/`: Project assets processed by Astro.

## Important Links

*   **Chrome Web Store:** [https://chromewebstore.google.com/detail/idnggfmcbibblkcobnobnjgameidlhhl](https://chromewebstore.google.com/detail/idnggfmcbibblkcobnobnjgameidlhhl)
*   **Privacy Policy:** `/privacy`
*   **Terms of Service:** `/terms`

## Copyright

Copyright © 2025 WNSeek Max. All rights reserved.

## Other Productions

*   https://linktr.ee/CarlSmith2025
*   https://bento.me/carlsmith
*   https://www.pinterest.com/CarlSmith2025/
*   https://m.twitch.tv/carlsmith2025/home

