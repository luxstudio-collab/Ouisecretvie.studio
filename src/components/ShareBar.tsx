"use client";

import { useState, useSyncExternalStore } from "react";

type Props = {
  url: string;
  title: string;
  pinImage: string;
  labels: {
    share: string;
    shareNative: string;
    whatsapp: string;
    pinterest: string;
    copy: string;
    copied: string;
  };
};

const btn =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line px-5 text-sm transition-colors hover:border-accent hover:text-accent";

/** WhatsApp, Pinterest, copy link, and the iPhone/iPad share sheet when available. */
export default function ShareBar({ url, title, pinImage, labels }: Props) {
  const [copied, setCopied] = useState(false);
  // Only true in the browser, so server and first client render match.
  const canShare = useSyncExternalStore(
    () => () => {},
    () => typeof navigator.share === "function",
    () => false,
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked: nothing to do */
    }
  };

  const pinHref = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(pinImage)}&description=${encodeURIComponent(title)}`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;

  return (
    <div className="mt-10 text-center">
      <p className="text-xs tracking-[0.24em] text-muted uppercase">{labels.share}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {canShare && (
          <button
            type="button"
            className={btn}
            onClick={() => navigator.share({ title, url }).catch(() => {})}
          >
            ↗ {labels.shareNative}
          </button>
        )}
        <a className={btn} href={pinHref} target="_blank" rel="noopener noreferrer">
          {labels.pinterest}
        </a>
        <a className={btn} href={waHref} target="_blank" rel="noopener noreferrer">
          {labels.whatsapp}
        </a>
        <button type="button" className={btn} onClick={copy} aria-live="polite">
          {copied ? `✓ ${labels.copied}` : labels.copy}
        </button>
      </div>
    </div>
  );
}
