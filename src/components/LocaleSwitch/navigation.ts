import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const Locales = ['en', 'ja', 'es', 'ko', 'de', 'fr', 'pt', 'ru'] as const;
export const LocalePrefix = 'as-needed';
export const LocalePathnames = {
  '/': '/'
};
export const DefaultLocale = 'en';

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: Locales,
    pathnames: LocalePathnames,
    localePrefix: LocalePrefix,
  });
