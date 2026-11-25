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
  price: number; // in the item's currency, else the look's (TL by default); 0 = price on request
  currency?: "TL" | "USD"; // only when this item differs from the look
  url: string; // the product page in the shop (Turkish site)
  note?: string; // campaign or stock note, optional
  affiliate?: boolean; // url is an affiliate tracking link (e.g. Awin)
};

export type Look = {
  slug: string;
  date: string; // YYYY-MM-DD, when prices and stock were checked
  title: string;
  subtitle: string;
  gender: "kadin" | "erkek";
  formula: string;
  image: string;
  currency?: "TL" | "USD"; // default TL; USD for shops that sell only in dollars
  items: LookItem[];
};

export const looks: Look[] = (data as Look[])
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const getLook = (slug: string) => looks.find((l) => l.slug === slug);

export const lookTotal = (look: Look) =>
  look.items.reduce((sum, item) => sum + item.price, 0);

/** Item price in its own currency, or null when the price is on request. */
export const formatItemPrice = (look: Look, item: LookItem) =>
  item.price ? formatPrice(item.price, item.currency ?? look.currency) : null;

/** Total per currency, e.g. "$410.50 + 7.088,45 TL". */
export const formatLookTotal = (look: Look) => {
  const sums = new Map<"TL" | "USD", number>();
  for (const item of look.items) {
    if (!item.price) continue;
    const c = item.currency ?? look.currency ?? "TL";
    sums.set(c, (sums.get(c) ?? 0) + item.price);
  }
  return [...sums].map(([c, v]) => formatPrice(v, c)).join(" + ");
};

export const formatTL = (value: number) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(value) + " TL";

export const formatPrice = (value: number, currency: Look["currency"] = "TL") =>
  currency === "USD"
    ? "$" + new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)
    : formatTL(value);

export const formatDate = (iso: string, lang: string) =>
  new Intl.DateTimeFormat(lang === "tr" ? "tr-TR" : lang === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"));
