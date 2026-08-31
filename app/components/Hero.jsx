"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const imgRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const exifRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (mq.matches) {
      gsap.set(
        [
          imgRef.current,
          headlineRef.current,
          subRef.current,
          ctaRef.current,
          exifRef.current,
        ],
        { opacity: 1, y: 0, filter: "none" },
      );
      return;
    }

    gsap.set(imgRef.current, {
      opacity: 0,
      filter: "contrast(180%) brightness(45%) grayscale(100%)",
    });
    gsap.set([headlineRef.current, subRef.current, ctaRef.current], {
      opacity: 0,
      y: 14,
    });
    gsap.set(exifRef.current, { opacity: 0 });

    tl.to(imgRef.current, {
      opacity: 1,
      filter: "contrast(100%) brightness(100%) grayscale(0%)",
      duration: 1.6,
      ease: "power1.inOut",
    })
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(exifRef.current, { opacity: 1, duration: 0.6 }, "-=0.3");
  }, []);

  return (
    <section className="relative w-full h-[92vh] min-h-[560px] flex items-center justify-center overflow-hidden border-b border-silver/20">
      <div
        ref={imgRef}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/id/64/1600/2000')",
          filter: "grayscale(1) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-darkroom/45 z-10" />

      <div className="relative z-20 text-center px-5 md:px-16 flex flex-col items-center">
        <h1
          ref={headlineRef}
          className="font-display text-5xl md:text-[76px] leading-[1.05] tracking-tight text-paper mb-6"
        >
          Loverin Studio
        </h1>
        <p
          ref={subRef}
          className="font-display italic text-lg md:text-xl text-paper/80 max-w-xl mx-auto mb-10"
        >
          Portrait, wedding, and editorial photography — shot and developed in
          Lagos.
        </p>
        <div ref={ctaRef}>
          <Link
            href="/portfolio"
            className="inline-flex px-8 py-3 bg-safelight text-paper border border-safelight font-mono-cap text-xs uppercase tracking-[0.15em] transition-colors hover:bg-transparent hover:text-safelight"
          >
            View the contact sheet
          </Link>
        </div>
      </div>

      <div
        ref={exifRef}
        className="absolute bottom-6 left-5 md:left-16 z-20 font-mono-cap text-[11px] tracking-[0.1em] text-silver"
      >
        EXP. 36 · f/1.8
      </div>
      <div className="absolute bottom-6 right-5 md:right-16 z-20 font-mono-cap text-[11px] tracking-[0.1em] text-silver">
        ISO 400 · LAGOS, NG
      </div>
    </section>
  );
}
