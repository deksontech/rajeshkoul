"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const latest = [
  {
    category: "GCC Maturity",
    title: "From Execution Engines to Enterprise Intelligence",
    excerpt: "A leadership narrative on how Global Capability Centres evolve from efficient delivery engines into systems that sense, learn and influence enterprise outcomes.",
    image: "/art/execution-enterprise-hero.png",
    href: "/blogs/from-execution-engines-to-enterprise-intelligence",
    featured: true,
    popularity: 98,
    topics: ["leadership", "growth"],
  },
  {
    category: "Lean Systems",
    title: "Building an Organisation That Learns by Design",
    excerpt: "Resilient organisations do not rely on heroic problem-solving. They create clear feedback loops that help teams sense, respond, and improve.",
    image: "/art/home-expertise.png",
    featured: false,
    popularity: 87,
    topics: ["lean", "leadership"],
  },
  {
    category: "Digital Leadership",
    title: "The Real Work of AI-Led Transformation",
    excerpt: "Technology creates value only when leaders redesign decisions, capabilities, and ways of working around it.",
    image: "/art/digilean.jpg",
    featured: true,
    popularity: 93,
    topics: ["digital", "leadership"],
  },
];

const publications = [
  {
    category: "Featured Framework",
    title: "The Lean Nervous System: Connecting Strategy, People and Performance",
    excerpt: "A practical model for creating an organisation that can sense change, align decisions, learn continuously, and act with speed.",
    image: "/art/digi-e-lean-book.png",
    featured: true,
    popularity: 96,
    topics: ["lean", "growth"],
  },
  {
    category: "Operating Excellence",
    title: "From Isolated Improvements to Enterprise-Wide Excellence",
    excerpt: "Why sustainable results demand more than projects—and how leaders can connect improvement work across the enterprise.",
    image: "/art/mission-card-2.jpg",
    featured: false,
    popularity: 82,
    topics: ["lean", "growth"],
  },
  {
    category: "Growth Systems",
    title: "Why Mid-Sized Organisations Need an Operating System for Growth",
    excerpt: "Growth becomes repeatable when purpose, process, capability, and technology reinforce one another.",
    image: "/art/mission-card-3.jpg",
    featured: true,
    popularity: 91,
    topics: ["growth", "leadership"],
  },
];

const newsletters = [
  {
    category: "Transformation Notes",
    title: "The Discipline Behind Sustainable Change",
    excerpt: "A concise monthly reflection on the leadership choices and management systems that make transformation stick.",
    image: "/art/coaching-hero.jpg",
    featured: false,
    popularity: 79,
    topics: ["leadership", "growth"],
  },
  {
    category: "Lean + Digital Perspective",
    title: "Where Lean Thinking Meets Digital Possibility",
    excerpt: "Ideas for combining proven operational discipline with new digital capabilities—without losing sight of people.",
    image: "/art/podcast-hero.jpg",
    featured: true,
    popularity: 89,
    topics: ["lean", "digital"],
  },
  {
    category: "Leadership Briefing",
    title: "Leading Through Complexity with Clarity",
    excerpt: "Field-tested questions for leaders shaping adaptive, accountable, and future-ready organisations.",
    image: "/art/literary-hero.jpg",
    featured: false,
    popularity: 84,
    topics: ["leadership"],
  },
];

const news = [
  ["Organisational Maturity", "Why maturity—not tools—determines transformation outcomes"],
  ["Leadership", "The questions leaders should ask before launching another change programme"],
  ["Industry 4.0", "Turning connected technology into connected performance"],
  ["Culture", "Continuous improvement begins with the system, not the slogan"],
];

const inTheNews = [
  ["Perspective", "The next era of operational excellence is adaptive"],
  ["Conversation", "Building transformation capability from the ground up"],
  ["Recognition", "Three decades of leading change across industries"],
];

const themes = [
  ["LT", "Lean Transformation", "Systems that translate strategy into disciplined execution."],
  ["DX", "Digital Excellence", "Technology enabled by capability, clarity, and purpose."],
  ["OP", "Operating Performance", "Connected processes built for measurable impact."],
  ["LD", "Leadership", "People and cultures equipped to learn, adapt, and grow."],
];

export default function BlogsPage() {
  const [topic,setTopic]=useState("all");
  const [sort,setSort]=useState("latest");
  const filterAndSort=useMemo(()=>{
    return <T extends {topics:string[];featured:boolean;popularity:number}>(items:T[])=>{
      const filtered=topic==="all"?items:items.filter(item=>item.topics.includes(topic));
      if(sort==="featured") return [...filtered].sort((a,b)=>Number(b.featured)-Number(a.featured)||b.popularity-a.popularity);
      if(sort==="popular") return [...filtered].sort((a,b)=>b.popularity-a.popularity);
      return filtered;
    };
  },[topic,sort]);
  const visibleLatest=filterAndSort(latest);
  const visiblePublications=filterAndSort(publications);
  const visibleNewsletters=filterAndSort(newsletters);
  const visibleCount=visibleLatest.length+visiblePublications.length+visibleNewsletters.length;

  return <><SiteHeader/><main className="blogs-page">
    <div className="blogs-hero-stage"><section className="blogs-hero">
      <p className="blogs-kicker">IDEAS · PERSPECTIVES · PRACTICE</p>
      <h1>Blogs</h1>
      <p>Practical thinking for leaders building connected, adaptive, and future-ready organisations.</p>
      <div className="blogs-filters" aria-label="Blog filters">
        <label><span>Explore by topic</span><select value={topic} onChange={event=>setTopic(event.target.value)}><option value="all">All topics</option><option value="lean">Lean Transformation</option><option value="digital">Digital Excellence</option><option value="leadership">Leadership</option><option value="growth">Growth Systems</option></select></label>
        <label><span>Sort articles</span><select value={sort} onChange={event=>setSort(event.target.value)}><option value="latest">Latest first</option><option value="featured">Featured</option><option value="popular">Most read</option></select></label>
      </div>
      <p className="sr-only" aria-live="polite">Showing {visibleCount} {visibleCount===1?"article":"articles"}.</p>
    </section></div>

    <div className="blogs-main">
      {visibleLatest.length>0&&
      <section className="blogs-section" id="latest">
        <SectionHeading eyebrow="LATEST THINKING" title="Latest Insights"/>
        <article className="blogs-feature">
          <div className="blogs-feature-copy"><p className="blogs-category">{visibleLatest[0].category}</p><h2>{visibleLatest[0].title}</h2><p>{visibleLatest[0].excerpt}</p><ReadLink href={visibleLatest[0].href}/></div>
          <Link href={visibleLatest[0].href??"/blogs"} className="blogs-feature-media" aria-label={`Read ${visibleLatest[0].title}`}><Image src={visibleLatest[0].image} alt="Industrial execution evolving into a digitally intelligent enterprise" fill sizes="(max-width: 900px) 100vw, 42vw" priority/></Link>
        </article>
        <div className="blogs-grid-with-news">
          <div className="blogs-card-grid">{visibleLatest.slice(1).map((item)=><ArticleCard key={item.title} {...item}/>)}</div>
          <aside className="blogs-news-card"><p className="blogs-category">IN THE NEWS</p><h3>Ideas making an impact</h3><div className="blogs-news-list">{inTheNews.map(([category,title])=><Link href="/blogs" key={title}><small>{category}</small><span>{title}</span><ArrowRight/></Link>)}</div></aside>
        </div>
      </section>}

      {visiblePublications.length>0&&
      <section className="blogs-section blogs-tinted">
        <SectionHeading eyebrow="RESEARCH & FRAMEWORKS" title="Featured Publications"/>
        <div className="blogs-card-grid three">{visiblePublications.map((item)=><ArticleCard key={item.title} {...item}/>)}</div>
      </section>}

      <section className="blogs-section blogs-news-section">
        <SectionHeading eyebrow="FROM THE FIELD" title="Ideas in Practice"/>
        <div className="blogs-rows">{news.map(([category,title],index)=><Link href="/blogs" key={title}><span className="blogs-row-number">0{index+1}</span><span><small>{category}</small><strong>{title}</strong></span><ArrowRight/></Link>)}</div>
      </section>

      {visibleNewsletters.length>0&&
      <section className="blogs-section blogs-tinted">
        <SectionHeading eyebrow="MONTHLY PERSPECTIVES" title="From the Newsletter"/>
        <div className="blogs-card-grid three">{visibleNewsletters.map((item)=><ArticleCard key={item.title} {...item}/>)}</div>
      </section>}
      {visibleCount===0&&<section className="blogs-empty" role="status"><h2>No articles found</h2><p>Try selecting a different topic.</p><button type="button" onClick={()=>setTopic("all")}>Show all topics</button></section>}
    </div>

    <section className="blogs-themes">
      <div className="blogs-themes-inner"><p className="blogs-kicker">EXPLORE THE IDEAS</p><h2>Transformation, viewed as a <span>connected system.</span></h2><p className="blogs-themes-intro">Browse the themes shaping resilient organisations and sustainable performance.</p><div className="blogs-theme-grid">{themes.map(([initials,title,text])=><Link href="/blogs" key={title}><i>{initials}</i><strong>{title}</strong><span>{text}</span><ArrowRight/></Link>)}</div></div>
    </section>
  </main><SiteFooter/></>;
}

function SectionHeading({eyebrow,title}:{eyebrow:string,title:string}) {
  return <div className="blogs-section-heading"><div><p>{eyebrow}</p><h2>{title}</h2></div><Link href="/blogs">View all <ArrowRight/></Link></div>;
}

function ArticleCard({category,title,excerpt,image}:{category:string,title:string,excerpt:string,image:string}) {
  return <article className="blog-card"><Link className="blog-card-media" href="/blogs" aria-label={`Read ${title}`}><Image src={image} alt="" fill sizes="(max-width: 720px) 100vw, 33vw"/></Link><div><p className="blogs-category">{category}</p><h3>{title}</h3><p>{excerpt}</p><ReadLink/></div></article>;
}

function ReadLink({href="/blogs"}:{href?:string}){return <Link className="blogs-read" href={href}>Read the article <ArrowRight/></Link>}
