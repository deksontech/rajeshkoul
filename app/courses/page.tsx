import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, Boxes, Layers3, Lightbulb, Target } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const outcomes = [
  { icon: BookOpen, title: "Practical Frameworks", text: "Clear structures for complex transformation challenges." },
  { icon: Lightbulb, title: "Applied Learning", text: "Ideas translated into tools, exercises, and action." },
  { icon: Target, title: "Leadership Capability", text: "Learning designed for leaders and transformation teams." },
  { icon: BarChart3, title: "Sustainable Impact", text: "Approaches that strengthen systems, people, and performance." },
];

export default function Page(){return <><SiteHeader/><main className="courses-page-v2">
  <section className="courses-hero-v2" aria-labelledby="courses-title">
    <div className="courses-copy-v2">
      <p className="courses-eyebrow">LEARN <i/> APPLY <i/> TRANSFORM</p>
      <h1 id="courses-title">Courses &amp;<br/><span>Frameworks</span></h1>
      <p className="courses-lead">Structured learning experiences and practical frameworks designed to turn complex transformation challenges into clear, actionable progress.</p>
      <Link className="courses-cta-v2" href="#courses-coming-soon">EXPLORE COURSES &amp; FRAMEWORKS <ArrowRight aria-hidden="true"/></Link>
      <p className="courses-note"><Layers3 aria-hidden="true"/> Ideas become useful when they can be understood, practised, and applied.</p>
    </div>
    <div className="courses-blueprint" aria-label="The applied learning architecture">
      <header><span><Boxes aria-hidden="true"/></span><div><small>THE APPLIED LEARNING ARCHITECTURE</small><strong>From complex ideas<br/>to practical action.</strong></div></header>
      <div className="courses-blueprint-flow">
        <article><b>01</b><div><small>UNDERSTAND</small><h2>See the whole system.</h2><p>Make complexity visible and easier to navigate.</p></div></article>
        <article><b>02</b><div><small>STRUCTURE</small><h2>Use a clear framework.</h2><p>Organise insight into a repeatable way of working.</p></div></article>
        <article><b>03</b><div><small>PRACTISE</small><h2>Turn learning into skill.</h2><p>Apply ideas through tools, exercises, and reflection.</p></div></article>
        <article><b>04</b><div><small>EMBED</small><h2>Create lasting capability.</h2><p>Move from a one-time lesson to sustained performance.</p></div></article>
      </div>
      <div className="courses-blueprint-footer"><span>IDEAS</span><i/><span>TOOLS</span><i/><span>PRACTICE</span><i/><span>IMPACT</span></div>
    </div>
    <div className="courses-outcomes-v2" aria-label="Learning outcomes">
      {outcomes.map(({icon:Icon,title,text},index)=><article className={index===1||index===3?"courses-outcome-v2 courses-outcome-dark-v2":"courses-outcome-v2"} key={title}><span><Icon aria-hidden="true"/></span><div><small>0{index+1}</small><h2>{title}</h2><p>{text}</p></div></article>)}
    </div>
  </section>
  <section className="courses-coming-soon-v2" id="courses-coming-soon" aria-labelledby="courses-coming-title">
    <div className="courses-coming-mark-v2"><Layers3 aria-hidden="true"/></div>
    <div><p>THE LEARNING STUDIO</p><h2 id="courses-coming-title">New courses and practical frameworks are coming soon.</h2></div>
    <span>COMING SOON</span>
  </section>
</main><SiteFooter/></>}
