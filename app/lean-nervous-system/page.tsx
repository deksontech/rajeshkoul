import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, ChartNoAxesCombined, CheckCircle2, Layers3, Lightbulb, Network, Target, Users, UsersRound } from "lucide-react";
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

const domains = [
  { icon: "/art/lns-icons/domain-catalytic.png", code: "A.", name: "Catalytic Core" },
  { icon: "/art/lns-icons/domain-design.png", code: "B.", name: "Design & Innovation" },
  { icon: "/art/lns-icons/domain-supply.png", code: "C.", name: "Supply Chain" },
  { icon: "/art/lns-icons/domain-manufacturing.png", code: "D.", name: "Manufacturing & Operations" },
  { icon: "/art/lns-icons/domain-quality.png", code: "E.", name: "Quality Management" },
  { icon: "/art/lns-icons/domain-energy.png", code: "F.", name: "Energy, Environment & Safety" },
  { icon: "/art/lns-icons/domain-human.png", code: "G.", name: "Human Capital" },
  { icon: "/art/lns-icons/domain-market.png", code: "H.", name: "Go-to-Market" },
  { icon: "/art/lns-icons/domain-governance.png", code: "I.", name: "Performance & Governance" },
  { icon: "/art/lns-icons/domain-outcome.png", code: "J.", name: "Outcome Performance" },
];

const outcomes = [
  { icon: "/art/lns-icons/sense.png", title: "Sense problems early", text: "Detect weak signals and emerging issues before they become disruptions." },
  { icon: "/art/lns-icons/respond.png", title: "Respond intelligently and in real time", text: "Make faster, better decisions and act with clarity across the organisation." },
  { icon: "/art/lns-icons/sustain.png", title: "Sustain performance without constant intervention", text: "Build a system that adapts, stabilises, and improves continuously." },
];

const theoryPoints = ["When systems don’t scale with success", "When firefighting replaces discipline", "When effort increases, but outcomes don’t", "When teams optimise their part, not the whole", "And more importantly, how that changes."];

const authorPillars = [
  { icon: Network, title: "Systems Thinker", text: "Transforms complexity into cohesive, enterprise-wide operating systems." },
  { icon: BarChart3, title: "Strategy to Impact", text: "Aligns strategy, operations, and execution systems to deliver measurable business outcomes." },
  { icon: Lightbulb, title: "Lean + Digital", text: "Combines lean, digital, and innovation to design simple, scalable systems that drive impact." },
  { icon: UsersRound, title: "People & Culture", text: "Builds capability, ownership, and cultures that learn, adapt and sustain performance." },
];
const discoveries = ["Why most transformation programs fail—even with the right intent", "How disconnected excellence silently destroys performance", "What it takes to move from reactive chaos to system-driven execution", "How small, local improvements can trigger enterprise-wide, self-sustaining change", "A practical maturity model with 10 groups and 65 elements across the value chain"];

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
    <section className="lns-book-story" aria-labelledby="lns-book-story-title">
      <header className="lns-story-heading">
        <h2 id="lns-book-story-title">Let Me Tell You More About <span>This Book…</span></h2>
        <div className="lns-purchase-rule" aria-hidden="true"><i /><b>◇</b><i /></div>
      </header>

      <div className="lns-story-top">
        <figure className="lns-domain-art-crop">
          <img src="/art/lns-ten-domains-transparent.png" alt="The ten interconnected domains of the Lean Nervous System" />
        </figure>

        <div className="lns-story-copy">
          <div className="lns-story-narrative">
            <div>
              <p>If your organisation is struggling to scale, the problem isn’t effort.<br />It isn’t talent. It isn’t even strategy.<br /><strong>The problem is how your system is connected.</strong></p>
              <p>Most organisations don’t fail because they lack ambition. They fail because their parts don’t work together. Functions operate in silos. Signals are delayed. Decisions depend on individuals. And as growth increases, this fragmentation turns into instability.</p>
              <p>This is where <strong>The Lean Nervous System</strong> changes the conversation.</p>
              <p>This is not a book about Lean tools, process improvement, or isolated transformation initiatives. It introduces a fundamentally different way to design organisations—one where every function is connected, every signal flows, and every action aligns.</p>
            </div>
            <blockquote><span>“</span><small>At its core is a powerful idea:</small><b>Organisations don’t rise to the level of their strategy.<br />They fall to the level of their system.</b><span>”</span></blockquote>
          </div>
          <p className="lns-story-summary">Drawing from decades of real-world transformation experience, this book introduces the <strong>Lean Nervous System</strong> — an integrated architecture that enables organisations to:</p>
          <div className="lns-outcome-grid">{outcomes.map(({ icon, title, text }) => <article key={title}><span><img src={icon} alt="" aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </div>

      <p className="lns-story-bridge"><img src="/art/lns-icons/bridge.png" alt="" aria-hidden="true" />It moves beyond fragmented improvements and presents a coherent model of enterprise maturity, built across interconnected domains — <strong>from design and supply chain to operations, people, governance, and sustainability.</strong></p>

      <div className="lns-story-panels">
        <article><div className="lns-story-panel-title"><img src="/art/lns-icons/theory.png" alt="" aria-hidden="true" /><h3>But this is not just a theory.</h3></div><p>Through the transformation journey of Vijay—an entrepreneur whose growth begins to break his own organisation—you will see what actually happens inside companies:</p><ul>{theoryPoints.map(item => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul></article>
        <article><div className="lns-story-panel-title"><img src="/art/lns-icons/discover.png" alt="" aria-hidden="true" /><h3>You will discover:</h3></div><ul>{discoveries.map(item => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul></article>
        <article className="lns-domain-list"><div className="lns-story-panel-title"><img src="/art/lns-icons/domains.png" alt="" aria-hidden="true" /><h3>The 10 Domains:</h3></div><div>{domains.map(({ icon, name }) => <p key={name}><img src={icon} alt="" aria-hidden="true" />{name}</p>)}</div></article>
      </div>

      <footer className="lns-story-footer">
        <p><img src="/art/lns-icons/leaders.png" alt="" aria-hidden="true" />This book is built for leaders who are not looking for more frameworks—but for <strong>clarity, structure, and a way forward.</strong></p>
        <div><b>THE LEAN NERVOUS SYSTEM</b><span>A Proven Way to Build Organisations That Think, Sense, and Respond as One</span></div>
        <p><img src="/art/lns-icons/inevitable.png" alt="" aria-hidden="true" />Because in the end:<strong>You don’t need more initiatives.<br />You need a system that makes excellence inevitable.</strong></p>
      </footer>
    </section>
    <section className="lns-architecture-image" aria-label="The Lean Nervous System Architecture">
      <img src="/art/lns-architecture.png" alt="The Lean Nervous System Architecture showing ten connected enterprise domains around the Lean Maturity Model" />
    </section>
    <section className="lns-curriculum-image" aria-label="Curriculum Overview: Ten Lessons in Excellence">
      <img src="/art/lns-curriculum-overview.png" alt="Curriculum overview showing ten things The Lean Nervous System will teach readers" />
    </section>
    <section className="lns-author" aria-labelledby="lns-author-title">
      <div className="lns-author-inner">
        <div className="lns-author-feature"><BookOpen aria-hidden="true" /><strong>FEATURED:</strong><span>Pre-order “The Lean Nervous System” (Coming Soon)</span></div>

        <div className="lns-author-main">
          <div className="lns-author-photo-wrap">
            <div className="lns-author-photo"><img src="/art/lns-author-portrait.png" alt="Rajesh Koul" /></div>
            <div className="lns-author-experience"><b>30+</b><strong>YEARS OF<br />EXPERIENCE</strong><i /><span>TRANSFORM<br /><em>•</em> LEAD <em>•</em> SUSTAIN</span></div>
          </div>

          <div className="lns-author-copy">
            <p className="lns-author-kicker">ABOUT THE AUTHOR</p>
            <h2 id="lns-author-title">RAJESH <span>KOUL</span></h2>
            <p className="lns-author-role">GLOBAL TRANSFORMATION LEADER <i /> ENTERPRISE SYSTEMS THINKER <i /> BUILDER OF SCALABLE EXCELLENCE</p>
            <div className="lns-author-rule" />
            <p><strong>Rajesh Koul</strong> is a global transformation leader with over three decades of experience in leading large-scale enterprise transformations, leadership development, and operational excellence across industries. His work focuses on helping organizations move beyond fragmented initiatives to build integrated, high-performing systems that sustain excellence over time.</p>
            <p>Over the years, Rajesh has worked closely with leadership teams to navigate complexity, scale operations, and unlock performance by aligning strategy, processes, people, and culture into a single, coherent system. His approach combines the principles of Lean with modern digital thinking to create organizations that are not just efficient—but adaptive, intelligent, and future-ready.</p>
            <p>In The Lean Nervous System, he brings together decades of practical experience to introduce the Lean Maturity Model (LMM)—a structured and original framework that enables leaders to diagnose organizational health, eliminate systemic disconnects, and design enterprises that continuously learn, improve, and respond as one.</p>
          </div>
        </div>

        <blockquote className="lns-author-quote"><span>“</span><div><p>Rajesh’s work is guided by a simple belief:</p><b>excellence is not achieved through effort alone—It is engineered through systems.</b></div><span>”</span></blockquote>

        <div className="lns-author-pillars">
          {authorPillars.map(({ icon: Icon, title, text }) => <article key={title}><span><Icon aria-hidden="true" /></span><div><h3>{title}</h3><i /><p>{text}</p></div></article>)}
        </div>

        <div className="lns-author-cta-row"><i /><Link href="#lns-title">EXPLORE THE LEAN NERVOUS SYSTEM <ArrowRight aria-hidden="true" /></Link><i /></div>
      </div>
    </section>
  </div>;
}
