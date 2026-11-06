"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
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
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
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

  useEffect(() => {
    if (activeBook === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeBook]);

  const closeLightbox = () => {
    const previousBook = activeBook;
    setActiveBook(null);
    window.requestAnimationFrame(() => {
      if (previousBook !== null) triggerRefs.current[previousBook]?.focus();
    });
  };

  const activeBookData = activeBook === null ? null : books[activeBook];

  return (
    <>
      <div className="blueprint-books" ref={showcaseRef} aria-label="The Lean Nervous System book gallery">
        {books.map((book, index) => (
          <button
            className={`blueprint-book${isVisible ? " is-visible" : ""}`}
            key={book.src}
            ref={(element) => { triggerRefs.current[index] = element; }}
            type="button"
            aria-label={`Open a larger view of ${book.alt}`}
            aria-haspopup="dialog"
            aria-expanded={activeBook === index}
            onClick={() => setActiveBook(index)}
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
      {activeBookData && createPortal(
        <div className="blueprint-lightbox" onMouseDown={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}>
          <div className="blueprint-lightbox-dialog" role="dialog" aria-modal="true" aria-label={activeBookData.alt}>
            <button className="blueprint-lightbox-close" type="button" onClick={closeLightbox} aria-label="Close image viewer" autoFocus><X /></button>
            <Image
              className="blueprint-lightbox-image"
              src={activeBookData.src}
              alt={activeBookData.alt}
              width={activeBookData.width}
              height={activeBookData.height}
              sizes="92vw"
              draggable={false}
            />
            <p>{activeBookData.alt}</p>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
