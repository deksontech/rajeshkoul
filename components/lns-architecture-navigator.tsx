"use client";

import { CSSProperties, useEffect, useState } from "react";
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
  { code: "A", icon: BrainCog, title: "Foundational Enablers — Catalytic Core", text: "The brain of the enterprise—where purpose, discipline, and behaviour align to create reflexes that sustain performance without supervision.", outcome: "Drives rhythm, learning, and self-correction" },
  { code: "B", icon: Lightbulb, title: "Design and Innovation Management", text: "The sensory intelligence that converts customer signals into future-ready designs—ensuring the organisation evolves before disruption arrives.", outcome: "Decoding external signals into value" },
  { code: "C", icon: Network, title: "Supply Chain & Procurement Excellence", text: "The enterprise’s external nervous network—continuously sensing risk, flow, and resilience across the ecosystem.", outcome: "Sensing ecosystem variability" },
  { code: "D", icon: Factory, title: "Manufacturing & Operational Excellence", text: "The execution nerve pathways—where signals translate into flow, stability, and speed, turning intent into output.", outcome: "Flow, OEE, real-time responsiveness" },
  { code: "E", icon: BadgeCheck, title: "Quality Management Systems", text: "The immune system of the enterprise—detecting, preventing, and eliminating abnormalities before they become systemic failures.", outcome: "Prevention over detection, reflex accuracy" },
  { code: "F", icon: Leaf, title: "Energy, Environment & Safety Systems", text: "The enterprise’s physiological balance—monitoring sustainability, resilience, and risk for long-term survival.", outcome: "Resilience-driven sustainability" },
  { code: "G", icon: UsersRound, title: "Human Capital Development", text: "The cognitive engine that transforms signals into capability—building intelligence, ownership, and adaptability.", outcome: "Skills → behaviour → competence" },
  { code: "H", icon: Megaphone, title: "Go to Market & Market Responsiveness", text: "The outward sensing-and-response loop—where the enterprise listens, adapts, and moves with shifting customer expectations.", outcome: "Voice of customer, market feedback loop" },
  { code: "I", icon: ChartNoAxesCombined, title: "Performance Management & Governance", text: "The control centre that integrates signals into decisions—ensuring clarity, discipline, and alignment to True North.", outcome: "KPIs, dashboards, decision rhythm" },
  { code: "J", icon: Target, title: "Outcome Performance Measures", text: "The visible vitality of the system—where connected actions translate into growth, profitability, resilience, and trust.", outcome: "Proof of maturity, not just activity" },
];

function getDomainPosition(index: number) {
  const angle = (-90 + index * (360 / domains.length)) * (Math.PI / 180);
  return {
    x: 50 + Math.cos(angle) * 27,
    y: 50 + Math.sin(angle) * 40,
  };
}

function getCoreEdge(x: number, y: number) {
  const nodeX = x * 10;
  const nodeY = y * 7;
  const dx = nodeX - 500;
  const dy = nodeY - 350;
  const radiusX = 164;
  const radiusY = 171;
  const scale = 1 / Math.sqrt((dx * dx) / (radiusX * radiusX) + (dy * dy) / (radiusY * radiusY));
  return { nodeX, nodeY, edgeX: 500 + dx * scale, edgeY: 350 + dy * scale };
}

export function LnsArchitectureNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = domains[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % domains.length);
    }, 4200);
    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  return <div className="lns-constellation">
    <svg className="lns-constellation-lines" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="lnsCoreGlow"><stop offset="0" stopColor="#dcae63" stopOpacity=".25" /><stop offset="1" stopColor="#dcae63" stopOpacity="0" /></radialGradient>
        <marker id="lnsArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#9d824e" />
        </marker>
        <marker id="lnsArrowActive" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#e1b66f" />
        </marker>
      </defs>
      <ellipse cx="500" cy="350" rx="270" ry="280" className="lns-orbit lns-orbit-one" />
      <ellipse cx="500" cy="350" rx="218" ry="226" className="lns-orbit lns-orbit-two" />
      <ellipse cx="500" cy="350" rx="184" ry="191" fill="url(#lnsCoreGlow)" />
      {domains.map((domain, index) => {
        const position = getDomainPosition(index);
        const line = getCoreEdge(position.x, position.y);
        return <line
          className={index === activeIndex ? "lns-signal-line is-active" : "lns-signal-line"}
          x1={line.nodeX}
          y1={line.nodeY}
          x2={line.edgeX}
          y2={line.edgeY}
          markerEnd={index === activeIndex ? "url(#lnsArrowActive)" : "url(#lnsArrow)"}
          key={domain.code}
        />;
      })}
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
        const coordinates = getDomainPosition(index);
        const position = { "--node-x": `${coordinates.x}%`, "--node-y": `${coordinates.y}%` } as CSSProperties;
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
