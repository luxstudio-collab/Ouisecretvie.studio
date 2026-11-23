import Image from "next/image";
import type { ArtVariant } from "@/content/gallery";

type Scheme = {
  sky: [string, string];
  cloth: [string, string];
  floor: string;
  arch: string;
  glow: string;
};

const schemes: Record<ArtVariant, Scheme> = {
  red: {
    sky: ["#3a1f1a", "#7b4a3a"],
    cloth: ["#5e1419", "#a3323a"],
    floor: "#2a1714",
    arch: "#9a7b62",
    glow: "#ffcf7a",
  },
  winter: {
    sky: ["#7d8794", "#d9d6cf"],
    cloth: ["#e9e2d4", "#fbf8f1"],
    floor: "#55585c",
    arch: "#a9a69f",
    glow: "#ffe0a3",
  },
  columns: {
    sky: ["#1d1a24", "#5c4a45"],
    cloth: ["#d9ccb5", "#f1e8d8"],
    floor: "#231d1a",
    arch: "#c8b79c",
    glow: "#ffd58a",
  },
  ruins: {
    sky: ["#6b3b2e", "#e2a36d"],
    cloth: ["#e7d6bd", "#f6ecdc"],
    floor: "#4a3024",
    arch: "#b98a62",
    glow: "#ffd9a0",
  },
  velvet: {
    sky: ["#1c0d12", "#4a1d2a"],
    cloth: ["#3c1220", "#6e2a3b"],
    floor: "#150a0d",
    arch: "#9b6b3c",
    glow: "#ffc874",
  },
  olive: {
    sky: ["#a9ae8c", "#ebe6d3"],
    cloth: ["#ebe5d6", "#faf7ef"],
    floor: "#7d7a5c",
    arch: "#6f7752",
    glow: "#fff1c9",
  },
};

// Horizon and table geometry (viewBox 400 x 500)
const HORIZON = 250;
const TABLE_TOP = 268;

function Backdrop({ variant, s }: { variant: ArtVariant; s: Scheme }) {
  switch (variant) {
    case "columns":
      return (
        <g fill={s.arch} opacity="0.55">
          {[30, 105, 265, 340].map((x) => (
            <g key={x}>
              <rect x={x} y="40" width="30" height={HORIZON - 30} rx="3" />
              <rect x={x - 6} y="32" width="42" height="10" />
            </g>
          ))}
          <rect x="0" y="22" width="400" height="10" opacity="0.6" />
        </g>
      );
    case "ruins":
      return (
        <g fill={s.arch} opacity="0.6">
          <path d="M40 260 V120 a60 60 0 0 1 120 0 V260 h-22 V125 a38 38 0 0 0 -76 0 V260 z" />
          <path d="M240 260 V150 a60 60 0 0 1 120 0 V260 h-22 V155 a38 38 0 0 0 -76 0 V260 z" />
          <rect x="175" y="200" width="50" height="60" opacity="0.7" />
          <circle cx="300" cy="90" r="26" fill="#ffd9a0" opacity="0.5" />
        </g>
      );
    case "red":
      return (
        <g fill={s.arch} opacity="0.28">
          {Array.from({ length: 7 }).map((_, row) =>
            Array.from({ length: 6 }).map((__, col) => (
              <rect
                key={`${row}-${col}`}
                x={col * 70 + (row % 2 ? 35 : 0) - 20}
                y={row * 36 + 4}
                width="64"
                height="30"
                rx="2"
              />
            )),
          )}
        </g>
      );
    case "winter":
      return (
        <g>
          {[70, 170, 270].map((x) => (
            <g key={x}>
              <path
                d={`M${x} 230 V110 a30 30 0 0 1 60 0 V230 z`}
                fill="#f4f1ea"
                opacity="0.75"
              />
              <rect x={x + 28} y="80" width="4" height="150" fill={s.arch} opacity="0.6" />
            </g>
          ))}
        </g>
      );
    case "velvet":
      return (
        <g fill={s.cloth[1]} opacity="0.55">
          <path d="M0 0 H90 C70 80 85 170 60 250 H0 z" />
          <path d="M400 0 H310 C330 80 315 170 340 250 H400 z" />
          <path d="M120 0 H280 C270 30 250 40 200 44 C150 40 130 30 120 0 z" opacity="0.8" />
        </g>
      );
    case "olive":
      return (
        <g fill={s.arch} opacity="0.55">
          {[
            [60, 150, 70],
            [170, 120, 60],
            [300, 140, 80],
            [380, 180, 50],
          ].map(([cx, cy, r]) => (
            <g key={cx}>
              <rect x={cx - 5} y={cy} width="10" height={HORIZON - cy} rx="4" />
              <circle cx={cx} cy={cy} r={r} />
            </g>
          ))}
        </g>
      );
  }
}

function Scene({ variant, uid }: { variant: ArtVariant; uid: string }) {
  const s = schemes[variant];
  const id = (name: string) => `${uid}-${name}`;

  // Candles placed down the length of the table, in perspective.
  const candles = [0.08, 0.26, 0.44, 0.62, 0.8].flatMap((t, i) => {
    const y = 500 - t * (500 - TABLE_TOP);
    const half = 150 - t * 135;
    const scale = 1 - t * 0.82;
    return [-0.42, 0.42].map((side) => ({
      key: `${i}-${side}`,
      x: 200 + half * side,
      y,
      scale,
      delay: (i * 0.37 + (side > 0 ? 0.2 : 0)) % 2,
    }));
  });

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s.sky[0]} />
          <stop offset="1" stopColor={s.sky[1]} />
        </linearGradient>
        <linearGradient id={id("cloth")} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor={s.cloth[0]} />
          <stop offset="1" stopColor={s.cloth[1]} />
        </linearGradient>
        <radialGradient id={id("glow")}>
          <stop offset="0" stopColor={s.glow} stopOpacity="0.9" />
          <stop offset="0.35" stopColor={s.glow} stopOpacity="0.35" />
          <stop offset="1" stopColor={s.glow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id("shade")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <rect width="400" height="500" fill={`url(#${id("sky")})`} />
      <Backdrop variant={variant} s={s} />
      <rect y={HORIZON} width="400" height={500 - HORIZON} fill={s.floor} />

      {/* the long table */}
      <path
        d={`M20 500 L184 ${TABLE_TOP} H216 L380 500 z`}
        fill={`url(#${id("cloth")})`}
      />
      <path
        d={`M20 500 L184 ${TABLE_TOP} H216 L380 500`}
        fill="none"
        stroke="#000"
        strokeOpacity="0.12"
      />

      {/* candles */}
      {candles.map((c) => (
        <g
          key={c.key}
          transform={`translate(${c.x} ${c.y}) scale(${c.scale})`}
        >
          <circle
            cy="-58"
            r="46"
            fill={`url(#${id("glow")})`}
            style={{
              animation: `flicker 3.2s ease-in-out ${c.delay}s infinite`,
            }}
          />
          <rect x="-4" y="-52" width="8" height="52" rx="2" fill="#f6efe2" />
          <ellipse cx="0" cy="-60" rx="3.2" ry="7" fill={s.glow} />
        </g>
      ))}

      <rect width="400" height="500" fill={`url(#${id("shade")})`} />
    </svg>
  );
}

type Props = {
  variant: ArtVariant;
  uid: string;
  image?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Shows the real image when there is one, otherwise a drawn placeholder. */
export default function Artwork({
  variant,
  uid,
  image,
  alt,
  className = "",
  priority,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-surface ${className}`}
      role={image ? undefined : "img"}
      aria-label={image ? undefined : alt}
    >
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <Scene variant={variant} uid={uid} />
      )}
    </div>
  );
}
