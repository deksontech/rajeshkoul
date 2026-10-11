"use client";

import { useState } from "react";
import { BarChart3, ChevronDown, Cog, Layers3, Target, Users } from "lucide-react";

const expertise = [
  {
    title: "TECHNOLOGY ENABLED TRANSFORMATION",
    icon: Cog,
    points: ["Digital Transformation", "LCA & RPA", "Business Analytics & Visualization"],
  },
  {
    title: "BUSINESS PROCESS ADVISORY",
    icon: Layers3,
    points: [
      "Business Process Management System",
      "Business Intelligence & Analytics",
      "Business Process Reengineering",
      "Quality & Environment Management Systems",
      "TQM & TPM",
    ],
  },
  {
    title: "GROWTH & TRANSFORMATION",
    icon: BarChart3,
    points: ["Target Operating Model", "Cost Transformation", "Design thinking, Organizational design", "P2M Innovation"],
  },
  {
    title: "OPERATIONAL EXCELLENCE",
    icon: Target,
    points: [
      "Lean Management, Design for Six Sigma",
      "Cognitive Quality & Industry 4.0 practice",
      "Continuous Improvement Culture",
      "Innovation using TRIZ",
    ],
  },
  {
    title: "SERVICE DELIVERY",
    icon: Users,
    points: ["Customer strategy", "Customer Journey mapping", "Blueprint for Service delivery", "Service Delivery design and measurement"],
  },
];

export function ExpertiseAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="expertise-list">
      {expertise.map(({ title, icon: Icon, points }, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            className={`expertise-item${isOpen ? " is-open" : ""}`}
            key={title}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
            onFocus={() => setOpenIndex(index)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setOpenIndex(null);
            }}
          >
            <button
              className="expertise-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={`expertise-panel-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="expertise-icon"><Icon /></span>
              <b>{title}</b>
              <ChevronDown className="expertise-chevron" aria-hidden="true" />
            </button>
            <div className="expertise-panel" id={`expertise-panel-${index}`} aria-hidden={!isOpen}>
              <div>
                <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
