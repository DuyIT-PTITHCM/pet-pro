import type { Handle } from '@sveltejs/kit'

const supportedLocales = ['en', 'vi'] as const
export type SupportedLocale = (typeof supportedLocales)[number]
const defaultLocale: SupportedLocale = 'en'

export const isSupportedLocale = (locale: unknown): locale is SupportedLocale =>
    typeof locale === 'string' && supportedLocales.includes(locale as SupportedLocale)

const FIVE_MINUTES_IN_SECONDS = 5 * 60

export const handle: Handle = async ({ event, resolve }) => {
    const locale = event.cookies.get('lang') ?? defaultLocale;
    if (isSupportedLocale(locale)) {
        event.locals.locale = locale
    }
    const response = await resolve(event, {})
    return response
}
