import { loadTranslations } from '$lib/translations';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url , locals}) => {
  const { pathname } = url;
  const {locale} = locals ;
  await loadTranslations(locale, pathname);
  return {
    locale,
    lang : locale
  };
};
