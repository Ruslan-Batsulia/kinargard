import type { Locale } from "./types";
import { LOCALES } from "./constants";

export function isLocale(value: string): value is Locale {
  return LOCALES.some((locale) => locale === value);
}
