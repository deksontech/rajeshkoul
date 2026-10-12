"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  ClipboardCheck,
  Coins,
  Factory,
  FileCheck2,
  Gauge,
  Globe2,
  Handshake,
  HeartHandshake,
  Layers3,
  Megaphone,
  Network,
  PanelsTopLeft,
  RefreshCcw,
  Route,
  Users,
  Workflow,
} from "lucide-react";

const expertise = [
  {
    title: "Growth & Strategy",
    description: "Designing growth blueprints that align markets and offerings.",
    cards: [
      { icon: BarChart3, title: "Sales Growth Strategy", text: "Predictable revenue acceleration and performance rhythms." },
      { icon: Globe2, title: "Market Expansion", text: "Structured entry plans for new geographies and white spaces." },
      { icon: Handshake, title: "Strategic Alliances", text: "Governing partnerships that unlock ecosystem capabilities." },
      { icon: Layers3, title: "M&A Integration", text: "Aligning culture and operating models for synergy." },
    ],
  },
  {
    title: "Shared Services & GCC",
    description: "Building high-performing Global Capability Centres.",
    cards: [
      { icon: Building2, title: "GCC Set-up", text: "Defining mandates and strategic competitive advantage." },
      { icon: ClipboardCheck, title: "Service Design", text: "Industrialised catalogues with clear SLAs." },
      { icon: Gauge, title: "Performance Frameworks", text: "Keeping global operations aligned and accountable." },
      { icon: Users, title: "Talent Strategy", text: "Future-ready skill roadmaps for global talent pools." },
    ],
  },
  {
    title: "Tech Transformation",
    description: "Using Digital, AI, and Industry 4.0 to redesign workflows.",
    cards: [
      { icon: Workflow, title: "Process Digitisation", text: "Simplifying flows with RPA and low-code platforms." },
      { icon: BrainCircuit, title: "AI Integration", text: "Embedding AI for insight-driven decision making." },
      { icon: Factory, title: "Industry 4.0", text: "IIoT and digital twins with clear ROI impact." },
      { icon: PanelsTopLeft, title: "CX Platforms", text: "Orchestrating CRM for consistent customer journeys." },
    ],
  },
  {
    title: "ESG & Value Creation",
    description: "Integrating sustainability into core business strategy.",
    cards: [
      { icon: Route, title: "ESG Roadmaps", text: "Aligning long-term ambition with business strategy." },
      { icon: FileCheck2, title: "Compliance", text: "Data models meeting regulatory disclosure standards." },
      { icon: HeartHandshake, title: "Purpose-led Value", text: "Measurable initiatives for customers and people." },
      { icon: Megaphone, title: "Engagement", text: "Feedback loops with investors and communities." },
    ],
  },
  {
    title: "Operational Excellence",
    description: "Lean, standardised and resilient operations at scale.",
    cards: [
      { icon: RefreshCcw, title: "Lean Transformation", text: "Daily improvement culture and operational stability." },
      { icon: Network, title: "Re-engineering", text: "Improving quality, throughput and consistency." },
      { icon: Layers3, title: "Operating Model", text: "Blueprints across people, process and technology." },
      { icon: Coins, title: "Cost Optimisation", text: "Protecting risk while releasing structural levers." },
    ],
  },
];

export function CoreExpertiseTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = expertise[active];

  function selectTab(index: number) {
    setActive(index);
    tabs.current[index]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Home") return selectTab(0);
    if (event.key === "End") return selectTab(expertise.length - 1);
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    selectTab((index + direction + expertise.length) % expertise.length);
  }

  return (
    <div className="core-panel">
      <div className="core-tabs" role="tablist" aria-label="Core expertise categories">
        {expertise.map((item, index) => (
          <button
            ref={(element) => { tabs.current[index] = element; }}
            className={active === index ? "active" : ""}
            id={`core-tab-${index}`}
            aria-controls={`core-panel-${index}`}
            aria-selected={active === index}
            role="tab"
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            key={item.title}
          >
            <b>{String(index + 1).padStart(2, "0")}</b>
            {item.title}
            <ArrowRight aria-hidden="true" />
          </button>
        ))}
      </div>
      <div
        className="core-content"
        id={`core-panel-${active}`}
        aria-labelledby={`core-tab-${active}`}
        role="tabpanel"
        key={selected.title}
      >
        <h3><b>{String(active + 1).padStart(2, "0")}</b>{selected.title}</h3>
        <p>{selected.description}</p>
        <div className="core-cards">
          {selected.cards.map(({ icon: Icon, title, text }) => (
            <article className="mini-card" key={title}>
              <span><Icon aria-hidden="true" /></span>
              <div><b>{title}</b><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
