"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";

const placeholderPages = [
  "/reviews/reinventing-strategy/page-1.jpg",
  "/reviews/reinventing-strategy/page-2.jpg",
  "/reviews/reinventing-strategy/page-3.jpg",
];

export function LnsFrameworkViewer() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!open) return;

    const stop = (event: Event) => event.preventDefault();
    const stopKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if ((event.ctrlKey || event.metaKey) && ["c", "s", "p", "u"].includes(event.key.toLowerCase())) {
        event.preventDefault();
      }
    };

    document.body.classList.add("lns-reader-open");
    document.addEventListener("contextmenu", stop);
    document.addEventListener("copy", stop);
    document.addEventListener("cut", stop);
    document.addEventListener("dragstart", stop);
    document.addEventListener("keydown", stopKeys);

    return () => {
      document.body.classList.remove("lns-reader-open");
      document.removeEventListener("contextmenu", stop);
      document.removeEventListener("copy", stop);
      document.removeEventListener("cut", stop);
      document.removeEventListener("dragstart", stop);
      document.removeEventListener("keydown", stopKeys);
    };
  }, [open]);

  return <>
    <button className="lns-request" type="button" onClick={() => { setPage(0); setOpen(true); }}>
      Request for The LNS Framework
    </button>
    {open && <div className="lns-framework-modal" role="dialog" aria-modal="true" aria-labelledby="lns-framework-title" onContextMenu={event => event.preventDefault()}>
      <div className="lns-framework-backdrop" aria-hidden="true" onClick={() => setOpen(false)} />
      <section className="lns-framework-reader">
        <header>
          <div>
            <p><ShieldCheck aria-hidden="true" /> VIEW-ONLY FRAMEWORK</p>
            <h2 id="lns-framework-title">The Lean Nervous System Framework</h2>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close framework reader"><X aria-hidden="true" /></button>
        </header>
        <div className="lns-framework-canvas">
          <figure>
            <Image src={placeholderPages[page]} width={1920} height={1080} alt={`Lean Nervous System framework preview, page ${page + 1} of ${placeholderPages.length}`} draggable={false} priority sizes="(max-width: 1000px) 94vw, 1200px" />
            <span aria-hidden="true" />
          </figure>
        </div>
        <footer>
          <p>Preview document · downloading, printing and copying are disabled</p>
          <div>
            <button type="button" onClick={() => setPage(current => Math.max(0, current - 1))} disabled={page === 0} aria-label="Previous page"><ChevronLeft aria-hidden="true" /></button>
            <span>{page + 1} / {placeholderPages.length}</span>
            <button type="button" onClick={() => setPage(current => Math.min(placeholderPages.length - 1, current + 1))} disabled={page === placeholderPages.length - 1} aria-label="Next page"><ChevronRight aria-hidden="true" /></button>
          </div>
        </footer>
      </section>
    </div>}
  </>;
}
