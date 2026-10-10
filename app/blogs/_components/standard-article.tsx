import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3, Compass, Layers3, Lightbulb, Target } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import articleData from "../_data/additional-articles.json";

type Section = {number:string;title:string;paragraphs:string[]};
type Article = {slug:string;category:string;image:string;readTime:string;title:string;subtitle:string;sections:Section[];references:string[]};

export function getAdditionalArticle(slug:string){
  return (articleData as Article[]).find(article=>article.slug===slug)!;
}

export function StandardArticle({article}:{article:Article}){
  const highlights=article.sections.slice(0,4);
  return <><SiteHeader/><main className="article-page source-article-page">
    <div className="article-hero-stage"><section className="article-hero source-article-hero">
      <Image src={article.image} alt={article.title} fill priority sizes="100vw" style={{objectFit:"fill",objectPosition:"center",transform:"none"}}/>
      <h1 className="sr-only">{article.title}</h1>
      <Link className="article-back source-article-back" href="/blogs"><ArrowLeft/> Back to Blogs</Link>
      <div className="source-article-meta"><span>{article.category}</span><i/><span>By <b>Rajesh Koul</b></span><i/><span><Clock3/> {article.readTime}</span></div>
    </section></div>
    <div className="article-shell source-article-shell">
      <aside className="article-toc"><p>IN THIS ARTICLE</p><nav>{article.sections.map((section,index)=><a key={`${section.number}-${section.title}`} href={`#section-${index+1}`}><i>{String(index+1).padStart(2,"0")}</i><span>{section.title}</span></a>)}</nav></aside>
      <article className="article-content">
        <section className="article-summary">
          <p className="article-eyebrow">{article.category.toUpperCase()}</p>
          <h2>{article.title}</h2>
          <p>{article.subtitle}</p>
          <div className="article-summary-grid">{highlights.map((item,index)=>{const Icon=[Lightbulb,Compass,Layers3,Target][index];return <article key={item.title}><Icon/><strong>{item.title}</strong><span>{item.paragraphs[0]}</span></article>})}</div>
        </section>
        {article.sections.map((section,index)=><section className="article-section" id={`section-${index+1}`} key={`${section.number}-${section.title}`}>
          <header><span>{String(index+1).padStart(2,"0")}</span><h2>{section.title}</h2></header>
          {section.paragraphs.map((paragraph,paragraphIndex)=><ArticleParagraph key={paragraphIndex} text={paragraph}/>) }
        </section>)}
        <section className="article-conclusion"><p className="article-eyebrow">THE ESSENTIAL IDEA</p><h2>{article.subtitle}</h2><p>Progress becomes sustainable when purpose, people, processes and management systems reinforce one another.</p></section>
        {article.references.length>0&&<section className="pm-references"><p className="article-eyebrow">REFERENCES</p><ol>{article.references.map(reference=><li key={reference}>{reference}</li>)}</ol></section>}
        <section className="article-related"><div><p className="article-eyebrow">EXPLORE MORE</p><h2>More ideas on connected, adaptive and future-ready organisations</h2><p>Continue through the latest insights and practical frameworks.</p></div><Link href="/blogs">All blogs <ArrowUpRight/></Link></section>
        <footer className="article-author"><div className="article-author-mark">RK</div><div><p>Written by</p><h2>Rajesh Koul</h2><span>Transformation, Innovation and DigiLean Thought Leadership</span></div></footer>
        <p className="article-disclaimer"><b>Disclaimer:</b> The views and opinions expressed in this article are personal and do not necessarily reflect those of any organisations associated with the author.</p>
      </article>
    </div>
  </main><SiteFooter/></>;
}

function ArticleParagraph({text}:{text:string}){
  const colon=text.indexOf(":");
  const labelled=colon>0&&colon<48;
  const short=text.length<70&&!/[.!?]$/.test(text);
  if(short)return <h3 className="article-subheading">{text}</h3>;
  if(labelled)return <div className="article-labelled-point"><strong>{text.slice(0,colon)}</strong><p>{text.slice(colon+1).trim()}</p></div>;
  if(text.endsWith("?")&&text.length<180)return <blockquote className="article-pullquote"><span>“</span><p>{text}</p></blockquote>;
  return <p>{text}</p>;
}
