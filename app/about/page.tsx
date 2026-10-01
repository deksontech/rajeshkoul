import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Cog, Globe2, Leaf, Trophy, UsersRound } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function About(){return <><SiteHeader/><main>
  <section className="about-showcase-hero" aria-labelledby="about-hero-title">
    <div className="about-dot-field about-dot-field-top" aria-hidden="true"/>
    <div className="about-showcase-copy">
      <p className="about-showcase-eyebrow">ABOUT RAJESH KOUL</p>
      <h1 id="about-hero-title">Building Organisations<br/>That <span>Learn, Adapt &amp; Grow</span></h1>
      <p className="about-showcase-lead">A transformation practitioner helping leaders<br className="desktop"/> turn complexity into connection, capability<br className="desktop"/> and sustainable performance.</p>
      <p className="about-showcase-tags"><span>PEOPLE</span><i/><span>PROCESSES</span><i/><span>INNOVATION</span><i/><span>SUSTAINABLE GROWTH</span></p>
      <div className="about-showcase-actions"><a className="about-primary-action" href="#journey">EXPLORE MY JOURNEY <ArrowRight/></a><Link className="about-secondary-action" href="/contact">GET IN TOUCH <ArrowRight/></Link></div>
      <div className="about-showcase-values" aria-label="Transformation outcomes">
        <div><span><UsersRound/></span><b>Enable<br/>People</b></div>
        <div><span><Cog/></span><b>Improve<br/>Performance</b></div>
        <div><span><Leaf/></span><b>Create<br/>Lasting Impact</b></div>
      </div>
    </div>
    <div className="about-showcase-portrait"><Image src="/art/about-hero.jpg" alt="Rajesh Koul" fill priority sizes="(max-width: 780px) 100vw, 52vw"/></div>
    <div className="about-showcase-wave" aria-hidden="true"><Image src="/art/home-author-bottom-wave.png" alt="" fill sizes="100vw"/></div>
  </section>
  <section className="section bio-section" id="journey"><div className="bio-visual"><Image src="/art/about-system.jpg" alt="Purpose, systems and impact framework" fill sizes="(max-width: 800px) 100vw, 34vw"/></div><div><p className="eyebrow">ABOUT THE AUTHOR</p><h2>RAJESH <span>KOUL</span></h2><p className="tagline">AUTHOR <i/> GLOBAL TRANSFORMATION LEADER <i/> STRATEGIC ADVISOR</p><p><b>Rajesh Koul</b> is a global transformation leader known for shaping large-scale enterprise change through a systems-driven approach to business performance. Over the past three decades, he has worked across industries and geographies, contributing to complex transformation journeys that integrate strategy, operations, and technology into cohesive, scalable systems.</p><p>His work has been particularly impactful in building transformation capabilities from the ground up—enabling organisations to move beyond fragmented initiatives toward structured, sustainable excellence.</p><p>Rajesh’s career reflects a deep engagement with the evolving challenges of modern enterprises. Across industrial, service, and public-sector environments, he has focused on addressing transformation holistically—bringing together people, process, technology, and structure to create aligned and resilient operating models.</p></div><Info icon={<Cog/>} title="STRATEGIC FOUNDATION" text="Mechanical Engineering: NIT, India. • MBA: FMS, Delhi University. • Academic Core: Business Management & Engineering."/><Info icon={<Globe2/>} title="GLOBAL PERSPECTIVE" text="Executive Leadership Alumnus: Wharton School of Business, INSEAD, Human Edge, and ISB. Cross-border programs for Fortune 500 organisations."/><Info icon={<Trophy/>} title="VALIDATED RECOGNITION" text="Certified Expert: Lean Six Sigma Master Black Belt. Major Awards: Mint TechCircle Transformation Leader (2021 & 2022)."/></section>
  <section className="section research-section"><p className="eyebrow centered-label">RESEARCH · FRAMEWORKS · IMPACT</p><h2>Research & <span>Thought Leadership</span></h2><p>Advancing ideas, building frameworks, and enabling real-world transformation.</p><p>Rajesh actively contributes to the discourse on transformation through research, white papers, and applied frameworks. His work focuses on DigiLean, integration of Lean with Industry 4.0, DFSS, Quality 4.0, and Lean Six Sigma for growth.</p><div className="research-flow"><Info icon={<BookOpen/>} title="Books & Frameworks" text="Developing practical frameworks and books that simplify complex transformation challenges."/><Info icon={<BookOpen/>} title="Research & White Papers" text="Contributing research and insights on emerging trends, methods, and best practices."/><Info icon={<Cog/>} title="Industry Applications" text="Translating research into real-world solutions across industries and geographies."/><Info icon={<Trophy/>} title="Thought Leadership" text="Sharing perspectives at industry forums, academic platforms, and leadership communities."/></div><Link className="button centered" href="/literary-lounge">Explore The Research <ArrowRight/></Link></section>
  </main><SiteFooter/></>}

function Info({icon,title,text}:{icon:React.ReactNode,title:string,text:string}){return <article className="info-card"><span>{icon}</span><div><h3>{title}</h3><p>{text}</p></div></article>}
