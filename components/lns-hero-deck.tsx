"use client";

import { useEffect, useState } from "react";

const messages = [
  {
    title: "A Practical Guide to Optimising Enterprise Health",
    text: "Move beyond fragmented KPIs and intuition. Establish a structured, evidence-based view of organisational maturity and health.",
  },
  {
    title: "“The Operating System for Enterprise Transformation”",
    text: "The Lean Nervous System — enabling organisations to sense early, respond intelligently, and sustain performance.",
  },
  {
    title: "From Medical Scans to Organisational MRI",
    text: "Diagnose your enterprise like a system. See where you stand, what is breaking, and what must evolve next.",
  },
  {
    title: "Original & Tested Frameworks for Self-Propagating Change",
    text: "Go beyond improvement projects. Build systems where ideas spread, scale, and sustain without dependency on heroics.",
  },
  {
    title: "A Practical Roadmap to Self-Running Excellence",
    text: "Transition from firefighting and instability → to disciplined, resilient, world-class execution.",
  },
];

export function LnsHeroDeck() {
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rotate = window.setTimeout(() => {
      setExiting(true);
      window.setTimeout(() => {
        setActive((current) => (current + 1) % messages.length);
        setExiting(false);
      }, 420);
    }, 4400);

    return () => window.clearTimeout(rotate);
  }, [active, paused]);

  const message = messages[active];

  return (
    <div
      className="lns-deck"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-label="Featured book messages"
    >
      <div className={`lns-deck-message${exiting ? " is-exiting" : ""}`} aria-live="off">
        <h2>{message.title}</h2>
        <p>{message.text}</p>
      </div>
      <div className="lns-deck-dots" role="group" aria-label="Choose a featured message">
        {messages.map((item, index) => (
          <button
            type="button"
            className={active === index ? "active" : ""}
            aria-label={`Show message ${index + 1}: ${item.title}`}
            aria-pressed={active === index}
            onClick={() => { setActive(index); setExiting(false); }}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}
