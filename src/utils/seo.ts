/**
 * SEO数据工具函数
 * 用于从i18n/seo目录获取SEO相关数据
 */

// 默认SEO数据
const defaultSEOData = {
  global: {
    siteName: "WNSeek Max",
    siteDescription: "Multi-Platform Search Aggregator",
    siteKeywords: "search aggregation, multi-platform, search tool, productivity"
  },
  pages: {
    home: {
      title: "WNSeek Max: Multi-Platform Search Aggregator",
      description: "The ultimate search companion that lets you search across multiple platforms simultaneously.",
      keywords: "search aggregation, multi-platform, search tool, productivity",
      ogImage: "/opengraph.jpg"
    }
  },
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "WNSeek",
      "url": "https://wnseek.com",
      "logo": "https://wnseek.com/images/logo.png"
    },
    product: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "WNSeek Max",
      "applicationCategory": "BrowserApplication",
      "operatingSystem": "Windows, Mac, Linux",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Multi-Platform Search Aggregator"
    }
  }
};

/**
 * 获取SEO数据，会根据语言自动选择对应的SEO文件
 * @param {string} lang 语言代码
 * @param {string} pageName 页面名称
 * @returns 处理过的SEO数据对象
 */
export async function getSEOData(lang: string, pageName: string = 'home') {
  let seoData;
  
  try {
    // 动态导入当前语言的SEO文件
    // 确保路径正确，使用import.meta.env.BASE_URL作为基础路径
    const baseUrl = import.meta.env.BASE_URL || '/';
    const filePath = `${baseUrl}i18n/seo/${lang}.json`;
    const response = await fetch(filePath);
    
    if (!response.ok) {
      throw new Error(`Failed to load SEO data for ${lang}: ${response.status}`);
    }
    
    seoData = await response.json();
    console.log(`成功加载 ${lang} SEO数据`);
  } catch (error) {
    console.warn(`无法加载 ${lang} 语言的SEO数据: ${error}`);
    // 如果当前语言不存在，尝试导入英文版
    try {
      const baseUrl = import.meta.env.BASE_URL || '/';
      const filePath = `${baseUrl}i18n/seo/en.json`;
      const response = await fetch(filePath);
      
      if (!response.ok) {
        throw new Error(`Failed to load English SEO data: ${response.status}`);
      }
      
      seoData = await response.json();
      console.log('回退到英文SEO数据');
    } catch (innerError) {
      console.error(`无法加载英文SEO数据: ${innerError}`);
      // 如果英文版也不存在，使用默认值
      seoData = defaultSEOData;
      console.log('使用默认SEO数据');
    }
  }
  
  // 确保seoData具有正确的结构
  const data = seoData.default || seoData;
  
  // 获取所需的SEO数据
  const globalData = data.global || defaultSEOData.global;
  const pagesData = data.pages || defaultSEOData.pages;
  const pageData = pagesData[pageName] || pagesData['home'] || defaultSEOData.pages.home;
  const structuredData = data.structuredData || defaultSEOData.structuredData;
  
  return {
    global: globalData,
    page: pageData,
    structuredData
  };
}

/**
 * 序列化结构化数据为JSON字符串
 * @param {object} data 要序列化的数据对象
 * @returns {string} JSON字符串
 */
export function serializeStructuredData(data: any): string {
  return JSON.stringify(data);
} 