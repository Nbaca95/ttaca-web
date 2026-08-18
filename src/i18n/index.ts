import { es } from './es';
import { en } from './en';
import type { Dictionary } from './es';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const dictionaries = { es, en } satisfies Record<Locale, Dictionary>;
export type { Dictionary };

/** Extracts the locale from an Astro URL path, falling back to the default. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  return (locales as readonly string[]).includes(maybeLocale)
    ? (maybeLocale as Locale)
    : defaultLocale;
}

export function getTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Builds a path prefixed with the given locale (default locale is unprefixed). */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean}`;
}

/** Removes a leading locale prefix from a pathname, e.g. "/en/about" -> "/about". */
export function stripLocalePrefix(pathname: string): string {
  const pattern = new RegExp(`^/(${locales.join('|')})(?=/|$)`);
  return pathname.replace(pattern, '') || '/';
}