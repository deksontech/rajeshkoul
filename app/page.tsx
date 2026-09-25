import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, Cog, Globe2, Handshake, Layers3, Lightbulb, Network, Target, Users } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const pillars = [
  { n: "Pillar 01", title: "IGNITING PURPOSEFUL TRANSFORMATIONS", text: "My first pillar focuses on igniting meaningful transformations by embedding a deep sense of purpose in individuals and organizations. Through tailored strategies and coaching, I unlock latent potential, align goals with a greater mission, and build a shared commitment to impactful change at every level.", image: "/art/mission-card-1.jpg" },
  { n: "Pillar 02", title: "CULTIVATING COLLABORATIVE INNOVATION MINDSETS", text: "The second pillar revolves around cultivating collaborative innovation mindsets. I create environments where diverse perspectives converge, nurturing a culture of creativity, collaboration, and shared problem-solving.", image: "/art/mission-card-2.jpg" },
  { n: "Pillar 03", title: "GUIDING DIGITAL TRANSFORMATION WITH MEANINGFUL LEADERSHIP", text: "My third pillar centers on guiding digital transformation initiatives with meaningful leadership. Through mentorship, workshops, and resources, I equip individuals with the skills and mindset for effective digital transformation.", image: "/art/mission-card-3.jpg" },
];

const expertise = ["TECHNOLOGY ENABLED TRANSFORMATION", "BUSINESS PROCESS ADVISORY", "GROWTH & TRANSFORMATION", "OPERATIONAL EXCELLENCE", "SERVICE DELIVERY"];

export default function Home() {
  return <>
    <div className="home-navigation"><SiteHeader /></div>
    <main>
      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">IDEAS <i/> INSIGHTS <i/> EXECUTION <i/> LASTING VALUE</p>
          <h1>Scaling <span>Enterprises</span><br/>Through <span>Lean, Digital</span> &<br/>AI-Led Transformation</h1>
          <div className="rule" />
          <p className="lead">Helping CXOs and enterprise leaders unlock growth,<br className="desktop"/> improve margins, and build scalable operations<br className="desktop"/> through Lean, Industry 4.0, and AI-led transformation.</p>
          <p className="italic">Bridging strategy and execution through 30 years of<br className="desktop"/> transformation leadership across global enterprises.</p>
          <div className="actions"><Link className="button" href="#expertise">Enterprise Health Lab <ArrowRight/></Link><Link className="button outline" href="#featured-book">Explore My Books <ArrowRight/></Link></div>
          <p className="trust">TRUSTED BY LEADERS ACROSS MANUFACTURING · CONSULTING · GLOBAL ENTERPRISES</p>
        </div>
        <div className="hero-art"><Image src="/art/home-hero.jpg" alt="Rajesh Koul against a modern enterprise cityscape" fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
      </section>

      <section className="section author-section">
        <div className="featured-strip"><BookOpen/><b>FEATURED</b><span/>Pre-order “The Lean Nervous System” (Coming Soon)<ArrowRight/></div>
        <div className="author-grid">
          <div className="experience-card"><strong>30+</strong><b>YEARS OF EXPERIENCE</b><div className="rule"/><small>TRANSFORM · LEAD · SUSTAIN</small></div>
          <div><p className="eyebrow blue">ABOUT THE AUTHOR</p><h2>RAJESH KOUL</h2><p className="tagline">GLOBAL TRANSFORMATION LEADER <i/> ENTERPRISE SYSTEMS THINKER <i/> BUILDER OF SCALABLE EXCELLENCE</p>
            <p><b>Rajesh Koul</b> is a global transformation leader with over three decades of experience in leading large-scale enterprise transformations, leadership development, and operational excellence. He has driven impact across industrial manufacturing, financial services, healthcare, GCCs, and government sectors.</p>
            <p>Having led cross-border programs for Fortune 500 organisations, he builds transformation functions from the ground up—helping leaders translate strategy into execution, scale with resilience, and create lasting value.</p>
            <p>Rajesh blends Lean, digital, and change leadership to design connected, adaptive, and future-ready operating systems.</p>
          </div>
        </div>
        <div className="mission-bar"><Target/><div><b>MISSION</b><p>To help mid-sized organisations — the backbone of the Indian economy — grow with confidence, compete globally, and evolve into resilient, world-class enterprises through disciplined, human-centred transformation.</p></div></div>
        <div className="mini-grid"><Mini icon={<Network/>} title="SYSTEMS THINKER" text="Transforms complexity into cohesive, enterprise-wide operating systems."/><Mini icon={<BarChart3/>} title="STRATEGY TO IMPACT" text="Aligns strategy, operations, and people for measurable results."/><Mini icon={<Lightbulb/>} title="LEAN + DIGITAL" text="Combines lean, digital, and innovation for scalable impact."/><Mini icon={<Users/>} title="PEOPLE & CULTURE" text="Builds capability, ownership, and cultures that learn and adapt."/></div>
        <Link className="button centered" href="/lean-nervous-system">Explore The Lean Nervous System <ArrowRight/></Link>
      </section>

      <section className="section split-section" id="expertise">
        <div><p className="eyebrow">AREAS OF EXPERTISE</p><h2 className="display">From Strategy to Execution<br/><span>Across the Enterprise</span></h2>
          <div className="expertise-list">{expertise.map((x,i)=><div key={x}><span>{[Cog,Layers3,BarChart3,Target,Users].map((I,j)=>j===i?<I key={j}/>:null)}</span><b>{x}</b><ArrowRight/></div>)}</div>
          <Link className="button" href="/about">See Full Profile <ArrowRight/></Link>
        </div>
        <div className="image-panel"><Image src="/art/home-expertise.jpg" alt="Rajesh Koul" fill sizes="(max-width: 800px) 100vw, 50vw"/></div>
      </section>

      <section className="section split-section book-section" id="featured-book">
        <div><p className="eyebrow">FEATURED BOOK</p><h2 className="display">Digi-e-Lean <em>(Manual)</em></h2><h3>How Industry 4.0 and Lean Thinking<br/>can Revolutionize Organizations</h3>
          <p className="lead">In today’s swiftly evolving business landscape, the melding of lean methodology with digital transformation becomes crucial for competitiveness. “Digi-e-Lean” is not just a book but a culmination of three decades of transformational expertise, presenting an avant-garde approach to organizational agility and innovation.</p>
          <div className="book-benefits"><b>⚙<span>Real-World<br/>Frameworks</span></b><b>▥<span>Practical<br/>Case Examples</span></b><b>♢<span>Actionable<br/>Implementation</span></b></div>
          <button className="button">Request for Frameworks & Models <ArrowRight/></button>
        </div>
        <div className="image-panel contain"><Image src="/art/home-book.jpg" alt="Digi-e-Lean book by Rajesh Koul" fill sizes="(max-width: 800px) 100vw, 50vw"/></div>
      </section>

      <section className="section digilean">
        <div><p className="eyebrow">DIGITAL × LEAN × INNOVATION</p><h2>DIGILEAN <span>NEXUS</span></h2><h3>MODERN METHODS<br/>TIMELESS RESULTS</h3><p>Integrating the discipline of Lean with the power of digital transformation and innovation to create adaptive, resilient and high-performing organisations.</p></div>
        <div className="image-panel"><Image src="/art/digilean.jpg" alt="Digital Lean Innovation pathway" fill sizes="(max-width: 800px) 100vw, 60vw"/></div>
      </section>

      <section className="section mission-section" id="mission">
        <div className="mission-heading"><div><p className="eyebrow">MISSION STATEMENT</p><h2>EMPOWERING<br/><span>PURPOSE-LED,</span><br/>LEAN & DIGITAL TRANSFORMATION</h2><p>People <i/> Processes <i/> Innovation <i/> Sustainable Impact</p></div><p>As a Transformation Specialist, I empower individuals and organizations to embark on <b>purpose-driven journeys of growth and evolution.</b><br/><br/>Through dedication, I instill profound purpose, foster engagement, and promote collaborative innovation.</p></div>
        <div className="pillar-grid">{pillars.map(p=><article key={p.n}><Image src={p.image} alt="" width={430} height={190}/><div><small>{p.n}</small><h3>{p.title}</h3><p>{p.text}</p><a href="#mission">LEARN MORE <ArrowRight/></a></div></article>)}</div>
      </section>

      <section className="quote-section"><p>Through these pillars, my mission is to catalyze <span>individual and organizational growth,</span><br className="desktop"/> fostering <b>purpose, engagement, and innovation</b> as the cornerstones of transformative<br className="desktop"/> journeys in the dynamic landscape of today’s world.</p><div className="rule"/></section>

      <section className="section core-section"><p className="eyebrow centered-label">CORE EXPERTISE</p><h2>End-to-end Growth, Transformation & <span>Value Creation</span></h2><p className="subtitle">Ideas. Capabilities. Execution. Measurable Impact.</p>
        <div className="core-panel"><div className="core-tabs">{["Growth & Strategy","Shared Services & GCC","Tech Transformation","ESG & Value Creation","Operational Excellence"].map((x,i)=><button className={i===0?"active":""} aria-disabled={i!==0} key={x}><b>0{i+1}</b>{x}<ArrowRight/></button>)}</div>
          <div className="core-content"><h3><b>01</b> Growth & Strategy</h3><p>Designing growth blueprints that align markets and offerings.</p><div className="core-cards"><Mini icon={<BarChart3/>} title="Sales Growth Strategy" text="Predictable revenue acceleration and performance rhythms."/><Mini icon={<Globe2/>} title="Market Expansion" text="Structured entry plans for new geographies and white spaces."/><Mini icon={<Handshake/>} title="Strategic Alliances" text="Governing partnerships that unlock ecosystem capabilities."/><Mini icon={<Layers3/>} title="M&A Integration" text="Aligning culture and operating models for synergy."/></div></div>
        </div>
      </section>

      <section className="section lean-teaser"><p className="eyebrow gold">EXPLORE THE LEAN NERVOUS SYSTEM</p><h2>A Practical Blueprint for <span>Sustainable Excellence</span></h2><p>Rajesh Koul, a seasoned practitioner in Lean and Industry 4.0 methodologies, is recognized as a thought leader in business and transformation.</p><div className="placeholder-row"><div aria-label="Book artwork placeholder supplied in reference"><BookOpen/></div><div aria-label="Book artwork placeholder supplied in reference"><BookOpen/></div><blockquote>“Organizations, like human beings, need a nervous system—one that senses, responds, learns, and evolves.”</blockquote></div></section>
    </main>
    <SiteFooter />
  </>;
}

function Mini({icon,title,text}:{icon:React.ReactNode,title:string,text:string}) { return <div className="mini-card"><span>{icon}</span><div><b>{title}</b><p>{text}</p></div></div> }
