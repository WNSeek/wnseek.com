/**
 * 网站UI文本的多语言配置
 */
import en from './locales/en.json';
import zh from './locales/zh.json';

export const languages = {
  en: 'English',
  zh: '中文',
  zh_tw: '繁體中文',
  es: 'Español',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  ar: 'العربية',
  ru: 'Русский',
  pt: 'Português',
};

export const defaultLang = 'en';

/**
 * 检测当前使用的语言
 * @param {string} url - 当前URL
 * @returns {string} - 返回检测到的语言代码
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

/**
 * 根据当前URL和目标语言生成替代URL
 * @param {URL} url - 当前URL
 * @param {string} lang - 目标语言代码
 * @returns {string} - 返回替代URL
 */
export function useTranslatedPath(url: URL, lang: keyof typeof languages) {
  const [, , ...rest] = url.pathname.split('/');
  const parts = [lang, ...rest];
  const newPathname = parts.filter(Boolean).join('/');
  // 不添加结尾的斜杠，让调用者决定是否添加
  return '/' + newPathname + (url.search || '');
}

/**
 * UI文本翻译
 * 当添加新语言时，需要导入对应的JSON文件并添加到此对象中
 */
export const ui: Record<string, Record<string, string>> = {
  en,
  zh,
}; 