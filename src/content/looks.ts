// Outfits ("looks") shown on /[lang]/looks. Every Pinterest pin links to one of
// these pages so people can open each product in its shop.
//
// The data lives in looks.json and is written by the outfit tools in the
// repository (scripts/pinterest). To add a look by hand: put its collage in
// /public/looks and add an entry to looks.json with the same fields.

import data from "./looks.json";

export type LookItem = {
  category: string;
  brand: string;
  name: string;
  price: number; // in the look's currency (TL unless the look says otherwise)
  url: string; // the product page in the shop (or the affiliate link)
  note?: string; // campaign or stock note, optional
  affiliate?: boolean; // true when url is an affiliate link (we may earn a commission)
};

export type Look = {
  slug: string;
  date: string; // YYYY-MM-DD, when prices and stock were checked
  title: string;
  subtitle: string;
  gender: "kadin" | "erkek";
  formula: string;
  image: string;
  currency?: "TRY" | "USD"; // defaults to TRY
  items: LookItem[];
};

export const looks: Look[] = (data as Look[])
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const getLook = (slug: string) => looks.find((l) => l.slug === slug);

export const lookTotal = (look: Look) =>
  look.items.reduce((sum, item) => sum + item.price, 0);

export const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(value) + " TL";

export const formatPrice = (value: number, currency: Look["currency"] = "TRY") =>
  currency === "USD"
    ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value)
    : formatTL(value);

export const hasAffiliate = (look: Look) => look.items.some((item) => item.affiliate);

export const formatDate = (iso: string, lang: string) =>
  new Intl.DateTimeFormat(lang === "tr" ? "tr-TR" : lang === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
