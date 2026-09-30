"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, Check, GraduationCap, List, Mail, MessageCircle, Network, Phone, Send, TrendingUp, User, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-shell";

const reasons = [
  { icon: BookOpen, title: <>Learn About<br/>My Book</>, text: "The Lean Nervous System" },
  { icon: Network, title: <>The Enterprise<br/>Health Lab</>, text: "Assess. Diagnose. Transform." },
  { icon: TrendingUp, title: <>Business<br/>Transformation</>, text: "Frameworks, approaches and collaboration." },
  { icon: Users, title: <>Leadership<br/>Talk Series</>, text: "Keynotes, workshops and panel discussions." },
  { icon: GraduationCap, title: <>Educational<br/>Engagements</>, text: "Institutes, student sessions and faculty collaborations." },
  { icon: BookOpen, title: <>Upcoming<br/>Books</>, text: "Future publications and ideas in progress." },
];

export default function ContactPage(){
  const [sent,setSent]=useState(false);
  function submit(event:React.FormEvent<HTMLFormElement>){event.preventDefault();setSent(true)}
  return <><SiteHeader/><main className="contact-page">
    <section className="contact-stage">
      <div className="contact-copy">
        <p className="contact-eyebrow">LET’S CONNECT</p>
        <h1>Start a<br/><span>Meaningful Conversation.</span></h1>
        <p className="contact-intro">I’d love to hear from you. Whether it’s to learn about my book <b>The Lean Nervous System</b>, explore The Enterprise Health Lab, discuss business transformation frameworks, invite me for a leadership or educational talk, or to share an idea — let’s connect.</p>
        <div className="contact-reasons">{reasons.map(({icon:Icon,title,text},index)=><article key={index}><i><Icon/></i><div><h2>{title}</h2><p>{text}</p></div><ArrowRight/></article>)}</div>
        <blockquote><b>“</b><p>“Ideas, when shared,<br/>have the power to create better organisations.”</p></blockquote>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <div className="contact-form-heading"><span/><p>SEND YOUR ENQUIRY</p><Send aria-hidden="true"/></div>
        <div className="contact-field-grid">
          <label><User/><span className="sr-only">First name</span><input name="firstName" required placeholder="First Name *" autoComplete="given-name"/></label>
          <label><User/><span className="sr-only">Last name</span><input name="lastName" required placeholder="Last Name *" autoComplete="family-name"/></label>
          <label><Mail/><span className="sr-only">Email address</span><input type="email" name="email" required placeholder="Email Address *" autoComplete="email"/></label>
          <label><Phone/><span className="sr-only">Phone number</span><input type="tel" name="phone" placeholder="Phone No. (Optional)" autoComplete="tel"/></label>
        </div>
        <label className="contact-select"><List/><span className="sr-only">I’d like to connect about</span><select name="topic" required defaultValue=""><option value="" disabled>I’d like to connect about *</option><option>My book — The Lean Nervous System</option><option>The Enterprise Health Lab</option><option>Business transformation</option><option>Leadership talk series</option><option>Educational engagement</option><option>Upcoming books</option><option>Something else</option></select></label>
        <label className="contact-message"><MessageCircle/><span>How can I help you?</span><textarea name="message" required placeholder="Share a few details about your interest, idea or enquiry..."/></label>
        <label className="contact-consent"><input type="checkbox" required/><span>By submitting this form, you agree that I may use your information to respond to your enquiry. I respect your privacy and will only use it for the purpose of communication.</span></label>
        <button className="contact-submit" type="submit">{sent?<><Check/> Message Ready</>:<>Send Message <ArrowRight/></>}</button>
        {sent&&<p className="contact-success" role="status">Thank you. Your enquiry has been prepared successfully.</p>}
      </form>
    </section>
  </main></>;
}
