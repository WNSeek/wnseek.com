/**
 * 自定义sitemap生成器
 * 这个文件将被Astro使用来生成sitemap.xml
 * @returns {string} 包含网站所有页面的XML sitemap
 */
export async function get() {
  // 基本URL
  const baseUrl = 'https://wnseek.com';
  
  // 主要页面列表
  const pages = [
    '',
    'about',
    'contact',
    'pricing',
    'privacy',
    'terms',
    'blog'
  ];
  
  // 生成sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page ? `/${page}` : ''}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return {
    body: xml,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
} 