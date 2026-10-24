"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const expertise = [
  {
    title: "TECHNOLOGY ENABLED TRANSFORMATION",
    points: ["Digital Transformation", "LCA & RPA", "Business Analytics & Visualization"],
  },
  {
    title: "BUSINESS PROCESS ADVISORY",
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
    points: ["Target Operating Model", "Cost Transformation", "Design thinking, Organizational design", "P2M Innovation"],
  },
  {
    title: "OPERATIONAL EXCELLENCE",
    points: [
      "Lean Management, Design for Six Sigma",
      "Cognitive Quality & Industry 4.0 practice",
      "Continuous Improvement Culture",
      "Innovation using TRIZ",
    ],
  },
  {
    title: "SERVICE DELIVERY",
    points: ["Customer strategy", "Customer Journey mapping", "Blueprint for Service delivery", "Service Delivery design and measurement"],
  },
];

export function ExpertiseAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="expertise-list">
      {expertise.map(({ title, points }, index) => {
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
              <span className="expertise-number">{String(index + 1).padStart(2, "0")}</span>
              <b>{title}</b>
              <span className="expertise-toggle" aria-hidden="true"><Plus /></span>
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
