"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import gsap from "gsap";
import { categories, frames } from "@/lib/portfolio";

function GreasePencilCircle({ active }) {
  const circleRef = useRef(null);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;
    const length = el.getTotalLength();
    gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
    if (active) {
      gsap.to(el, { strokeDashoffset: 0, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(el, {
        strokeDashoffset: length,
        duration: 0.25,
        ease: "power1.in",
      });
    }
  }, [active]);

  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <circle
        ref={circleRef}
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="#9E2B25"
        strokeWidth="2.5"
        transform="rotate(-8 50 50)"
      />
    </svg>
  );
}

export default function PortfolioGrid() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const matched = categories.find((c) => c.toLowerCase() === initialCategory);

  const [active, setActive] = useState(matched || "All");
  const [hoveredId, setHoveredId] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "All" ? frames : frames.filter((f) => f.category === active);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2 font-mono-cap text-[11px] uppercase tracking-[0.15em] border transition-colors ${
              active === c
                ? "border-safelight text-safelight"
                : "border-silver/30 text-silver hover:text-paper hover:border-paper"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {filtered.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setLightbox(f)}
            onMouseEnter={() => setHoveredId(f.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative group border border-silver/20 overflow-hidden text-left"
          >
            <img
              src={f.img}
              alt=""
              className="w-full aspect-[4/5] object-cover grayscale transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 bg-darkroom/90 px-2 py-1 border-b border-r border-silver/20 font-mono-cap text-[10px] tracking-[0.1em] text-silver">
              {String(i + 1).padStart(2, "0")}
            </div>
            <GreasePencilCircle active={hoveredId === f.id} />
            <div
              className={`absolute bottom-0 left-0 right-0 bg-darkroom/90 px-3 py-2 font-mono-cap text-[10px] tracking-[0.08em] text-paper/90 transition-transform duration-300 ${
                hoveredId === f.id ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {f.caption}
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-darkroom-deep/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-paper/70 hover:text-paper font-mono-cap text-xs tracking-[0.1em] uppercase"
          >
            Close ✕
          </button>
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt=""
              className="w-full max-h-[80vh] object-contain grayscale"
            />

            <p className="mt-4 text-center font-mono-cap text-xs tracking-[0.1em] text-silver uppercase">
              {lightbox.category} · {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
