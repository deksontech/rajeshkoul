import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, ChartNoAxesCombined, CheckCircle2, Lightbulb, Network, UsersRound } from "lucide-react";
import { LnsHeader } from "@/components/lns-header";
import { LnsHeroDeck } from "@/components/lns-hero-deck";
import { LnsFrameworkViewer } from "@/components/lns-framework-viewer";
import { LnsArchitectureNavigator } from "@/components/lns-architecture-navigator";

const actions = [
  { icon: BookOpen, title: "Don’t Just Manage. Build an Organisation That Thinks.", body: "A definitive guide to Organisational Maturity & Enterprise Health.", label: "PURCHASE THE BOOK", href: "/contact" },
  { icon: ChartNoAxesCombined, title: "Diagnose Your Organisation Like a System — Not a Guess", body: "Measure maturity across 10 domains. Identify hidden drag. Build a roadmap.", label: "ENTERPRISE HEALTH SCAN", href: "https://ehs.rajeshkoul.com/survey/test-survey-pulse" },
];

const measures = [
  { value: "10+", label: "ORIGINAL FRAMEWORKS" },
  { value: "360°", label: "ORGANISATIONAL HEALTH DIAGNOSTICS" },
];

const curriculumLessons = [
  { icon: "/art/lns-icons/domain-design.png", lead: "Pinpoint where", highlight: "hidden disconnects", tail: "are holding your organization back." },
  { icon: "/art/lns-icons/domain-catalytic.png", lead: "Unlock the", highlight: "Catalytic Core", tail: "that connects your entire enterprise." },
  { icon: "/art/lns-icons/domains.png", lead: "Diagnose dysfunction through a powerful", highlight: "maturity assessment.", tail: "" },
  { icon: "/art/lns-icons/sense.png", lead: "Sense critical problems early —", highlight: "no more surprises,", tail: "only signals." },
  { icon: "/art/lns-icons/domain-governance.png", lead: "Synchronize strategy, operations, and people to", highlight: "move as one.", tail: "" },
  { icon: "/art/lns-icons/respond.png", lead: "Establish a system that", highlight: "adapts effortlessly", tail: "to change and growth." },
  { icon: "/art/lns-icons/bridge.png", lead: "Turn silos into a", highlight: "real-time network", tail: "that aligns action." },
  { icon: "/art/lns-icons/domain-quality.png", lead: "Install systems that", highlight: "protect quality", tail: "and prevent waste." },
  { icon: "/art/lns-icons/sustain.png", lead: "Ease", highlight: "scaling", tail: "without adding chaos or burnout." },
  { icon: "/art/lns-icons/domain-energy.png", lead: "Cultivate a", highlight: "learning ecosystem", tail: "that continuously evolves." },
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

const footerResources = [
  { eyebrow: "READ", title: "The Lean Nervous System", text: "The definitive guide to connected, adaptive and resilient enterprises.", image: "/art/lns-footer-book.png", href: "#purchase-options", tone: "dark" },
  { eyebrow: "DIAGNOSE", title: "Enterprise Health Scan", text: "See organisational maturity clearly and identify what must evolve next.", image: "/art/lns-footer-health-scan.png", href: "/contact", tone: "light" },
  { eyebrow: "APPLY", title: "Frameworks & Models", text: "Turn the Lean Nervous System into disciplined, repeatable execution.", image: "/art/lns-footer-playbook.png", href: "/contact", tone: "dark" },
  { eyebrow: "EXPLORE", title: "Insights & Resources", text: "Practical tools for diagnosis, alignment, innovation and maturity.", image: "/art/lns-footer-resources.png", href: "/blogs", tone: "light" },
];

export default function LeanNervousSystem() {
  return <div className="lns-page">
    <LnsHeader />
    <div className="lns-hero-stage"><main className="lns-hero">
      <div className="lns-hero-shade" aria-hidden="true" />
      <p className="lns-hero-statement">Move Beyond Tools. <span>Diagnose Maturity.</span> Design Self-Propagating Excellence.</p>
      <div className="lns-request-wrap"><LnsFrameworkViewer /></div>
      <section className="lns-intro" aria-labelledby="lns-title">
        <p className="lns-kicker">THE DEFINITIVE GUIDE <span /></p>
        <h1 id="lns-title">The Lean<br /><em>Nervous System</em></h1>
        <LnsHeroDeck />
      </section>
      <div className="lns-book-product" aria-label="The Lean Nervous System book">
        <img src="/art/lns-book-cutout.png" alt="The Lean Nervous System by Rajesh Koul" />
      </div>
      <section className="lns-action-grid" aria-label="Lean Nervous System pathways">
        {actions.map(({ icon: Icon, title, body, label, href }) => <article className="lns-action-card" key={title}><Icon aria-hidden="true" /><h2>{title}</h2><p>{body}</p><Link href={href}>{label} <ArrowRight aria-hidden="true" /></Link></article>)}
      </section>
      <section className="lns-measures" aria-label="Lean Nervous System highlights">
        <div className="lns-measures-inner">
          <article><strong>{measures[0].value}</strong><h2>{measures[0].label}</h2></article>
          <p className="lns-mantra">“Build Organisations That Think, Sense, and Respond — As One System”</p>
          <article><strong>{measures[1].value}</strong><h2>{measures[1].label}</h2></article>
        </div>
      </section>
    </main></div>
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

      <footer className="lns-story-footer" id="lns-infographic-footer">
        <p><img src="/art/lns-icons/leaders.png" alt="" aria-hidden="true" /><span>This book is built for leaders who are not looking for more frameworks—but for <strong>clarity, structure, and a way forward.</strong></span></p>
        <div><b>THE LEAN NERVOUS SYSTEM</b><span>A Proven Way to Build Organisations That Think, Sense, and Respond as One</span></div>
        <p><img src="/art/lns-icons/inevitable.png" alt="" aria-hidden="true" /><span>Because in the end:<strong>You don’t need more initiatives.<br />You need a system that makes excellence inevitable.</strong></span></p>
      </footer>
    </section>
    <section className="lns-architecture" aria-labelledby="lns-architecture-title">
      <header className="lns-architecture-heading">
        <p>AN INTEGRATED MATURITY MODEL</p>
        <h2 id="lns-architecture-title">The Lean Nervous System <span>Architecture</span></h2>
        <p>A connected enterprise system where foundational discipline, sensing capability, execution, governance, and market responsiveness work together as one.</p>
      </header>
      <LnsArchitectureNavigator />
    </section>
    <section className="lns-curriculum" aria-labelledby="lns-curriculum-title">
      <header className="lns-curriculum-heading">
        <p>CURRICULUM OVERVIEW</p>
        <h2 id="lns-curriculum-title">10 Things <span>This Book Will Teach You</span></h2>
        <p>Master the architecture of excellence</p>
      </header>
      <div className="lns-curriculum-grid">
        {curriculumLessons.map(({ icon, lead, highlight, tail }, index) => <article key={highlight}>
          <div className="lns-curriculum-card-top"><span><img src={icon} alt="" aria-hidden="true" /></span><b>{String(index + 1).padStart(2, "0")}</b></div>
          <p>{lead} <strong>{highlight}</strong>{tail ? ` ${tail}` : ""}</p>
          <i aria-hidden="true" />
        </article>)}
      </div>
      <footer className="lns-curriculum-closing">
        <p>…and most importantly,<br />Build an organization that</p>
        <strong>thinks, senses &amp; responds as one.</strong>
      </footer>
    </section>
    <section className="lns-purchase lns-purchase-dark" aria-labelledby="lns-purchase-dark-title">
      <div className="lns-purchase-inner">
        <h2 id="lns-purchase-dark-title">Get Your Copy of <span>The Lean Nervous System</span></h2>
        <div className="lns-purchase-rule" aria-hidden="true"><i /><b>◇</b><i /></div>
        <div className="lns-purchase-links">
          <Link href="/contact">Amazon</Link>
          <Link href="/contact">Flipkart</Link>
          <Link href="/contact">Kindle</Link>
        </div>
        <p><em>Outside India?</em> <Link href="/contact">Click here for international editions.</Link></p>
      </div>
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
    <footer className="lns-footer" aria-labelledby="lns-footer-title">
      <div className="lns-footer-inner">
        <header className="lns-footer-heading">
          <div><p>CONTINUE THE JOURNEY</p><h2 id="lns-footer-title">From insight to <span>enterprise excellence.</span></h2></div>
          <p>Explore the book, diagnose organisational health, and put the Lean Nervous System into practice.</p>
        </header>

        <div className="lns-footer-resources">
          {footerResources.map((resource) => <Link className="lns-footer-card" href={resource.href} key={resource.title}>
            <figure className={`lns-footer-image lns-footer-image--${resource.tone}`}><img src={resource.image} alt={resource.title} /></figure>
            <div><small>{resource.eyebrow}</small><h3>{resource.title}</h3><p>{resource.text}</p><span>EXPLORE <ArrowRight aria-hidden="true" /></span></div>
          </Link>)}
        </div>

        <section className="lns-footer-cta" aria-label="Request the Lean Nervous System framework">
          <div><small>BUILD THE SYSTEM. NOT ANOTHER INITIATIVE.</small><p>Ready to move from fragmented improvement to self-sustaining excellence?</p></div>
          <Link href="/contact">REQUEST THE LNS FRAMEWORK <ArrowRight aria-hidden="true" /></Link>
        </section>

        <div className="lns-footer-bottom">
          <div className="lns-footer-brand"><b>RAJESH KOUL</b><span>HUMAN-CENTRED TRANSFORMATION</span></div>
          <nav aria-label="Lean Nervous System footer navigation"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/lean-nervous-system">The Lean Nervous System</Link><Link href="/blogs">Insights</Link><Link href="/contact">Contact</Link></nav>
          <p>© 2026 Rajesh Koul <i /> <span>Privacy Policy</span> <i /> <span>Terms of Use</span></p>
        </div>
      </div>
    </footer>
  </div>;
}
