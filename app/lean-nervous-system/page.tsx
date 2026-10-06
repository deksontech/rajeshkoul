import Link from "next/link";
import { ArrowRight, BookOpen, ChartNoAxesCombined, Layers3, Target, Users } from "lucide-react";
import { LnsHeader } from "@/components/lns-header";

const actions = [
  { icon: BookOpen, title: "Don’t Just Manage. Build an Organisation That Thinks.", body: "A definitive guide to Organisational Maturity & Enterprise Health.", label: "PURCHASE THE BOOK", href: "/contact" },
  { icon: ChartNoAxesCombined, title: "Diagnose Your Organisation Like a System — Not a Guess.", body: "Measure maturity across 10 domains. Identify hidden drag. Build a roadmap.", label: "ENTERPRISE HEALTH SCAN", href: "/contact" },
];

const measures = [
  { icon: Layers3, value: "10+", label: "ORIGINAL FRAMEWORKS", note: "Practical, field-tested and easy to apply" },
  { icon: Users, value: "65", label: "ELEMENTS ACROSS THE VALUE CHAIN", note: "From strategy to operations, people to outcomes" },
  { icon: Target, value: "360°", label: "ORGANISATIONAL MATURITY DIAGNOSTICS", note: "See the full picture. Find what to fix. Prioritise what matters." },
];

export default function LeanNervousSystem() {
  return <div className="lns-page">
    <LnsHeader />
    <main className="lns-hero">
      <div className="lns-hero-shade" aria-hidden="true" />
      <div className="lns-request-wrap"><Link className="lns-request" href="/contact">Request for<br />The LNS Framework <ArrowRight aria-hidden="true" /></Link></div>
      <section className="lns-intro" aria-labelledby="lns-title">
        <p className="lns-kicker">THE DEFINITIVE GUIDE <span /></p>
        <h1 id="lns-title">The Lean<br /><em>Nervous System</em></h1>
        <div className="lns-deck"><h2>“The Operating System for Enterprise Transformation”</h2><p>The Lean Nervous System — enabling organisations to sense early,<br className="lns-desktop-break" /> respond intelligently, and sustain performance.</p></div>
      </section>
      <section className="lns-action-grid" aria-label="Lean Nervous System pathways">
        {actions.map(({ icon: Icon, title, body, label, href }) => <article className="lns-action-card" key={title}><Icon aria-hidden="true" /><h2>{title}</h2><p>{body}</p><Link href={href}>{label} <ArrowRight aria-hidden="true" /></Link></article>)}
      </section>
      <section className="lns-measures" aria-label="Lean Nervous System highlights">
        <div className="lns-measures-inner">{measures.map(({ icon: Icon, value, label, note }) => <article key={label}><span className="lns-measure-icon"><Icon aria-hidden="true" /></span><div><strong>{value}</strong><h2>{label}</h2><p>{note}</p></div></article>)}</div>
        <p className="lns-mantra"><span />“Build Organisations That Think, Sense, and Respond — As One System”<span /></p>
      </section>
    </main>
    <section className="lns-purchase" id="purchase-options" aria-labelledby="lns-purchase-title">
      <div className="lns-purchase-inner">
        <h2 id="lns-purchase-title">Get Your Copy of <span>The Lean Nervous System</span></h2>
        <div className="lns-purchase-rule" aria-hidden="true"><i /><b>◇</b><i /></div>
        <div className="lns-purchase-links">
          <Link href="/contact">Amazon</Link>
          <Link href="/contact">Flipkart</Link>
          <Link href="/contact">Kindle</Link>
        </div>
        <p><em>Outside India?</em> <Link href="/contact">Click here for international editions.</Link></p>
      </div>
    </section>
  </div>;
}
