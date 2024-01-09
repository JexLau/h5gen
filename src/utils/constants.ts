export const baseurl = 'https://www.freemapsscraper.com';

export const getHrefLang = (locale: string) => locale === 'en' ? baseurl : `${baseurl}/${locale}`;
