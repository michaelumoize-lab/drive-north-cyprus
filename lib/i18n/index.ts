// lib/i18n/index.ts
import { Dictionary, Locale } from "./types";
import { tr } from "./tr";
import { en } from "./en";

export type { Locale, Dictionary };

export const locales: Locale[] = ["tr", "en"];
export const defaultLocale: Locale = "tr";

const dictionaries: Record<Locale, Dictionary> = {
  tr,
  en,
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: string): Dictionary {
  if (isValidLocale(locale)) {
    return dictionaries[locale];
  }
  return dictionaries[defaultLocale];
}

/**
 * Prefix an internal path with the chosen locale:
 * Turkish (standard default): / or /about or /routes
 * English: /en or /en/about or /en/routes
 * Clean URLs without trailing slashes
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  let clean = path.trim();
  if (!clean.startsWith("/")) clean = `/${clean}`;
  
  // Strip any leading /tr or /en
  clean = clean.replace(/^\/(tr|en)(\/|$)/, "/");
  if (!clean.startsWith("/")) clean = `/${clean}`;

  // Strip trailing slash unless it's root "/"
  if (clean.length > 1 && clean.endsWith("/")) {
    clean = clean.slice(0, -1);
  }

  if (locale === "tr") {
    return clean;
  }

  // English
  if (clean === "/") {
    return "/en";
  }
  return `/en${clean}`;
}


