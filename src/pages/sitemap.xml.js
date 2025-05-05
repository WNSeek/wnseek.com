/**
 * Custom sitemap generator
 * This file will be used by Astro to generate the sitemap.xml
 * Following Google's SEO best practices for 2025, with multilingual support and update frequency
 * @returns {string} XML sitemap containing all pages of the website
 */
export async function get() {
  // Base URL of the website
  const baseUrl = 'https://wnseek.com';
  
  // List of main pages - 只保留必要页面，移除了features、usecases、whychoose、faq、about等路径
  const pages = [
    '',           // Home page
    'privacy',    // Privacy Policy
    'terms'       // Terms of Service
  ];
  
  // Supported languages
  const languages = [
    'en',    // English
    'zh',    // Chinese Simplified
    'zh_tw', // Chinese Traditional
    'es',    // Spanish
    'ja',    // Japanese
    'ko',    // Korean
    'fr',    // French
    'ar',    // Arabic
    'ru',    // Russian
    'pt'     // Portuguese
  ];
  
  // Language code mapping for hreflang (following ISO standards)
  const hreflangMap = {
    'en': 'en',
    'zh': 'zh-Hans', // Simplified Chinese
    'zh_tw': 'zh-Hant', // Traditional Chinese
    'es': 'es',
    'ja': 'ja',
    'ko': 'ko',
    'fr': 'fr',
    'ar': 'ar',
    'ru': 'ru',
    'pt': 'pt'
  };
  
  // Current date for lastmod - 使用当前日期确保最新性
  const today = new Date().toISOString().split('T')[0] + 'T00:00:00Z';
  
  // Generate sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <!-- Default homepage entry -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    ${languages.map(lang => 
      `<xhtml:link rel="alternate" hreflang="${hreflangMap[lang]}" href="${baseUrl}/${lang}/" />`
    ).join('\n    ')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
  
  <!-- Language-specific pages -->
  ${languages.flatMap(lang => 
    pages.filter(page => page !== '') // 排除空字符串，因为首页已经处理过了
    .map(page => `
  <url>
    <loc>${baseUrl}/${lang}/${page}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === 'privacy' || page === 'terms' ? 'monthly' : 'weekly'}</changefreq>
    <priority>${page === 'privacy' || page === 'terms' ? '0.5' : '0.8'}</priority>
    ${languages.map(altLang => 
      `<xhtml:link rel="alternate" hreflang="${hreflangMap[altLang]}" href="${baseUrl}/${altLang}/${page}/" />`
    ).join('\n    ')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${page}/" />
  </url>`
    )
  ).join('')}
</urlset>`;

  return {
    body: xml,
    headers: {
      'Content-Type': 'application/xml',
      // 添加缓存控制以确保搜索引擎获取最新版本
      'Cache-Control': 'max-age=3600'
    }
  };
} 