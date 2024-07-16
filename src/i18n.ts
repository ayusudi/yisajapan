import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  if (locale != 'en' && locale != 'id') locale = 'en'

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});