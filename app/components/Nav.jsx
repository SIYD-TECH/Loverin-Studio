"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navPages } from "@/lib/nav";

export default function Nav() {
  const pathname = usePathname();
  const frameRefs = useRef({});
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const linkRefs = useRef([]);

  const handleEnter = (frame) => {
    const el = frameRefs.current[frame];
    if (!el) return;
    gsap.fromTo(
      el,
      { y: 0, opacity: 1 },
      {
        y: -6,
        opacity: 0,
        duration: 0.09,
        onComplete: () => {
          gsap.fromTo(
            el,
            { y: 6, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.14, ease: "power2.out" },
          );
        },
      },
    );
  };

  // lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // animate drawer + links in/out
  useEffect(() => {
    const drawer = drawerRef.current;
    const backdrop = backdropRef.current;
    const links = linkRefs.current.filter(Boolean);
    if (!drawer || !backdrop) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (open) {
      drawer.style.display = "flex";
      backdrop.style.display = "block";

      if (mq.matches) {
        gsap.set(backdrop, { opacity: 1 });
        gsap.set(drawer, { x: 0 });
        gsap.set(links, { opacity: 1, x: 0 });
        return;
      }

      gsap.set(backdrop, { opacity: 0 });
      gsap.set(drawer, { x: "100%" });
      gsap.set(links, { opacity: 0, x: 24 });

      const tl = gsap.timeline();
      tl.to(backdrop, { opacity: 1, duration: 0.25, ease: "power1.out" })
        .to(drawer, { x: "0%", duration: 0.4, ease: "power3.out" }, "-=0.15")
        .to(
          links,
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.2",
        );
    } else {
      if (mq.matches) {
        drawer.style.display = "none";
        backdrop.style.display = "none";
        return;
      }
      const tl = gsap.timeline({
        onComplete: () => {
          drawer.style.display = "none";
          backdrop.style.display = "none";
        },
      });
      tl.to(drawer, { x: "100%", duration: 0.3, ease: "power2.in" }).to(
        backdrop,
        { opacity: 0, duration: 0.2 },
        "-=0.2",
      );
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-silver/20 bg-darkroom/95 backdrop-blur-sm">
      <div
        aria-hidden="true"
        className="w-full h-[6px] flex items-center gap-[10px] px-4 overflow-hidden opacity-60"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="block w-[5px] h-[5px] shrink-0 border border-silver/40"
          />
        ))}
      </div>

      <div className="flex items-center justify-between w-full px-5 md:px-16 py-4 max-w-[1440px] mx-auto">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl tracking-tight text-paper"
        >
          Loverin Studio
        </Link>

        <nav className="hidden md:flex items-center">
          {navPages.map((page, i) => {
            const active = pathname === page.href;
            return (
              <div key={page.href} className="flex items-center">
                <Link
                  href={page.href}
                  onMouseEnter={() => handleEnter(page.frame)}
                  className={`group flex items-center gap-2 px-4 py-2 font-mono-cap text-[11px] tracking-[0.1em] transition-colors ${
                    active ? "text-paper" : "text-silver hover:text-paper"
                  }`}
                >
                  <span
                    ref={(el) => {
                      frameRefs.current[page.frame] = el;
                    }}
                    className={active ? "text-safelight" : ""}
                  >
                    {page.frame}
                  </span>
                  <span className="uppercase">{page.label}</span>
                </Link>
                {i < navPages.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="w-[3px] h-[3px] bg-silver/30 rounded-full"
                  />
                )}
              </div>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex px-6 py-2.5 bg-safelight text-paper border border-safelight font-mono-cap text-[11px] uppercase tracking-[0.15em] transition-colors hover:bg-transparent hover:text-safelight"
        >
          Book Session
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative text-paper w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-[60]"
        >
          <span
            className={`block w-6 h-px bg-paper transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-paper transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </div>

      {/* backdrop */}
      <div
        ref={backdropRef}
        onClick={() => setOpen(false)}
        style={{ display: "none" }}
        className="md:hidden fixed inset-0 z-40 bg-darkroom-deep/80"
      />

      {/* slide-in drawer */}
      <div
        ref={drawerRef}
        style={{ display: "none" }}
        className="md:hidden fixed top-0 right-0 z-50 h-full w-[78%] max-w-xs bg-darkroom border-l border-silver/20 flex-col px-8 py-10"
      >
        <div className="flex flex-col gap-1 mt-16">
          {navPages.map((page, i) => {
            const active = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                onClick={() => setOpen(false)}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                className={`flex items-baseline gap-3 py-4 border-b border-silver/10 font-mono-cap text-sm tracking-[0.1em] uppercase transition-colors ${
                  active ? "text-safelight" : "text-paper hover:text-silver"
                }`}
              >
                <span className="text-xs text-silver">{page.frame}</span>
                {page.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            ref={(el) => {
              linkRefs.current[navPages.length] = el;
            }}
            className="mt-8 inline-flex justify-center px-6 py-3 bg-safelight text-paper font-mono-cap text-[11px] uppercase tracking-[0.15em]"
          >
            Book Session
          </Link>
        </div>
      </div>
    </header>
  );
}
