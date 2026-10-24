"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const books = [
  {
    src: "/art/lean-nervous-system-front-cover.jpg",
    alt: "Front cover of The Lean Nervous System by Rajesh Koul",
    width: 1066,
    height: 1600,
  },
  {
    src: "/art/lean-nervous-system-back-cover.jpg",
    alt: "Back cover of The Lean Nervous System by Rajesh Koul",
    width: 1000,
    height: 1600,
  },
];

export function BlueprintBooks() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeBook, setActiveBook] = useState<number | null>(null);

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 },
    );

    observer.observe(showcase);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="blueprint-books" ref={showcaseRef} aria-label="The Lean Nervous System book gallery">
      {books.map((book, index) => (
        <button
          className={`blueprint-book${isVisible ? " is-visible" : ""}${activeBook === index ? " is-active" : ""}`}
          key={book.src}
          type="button"
          aria-label={`Enlarge ${book.alt}`}
          aria-pressed={activeBook === index}
          onClick={() => setActiveBook(activeBook === index ? null : index)}
          style={{ "--book-order": index } as CSSProperties}
        >
          <span className="blueprint-book-media">
            <Image
              src={book.src}
              alt={book.alt}
              width={book.width}
              height={book.height}
              sizes="(max-width: 768px) min(78vw, 310px), (max-width: 1100px) 29vw, 340px"
            />
          </span>
        </button>
      ))}
    </div>
  );
}
