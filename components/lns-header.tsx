"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- Vinext production RSC navigation is incompatible with next/link in this deployment. */

import Image from "next/image";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [["Home", "/"], ["About", "/about"], ["The Lean Nervous System", "/lean-nervous-system"], ["Blog", "/blogs"], ["Contact Me", "/contact"]];
const literary = [["Book Review", "/book-review"], ["Personal Leadership & Coaching", "/personal-leadership-coaching"], ["Courses & Frameworks", "/courses"], ["Industry & Campus Talks", "/industry-campus-talks"]];

export function LnsHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <header className="lns-header">
    <a className="lns-logo" href="/" aria-label="Rajesh Koul home"><Image src="/art/rajesh-koul-wordmark.svg" alt="Rajesh Koul — Building Human-Centered Systems" width={1200} height={420} priority /></a>
    <button className="lns-menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? "open" : ""} aria-label="Primary navigation">
      {nav.slice(0, 4).map(([label, href]) => <a className={href === "/lean-nervous-system" ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
      <div className="lns-dropdown"><button type="button" aria-haspopup="true">Literary Lounge <ChevronDown aria-hidden="true" /></button><div className="lns-submenu">{literary.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</div></div>
      <a href={nav[4][1]} onClick={() => setOpen(false)}>{nav[4][0]}</a>
    </nav>
    <a className="lns-search" href="/blogs" aria-label="Search insights"><Search aria-hidden="true" /></a>
  </header>;
}
