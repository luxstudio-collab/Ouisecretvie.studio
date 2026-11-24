import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Share images read these font files at request time.
  outputFileTracingIncludes: {
    "/[lang]/opengraph-image": ["./src/assets/fonts/**"],
    "/[lang]/journal/[slug]/opengraph-image": ["./src/assets/fonts/**"],
    "/[lang]/journal/[slug]/pin-image": ["./src/assets/fonts/**"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
