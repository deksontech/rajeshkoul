"use client";

import { CSSProperties, useState } from "react";
import {
  BadgeCheck,
  BrainCog,
  ChartNoAxesCombined,
  Factory,
  Leaf,
  Lightbulb,
  Megaphone,
  Network,
  Target,
  UsersRound,
} from "lucide-react";

const domains = [
  { code: "A", x: 50, y: 6, icon: BrainCog, title: "Foundational Enablers — Catalytic Core", text: "The brain of the enterprise—where purpose, discipline, and behaviour align to create reflexes that sustain performance without supervision.", outcome: "Drives rhythm, learning, and self-correction" },
  { code: "B", x: 75, y: 13, icon: Lightbulb, title: "Design and Innovation Management", text: "The sensory intelligence that converts customer signals into future-ready designs—ensuring the organisation evolves before disruption arrives.", outcome: "Decoding external signals into value" },
  { code: "C", x: 91, y: 31, icon: Network, title: "Supply Chain & Procurement Excellence", text: "The enterprise’s external nervous network—continuously sensing risk, flow, and resilience across the ecosystem.", outcome: "Sensing ecosystem variability" },
  { code: "D", x: 94, y: 56, icon: Factory, title: "Manufacturing & Operational Excellence", text: "The execution nerve pathways—where signals translate into flow, stability, and speed, turning intent into output.", outcome: "Flow, OEE, real-time responsiveness" },
  { code: "E", x: 80, y: 81, icon: BadgeCheck, title: "Quality Management Systems", text: "The immune system of the enterprise—detecting, preventing, and eliminating abnormalities before they become systemic failures.", outcome: "Prevention over detection, reflex accuracy" },
  { code: "F", x: 60, y: 94, icon: Leaf, title: "Energy, Environment & Safety Systems", text: "The enterprise’s physiological balance—monitoring sustainability, resilience, and risk for long-term survival.", outcome: "Resilience-driven sustainability" },
  { code: "G", x: 40, y: 94, icon: UsersRound, title: "Human Capital Development", text: "The cognitive engine that transforms signals into capability—building intelligence, ownership, and adaptability.", outcome: "Skills → behaviour → competence" },
  { code: "H", x: 20, y: 81, icon: Megaphone, title: "Go to Market & Market Responsiveness", text: "The outward sensing-and-response loop—where the enterprise listens, adapts, and moves with shifting customer expectations.", outcome: "Voice of customer, market feedback loop" },
  { code: "I", x: 6, y: 56, icon: ChartNoAxesCombined, title: "Performance Management & Governance", text: "The control centre that integrates signals into decisions—ensuring clarity, discipline, and alignment to True North.", outcome: "KPIs, dashboards, decision rhythm" },
  { code: "J", x: 9, y: 31, icon: Target, title: "Outcome Performance Measures", text: "The visible vitality of the system—where connected actions translate into growth, profitability, resilience, and trust.", outcome: "Proof of maturity, not just activity" },
];

export function LnsArchitectureNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = domains[activeIndex];
  const ActiveIcon = active.icon;

  return <div className="lns-constellation">
    <svg className="lns-constellation-lines" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="lnsCoreGlow"><stop offset="0" stopColor="#dcae63" stopOpacity=".25" /><stop offset="1" stopColor="#dcae63" stopOpacity="0" /></radialGradient>
        <filter id="lnsGlow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <ellipse cx="500" cy="350" rx="365" ry="275" className="lns-orbit lns-orbit-one" />
      <ellipse cx="500" cy="350" rx="280" ry="210" className="lns-orbit lns-orbit-two" />
      <circle cx="500" cy="350" r="190" fill="url(#lnsCoreGlow)" />
      {domains.map((domain, index) => <line
        className={index === activeIndex ? "lns-signal-line is-active" : "lns-signal-line"}
        x1={domain.x * 10}
        y1={domain.y * 7}
        x2="500"
        y2="350"
        key={domain.code}
      />)}
      <circle className="lns-signal-heart" cx="500" cy="350" r="7" filter="url(#lnsGlow)" />
    </svg>

    <div className="lns-constellation-core" key={active.code}>
      <div className="lns-constellation-core-top"><Network aria-hidden="true" /><span><small>THE UNIFYING CORE</small><strong>Lean Maturity Model</strong></span></div>
      <div className="lns-constellation-active"><span>{active.code}</span><ActiveIcon aria-hidden="true" /></div>
      <p className="lns-constellation-position">DOMAIN {String(activeIndex + 1).padStart(2, "0")} / {String(domains.length).padStart(2, "0")}</p>
      <h3>{active.title}</h3>
      <p className="lns-constellation-copy">{active.text}</p>
      <div className="lns-constellation-outcome"><small>SYSTEM OUTCOME</small><strong>{active.outcome}</strong></div>
    </div>

    <div className="lns-constellation-nodes" role="list" aria-label="Lean Nervous System domains">
      {domains.map((domain, index) => {
        const Icon = domain.icon;
        const position = { "--node-x": `${domain.x}%`, "--node-y": `${domain.y}%` } as CSSProperties;
        return <button
          className={index === activeIndex ? "lns-constellation-node is-active" : "lns-constellation-node"}
          style={position}
          type="button"
          role="listitem"
          aria-label={`${domain.code}. ${domain.title}`}
          aria-pressed={index === activeIndex}
          onClick={() => setActiveIndex(index)}
          key={domain.code}
        >
          <span><Icon aria-hidden="true" /><b>{domain.code}</b></span>
          <em>{domain.title}</em>
        </button>;
      })}
    </div>
  </div>;
}
