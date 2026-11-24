import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingInstagram from "@/components/FloatingInstagram";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale, locales, site } from "@/content/site";
import { abs, jsonLd } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#14100e" },
  ],
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.title, template: `%s · ${site.name}` },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    category: "design",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: false, email: false, address: false },
    verification: { google: site.googleSiteVerification },
    appleWebApp: { title: site.monogram, statusBarStyle: "default" },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const items = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/gallery`, label: dict.nav.gallery },
    { href: `/${lang}/looks`, label: dict.nav.looks },
    { href: `/${lang}/journal`, label: dict.nav.journal },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": abs("/#organization"),
                name: site.name,
                alternateName: site.monogram,
                url: site.url,
                logo: abs("/icon.svg"),
                slogan: "where ideas breathe",
                sameAs: [site.instagram.url],
              },
              {
                "@type": "WebSite",
                "@id": abs("/#website"),
                name: site.name,
                url: site.url,
                inLanguage: lang,
                description: dict.meta.description,
                publisher: { "@id": abs("/#organization") },
              },
            ],
          })}
        />
        <Header
          lang={lang}
          name={site.name}
          monogram={site.monogram}
          items={items}
          menuLabel={dict.nav.menu}
          closeLabel={dict.nav.close}
          languageLabel={dict.nav.language}
        />
        <main className="flex-1 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
        <FloatingInstagram label={dict.home.floating} />
      </body>
    </html>
  );
}
