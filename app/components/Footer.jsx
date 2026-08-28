export default function Footer() {
  return (
    <footer className="border-t border-silver/20 bg-darkroom-deep mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full px-5 md:px-16 py-12 max-w-[1440px] mx-auto">
        <div className="font-display text-xl text-paper">Loverin Studio</div>

        <nav className="flex flex-wrap justify-center gap-6">
          <a
            href="https://instagram.com"
            className="font-mono-cap text-[11px] uppercase tracking-[0.1em] text-paper/60 hover:text-safelight transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/2348000000000"
            className="font-mono-cap text-[11px] uppercase tracking-[0.1em] text-paper/60 hover:text-safelight transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="/contact"
            className="font-mono-cap text-[11px] uppercase tracking-[0.1em] text-paper/60 hover:text-safelight transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="text-center md:text-right">
          <p className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase mb-1">
            Lagos, Nigeria — available for travel nationwide and worldwide
          </p>
          <p className="font-mono-cap text-[10px] tracking-[0.1em] text-silver/70 uppercase">
            © 2026 Loverin Studio
          </p>
        </div>
      </div>
    </footer>
  );
}