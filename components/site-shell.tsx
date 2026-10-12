"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Lightbulb, Mail, Menu, MessageCircle, Sprout, Target, Users, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const nav = [["Home","/"],["About","/about"],["The Lean Nervous System","/lean-nervous-system"],["Blogs","/blogs"],["Literary Lounge","/literary-lounge"],["Contact Me","/contact"]];
const literaryNav = [["Book Review","/book-review"],["Personal Leadership & Coaching","/personal-leadership-coaching"],["Courses & Frameworks","/courses"],["Industry & Campus Talks","/industry-campus-talks"]];

export function SiteHeader(){
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  return <header className="site-header"><Link className="logo" href="/"><Image src="/art/header-logo.png" alt="Rajesh Koul — Human-Centred Transformation" width={2172} height={724} priority/></Link><button className="menu-button" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={open?"open":""} aria-label="Primary navigation">{nav.map(([label,href])=>label==="Literary Lounge"?<div className="nav-dropdown" key={label}><Link href={href} className={pathname.startsWith("/literary-lounge")||literaryNav.some(([,subHref])=>pathname===subHref)?"active":""} aria-haspopup="true" onClick={()=>setOpen(false)}>{label}<ChevronDown aria-hidden="true"/></Link><div className="nav-submenu" aria-label="Literary Lounge submenu">{literaryNav.map(([subLabel,subHref])=><Link key={subLabel} href={subHref} className={pathname===subHref?"active":""} onClick={()=>setOpen(false)}>{subLabel}</Link>)}</div></div>:<Link key={label} href={href} className={pathname===href?"active":""} onClick={()=>setOpen(false)}>{label}</Link>)}</nav></header>
}

export function SiteFooter(){
  const explore=[["Home","/"],["About","/about"],["The Lean Nervous System","/lean-nervous-system"],["Blogs","/blogs"],["Literary Lounge","/literary-lounge"],["Contact Me","/contact"]];
  return <footer id="site-footer" className="site-footer"><div className="intent-row"><div className="signature"><Image src="/art/signature.png" alt="Rajesh Koul" width={390} height={150}/><p>THINK · TRANSFORM · LEAD</p></div><div className="intent"><b>MY INTENT</b><h2>Move Beyond Tools. Diagnose Maturity.<br/><span>Design Organisations That Run, Learn,<br/>And Improve — By Themselves.</span></h2><p>Helping organisations evolve from fragmented improvements to connected, adaptive, and future-ready systems.</p></div><div className="connect" id="connect"><b>LET’S CONNECT</b><p>Insights on transformation, leadership,<br/>and the Lean way of thinking.</p><button disabled title="Destination not supplied"><span className="contact-icon" aria-hidden="true">in</span>Connect on LinkedIn<ArrowRight/></button><button disabled title="Contact destination not supplied"><Mail/>Get in Touch<ArrowRight/></button><button disabled title="Contact destination not supplied"><MessageCircle/>Start a Conversation<ArrowRight/></button></div></div>
    <div className="footer-dark"><div className="footer-columns"><FooterList title="EXPLORE" links={explore}/><FooterList title="FOCUS AREAS" links={[["Enterprise Transformation","/"],["Industry 4.0","/"],["Lean Systems","/lean-nervous-system"],["Leadership Advisory","/personal-leadership-coaching"],["Organisational Maturity","/"]]}/><FooterList title="KNOWLEDGE & INSIGHTS" links={[["Books I Recommend","/book-review"],["Podcast","/literary-lounge/podcast"],["Ideas & Perspectives","/literary-lounge"],["Tools & Frameworks","/courses"],["Case Examples","/"]]}/><div className="about-footer"><h3>ABOUT RAJESH KOUL</h3><p>Rajesh Koul is a global transformation leader with over three decades of experience in leading large-scale enterprise transformations, leadership development, and operational excellence.</p><p>His mission is to help mid-sized organisations — the backbone of the Indian economy — grow with confidence, compete globally, and evolve into resilient, world-class enterprises.</p><Image src="/art/footer-portrait.jpg" alt="Leader looking across a mountain landscape" fill sizes="300px" priority/></div></div>
      <div className="values"><Value icon={<Lightbulb/>} title="Thought Leadership" text="Ideas rooted in experience and real-world impact."/><Value icon={<Target/>} title="Practical Impact" text="Actionable frameworks that deliver results."/><Value icon={<Users/>} title="People First" text="Building capability and a culture of continuous improvement."/><Value icon={<Sprout/>} title="Sustainable Growth" text="For resilient organisations and a better tomorrow."/></div>
      <div className="copyright"><span>© 2025 Rajesh Koul. All rights reserved.</span><span>Privacy Policy　 |　 Terms of Use</span><em>Keep Learning. Keep Improving.</em></div>
    </div></footer>
}

function FooterList({title,links}:{title:string,links:string[][]}){return <div className="footer-list"><h3>{title}</h3>{links.map(([label,href])=><Link key={label} href={href}>{label}<ArrowRight/></Link>)}</div>}
function Value({icon,title,text}:{icon:React.ReactNode,title:string,text:string}){return <div className="value">{icon}<p><b>{title}</b><span>{text}</span></p></div>}
