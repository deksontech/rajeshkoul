import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, MessageCircle, Mic2, Radio, Target, Users } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const outcomes = [
  { icon: BookOpen, title: "Real-World Insights", text: "Practical perspectives from experience and practice." },
  { icon: MessageCircle, title: "Engaging Dialogues", text: "Interacting with students, professionals and leaders." },
  { icon: Target, title: "Actionable Takeaways", text: "Ideas you can apply in real contexts." },
  { icon: BarChart3, title: "Build Future Leaders", text: "Inspiring the next generation to think big and act with purpose." },
];

export default function Page(){return <><SiteHeader/><main className="talks-page-v2">
  <section className="talks-hero-v2" aria-labelledby="talks-title">
    <div className="talks-copy-v2">
      <p className="talks-eyebrow">SHARE <i/> INSPIRE <i/> IMPACT</p>
      <h1 id="talks-title">Industry &amp;<br/><span>Campus Talks</span></h1>
      <p className="talks-lead">Conversations that bridge ideas and action. Sharing real-world insights on leadership, strategy, transformation, and the Lean way of thinking.</p>
      <Link className="talks-cta-v2" href="#talks-coming-soon">EXPLORE UPCOMING TALKS <ArrowRight aria-hidden="true"/></Link>
      <p className="talks-note"><Radio aria-hidden="true"/> A useful conversation should leave people seeing possibility differently.</p>
    </div>
    <div className="talks-constellation" aria-label="The conversation architecture">
      <header><span><Mic2 aria-hidden="true"/></span><div><small>THE CONVERSATION ARCHITECTURE</small><strong>From lived experience<br/>to shared momentum.</strong></div></header>
      <div className="talks-signal-map">
        <div className="talks-signal-core"><i/><span><Mic2 aria-hidden="true"/></span><small>IDEAS IN MOTION</small><b>Speak to connect.</b></div>
        <article className="talks-signal-a"><small>01 · LISTEN</small><strong>Read the room.</strong><p>Begin with the questions people are already carrying.</p></article>
        <article className="talks-signal-b"><small>02 · CONNECT</small><strong>Bridge perspectives.</strong><p>Bring leadership, practice, and possibility together.</p></article>
        <article className="talks-signal-c"><small>03 · TRANSLATE</small><strong>Make ideas useful.</strong><p>Turn experience into language people can apply.</p></article>
        <article className="talks-signal-d"><small>04 · ACTIVATE</small><strong>Move to action.</strong><p>Leave the audience with a clear next step.</p></article>
      </div>
      <div className="talks-constellation-footer"><span>EXPERIENCE</span><i/><span>DIALOGUE</span><i/><span>INSIGHT</span><i/><span>ACTION</span></div>
    </div>
    <div className="talks-outcomes-v2" aria-label="Talk outcomes">
      {outcomes.map(({icon:Icon,title,text},index)=><article className={index===1||index===3?"talks-outcome-v2 talks-outcome-dark-v2":"talks-outcome-v2"} key={title}><span><Icon aria-hidden="true"/></span><div><small>0{index+1}</small><h2>{title}</h2><p>{text}</p></div></article>)}
    </div>
  </section>
  <section className="talks-coming-soon-v2" id="talks-coming-soon" aria-labelledby="talks-coming-title">
    <div className="talks-coming-mark-v2"><Users aria-hidden="true"/></div>
    <div><p>THE SPEAKING CALENDAR</p><h2 id="talks-coming-title">New industry conversations and campus engagements are coming soon.</h2></div>
    <span>COMING SOON</span>
  </section>
</main><SiteFooter/></>}
