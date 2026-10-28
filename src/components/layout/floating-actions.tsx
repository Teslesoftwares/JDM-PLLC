"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils";

/** WhatsApp glyph (Simple Icons, CC0). WhatsApp has no lucide equivalent. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/**
 * Floating actions for the public site: a WhatsApp bubble that opens a short
 * chat panel and hands off to `wa.me`, plus the Google review badge on mobile.
 *
 * Everything is read from `@/config/site`, so a new number or opener is a config
 * change.
 */
export function FloatingActions() {
  const { whatsapp, googleReview } = siteConfig;
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<string>(whatsapp.message);
  const containerRef = useRef<HTMLDivElement>(null);

  const chatHref = whatsapp.number
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(draft.trim() || whatsapp.message)}`
    : "";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  if (!whatsapp.number && !googleReview.url) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 flex items-end gap-3",
        open ? "flex-col" : "flex-row-reverse",
      )}
    >
      {open ? (
        <div
          id="whatsapp-panel"
          role="dialog"
          aria-label={`Chat with ${siteConfig.shortName} on WhatsApp`}
          className="w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3 bg-[var(--brand-primary)] px-4 py-3 text-white">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{siteConfig.name}</p>
              <p className="text-xs text-white/80">Replies on WhatsApp</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat"
              className="-m-1 rounded-full p-1 transition-colors hover:bg-white/15"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-3 px-4 py-3">
            <ul className="flex flex-wrap gap-2">
              {whatsapp.quickReplies.map((reply) => (
                <li key={reply}>
                  <button
                    type="button"
                    onClick={() => setDraft(reply)}
                    className="rounded-full border border-[var(--brand-primary)]/30 px-3 py-1.5 text-left text-xs font-medium text-[var(--brand-primary)] transition-colors hover:bg-[var(--brand-accent)]"
                  >
                    {reply}
                  </button>
                </li>
              ))}
            </ul>

            <label htmlFor="whatsapp-message" className="sr-only">
              Message to send on WhatsApp
            </label>
            <textarea
              id="whatsapp-message"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              rows={3}
              className="w-full resize-none rounded-xl border border-black/15 px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
            />

            <a
              href={chatHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto flex w-fit max-w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Continue on WhatsApp
            </a>
            <p className="text-center text-[11px] text-[var(--brand-text-light)]">
              Opens WhatsApp with your message ready to send.
            </p>
          </div>
        </div>
      ) : null}

      {googleReview.url ? (
        <a
          href={googleReview.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/10 transition-transform active:scale-95 sm:hidden"
        >
          <Image
            src="/google-review-badge.png"
            alt={googleReview.label}
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </a>
      ) : null}

      {whatsapp.number ? (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="whatsapp-panel"
          aria-label={open ? "Close WhatsApp chat" : `Chat with ${siteConfig.shortName} on WhatsApp`}
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-transform active:scale-95",
            open ? "bg-[var(--brand-text)]" : "bg-[#25d366]"
          )}
        >
          <WhatsAppIcon className="h-7 w-7" />
        </button>
      ) : null}
    </div>
  );
}