import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const languages = [
  {
    code: 'cs-CZ',
    lang: 'cs',
    label: 'Čeština',
  },
  {
    code: 'en-US',
    lang: 'en',
    label: 'English',
  },
];

export const locales = languages.map((lang) => lang.lang);

export const defaultLocale = 'cs';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
