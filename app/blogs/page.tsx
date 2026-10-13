"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- Vinext production RSC navigation is incompatible with next/link in this deployment. */
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const latest = [
  {
    category: "GCC Leadership",
    title: "GCCs Reimagined Part II: A Leadership Narrative on Enabling GCC Maturity",
    excerpt: "How leaders enable the journey from earned credibility and local reinvention to enterprise-wide intelligence and strategic influence.",
    image: "/art/gccs-reimagined-intelligence-conduits-part-2.png",
    href: "/blogs/gccs-reimagined-part-ii-enabling-gcc-maturity/",
    topics: ["leadership", "digital", "growth"],
    featured: true,
    popularity: 101,
    preserveFullImage: true,
  },
  {
    category: "GCC Strategy",
    title: "GCCs Reimagined: From Extended Enterprise to Intelligence Conduits",
    excerpt: "How Global Capability Centres can evolve from execution engines into intelligence conduits that sense, synthesize, and steer the global enterprise.",
    image: "/art/gccs-reimagined-intelligence-conduits.png",
    href: "/blogs/gccs-reimagined-from-extended-enterprise-to-intelligence-conduits/",
    topics: ["leadership", "digital", "growth"],
    featured: true,
    popularity: 100,
    preserveFullImage: true,
  },
  {
    category: "Innovation Management",
    title: "Project Management and Innovation: A Synthesis for Success",
    excerpt: "From visionary ideas to purposeful execution: how project and programme management can transform innovation into sustainable value.",
    image: "/art/project-management-innovation-roadmap.png",
    href: "/blogs/project-management-and-innovation-a-synthesis-for-success",
    featured: true,
    popularity: 97,
    topics: ["leadership", "growth"],
  },
  {
    category: "Lean Leadership",
    title: "How to Establish a Lean Thinking Mindset in Organizations",
    excerpt: "Building a culture where purpose guides decisions, people solve problems, and continuous improvement becomes part of everyday work.",
    image: "/art/lean-thinking-in-action.png",
    href: "/blogs/how-to-establish-a-lean-thinking-mindset-in-organizations",
    featured: true,
    popularity: 95,
    topics: ["lean", "leadership"],
    preserveFullImage: true,
  },
  {
    category: "Lean Thinking",
    title: "Lean Thinking: Customer Value, People First, A Better Tomorrow",
    excerpt: "Building a purpose-driven organisation through continuous improvement, mutual respect, and a relentless focus on customer value.",
    image: "/art/lean-thinking.png",
    href: "/blogs/lean-thinking-customer-value-people-first-a-better-tomorrow",
    featured: true,
    popularity: 94,
    topics: ["lean", "leadership"],
    preserveFullImage: true,
  },
  {
    category: "Quality 4.0",
    title: "Evolution of Quality 4.0: From Inspection to Intelligent Quality Management",
    excerpt: "How quality has evolved from detecting defects to designing intelligent, connected, and continuously improving systems.",
    image: "/art/evolution-of-quality-4.png",
    href: "/blogs/evolution-of-quality-4-0",
    featured: true,
    popularity: 93,
    topics: ["digital", "lean"],
    preserveFullImage: true,
  },
  {
    category: "Enterprise Lean",
    title: "Enterprise-Level Lean Design: Moving Beyond Silos to End-to-End Value Creation",
    excerpt: "Why sustainable transformation requires organisations to optimise the whole enterprise, rather than individual processes in isolation.",
    image: "/art/enterprise-level-lean-design.png",
    href: "/blogs/enterprise-level-lean-design",
    featured: true,
    popularity: 92,
    topics: ["lean", "growth"],
    preserveFullImage: true,
  },
  {
    category: "Lean + Digital",
    title: "Technology and Lean Integration: Setting the Foundation",
    excerpt: "A practical roadmap for SMEs and MSMEs to build stable processes first, then scale with digital technologies and Industry 4.0.",
    image: "/art/technology-lean-integration.png",
    href: "/blogs/technology-and-lean-integration-setting-the-foundation",
    featured: true,
    popularity: 91,
    topics: ["lean", "digital"],
    preserveFullImage: true,
  },
  {
    category: "Sustainable Growth",
    title: "Reimagining Sustainable Growth and Transformation Mindset",
    excerpt: "Four strategic shifts for building a more sustainable, agile, and globally integrated organisation.",
    image: "/art/sustainable-growth-transformation.png",
    href: "/blogs/reimagining-sustainable-growth-and-transformation-mindset",
    featured: true,
    popularity: 90,
    topics: ["growth", "leadership", "digital"],
    preserveFullImage: true,
  },
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
  return <><SiteHeader/><main className="blogs-page">
    <div className="blogs-hero-stage"><section className="blogs-hero">
      <p className="blogs-kicker">IDEAS · PERSPECTIVES · PRACTICE</p>
      <h1>Blogs</h1>
      <p>Practical thinking for leaders building connected, adaptive, and future-ready organisations.</p>
    </section></div>

    <div className="blogs-main">
      <section className="blogs-section" id="latest">
        <SectionHeading eyebrow="LATEST THINKING" title="Latest Insights" actionHref="/blogs/all/" actionLabel={`View all ${latest.length}`}/>
        <article className="blogs-feature">
          <div className="blogs-feature-copy"><p className="blogs-category">{latest[0].category}</p><h2>{latest[0].title}</h2><p>{latest[0].excerpt}</p><ReadLink href={latest[0].href}/></div>
          <a href={latest[0].href??"/blogs"} className="blogs-feature-media" aria-label={`Read ${latest[0].title}`}><Image src={latest[0].image} alt={latest[0].title} fill sizes="(max-width: 900px) 100vw, 42vw" style={{objectFit:"fill",objectPosition:"center",transform:"none",transition:"none"}} priority/></a>
        </article>
        <div className="blogs-grid-with-news">
          <div className="blogs-card-grid">{latest.slice(1,3).map((item)=><ArticleCard key={item.title} {...item}/>)}</div>
          <aside className="blogs-news-card"><p className="blogs-category">IN THE NEWS</p><h3>Ideas making an impact</h3><div className="blogs-news-list">{inTheNews.map(([category,title])=><a href="/blogs" key={title}><small>{category}</small><span>{title}</span><ArrowRight/></a>)}</div></aside>
        </div>
      </section>

      <section className="blogs-section blogs-tinted">
        <SectionHeading eyebrow="RESEARCH & FRAMEWORKS" title="Featured Publications"/>
        <div className="blogs-card-grid three">{publications.map((item)=><ArticleCard key={item.title} {...item}/>)}</div>
      </section>

      <section className="blogs-section blogs-news-section">
        <SectionHeading eyebrow="FROM THE FIELD" title="Ideas in Practice"/>
        <div className="blogs-rows">{news.map(([category,title],index)=><a href="/blogs" key={title}><span className="blogs-row-number">0{index+1}</span><span><small>{category}</small><strong>{title}</strong></span><ArrowRight/></a>)}</div>
      </section>

      <section className="blogs-section blogs-tinted">
        <SectionHeading eyebrow="MONTHLY PERSPECTIVES" title="From the Newsletter"/>
        <div className="blogs-card-grid three">{newsletters.map((item)=><ArticleCard key={item.title} {...item}/>)}</div>
      </section>
    </div>

    <section className="blogs-themes">
      <div className="blogs-themes-inner"><p className="blogs-kicker">EXPLORE THE IDEAS</p><h2>Transformation, viewed as a <span>connected system.</span></h2><p className="blogs-themes-intro">Browse the themes shaping resilient organisations and sustainable performance.</p><div className="blogs-theme-grid">{themes.map(([initials,title,text])=><a href="/blogs" key={title}><i>{initials}</i><strong>{title}</strong><span>{text}</span><ArrowRight/></a>)}</div></div>
    </section>
  </main><SiteFooter/></>;
}

function SectionHeading({eyebrow,title,actionHref="/blogs",actionLabel="View all"}:{eyebrow:string,title:string,actionHref?:string,actionLabel?:string}) {
  return <div className="blogs-section-heading"><div><p>{eyebrow}</p><h2>{title}</h2></div><a href={actionHref}>{actionLabel} <ArrowRight/></a></div>;
}

export function ArticleCard({category,title,excerpt,image,href="/blogs",preserveFullImage=false}:{category:string,title:string,excerpt:string,image:string,href?:string,preserveFullImage?:boolean}) {
  return <article className="blog-card"><a className="blog-card-media" href={href} aria-label={`Read ${title}`}><Image src={image} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" style={preserveFullImage?{objectFit:"fill",transform:"none",transition:"none"}:undefined}/></a><div><p className="blogs-category">{category}</p><h3>{title}</h3><p>{excerpt}</p><ReadLink href={href}/></div></article>;
}

function ReadLink({href="/blogs"}:{href?:string}){return <a className="blogs-read" href={href}>Read the article <ArrowRight/></a>}
