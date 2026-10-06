"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useEffect } from "react";

type ReviewReaderProps = { title:string; author:string; slug:string; pages:number };

export function ReviewReader({title,author,slug,pages}:ReviewReaderProps){
  useEffect(()=>{
    const stop=(event:Event)=>event.preventDefault();
    const stopKeys=(event:KeyboardEvent)=>{
      if((event.ctrlKey||event.metaKey)&&["c","s","p","u"].includes(event.key.toLowerCase())) event.preventDefault();
    };
    document.addEventListener("contextmenu",stop);
    document.addEventListener("copy",stop);
    document.addEventListener("cut",stop);
    document.addEventListener("dragstart",stop);
    document.addEventListener("keydown",stopKeys);
    return()=>{document.removeEventListener("contextmenu",stop);document.removeEventListener("copy",stop);document.removeEventListener("cut",stop);document.removeEventListener("dragstart",stop);document.removeEventListener("keydown",stopKeys)};
  },[]);

  return <main className="protected-reader" onContextMenu={event=>event.preventDefault()}>
    <header className="protected-reader-header">
      <Link href="/book-review"><ArrowLeft aria-hidden="true"/>Back to Book Reviews</Link>
      <div><p>BOOK REVIEW</p><h1>{title}</h1><span>{author} · {pages} pages</span></div>
      <p className="protected-reader-notice"><ShieldCheck aria-hidden="true"/>View-only reader</p>
    </header>
    <section className="protected-reader-pages" aria-label={`${title} review pages`}>
      {Array.from({length:pages},(_,index)=><figure className="protected-reader-page" key={index}>
        <Image src={`/reviews/${slug}/page-${index+1}.jpg`} width={1920} height={1080} alt={`${title} review, page ${index+1} of ${pages}`} draggable={false} priority={index===0} sizes="(max-width: 1000px) 100vw, 1400px"/>
        <figcaption>Page {index+1} of {pages}</figcaption>
      </figure>)}
    </section>
  </main>
}
