import RevealGroup from "./RevealGroup";

export default function ClosingCTA() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-16 max-w-[1440px] mx-auto w-full border-t border-silver/10 text-center">
      <RevealGroup>
        <p className="reveal-item font-mono-cap text-[11px] tracking-[0.15em] text-safelight uppercase mb-5">
          06A · Book
        </p>
        <h2 className="reveal-item font-display text-4xl md:text-5xl text-paper mb-6">
          Ready to book your session?
        </h2>
        <p className="reveal-item text-paper/70 mb-10 max-w-md mx-auto">
          Based in Lagos, available for shoots across Nigeria and worldwide.
        </p>
        <a
          href="/contact"
          className="reveal-item inline-flex px-8 py-3 bg-safelight text-paper border border-safelight font-mono-cap text-xs uppercase tracking-[0.15em] transition-colors hover:bg-transparent hover:text-safelight"
        >
          Enquire now
        </a>
      </RevealGroup>
    </section>
  );
}