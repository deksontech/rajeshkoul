import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const books = [
  {cover:"/art/book-toyota.jpg",href:"/book-review/toyota-way",title:"The Toyota Way",author:"Jeffrey K. Liker",text:"A timeless guide to building a culture of continuous improvement, respect for people, and operational excellence.",tags:["Lean","Operations"]},
  {cover:"/art/book-strategy.jpg",href:"/book-review/reinventing-strategy",title:"Reinventing Strategy",author:"Willie Pietersen",text:"A powerful perspective on strategic learning, adaptability, and creating breakthrough performance.",tags:["Strategy","Leadership"]},
  {cover:"/art/book-product.jpg",href:"/book-review/lean-product-playbook",title:"The Lean Product Playbook",author:"Dan Olsen",text:"A practical guide to building products customers love through experimentation, feedback, and iterative learning.",tags:["Innovation","Product"]},
  {cover:"/art/book-100-startup.webp",href:"/book-review/the-100-startup",title:"The $100 Startup",author:"Chris Guillebeau",text:"A practical guide to building a small, meaningful business with limited resources, focused action, and customer value.",tags:["Entrepreneurship","Startup"]},
  {cover:"/art/book-dynamic-supply-chains.png",href:"/book-review/dynamic-supply-chains",title:"Dynamic Supply Chains",author:"John Gattorna",text:"A people-centric approach to designing responsive supply chains that align strategy, customers, and operational capabilities.",tags:["Supply Chain","Strategy"]},
  {cover:"/art/book-demand-driven-material-requirements-planning.jpg",href:"/book-review/demand-driven-material-requirements-planning",title:"Demand Driven Material Requirements Planning",author:"Carol Ptak & Chad Smith",text:"A practical method for positioning and managing inventory around real demand, flow, and supply-chain variability.",tags:["Planning","Operations"]},
  {cover:"/art/book-cradle-to-cradle.jpg",href:"/book-review/cradle-to-cradle",title:"Cradle to Cradle",author:"William McDonough & Michael Braungart",text:"A compelling vision for designing products and systems around continuous reuse instead of waste.",tags:["Sustainability","Design"]},
  {cover:"/art/book-built-to-last.jpg",href:"/book-review/built-to-last",title:"Built to Last",author:"Jim Collins & Jerry I. Porras",text:"Enduring lessons from visionary companies on preserving a core ideology while stimulating progress.",tags:["Leadership","Strategy"]},
  {cover:"/art/book-blue-ocean-strategy.jpg",href:"/book-review/blue-ocean-strategy",title:"Blue Ocean Strategy",author:"W. Chan Kim & Renée Mauborgne",text:"A framework for creating uncontested market space through value innovation and strategic differentiation.",tags:["Strategy","Innovation"]},
  {cover:"/art/book-balanced-sourcing.jpg",href:"/book-review/balanced-sourcing",title:"Balanced Sourcing",author:"Tim Laseter",text:"A strategic guide to balancing cooperation and competition in high-performing supplier relationships.",tags:["Sourcing","Supply Chain"]},
  {cover:"/art/book-product-design-development.jpg",href:"/book-review/product-design-and-development",title:"Product Design and Development",author:"Karl T. Ulrich & Steven D. Eppinger",text:"A structured, cross-functional approach to creating products from opportunity identification through launch.",tags:["Product","Design"]},
  {cover:"/art/book-logistics-supply-chain-management.jpg",href:"/book-review/logistics-and-supply-chain-management",title:"Logistics & Supply Chain Management",author:"Martin Christopher",text:"An essential guide to building competitive advantage through responsive logistics and integrated supply chains.",tags:["Logistics","Supply Chain"]},
  {cover:"/art/book-learning-in-action.jpg",href:"/book-review/learning-in-action",title:"Learning in Action",author:"David A. Garvin",text:"A practical guide to turning organizational learning into repeatable habits, better decisions, and lasting improvement.",tags:["Learning","Leadership"]},
  {cover:"/art/book-lean-thinking.jpg",href:"/book-review/lean-thinking",title:"Lean Thinking",author:"James P. Womack & Daniel T. Jones",text:"The landmark guide to defining value, improving flow, eliminating waste, and pursuing continuous perfection.",tags:["Lean","Transformation"]},
];

export default function BookReviewPage(){return <>
  <SiteHeader/>
  <main className="book-review-page"><section className="book-review-hero-section" aria-labelledby="book-review-title">
    <div className="book-review-art" aria-hidden="true"/><div className="book-review-dots book-review-dots-left" aria-hidden="true"/>
    <div className="book-review-hero"><p className="book-review-kicker">BOOKS WORTH SHARING</p><h1 id="book-review-title">Ideas That Deserve<span>to Be Passed On</span></h1><p className="book-review-lead">A curated collection of books that have influenced my thinking on<br className="book-review-desktop-break"/> Lean, Strategy, Transformation, Leadership, Innovation, and Business.</p></div>
    <Link className="book-review-cta" href="#book-review-list">Explore My Library <ArrowRight aria-hidden="true"/></Link>
  </section>
  <section className="book-review-list" id="book-review-list" aria-label="Featured book reviews"><div className="book-review-dots book-review-dots-review-left" aria-hidden="true"/><div className="book-review-dots book-review-dots-bottom" aria-hidden="true"/>
    <div className="book-review-cards">{books.map(book=><Link className="book-review-card" href={book.href} target="_blank" rel="noopener noreferrer" aria-label={`Open the ${book.title} review in a new tab`} key={book.title}><div className="book-review-cover"><Image src={book.cover} alt={`Cover of ${book.title}`} fill sizes="(max-width: 700px) 38vw, (max-width: 1100px) 22vw, 180px"/></div><div className="book-review-card-copy"><h2>{book.title}</h2><p className="book-review-author">{book.author}</p><i aria-hidden="true"/><p>{book.text}</p><div className="book-review-tags">{book.tags.map(tag=><span key={tag}>{tag}</span>)}</div><span className="book-review-card-action">My Takeaways <ArrowRight aria-hidden="true"/></span></div></Link>)}</div>
  </section></main>
  <SiteFooter/>
</>}
