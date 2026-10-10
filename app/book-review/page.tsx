"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Grid2X2, List, Search, X } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { books } from "./books";

type ViewMode="grid"|"list";
type SortMode="recommended"|"title-asc"|"title-desc"|"author-asc"|"author-desc";

const PAGE_SIZES=[9,15,21,30];

export default function BookReviewPage(){
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("all");
  const [author,setAuthor]=useState("all");
  const [sort,setSort]=useState<SortMode>("recommended");
  const [view,setView]=useState<ViewMode>("grid");
  const [page,setPage]=useState(1);
  const [pageSize,setPageSize]=useState(15);

  const categories=useMemo(()=>Array.from(new Set(books.flatMap(book=>book.tags))).sort((a,b)=>a.localeCompare(b)),[]);
  const authors=useMemo(()=>Array.from(new Set(books.map(book=>book.author))).sort((a,b)=>a.localeCompare(b)),[]);

  const filteredBooks=useMemo(()=>{
    const term=query.trim().toLocaleLowerCase();
    const matches=books.filter(book=>{
      const searchable=[book.title,book.author,book.text,...book.tags].join(" ").toLocaleLowerCase();
      return (!term||searchable.includes(term))&&(category==="all"||book.tags.includes(category))&&(author==="all"||book.author===author);
    });
    if(sort==="title-asc")return [...matches].sort((a,b)=>a.title.localeCompare(b.title));
    if(sort==="title-desc")return [...matches].sort((a,b)=>b.title.localeCompare(a.title));
    if(sort==="author-asc")return [...matches].sort((a,b)=>a.author.localeCompare(b.author)||a.title.localeCompare(b.title));
    if(sort==="author-desc")return [...matches].sort((a,b)=>b.author.localeCompare(a.author)||a.title.localeCompare(b.title));
    return matches;
  },[query,category,author,sort]);

  const pageCount=Math.max(1,Math.ceil(filteredBooks.length/pageSize));
  const visibleBooks=filteredBooks.slice((page-1)*pageSize,page*pageSize);
  const firstResult=filteredBooks.length===0?0:(page-1)*pageSize+1;
  const lastResult=Math.min(page*pageSize,filteredBooks.length);
  const activeFilters=Boolean(query||category!=="all"||author!=="all"||sort!=="recommended");

  useEffect(()=>{const saved=window.localStorage.getItem("book-review-view");if(saved==="grid"||saved==="list")setView(saved)},[]);
  useEffect(()=>{setPage(1)},[query,category,author,sort,pageSize]);
  useEffect(()=>{if(page>pageCount)setPage(pageCount)},[page,pageCount]);

  const pageItems=useMemo<(number|string)[]>(()=>{
    if(pageCount<=7)return Array.from({length:pageCount},(_,index)=>index+1);
    const values:(number|string)[]=[1];
    if(page>4)values.push("start-ellipsis");
    const start=Math.max(2,page-1);
    const end=Math.min(pageCount-1,page+1);
    for(let value=start;value<=end;value++)values.push(value);
    if(page<pageCount-3)values.push("end-ellipsis");
    values.push(pageCount);
    return values;
  },[page,pageCount]);

  const chooseView=(next:ViewMode)=>{setView(next);window.localStorage.setItem("book-review-view",next)};
  const clearFilters=()=>{setQuery("");setCategory("all");setAuthor("all");setSort("recommended")};
  const goToPage=(next:number)=>{setPage(Math.min(Math.max(next,1),pageCount));document.getElementById("book-review-list")?.scrollIntoView({behavior:"smooth",block:"start"})};

  return <>
    <SiteHeader/>
    <main className="book-review-page"><div className="book-review-hero-stage"><section className="book-review-hero-section" aria-labelledby="book-review-title">
      <div className="book-review-art" aria-hidden="true"/><div className="book-review-dots book-review-dots-left" aria-hidden="true"/>
      <div className="book-review-hero"><p className="book-review-kicker">BOOKS WORTH SHARING</p><h1 id="book-review-title">Ideas That Deserve<span>to Be Passed On</span></h1><p className="book-review-lead">A curated collection of books that have influenced my thinking on<br className="book-review-desktop-break"/> Lean, Strategy, Transformation, Leadership, Innovation, and Business.</p><div className="book-review-count" aria-label={`${books.length} books reviewed`}><BookOpen aria-hidden="true"/><strong>{books.length}</strong><span>Books<br/>Reviewed</span></div></div>
      <Link className="book-review-cta" href="#book-review-list">Explore My Library <ArrowRight aria-hidden="true"/></Link>
    </section></div>

    <section className="book-review-list" id="book-review-list" aria-label="Book review library"><div className="book-review-dots book-review-dots-review-left" aria-hidden="true"/><div className="book-review-dots book-review-dots-bottom" aria-hidden="true"/>
      <div className="book-library-toolbar">
        <div className="book-library-toolbar-heading"><div><p>EXPLORE THE LIBRARY</p><h2>Find your next meaningful read</h2></div><p className="book-library-results" role="status" aria-live="polite">Showing <b>{firstResult}–{lastResult}</b> of <b>{filteredBooks.length}</b> {filteredBooks.length===1?"book":"books"}</p></div>
        <div className="book-library-controls">
          <label className="book-library-search"><span className="sr-only">Search books</span><Search aria-hidden="true"/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search title, author, topic…"/>{query&&<button type="button" onClick={()=>setQuery("")} aria-label="Clear search"><X/></button>}</label>
          <label><span>Category</span><select value={category} onChange={event=>setCategory(event.target.value)}><option value="all">All categories</option>{categories.map(item=><option value={item} key={item}>{item}</option>)}</select></label>
          <label><span>Author</span><select value={author} onChange={event=>setAuthor(event.target.value)}><option value="all">All authors</option>{authors.map(item=><option value={item} key={item}>{item}</option>)}</select></label>
          <label><span>Sort by</span><select value={sort} onChange={event=>setSort(event.target.value as SortMode)}><option value="recommended">Recommended</option><option value="title-asc">Title: A–Z</option><option value="title-desc">Title: Z–A</option><option value="author-asc">Author: A–Z</option><option value="author-desc">Author: Z–A</option></select></label>
        </div>
        <div className="book-library-options">
          <div>{activeFilters&&<button className="book-library-clear" type="button" onClick={clearFilters}><X/> Clear filters</button>}</div>
          <label className="book-library-page-size"><span>Books per page</span><select value={pageSize} onChange={event=>setPageSize(Number(event.target.value))}>{PAGE_SIZES.map(size=><option value={size} key={size}>{size}</option>)}</select></label>
          <div className="book-library-view" role="group" aria-label="Choose book display"><button type="button" aria-label="Grid view" aria-pressed={view==="grid"} onClick={()=>chooseView("grid")}><Grid2X2/></button><button type="button" aria-label="List view" aria-pressed={view==="list"} onClick={()=>chooseView("list")}><List/></button></div>
        </div>
      </div>

      {visibleBooks.length>0?<div className={`book-review-cards ${view==="list"?"is-list":"is-grid"}`}>{visibleBooks.map(book=><Link className="book-review-card" href={book.href} target="_blank" rel="noopener noreferrer" aria-label={`Open the ${book.title} review in a new tab`} key={book.title}><div className="book-review-cover"><Image src={book.cover} alt={`Cover of ${book.title}`} fill sizes={view==="list"?"140px":"(max-width: 700px) 38vw, (max-width: 1100px) 22vw, 180px"}/></div><div className="book-review-card-copy"><h2>{book.title}</h2><p className="book-review-author">{book.author}</p><i aria-hidden="true"/><p>{book.text}</p><div className="book-review-tags">{book.tags.map(tag=><span key={tag}>{tag}</span>)}</div><span className="book-review-card-action">My Takeaways <ArrowRight aria-hidden="true"/></span></div></Link>)}</div>:<div className="book-library-empty"><BookOpen/><h2>No matching books</h2><p>Try another title, author, or category.</p><button type="button" onClick={clearFilters}>Show all books</button></div>}

      {filteredBooks.length>0&&pageCount>1&&<nav className="book-library-pagination" aria-label="Book review pages"><button type="button" onClick={()=>goToPage(page-1)} disabled={page===1}><ChevronLeft/> Previous</button><div>{pageItems.map(item=>typeof item==="number"?<button type="button" className={item===page?"active":""} aria-current={item===page?"page":undefined} onClick={()=>goToPage(item)} key={item}>{item}</button>:<span aria-hidden="true" key={item}>…</span>)}</div><button type="button" onClick={()=>goToPage(page+1)} disabled={page===pageCount}>Next <ChevronRight/></button></nav>}
      {filteredBooks.length>0&&<p className="book-library-page-note">Page {page} of {pageCount}</p>}
    </section></main>
    <SiteFooter/>
  </>;
}
