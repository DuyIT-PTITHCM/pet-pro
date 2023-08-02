import { loadTranslations } from '$lib/translations';
import { selectedLanguage } from '../store/language.js';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
  const { pathname } = url;
  const initLocale = selectedLanguage ?? "en";
  await loadTranslations(initLocale, pathname);
  return {};
};
