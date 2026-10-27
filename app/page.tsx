import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, ChevronDown, Cog, Leaf, Lightbulb, Network, Target, Users } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ExpertiseAccordion } from "@/components/expertise-accordion";
import { CoreExpertiseTabs } from "@/components/core-expertise-tabs";
import { BlueprintBooks } from "@/components/blueprint-books";

const pillars = [
  { n: "Pillar 01", icon: Target, outcome: "Purpose → Alignment", title: "Igniting Purposeful Transformations", text: "My first pillar focuses on igniting meaningful transformations by embedding a deep sense of purpose in individuals and organizations. Through tailored strategies and coaching, I unlock latent potential, aligning roles with a greater mission. This approach fosters engagement and a shared commitment to impactful change at every level, creating a ripple effect of positive transformation." },
  { n: "Pillar 02", icon: Users, outcome: "Collaboration → Innovation", title: "Cultivating Collaborative Innovation Mindsets", text: "The second pillar revolves around cultivating collaborative innovation mindsets. I create environments where diverse perspectives converge, nurturing a culture valuing collaboration, creativity, and shared problem-solving. Empowering individuals with tools and methodologies, I ensure they contribute to the organization's collective intelligence, making innovation a natural outcome of purposeful collaboration." },
  { n: "Pillar 03", icon: Network, outcome: "Digital → Sustainable Impact", title: "Guiding Digital Transformation with Meaningful Leadership", text: "My third pillar centers on guiding digital transformation initiatives with meaningful leadership. Through mentorship, workshops, and resources, I equip individuals with the skills and mindset for effective digital transformation. Technology is embraced as an enabler, with each digital initiative driven by a clear sense of mission, aligning with the broader vision of transformative success." },
];

export default function Home() {
  return <div className="home-page-shell">
    <div className="home-navigation"><SiteHeader /></div>
    <main className="home-page">
      <div className="home-hero-stage"><section className="hero home-hero">
        <div className="hero-copy">
          <h1><b>Scaling <span>Enterprises</span> Through</b><b><span>Lean, Digital</span> &amp; AI-Led</b><b>Transformation</b></h1>
          <p className="lead">Helping CXOs and enterprise leaders unlock growth,<br className="desktop"/> improve margins, and build scalable operations<br className="desktop"/> through Lean, Industry 4.0, and AI-led transformation.</p>
          <div className="actions"><Link className="button" href="#expertise">Enterprise Health Lab <ArrowRight/></Link><Link className="button outline" href="#featured-book">Explore My Books <ArrowRight/></Link></div>
          <p className="italic">Bridging strategy and execution through 30 years of transformation leadership across global enterprises.</p>
          <p className="trust"><span>TRUSTED BY LEADERS ACROSS</span><b>MANUFACTURING · CONSULTING · GLOBAL ENTERPRISES</b></p>
        </div>
        <div className="hero-art"><Image src="/art/home-hero-portrait-full.png" alt="Rajesh Koul" fill priority sizes="(max-width: 800px) 100vw, 55vw" style={{ objectFit: "contain", objectPosition: "center bottom" }} /></div>
      </section></div>

      <section className="section author-section" id="author">
        <div className="featured-strip"><BookOpen/><b>FEATURED</b><span/>Pre-order “The Lean Nervous System” (Coming Soon)<ArrowRight/></div>
        <div className="author-grid">
          <div className="experience-card"><strong>30+</strong><b>YEARS OF EXPERIENCE</b><small>TRANSFORM · LEAD · SUSTAIN</small></div>
          <div><p className="eyebrow blue">ABOUT THE AUTHOR</p><h2>RAJESH KOUL</h2><p className="tagline">GLOBAL TRANSFORMATION LEADER <i/> ENTERPRISE SYSTEMS THINKER <i/> BUILDER OF SCALABLE EXCELLENCE</p>
            <p><b>Rajesh Koul</b> is a global transformation leader with over three decades of experience in leading large-scale enterprise transformations, leadership development, and operational excellence. He has driven impact across industrial manufacturing, financial services, healthcare, GCCs, and government sectors.</p>
            <p>Having led cross-border programs for Fortune 500 organisations, he builds transformation functions from the ground up—helping leaders translate strategy into execution, scale with resilience, and create lasting value.</p>
            <p>Rajesh blends Lean, digital, and change leadership to design connected, adaptive, and future-ready operating systems.<br/>He partners with CXOs, Boards, and public sector leaders to shape organisations that run better, compete stronger, and improve continuously.</p>
          </div>
        </div>
        <div className="mission-bar"><Target/><div><b>MISSION</b><p>To help mid-sized organisations — the backbone of the Indian economy — grow with confidence, compete globally, and evolve into resilient, world-class enterprises through disciplined, human-centred transformation, with a strong focus on building connected, adaptive, and future-ready operating systems.</p></div></div>
        <div className="mini-grid"><Mini icon={<Network/>} title="SYSTEMS THINKER" text="Transforms complexity into cohesive, enterprise-wide operating systems."/><Mini icon={<BarChart3/>} title="STRATEGY TO IMPACT" text="Aligns strategy, operations, and people for measurable results."/><Mini icon={<Lightbulb/>} title="LEAN + DIGITAL" text="Combines lean, digital, and innovation for scalable impact."/><Mini icon={<Users/>} title="PEOPLE & CULTURE" text="Builds capability, ownership, and cultures that learn and adapt."/></div>
        <Link className="button centered author-cta" id="author-cta" href="/lean-nervous-system">Explore The Lean Nervous System <ArrowRight/></Link>
        <div className="author-bottom-nav" id="author-bottom"><Link href="#expertise" aria-label="Continue to areas of expertise"><ChevronDown/></Link></div>
      </section>

      <section className="section split-section expertise-section" id="expertise">
        <div className="expertise-copy"><p className="eyebrow">AREAS OF EXPERTISE</p><h2 className="display">From Strategy to Execution<br/><span>Across the Enterprise</span></h2>
          <ExpertiseAccordion />
          <Link className="button" href="/about">See Full Profile <ArrowRight/></Link>
        </div>
        <div className="expertise-portrait">
          <span className="expertise-portrait-index" aria-hidden="true">05</span>
          <div className="expertise-orbit expertise-orbit-one" aria-hidden="true" />
          <div className="expertise-orbit expertise-orbit-two" aria-hidden="true" />
          <div className="image-panel"><Image src="/art/home-expertise-portrait-cutout-v2.png" alt="Rajesh Koul" fill sizes="(max-width: 768px) calc(100vw - 44px), (max-width: 1200px) 42vw, 610px" style={{ objectFit: "contain", objectPosition: "center bottom" }}/></div>
          <div className="expertise-portrait-caption"><small>INTEGRATED EXPERTISE</small><p>Strategy <i/> Systems <i/> Scale</p></div>
        </div>
      </section>

      <section className="section split-section book-section" id="featured-book">
        <div><p className="eyebrow">FEATURED BOOK</p><h2 className="display">Digi-e-Lean <em>(Manual)</em></h2><h3>How Industry 4.0 and Lean Thinking<br/>can Revolutionize Organizations</h3>
          <p className="lead">In today’s swiftly evolving business landscape, the melding of lean methodology with digital transformation becomes crucial for competitiveness. “Digi-e-Lean” is not just a book but a culmination of three decades of transformational expertise, presenting an avant-garde approach to organizational agility and innovation. It offers a groundbreaking fusion of Lean and Industry 4.0 principles to help organizations achieve higher performance, greater efficiency, and sustainable growth.</p>
          <div className="book-benefits"><b><Cog/><span>Real-World<br/>Frameworks</span></b><b><BarChart3/><span>Practical<br/>Case Examples</span></b><b><Lightbulb/><span>Actionable<br/>Implementation</span></b></div>
          <button className="button">Request for Frameworks & Models <ArrowRight/></button>
        </div>
        <div className="image-panel book-art-panel" tabIndex={0}><Image src="/art/home-book-mockup.png" alt="Digi-e-Lean book by Rajesh Koul" fill sizes="(max-width: 800px) 100vw, 50vw"/></div>
      </section>

      <section className="section split-section book-section lmm-book-section" id="lmm-simplified">
        <div className="lmm-copy"><p className="eyebrow">FEATURED BOOK</p><h2 className="display">LMM Simplified <em>(Manual)</em></h2><h3>Unlocking the Secrets to Superior Performance</h3>
          <p className="lead">Amidst the turbulence of today&apos;s VUCA landscape, “LMM Simplified” shines as a crucial guide for organizations striving for operational excellence through lean methodologies. Distilled from three decades of lean expertise, the book shares insights gathered from industry giants and academic stalwarts. Beyond just outlining lean tenets, it provides actionable strategies for embedding lean principles into organizational culture.</p>
          <button className="button">Request for Frameworks &amp; Models <ArrowRight/></button>
        </div>
        <div className="image-panel book-art-panel lmm-art-panel" tabIndex={0}><Image src="/art/lmm-simplified-manual.png" alt="LMM Simplified manual by Rajesh Koul" fill sizes="(max-width: 768px) calc(100vw - 44px), (max-width: 1200px) 46vw, 650px"/></div>
      </section>

      <section className="section digilean nexus-section" id="digilean-nexus">
        <div className="nexus-panel">
          <div className="nexus-copy">
            <p className="eyebrow">DIGITAL × LEAN × INNOVATION</p>
            <div className="nexus-message">
              <h2>DIGILEAN <span>NEXUS</span><small>Modern methods. Timeless results.</small></h2>
              <p>Where Lean discipline, digital intelligence and innovation come together as one practical operating system for adaptive, resilient and high-performing organisations.</p>
            </div>
          </div>
          <div className="nexus-system">
            <div className="nexus-principles" aria-label="DigiLean Nexus principles">
              <article><b>01</b><div><h3>Lean Discipline</h3><p>Simplify flow. Remove friction.</p></div></article>
              <article><b>02</b><div><h3>Digital Intelligence</h3><p>Sense faster. Decide better.</p></div></article>
              <article><b>03</b><div><h3>Innovation Velocity</h3><p>Turn insight into repeatable progress.</p></div></article>
              <article className="nexus-outcome"><b>04</b><div><h3>Adaptive Enterprise</h3><p>Outcome · sense · learn · improve</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section" id="mission">
        <div className="mission-shell">
          <div className="mission-heading"><div><p className="eyebrow">MISSION STATEMENT</p><h2><span className="mission-first">EMPOWERING</span>{" "}<span className="mission-gradient">PURPOSE-LED,</span>{" "}<span className="mission-final">LEAN &amp; DIGITAL TRANSFORMATION</span></h2><p>People <i/> Processes <i/> Innovation <i/> Sustainable Impact</p></div><div className="mission-intro"><p>As a Transformation Specialist, I empower individuals and organizations to embark on <b>purpose-driven journeys of growth and evolution.</b> Through dedication, I instill profound purpose, foster engagement, and promote collaborative innovation, guiding lean and digital transformation initiatives to navigate change, inspire innovation, and lead transformative paths to sustained success in today&apos;s evolving landscape.</p></div></div>
          <div className="pillar-journey">
            <header className="pillar-journey-intro"><p>THREE CONNECTED PILLARS</p><h3>From individual purpose to enterprise-wide impact.</h3></header>
            <div className="pillar-grid">{pillars.map((p, index)=>{const Icon=p.icon;return <article key={p.n} data-step={p.n.slice(-2)}>
              <div className="pillar-card-top"><span><Icon/></span><b>{String(index+1).padStart(2,"0")}</b></div>
              <small>{p.n}</small><h3>{p.title}</h3><p>{p.text}</p>
              <footer><span>{p.outcome}</span><ArrowRight/></footer>
            </article>})}</div>
          </div>
          <div className="mission-conclusion" id="pillar-summary">
            <p>Through these pillars, my mission is to catalyze <strong>individual and organizational growth</strong>, fostering <strong>purpose, engagement, and innovation</strong> as the cornerstones of transformative journeys in today&apos;s dynamic world.</p>
          </div>
        </div>
      </section>

      <section className="section core-section" id="core-expertise"><p className="eyebrow centered-label">CORE EXPERTISE</p><h2>End-to-end Growth, Transformation & <span>Value Creation</span></h2><p className="subtitle">Ideas. Capabilities. Execution. Measurable Impact.</p>
        <CoreExpertiseTabs />
      </section>

      <section className="blueprint-section" id="lean-blueprint">
        <header className="blueprint-header">
          <p className="blueprint-eyebrow"><i/>EXPLORE THE LEAN NERVOUS SYSTEM<i/></p>
          <h2>A Practical Blueprint for <span>Sustainable Excellence</span></h2>
          <p>Rajesh Koul, a seasoned practitioner in Lean and Industry 4.0 methodologies, is recognized as a thought leader<br className="desktop"/> in business and transformation. As an award-winning business transformation expert and author, his works delve into<br className="desktop"/> facets of business advisory, transformation, program management, digital transformation, and Lean methodologies.</p>
        </header>
        <BlueprintBooks />
        <blockquote className="blueprint-quote-line">“Organizations, like human beings, need a nervous system—one that senses, responds, learns, and evolves.”</blockquote>
      </section>

      <section className="leadership-section" id="transformation-leadership">
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
  </div>;
}

function Mini({icon,title,text}:{icon:React.ReactNode,title:string,text:string}) { return <div className="mini-card"><span>{icon}</span><div><b>{title}</b><p>{text}</p></div></div> }
