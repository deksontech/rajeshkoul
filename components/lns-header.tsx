"use client";

import Link from "next/link";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useState } from "react";

const nav = [["Home", "/"], ["About", "/about"], ["The Lean Nervous System", "/lean-nervous-system"], ["Blog", "/blogs"], ["Contact Me", "/contact"]];
const literary = [["Book Review", "/book-review"], ["Personal Leadership & Coaching", "/personal-leadership-coaching"], ["Courses & Frameworks", "/courses"], ["Industry & Campus Talks", "/industry-campus-talks"]];

export function LnsHeader() {
  const [open, setOpen] = useState(false);
  return <header className="lns-header">
    <Link className="lns-logo" href="/" aria-label="Rajesh Koul home"><span className="lns-logo-mark">Rk</span><span className="lns-logo-name">Rajesh<br />Koul</span></Link>
    <button className="lns-menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? "open" : ""} aria-label="Primary navigation">
      {nav.slice(0, 4).map(([label, href]) => <Link className={href === "/lean-nervous-system" ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <div className="lns-dropdown"><Link href="/literary-lounge" onClick={() => setOpen(false)}>Literary Lounge <ChevronDown aria-hidden="true" /></Link><div className="lns-submenu">{literary.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}</div></div>
      <Link href={nav[4][1]} onClick={() => setOpen(false)}>{nav[4][0]}</Link>
    </nav>
    <Link className="lns-search" href="/blogs" aria-label="Search insights"><Search aria-hidden="true" /></Link>
  </header>;
}
