import { useLocale, useTranslations } from 'next-intl';
import { locales } from './config';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export function LocaleSwitcher() {
  // const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={'Change language'}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
