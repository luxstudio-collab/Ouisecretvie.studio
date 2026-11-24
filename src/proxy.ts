import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/content/site";

// Sends visitors without a language in the address (e.g. "/") to the
// language their phone or browser prefers: /tr, /fr or /en.
function preferredLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  const wanted = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  const match = wanted.find((w) => (locales as readonly string[]).includes(w.lang));
  return match?.lang ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  request.nextUrl.pathname = `/${preferredLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next.js internals, app icons and files such as sitemap.xml,
  // robots.txt or images.
  matcher: ["/((?!_next|apple-icon|icon|.*\\..*).*)"],
};
