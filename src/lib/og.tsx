// Shared design for share images (Open Graph / Twitter cards).
// Rendered at build time with next/og: 1200 x 630, candlelit palette.

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Cormorant Garamond (SIL Open Font License), copied from @fontsource.
const fontDir = join(process.cwd(), "src/assets/fonts");

async function fonts() {
  const load = (file: string) => readFile(join(fontDir, file));
  const [latin, latinExt, latinItalic, latinExtItalic] = await Promise.all([
    load("cormorant-garamond-latin-500-normal.woff"),
    load("cormorant-garamond-latin-ext-500-normal.woff"),
    load("cormorant-garamond-latin-500-italic.woff"),
    load("cormorant-garamond-latin-ext-500-italic.woff"),
  ]);
  return [
    { name: "Cormorant", data: latin, weight: 500 as const, style: "normal" as const },
    { name: "CormorantExt", data: latinExt, weight: 500 as const, style: "normal" as const },
    { name: "Cormorant", data: latinItalic, weight: 500 as const, style: "italic" as const },
    { name: "CormorantExt", data: latinExtItalic, weight: 500 as const, style: "italic" as const },
  ];
}

type Card = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  footer?: string;
};

export async function ogImage({ eyebrow, title, subtitle, footer = site.instagram.handle }: Card) {
  const long = title.length > 48;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(circle at 78% 82%, rgba(214,176,106,0.35) 0%, rgba(20,16,14,0) 45%), linear-gradient(180deg, #1d1a24 0%, #14100e 100%)",
          color: "#efe6da",
          fontFamily: "Cormorant, CormorantExt",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 64,
              border: "1.5px solid rgba(239,230,218,0.5)",
              fontSize: 22,
              letterSpacing: 2,
            }}
          >
            OSV
          </div>
          <div style={{ display: "flex", fontSize: 30 }}>Ouisecretvie Studio</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#d6b06a",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 12, background: "#d6b06a" }} />
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: long ? 70 : 92,
              lineHeight: 1.02,
              fontStyle: "italic",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", marginTop: 16, fontSize: 36, color: "#a8998a", maxWidth: 980 }}>
              {subtitle}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#a8998a",
            letterSpacing: 2,
          }}
        >
          <div style={{ display: "flex" }}>{new URL(site.url).host}</div>
          <div style={{ display: "flex" }}>{footer}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}

export const pinSize = { width: 1000, height: 1500 };

/** Tall Pinterest cover: 1000 x 1500 (2:3). */
export async function pinImage({
  eyebrow,
  title,
  subtitle,
  lead,
}: Card & { lead?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 76px",
          background:
            "radial-gradient(circle at 50% 78%, rgba(214,176,106,0.42) 0%, rgba(20,16,14,0) 48%), linear-gradient(180deg, #1d1a24 0%, #14100e 100%)",
          color: "#efe6da",
          fontFamily: "Cormorant, CormorantExt",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              height: 70,
              borderRadius: 70,
              border: "1.5px solid rgba(239,230,218,0.5)",
              fontSize: 24,
              letterSpacing: 2,
            }}
          >
            OSV
          </div>
          Ouisecretvie Studio
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 30, letterSpacing: 7, textTransform: "uppercase", color: "#d6b06a" }}>
            {eyebrow}
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 104, lineHeight: 1, fontStyle: "italic" }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", marginTop: 26, fontSize: 48, lineHeight: 1.15, color: "#cbbba8" }}>
              {subtitle}
            </div>
          )}
          {lead && (
            <div style={{ display: "flex", marginTop: 44, fontSize: 34, lineHeight: 1.35, color: "#a8998a" }}>
              {lead}
            </div>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#a8998a" }}>
          <div style={{ display: "flex" }}>{new URL(site.url).host}</div>
          <div style={{ display: "flex" }}>{site.instagram.handle}</div>
        </div>
      </div>
    ),
    { ...pinSize, fonts: await fonts() },
  );
}
