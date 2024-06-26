import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./en/common.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'header',
      routes: ['', '/','/about','/blog'],
      loader: async () => (
        await import('./en/header.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'homepage',
      loader: async () => (
        await import('./en/homepage.json')
      ).default,
    },
    {
      locale: 'vi',
      key: 'common',
      loader: async () => (
        await import('./vi/common.json')
      ).default,
    },
    {
      locale: 'vi',
      key: 'header',
      routes: ['', '/','/about','/blog'],
      loader: async () => (
        await import('./vi/header.json')
      ).default,
    },
    {
      locale: 'vi',
      key: 'homepage',
      loader: async () => (
        await import('./vi/homepage.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);