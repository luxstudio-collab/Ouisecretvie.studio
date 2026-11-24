import { ImageResponse } from "next/og";

// Home-screen icon for iPhone and iPad.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7a1e24",
          color: "#f7f3ec",
          fontSize: 54,
          letterSpacing: 4,
          fontFamily: "serif",
        }}
      >
        OSV
      </div>
    ),
    size,
  );
}
