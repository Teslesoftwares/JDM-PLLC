"use client";

import { useState } from "react";
import { Check, Download, Share2 } from "lucide-react";

export function NewsImageActions({
  src,
  filename,
  title,
}: {
  src: string;
  filename: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  async function shareImage() {
    const url = new URL(src, window.location.href).toString();

    if (navigator.share) {
      try {
        await navigator.share({ title, text: title, url });
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this image link to share it:", url);
    }
  }

  return (
    <div className="flex shrink-0 items-center gap-2">
      <a
        href={src}
        download={filename}
        className="inline-flex items-center gap-1.5 rounded-md border border-[var(--brand-primary)]/25 px-3 py-2 text-sm font-medium text-[var(--brand-primary)] transition-colors hover:bg-[var(--brand-accent)]"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download
      </a>
      <button
        type="button"
        onClick={shareImage}
        className="inline-flex items-center gap-1.5 rounded-md bg-[var(--brand-primary)] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
      >
        {copied ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Share2 className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? "Link copied" : "Share"}
      </button>
    </div>
  );
}
