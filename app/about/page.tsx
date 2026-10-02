import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Cog, Globe2, Leaf, Trophy, UsersRound } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function About(){return <><SiteHeader/><main>
  <section className="about-live-hero" aria-labelledby="about-live-title">
    <div className="about-live-reference" aria-hidden="true"><Image src="/art/about-hero-reference.png" alt="" fill priority sizes="100vw"/></div>
    <div className="about-live-mask" aria-hidden="true"/>
    <div className="about-live-dots" aria-hidden="true"/>
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
    <div className="about-live-wave" aria-hidden="true"><Image src="/art/home-author-bottom-wave.png" alt="" fill sizes="100vw"/></div>
  </section>
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
  <section className="section research-section"><p className="eyebrow centered-label">RESEARCH · FRAMEWORKS · IMPACT</p><h2>Research & <span>Thought Leadership</span></h2><p>Advancing ideas, building frameworks, and enabling real-world transformation.</p><p>Rajesh actively contributes to the discourse on transformation through research, white papers, and applied frameworks. His work focuses on DigiLean, integration of Lean with Industry 4.0, DFSS, Quality 4.0, and Lean Six Sigma for growth.</p><div className="research-flow"><Info icon={<BookOpen/>} title="Books & Frameworks" text="Developing practical frameworks and books that simplify complex transformation challenges."/><Info icon={<BookOpen/>} title="Research & White Papers" text="Contributing research and insights on emerging trends, methods, and best practices."/><Info icon={<Cog/>} title="Industry Applications" text="Translating research into real-world solutions across industries and geographies."/><Info icon={<Trophy/>} title="Thought Leadership" text="Sharing perspectives at industry forums, academic platforms, and leadership communities."/></div><Link className="button centered" href="/literary-lounge">Explore The Research <ArrowRight/></Link></section>
  </main><SiteFooter/></>}

function Info({icon,title,text}:{icon:React.ReactNode,title:string,text:string}){return <article className="info-card"><span>{icon}</span><div><h3>{title}</h3><p>{text}</p></div></article>}

function CredentialCard({tone,icon,title,items}:{tone:"blue"|"violet"|"pink";icon:React.ReactNode;title:string;items:React.ReactNode[]}){return <article className={`about-credential about-credential--${tone}`}><div className="about-credential-heading"><span>{icon}</span><h3>{title}</h3></div><ul>{items.map((item,index)=><li key={index}>{item}</li>)}</ul></article>}
