"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- Vinext production RSC navigation is incompatible with next/link in this deployment. */
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Grid2X2, List, Newspaper, Search, X } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ArticleCard, latest } from "../page";

type BlogView="grid"|"list";
type BlogSort="latest"|"featured"|"popular"|"title-asc"|"title-desc";
const BLOG_PAGE_SIZES=[6,9,12,15];

export default function AllBlogsPage(){
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("all");
  const [author,setAuthor]=useState("all");
  const [sort,setSort]=useState<BlogSort>("latest");
  const [view,setView]=useState<BlogView>("grid");
  const [page,setPage]=useState(1);
  const [pageSize,setPageSize]=useState(6);

  const categories=useMemo(()=>Array.from(new Set(latest.map(item=>item.category))).sort((a,b)=>a.localeCompare(b)),[]);
  const authors=["Rajesh Koul"];
  const filteredBlogs=useMemo(()=>{
    const term=query.trim().toLocaleLowerCase();
    const matches=latest.filter(item=>{
      const searchable=[item.title,item.category,item.excerpt,...item.topics,"Rajesh Koul"].join(" ").toLocaleLowerCase();
      return (!term||searchable.includes(term))&&(category==="all"||item.category===category)&&(author==="all"||author==="Rajesh Koul");
    });
    if(sort==="featured")return [...matches].sort((a,b)=>Number(b.featured)-Number(a.featured)||b.popularity-a.popularity);
    if(sort==="popular")return [...matches].sort((a,b)=>b.popularity-a.popularity);
    if(sort==="title-asc")return [...matches].sort((a,b)=>a.title.localeCompare(b.title));
    if(sort==="title-desc")return [...matches].sort((a,b)=>b.title.localeCompare(a.title));
    return matches;
  },[query,category,author,sort]);

  const pageCount=Math.max(1,Math.ceil(filteredBlogs.length/pageSize));
  const visibleBlogs=filteredBlogs.slice((page-1)*pageSize,page*pageSize);
  const firstResult=filteredBlogs.length===0?0:(page-1)*pageSize+1;
  const lastResult=Math.min(page*pageSize,filteredBlogs.length);
  const activeFilters=Boolean(query||category!=="all"||author!=="all"||sort!=="latest");
  const pageItems=useMemo<(number|string)[]>(()=>{
    if(pageCount<=7)return Array.from({length:pageCount},(_,index)=>index+1);
    const values:(number|string)[]=[1];
    if(page>4)values.push("start-ellipsis");
    for(let value=Math.max(2,page-1);value<=Math.min(pageCount-1,page+1);value++)values.push(value);
    if(page<pageCount-3)values.push("end-ellipsis");
    values.push(pageCount);
    return values;
  },[page,pageCount]);

  useEffect(()=>{const saved=window.localStorage.getItem("blogs-view");if(saved==="grid"||saved==="list")setView(saved)},[]);
  useEffect(()=>{setPage(1)},[query,category,author,sort,pageSize]);
  useEffect(()=>{if(page>pageCount)setPage(pageCount)},[page,pageCount]);

  const chooseView=(next:BlogView)=>{setView(next);window.localStorage.setItem("blogs-view",next)};
  const clearFilters=()=>{setQuery("");setCategory("all");setAuthor("all");setSort("latest")};
  const goToPage=(next:number)=>{setPage(Math.min(Math.max(next,1),pageCount));document.getElementById("all-blogs")?.scrollIntoView({behavior:"smooth",block:"start"})};

  return <><SiteHeader/><main className="blogs-page blogs-catalogue-page">
    <section className="blogs-catalogue-hero">
      <div><a href="/blogs/"><ArrowLeft/> Back to Blogs</a><p className="blogs-kicker">IDEAS · PERSPECTIVES · PRACTICE</p><h1>All Blogs</h1><p>Explore the complete collection of practical perspectives on transformation, leadership, Lean thinking, innovation, and sustainable growth.</p></div>
    </section>
    <section className="blogs-catalogue" id="all-blogs" aria-label="All blog articles">
      <div className="book-library-toolbar">
        <div className="book-library-toolbar-heading"><div><p>ALL ARTICLES</p><h2>Explore every perspective</h2></div><p className="book-library-results" role="status" aria-live="polite">Showing <b>{firstResult}–{lastResult}</b> of <b>{filteredBlogs.length}</b> {filteredBlogs.length===1?"article":"articles"}</p></div>
        <div className="book-library-controls">
          <label className="book-library-search"><span className="sr-only">Search blogs</span><Search aria-hidden="true"/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search title, topic, keyword…"/>{query&&<button type="button" onClick={()=>setQuery("")} aria-label="Clear search"><X/></button>}</label>
          <label><span>Category</span><select value={category} onChange={event=>setCategory(event.target.value)}><option value="all">All categories</option>{categories.map(item=><option value={item} key={item}>{item}</option>)}</select></label>
          <label><span>Author</span><select value={author} onChange={event=>setAuthor(event.target.value)}><option value="all">All authors</option>{authors.map(item=><option value={item} key={item}>{item}</option>)}</select></label>
          <label><span>Sort by</span><select value={sort} onChange={event=>setSort(event.target.value as BlogSort)}><option value="latest">Latest first</option><option value="featured">Featured</option><option value="popular">Most read</option><option value="title-asc">Title: A–Z</option><option value="title-desc">Title: Z–A</option></select></label>
        </div>
        <div className="book-library-options">
          <div>{activeFilters&&<button className="book-library-clear" type="button" onClick={clearFilters}><X/> Clear filters</button>}</div>
          <label className="book-library-page-size"><span>Articles per page</span><select value={pageSize} onChange={event=>setPageSize(Number(event.target.value))}>{BLOG_PAGE_SIZES.map(size=><option value={size} key={size}>{size}</option>)}</select></label>
          <div className="book-library-view" role="group" aria-label="Choose blog display"><button type="button" aria-label="Grid view" aria-pressed={view==="grid"} onClick={()=>chooseView("grid")}><Grid2X2/></button><button type="button" aria-label="List view" aria-pressed={view==="list"} onClick={()=>chooseView("list")}><List/></button></div>
        </div>
      </div>
      {visibleBlogs.length>0?<div className={`blogs-all-grid is-${view}`}>{visibleBlogs.map(item=><ArticleCard key={item.title} {...item}/>)}</div>:<div className="book-library-empty"><Newspaper/><h2>No matching articles</h2><p>Try another title, author, or category.</p><button type="button" onClick={clearFilters}>Show all blogs</button></div>}
      {filteredBlogs.length>0&&pageCount>1&&<nav className="book-library-pagination" aria-label="Blog pages"><button type="button" onClick={()=>goToPage(page-1)} disabled={page===1}><ChevronLeft/> Previous</button><div>{pageItems.map(item=>typeof item==="number"?<button type="button" className={item===page?"active":""} aria-current={item===page?"page":undefined} onClick={()=>goToPage(item)} key={item}>{item}</button>:<span aria-hidden="true" key={item}>…</span>)}</div><button type="button" onClick={()=>goToPage(page+1)} disabled={page===pageCount}>Next <ChevronRight/></button></nav>}
      {filteredBlogs.length>0&&<p className="book-library-page-note">Page {page} of {pageCount}</p>}
    </section>
  </main><SiteFooter/></>;
}
