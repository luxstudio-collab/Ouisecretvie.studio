// Site-wide settings. Change these values to update the whole site.

export const locales = ["en", "tr", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  fr: "Français",
};

export const site = {
  name: "Ouisecretvie Studio",
  monogram: "OSV",
  url: "https://www.ouisecretvie.store",
  instagram: {
    handle: "@ouisecretvie.studio",
    url: "https://www.instagram.com/ouisecretvie.studio/",
  },
  // Leave empty to hide the e-mail link on the contact page.
  email: "",
};
