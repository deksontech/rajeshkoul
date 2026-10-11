import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Cog, FileSearch, FileText, Globe2, Layers3, Leaf, Lightbulb, TrendingUp, Trophy, UsersRound } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function About(){return <><SiteHeader/><main>
  <div className="about-live-hero-stage">
  <section className="about-live-hero" aria-labelledby="about-live-title">
    <div className="about-live-copy">
      <p className="about-live-eyebrow">ABOUT RAJESH KOUL</p>
      <h1 id="about-live-title">Building Organisations<br/>That <span>Learn, Adapt &amp; Grow</span></h1>
      <p className="about-live-lead">A transformation practitioner helping leaders<br className="desktop"/> turn complexity into connection, capability<br className="desktop"/> and sustainable performance.</p>
      <div className="about-live-tags"><span>PEOPLE</span><i/><span>PROCESSES</span><i/><span>INNOVATION</span><i/><span>SUSTAINABLE GROWTH</span></div>
      <div className="about-live-actions"><a href="#journey">EXPLORE MY JOURNEY <ArrowRight/></a><Link href="/contact">GET IN TOUCH <ArrowRight/></Link></div>
      <div className="about-live-values" aria-label="Transformation outcomes">
        <div><span><UsersRound/></span><b>Enable<br/>People</b></div>
        <div><span><Cog/></span><b>Improve<br/>Performance</b></div>
        <div><span><Leaf/></span><b>Create<br/>Lasting Impact</b></div>
      </div>
    </div>
    <div className="about-live-portrait"><Image src="/art/about-hero-portrait.png" alt="Rajesh Koul" fill priority sizes="(max-width: 900px) 100vw, 48vw"/></div>
    <div className="about-live-side about-live-side--top" aria-hidden="true">SIMPLIFY<br/>TRANSFORM<br/>ENABLE<br/>GROW<i/></div>
    <div className="about-live-side about-live-side--middle" aria-hidden="true"><em>Ideas<br/>to Impact</em><i/></div>
    <div className="about-live-wave" aria-hidden="true"><Image src="/art/home-author-bottom-wave.png" alt="" fill sizes="100vw"/></div>
  </section>
  </div>
  <section className="about-bio" id="journey" aria-labelledby="about-bio-title">
    <div className="about-bio-top">
      <div className="about-bio-visual"><Image src="/art/about-system.jpg" alt="Purpose, systems and impact framework" fill sizes="(max-width: 760px) 92vw, 466px"/></div>
      <div className="about-bio-copy">
        <p className="about-bio-eyebrow">ABOUT THE AUTHOR</p>
        <h2 id="about-bio-title">RAJESH <span>KOUL</span></h2>
        <p className="about-bio-tagline">AUTHOR <i/> GLOBAL TRANSFORMATION LEADER <i/> STRATEGIC ADVISOR</p>
        <div className="about-bio-rule"/>
        <p><b>Rajesh Koul</b> is a global transformation leader known for shaping large-scale enterprise change through a systems-driven approach to business performance. Over the past three decades, he has worked across industries and geographies, contributing to complex transformation journeys that integrate strategy, operations, and technology into cohesive, scalable systems.</p>
        <p>His work has been particularly impactful in building transformation capabilities from the ground up—enabling organisations to move beyond fragmented initiatives toward structured, sustainable excellence.</p>
        <p>Rajesh’s career reflects a deep engagement with the evolving challenges of modern enterprises. Across industrial, service, and public-sector environments, he has focused on addressing transformation holistically—bringing together people, process, technology, and structure to create aligned and resilient operating models.</p>
      </div>
      <div className="about-bio-aside" aria-hidden="true"><em>Ideas<br/>to Impact</em><i/></div>
    </div>
    <div className="about-credentials">
      <CredentialCard tone="blue" icon={<Cog/>} title="STRATEGIC FOUNDATION" items={[<><b>Mechanical Engineering:</b> NIT, India.</>,<><b>MBA:</b> FMS, Delhi University.</>,<><b>Academic Core:</b> Business Management &amp; Engineering.</>]}/>
      <CredentialCard tone="violet" icon={<Globe2/>} title="GLOBAL PERSPECTIVE" items={[<><b>Executive Leadership Alumnus:</b> Wharton School of Business, INSEAD, Human Edge, and ISB.</>,<><b>Experience:</b> Cross-border programs for Fortune 500 organisations.</>,<>Worked across industries and geographies.</>]}/>
      <CredentialCard tone="pink" icon={<Trophy/>} title="VALIDATED RECOGNITION" items={[<><b>Certified Expert:</b> Lean Six Sigma Master Black Belt | Design Thinking Practitioner.</>,<><b>Major Awards:</b> Mint TechCircle Transformation Leader (2021 &amp; 2022).</>,<><b>National Quality Champion:</b> QCI, 2020.</>]}/>
    </div>
  </section>
  <section className="research-showcase" id="research" aria-labelledby="research-showcase-title">
    <div className="research-side research-side--top" aria-hidden="true">IDEAS<br/>PEOPLE<br/>INDUSTRIES<br/>A BETTER TOMORROW<i/></div>
    <div className="research-side research-side--bottom-left" aria-hidden="true">LEARN<br/>APPLY<br/>ADAPT<br/>IMPROVE<i/></div>
    <div className="research-side research-side--bottom-right" aria-hidden="true">KNOWLEDGE<br/>FOR A MORE<br/>RESILIENT<br/>WORLD<i/></div>
    <header className="research-showcase-header">
      <p className="research-showcase-kicker">RESEARCH <b/> FRAMEWORKS <b/> IMPACT</p>
      <span className="research-showcase-accent"/>
      <h2 id="research-showcase-title">Research &amp; <span>Thought Leadership</span></h2>
      <p className="research-showcase-subtitle">Advancing ideas, building frameworks, and enabling real-world transformation.</p>
      <p className="research-showcase-intro">Rajesh actively contributes to the discourse on transformation through research, white papers, and applied frameworks.<br/>His work focuses on DigiLean, integration of Lean with Industry 4.0, DFSS, Quality 4.0, and Lean Six Sigma for growth—<br/>developed in collaboration with global academicians and industry practitioners.</p>
    </header>
    <div className="research-pathway" aria-label="Research to impact pathway">
      <ResearchStage tone="blue" icon={<FileSearch/>} title="RESEARCH" subtitle="INSIGHTS THAT MATTER"/>
      <ResearchStage tone="violet" icon={<Layers3/>} title="FRAMEWORKS" subtitle="IDEAS INTO STRUCTURE"/>
      <ResearchStage tone="purple" icon={<Cog/>} title="APPLICATION" subtitle="FROM CONCEPT TO PRACTICE"/>
      <ResearchStage tone="pink" icon={<TrendingUp/>} title="IMPACT" subtitle="STRONGER, MORE RESILIENT ORGANISATIONS"/>
    </div>
    <div className="research-showcase-cards">
      <ResearchCard tone="blue" icon={<BookOpen/>} title="Books & Frameworks" text="Developing practical frameworks and books that simplify complex transformation challenges."/>
      <ResearchCard tone="violet" icon={<FileText/>} title="Research & White Papers" text="Contributing research and insights on emerging trends, methods, and best practices in transformation."/>
      <ResearchCard tone="purple" icon={<Cog/>} title="Industry Applications" text="Translating research into real-world solutions across industries and geographies."/>
      <ResearchCard tone="pink" icon={<Lightbulb/>} title="Thought Leadership" text="Sharing perspectives at industry forums, academic platforms, and leadership communities."/>
    </div>
    <div className="research-recognition"><span><Trophy/></span><b>RECOGNITION</b><i/><p>Includes jury roles in industry-led transformation forums and leadership recognition<br className="desktop"/> at national platforms like Mint TechCircle. This platform brings together Rajesh’s perspectives,<br className="desktop"/> frameworks, and experiences—offering a window into how organisations can evolve into systems<br className="desktop"/> that continuously learn, adapt, and improve.</p></div>
    <Link className="research-showcase-cta" href="/literary-lounge">EXPLORE THE RESEARCH <ArrowRight/></Link>
  </section>
  </main><SiteFooter/></>}

function CredentialCard({tone,icon,title,items}:{tone:"blue"|"violet"|"pink";icon:React.ReactNode;title:string;items:React.ReactNode[]}){return <article className={`about-credential about-credential--${tone}`}><div className="about-credential-heading"><span>{icon}</span><h3>{title}</h3></div><ul>{items.map((item,index)=><li key={index}>{item}</li>)}</ul></article>}

function ResearchStage({tone,icon,title,subtitle}:{tone:"blue"|"violet"|"purple"|"pink";icon:React.ReactNode;title:string;subtitle:string}){return <article className={`research-stage research-stage--${tone}`}><span>{icon}</span><h3>{title}</h3><p>{subtitle}</p></article>}

function ResearchCard({tone,icon,title,text}:{tone:"blue"|"violet"|"purple"|"pink";icon:React.ReactNode;title:string;text:string}){return <article className={`research-showcase-card research-showcase-card--${tone}`}><div><span>{icon}</span><h3>{title}</h3></div><p>{text}</p></article>}
