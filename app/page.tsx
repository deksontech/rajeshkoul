import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, ChevronDown, Cog, Globe2, Handshake, Layers3, Leaf, Lightbulb, Network, Target, Users } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ExpertiseAccordion } from "@/components/expertise-accordion";

const pillars = [
  { n: "Pillar 01", title: "IGNITING PURPOSEFUL TRANSFORMATIONS", text: "My first pillar focuses on igniting meaningful transformations by embedding a deep sense of purpose in individuals and organizations. Through tailored strategies and coaching, I unlock latent potential, align goals with a greater mission, and build a shared commitment to impactful change at every level.", image: "/art/mission-card-1.jpg" },
  { n: "Pillar 02", title: "CULTIVATING COLLABORATIVE INNOVATION MINDSETS", text: "The second pillar revolves around cultivating collaborative innovation mindsets. I create environments where diverse perspectives converge, nurturing a culture of creativity, collaboration, and shared problem-solving. By leveraging tools and methodologies, I ensure they contribute to collective intelligence and sustainable value creation.", image: "/art/mission-card-2.jpg" },
  { n: "Pillar 03", title: "GUIDING DIGITAL TRANSFORMATION WITH MEANINGFUL LEADERSHIP", text: "My third pillar centers on guiding digital transformation initiatives with meaningful leadership. Through mentorship, workshops, and resources, I equip individuals with the skills and mindset for effective digital transformation. Technology is embraced as an enabler, with each initiative driven by a clear sense of mission, aligning with the broader vision of transformative success.", image: "/art/mission-card-3.jpg" },
];

export default function Home() {
  return <>
    <div className="home-navigation"><SiteHeader /></div>
    <main>
      <div className="home-hero-stage"><section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">IDEAS <i/> INSIGHTS <i/> EXECUTION <i/> LASTING VALUE</p>
          <h1>Scaling <span>Enterprises</span><br/>Through <span>Lean, Digital</span> &<br/>AI-Led Transformation</h1>
          <div className="rule" />
          <p className="lead">Helping CXOs and enterprise leaders unlock growth,<br className="desktop"/> improve margins, and build scalable operations<br className="desktop"/> through Lean, Industry 4.0, and AI-led transformation.</p>
          <p className="italic">Bridging strategy and execution through 30 years of<br className="desktop"/> transformation leadership across global enterprises.</p>
          <div className="actions"><Link className="button" href="#expertise">Enterprise Health Lab <ArrowRight/></Link><Link className="button outline" href="#featured-book">Explore My Books <ArrowRight/></Link></div>
          <p className="trust">TRUSTED BY LEADERS ACROSS MANUFACTURING · CONSULTING · GLOBAL ENTERPRISES</p>
        </div>
        <div className="hero-art"><Image src="/art/home-hero-portrait-full.png" alt="Rajesh Koul" fill priority sizes="(max-width: 800px) 100vw, 55vw" style={{ objectFit: "contain", objectPosition: "right bottom" }} /></div>
      </section></div>

      <section className="section author-section" id="author">
        <div className="featured-strip"><BookOpen/><b>FEATURED</b><span/>Pre-order “The Lean Nervous System” (Coming Soon)<ArrowRight/></div>
        <div className="author-grid">
          <div className="experience-card"><strong>30+</strong><b>YEARS OF EXPERIENCE</b><div className="rule"/><small>TRANSFORM · LEAD · SUSTAIN</small></div>
          <div><p className="eyebrow blue">ABOUT THE AUTHOR</p><h2>RAJESH KOUL</h2><p className="tagline">GLOBAL TRANSFORMATION LEADER <i/> ENTERPRISE SYSTEMS THINKER <i/> BUILDER OF SCALABLE EXCELLENCE</p>
            <p><b>Rajesh Koul</b> is a global transformation leader with over three decades of experience in leading large-scale enterprise transformations, leadership development, and operational excellence. He has driven impact across industrial manufacturing, financial services, healthcare, GCCs, and government sectors.</p>
            <p>Having led cross-border programs for Fortune 500 organisations, he builds transformation functions from the ground up—helping leaders translate strategy into execution, scale with resilience, and create lasting value.</p>
            <p>Rajesh blends Lean, digital, and change leadership to design connected, adaptive, and future-ready operating systems.<br/>He partners with CXOs, Boards, and public sector leaders to shape organisations that run better, compete stronger, and improve continuously.</p>
          </div>
        </div>
        <div className="mission-bar"><Target/><div><b>MISSION</b><p>To help mid-sized organisations — the backbone of the Indian economy — grow with confidence, compete globally, and evolve into resilient, world-class enterprises through disciplined, human-centred transformation, with a strong focus on building connected, adaptive, and future-ready operating systems.</p></div></div>
        <div className="mini-grid"><Mini icon={<Network/>} title="SYSTEMS THINKER" text="Transforms complexity into cohesive, enterprise-wide operating systems."/><Mini icon={<BarChart3/>} title="STRATEGY TO IMPACT" text="Aligns strategy, operations, and people for measurable results."/><Mini icon={<Lightbulb/>} title="LEAN + DIGITAL" text="Combines lean, digital, and innovation for scalable impact."/><Mini icon={<Users/>} title="PEOPLE & CULTURE" text="Builds capability, ownership, and cultures that learn and adapt."/></div>
        <div className="author-wave-art" aria-hidden="true" />
        <Link className="button centered author-cta" id="author-cta" href="/lean-nervous-system">Explore The Lean Nervous System <ArrowRight/></Link>
        <div className="author-bottom-nav" id="author-bottom"><p>IDEAS <i/> INSIGHTS <i/> EXECUTION <i/> LASTING VALUE</p><Link href="#expertise" aria-label="Continue to areas of expertise"><ChevronDown/></Link></div>
      </section>

      <section className="section split-section expertise-section" id="expertise">
        <div className="expertise-copy"><p className="eyebrow">AREAS OF EXPERTISE</p><h2 className="display">From Strategy to Execution<br/><span>Across the Enterprise</span></h2>
          <ExpertiseAccordion />
          <Link className="button" href="/about">See Full Profile <ArrowRight/></Link>
        </div>
        <div className="image-panel"><Image src="/art/home-expertise-portrait-full.png" alt="Rajesh Koul" fill sizes="(max-width: 800px) 100vw, 47vw" style={{ objectFit: "contain", objectPosition: "right bottom" }}/></div>
      </section>

      <section className="section split-section book-section" id="featured-book">
        <div><p className="eyebrow">FEATURED BOOK</p><h2 className="display">Digi-e-Lean <em>(Manual)</em></h2><h3>How Industry 4.0 and Lean Thinking<br/>can Revolutionize Organizations</h3>
          <p className="lead">In today’s swiftly evolving business landscape, the melding of lean methodology with digital transformation becomes crucial for competitiveness. “Digi-e-Lean” is not just a book but a culmination of three decades of transformational expertise, presenting an avant-garde approach to organizational agility and innovation. It offers a groundbreaking fusion of Lean and Industry 4.0 principles to help organizations achieve higher performance, greater efficiency, and sustainable growth.</p>
          <div className="book-benefits"><b><Cog/><span>Real-World<br/>Frameworks</span></b><b><BarChart3/><span>Practical<br/>Case Examples</span></b><b><Lightbulb/><span>Actionable<br/>Implementation</span></b></div>
          <button className="button">Request for Frameworks & Models <ArrowRight/></button>
        </div>
        <div className="image-panel book-art-panel" tabIndex={0}><Image src="/art/home-book-mockup.png" alt="Digi-e-Lean book by Rajesh Koul" fill sizes="(max-width: 800px) 100vw, 50vw"/></div>
        <div className="book-bottom-nav"><p><span>LEAN</span><i/><span>INDUSTRY 4.0</span><i/><span>TRANSFORMATION</span><i/><span>COMPETITIVENESS</span><i/><span>SUSTAINABLE GROWTH</span></p><b><i/>IDEAS TODAY.<br/>HIGHER PERFORMANCE TOMORROW.</b></div>
      </section>

      <section className="section digilean nexus-section" id="digilean-nexus">
        <div className="nexus-copy"><p className="eyebrow">DIGITAL × LEAN × INNOVATION</p><h2>DIGILEAN <span>NEXUS</span></h2><h3>MODERN METHODS<br/>TIMELESS RESULTS</h3><p>Integrating the discipline of Lean with the power of digital transformation and innovation to create adaptive, resilient and high-performing organisations.</p></div>
        <div className="nexus-left-art" aria-hidden="true"><Image src="/art/home-nexus-left-art.png" alt="" fill sizes="36vw"/></div>
        <div className="image-panel"><Image src="/art/digilean.jpg" alt="Digital Lean Innovation pathway" fill sizes="(max-width: 800px) 100vw, 64vw"/></div>
      </section>

      <section className="section mission-section" id="mission">
        <div className="mission-heading"><div><p className="eyebrow">MISSION STATEMENT</p><h2><span className="mission-first">EMPOWERING</span><br/><span className="mission-gradient">PURPOSE-LED,</span><br/><span className="mission-final">LEAN & DIGITAL TRANSFORMATION</span></h2><p>People <i/> Processes <i/> Innovation <i/> Sustainable Impact</p></div><div className="mission-intro"><p>As a Transformation Specialist, I empower individuals and organizations to embark on <b>purpose-driven journeys of growth and evolution.</b></p><p>Through dedication, I instill profound purpose, foster engagement, and promote collaborative innovation, guiding lean and digital transformation initiatives to navigate change, inspire innovation, and lead transformative paths to sustained success in today&apos;s evolving landscape.</p></div></div>
        <div className="pillar-grid">{pillars.map((p,i)=><article key={p.n}><Image src={p.image} alt="" width={430} height={190}/><span className="pillar-icon">{[Target,Users,BarChart3].map((Icon,j)=>j===i?<Icon key={j}/>:null)}</span><div><small>{p.n}</small><h3>{p.title}</h3><p>{p.text}</p><a href="#mission">LEARN MORE <ArrowRight/></a></div></article>)}</div>
      </section>

      <PillarStatement />

      <section className="section core-section"><p className="eyebrow centered-label">CORE EXPERTISE</p><h2>End-to-end Growth, Transformation & <span>Value Creation</span></h2><p className="subtitle">Ideas. Capabilities. Execution. Measurable Impact.</p>
        <div className="core-panel"><div className="core-tabs">{["Growth & Strategy","Shared Services & GCC","Tech Transformation","ESG & Value Creation","Operational Excellence"].map((x,i)=><button className={i===0?"active":""} aria-disabled={i!==0} key={x}><b>0{i+1}</b>{x}<ArrowRight/></button>)}</div>
          <div className="core-content"><h3><b>01</b> Growth & Strategy</h3><p>Designing growth blueprints that align markets and offerings.</p><div className="core-cards"><Mini icon={<BarChart3/>} title="Sales Growth Strategy" text="Predictable revenue acceleration and performance rhythms."/><Mini icon={<Globe2/>} title="Market Expansion" text="Structured entry plans for new geographies and white spaces."/><Mini icon={<Handshake/>} title="Strategic Alliances" text="Governing partnerships that unlock ecosystem capabilities."/><Mini icon={<Layers3/>} title="M&A Integration" text="Aligning culture and operating models for synergy."/></div></div>
        </div>
      </section>

      <section className="blueprint-section" id="lean-blueprint">
        <header className="blueprint-header">
          <p className="blueprint-eyebrow"><i/>EXPLORE THE LEAN NERVOUS SYSTEM<i/></p>
          <h2>A Practical Blueprint for <span>Sustainable Excellence</span></h2>
          <p>Rajesh Koul, a seasoned practitioner in Lean and Industry 4.0 methodologies, is recognized as a thought leader<br className="desktop"/> in business and transformation. As an award-winning business transformation expert and author, his works delve into<br className="desktop"/> facets of business advisory, transformation, program management, digital transformation, and Lean methodologies.</p>
        </header>
        <div className="blueprint-artworks">
          <div className="blueprint-placeholder"><Image className="blueprint-cover" src="/art/lean-nervous-system-front-cover.jpg" alt="Front cover of The Lean Nervous System by Rajesh Koul" width={1066} height={1600} sizes="(max-width: 768px) calc(100vw - 76px), 346px" /></div>
          <div className="blueprint-placeholder"><Image className="blueprint-cover" src="/art/lean-nervous-system-back-cover.jpg" alt="Back cover of The Lean Nervous System by Rajesh Koul" width={1000} height={1600} sizes="(max-width: 768px) calc(100vw - 76px), 346px" /></div>
        </div>
        <blockquote className="blueprint-quote"><span aria-hidden="true">“</span><p>Organizations, like<br/>human beings, need a<br/>nervous system—one that<br/>senses, responds, learns,<br/>and evolves.</p><i aria-hidden="true"/></blockquote>
      </section>

      <section className="leadership-section" id="transformation-leadership">
        <aside className="leadership-side leadership-side--left" aria-label="Transformation priorities"><span>PEOPLE</span><span>PROCESSES</span><span>INNOVATION</span><span>SUSTAINABILITY</span><i/></aside>
        <aside className="leadership-side leadership-side--right" aria-label="Transformation outcomes"><span>SIMPLIFY</span><span>TRANSFORM</span><span>ENABLE</span><span>GROW</span><i/></aside>
        <header className="leadership-header">
          <p className="leadership-kicker">EXPERTISE <b/> EXPERIENCE <b/> EXCELLENCE</p>
          <i className="leadership-accent" aria-hidden="true" />
          <h2>Global Transformation Leader<br/>for <span>Lean, Digital &amp; Sustainable Growth</span></h2>
          <p>I help organizations simplify complexity, build lean and digital operations, and achieve<br className="desktop"/> sustainable performance through proven frameworks and deep expertise. My 30+ years<br className="desktop"/> of experience at enterprise and MSME levels is dedicated to building the ‘Lean Nervous System’.</p>
        </header>
        <div className="leadership-actions">
          <Link className="leadership-button leadership-button--primary" href="/lean-nervous-system">BUILD AN INTELLIGENT ORGANIZATION <ArrowRight/></Link>
          <Link className="leadership-button leadership-button--outline" href="#connect">CONNECT FOR INSIGHTS <ArrowRight/></Link>
        </div>
        <div className="leadership-benefits" aria-label="Transformation benefits">
          <div><span><Users/></span><p>Work across<br/>enterprises and MSMEs</p></div>
          <div><span><BarChart3/></span><p>Drive measurable<br/>business impact</p></div>
          <div><span><Leaf/></span><p>Enable resilient,<br/>future-ready organizations</p></div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}

function PillarStatement() {
  return <section className="pillar-statement-image" id="pillar-summary">
    <Image src="/art/home-pillar-statement-full.png" alt="Through these pillars, my mission is to catalyze individual and organizational growth, fostering purpose, engagement, and innovation." width={2103} height={748} sizes="100vw" />
    <div className="pillar-statement-mobile">
      <p>Through these pillars, my mission is to catalyze <strong>individual and organizational growth</strong>, fostering <strong>purpose, engagement, and innovation</strong> as the cornerstones of transformative journeys in today&apos;s dynamic world.</p>
      <i aria-hidden="true" />
    </div>
  </section>
}

function Mini({icon,title,text}:{icon:React.ReactNode,title:string,text:string}) { return <div className="mini-card"><span>{icon}</span><div><b>{title}</b><p>{text}</p></div></div> }
