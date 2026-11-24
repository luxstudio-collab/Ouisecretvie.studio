import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Lets visitors add the site to their iPad or phone home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.monogram,
    description: "where ideas breathe",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ec",
    theme_color: "#14100e",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
