"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RevealGroup({
  children,
  className = "",
  stagger = 0.12,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll(".reveal-item");
    if (items.length === 0) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      gsap.set(items, { opacity: 1, y: 0, filter: "none" });
      return;
    }

    gsap.set(items, {
      opacity: 0,
      y: 22,
      filter: "brightness(45%) contrast(140%) grayscale(60%)",
    });

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        filter: "brightness(100%) contrast(100%) grayscale(0%)",
        duration: 0.9,
        ease: "power1.out",
        stagger,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}