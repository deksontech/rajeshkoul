import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, Compass, Lightbulb, Sparkles, Target } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const outcomes = [
  { icon: BookOpen, title: "Self Awareness", text: "Know yourself deeply to lead yourself well." },
  { icon: Lightbulb, title: "Purpose & Clarity", text: "Lead with direction and intention." },
  { icon: Target, title: "Mindset & Habits", text: "Build the right habits that compound." },
  { icon: BarChart3, title: "Influence & Impact", text: "Inspire others and create lasting impact." },
];

export default function Page(){return <><SiteHeader/><main className="coaching-page">
  <section className="coaching-hero-v2" aria-labelledby="coaching-title">
    <div className="coaching-copy-v2">
      <p className="coaching-eyebrow">LEARN <i/> APPLY <i/> TRANSFORM</p>
      <h1 id="coaching-title">Personal Leadership<br/><span>&amp; Coaching</span></h1>
      <p className="coaching-lead">Practical guidance. Proven frameworks. Lasting impact. Partnering with individuals and leaders to unlock potential, strengthen mindset, and create meaningful transformation.</p>
      <Link className="coaching-cta" href="#coaching-coming-soon">EXPLORE COACHING <ArrowRight aria-hidden="true"/></Link>
      <p className="coaching-note"><Sparkles aria-hidden="true"/> Leadership that begins with clarity and grows into meaningful impact.</p>
    </div>
    <div className="coaching-pathway" aria-label="The personal leadership pathway">
      <div className="coaching-pathway-heading">
        <span><Compass aria-hidden="true"/></span>
        <div><small>THE LEADERSHIP PATHWAY</small><strong>From inner clarity<br/>to outer impact.</strong></div>
      </div>
      <div className="coaching-pathway-stages">
        <article><b>01</b><div><small>REFLECT</small><h2>Know yourself.</h2><p>See the patterns shaping how you lead.</p></div></article>
        <article><b>02</b><div><small>ALIGN</small><h2>Choose your direction.</h2><p>Turn purpose into clear priorities.</p></div></article>
        <article><b>03</b><div><small>PRACTISE</small><h2>Build better habits.</h2><p>Create change that compounds over time.</p></div></article>
        <article><b>04</b><div><small>INFLUENCE</small><h2>Lead lasting impact.</h2><p>Help people and performance grow together.</p></div></article>
      </div>
      <blockquote>“The quality of your thinking shapes the quality of your leadership.”</blockquote>
    </div>
    <div className="coaching-outcomes" aria-label="Coaching outcomes">
      {outcomes.map(({icon:Icon,title,text},index)=><article className={index===1||index===3?"coaching-outcome coaching-outcome-dark":"coaching-outcome"} key={title}>
        <span><Icon aria-hidden="true"/></span><div><small>0{index+1}</small><h2>{title}</h2><p>{text}</p></div>
      </article>)}
    </div>
  </section>
  <section className="coaching-coming-soon" id="coaching-coming-soon" aria-labelledby="coaching-coming-title">
    <div className="coaching-coming-mark"><Compass aria-hidden="true"/></div>
    <div>
      <p>THE NEXT CHAPTER</p>
      <h2 id="coaching-coming-title">A more purposeful coaching experience is coming soon.</h2>
    </div>
    <span>COMING SOON</span>
  </section>
</main><SiteFooter/></>}
