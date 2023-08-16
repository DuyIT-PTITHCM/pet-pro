const supportedLocales = ["en", "vi"];
const defaultLocale = "en";
const isSupportedLocale = (locale) => typeof locale === "string" && supportedLocales.includes(locale);
const handle = async ({ event, resolve }) => {
  const locale = event.cookies.get("lang") ?? defaultLocale;
  if (isSupportedLocale(locale)) {
    event.locals.locale = locale;
  }
  const response = await resolve(event, {});
  return response;
};

export { handle, isSupportedLocale };
//# sourceMappingURL=hooks.server-7c0cd223.js.map
