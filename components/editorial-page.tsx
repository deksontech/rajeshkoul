import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, Lightbulb, Mic2, Target, Users } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

type Feature={title:string,text:string};
type Props={eyebrow:string;title:string;accent:string;description:string;image:string;imageAlt:string;button:string;features:Feature[];quote?:string;children?:React.ReactNode};
const icons=[BookOpen,Lightbulb,Target,BarChart3,Users,Mic2];

export function EditorialPage(p:Props){return <><SiteHeader/><main><section className="editorial-hero"><div className="editorial-copy"><p className="eyebrow">{p.eyebrow}</p><h1>{p.title}<br/><span>{p.accent}</span></h1><p className="lead">{p.description}</p><Link className="button" href="#details">{p.button}<ArrowRight/></Link></div><div className="editorial-art"><Image src={p.image} alt={p.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 55vw"/></div><div className="editorial-features" id="details">{p.features.map((f,i)=>{const Icon=icons[i%icons.length];return <article key={f.title}><Icon/><h3>{f.title}</h3><p>{f.text}</p></article>})}</div>{p.quote&&<blockquote>{p.quote}</blockquote>}</section>{p.children}</main><SiteFooter/></>}
