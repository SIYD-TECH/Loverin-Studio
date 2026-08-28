import Nav from "../components/Nav";
import Footer from "../components/Footer";
import RevealGroup from "../components/RevealGroup";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact — Loverin Studio",
  description:
    "Get in touch with Loverin Studio to book a portrait, wedding, or editorial session in Lagos, Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-grow flex flex-col py-16 md:py-24 px-5 md:px-16 max-w-[1440px] mx-auto w-full">
        <div className="text-center mb-14">
          <p className="font-mono-cap text-[11px] tracking-[0.15em] text-safelight uppercase mb-4">
            05A · Contact
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-paper mb-4">
            Let&apos;s make something.
          </h1>
          <p className="text-paper/60 max-w-lg mx-auto">
            Tell us a little about the shoot you have in mind and we&apos;ll get
            back to you within 1–2 business days.
          </p>
        </div>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="reveal-item md:col-span-7">
            <ContactForm />
          </div>

          <div className="reveal-item md:col-span-5 flex flex-col gap-8">
            <div className="border border-silver/20 p-6">
              <p className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase mb-4">
                Studio
              </p>
              <p className="text-paper/80 mb-1">Loverin Studio</p>
              <p className="text-paper/60 text-sm mb-4">
                12 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
              </p>
              <p className="text-paper/60 text-sm">
                Available for travel nationwide and worldwide.
              </p>
            </div>

            <div className="border border-silver/20 p-6">
              <p className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase mb-4">
                Reach us directly
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/2348000000000"
                  className="text-paper/80 hover:text-safelight transition-colors text-sm"
                >
                  WhatsApp — +234 800 000 0000
                </a>
                <a
                  href="mailto:hello@loverinstudio.com"
                  className="text-paper/80 hover:text-safelight transition-colors text-sm"
                >
                  hello@loverinstudio.com
                </a>
                <a
                  href="https://instagram.com"
                  className="text-paper/80 hover:text-safelight transition-colors text-sm"
                >
                  @loverinstudio on Instagram
                </a>
              </div>
            </div>

            <div className="border border-silver/20 overflow-hidden aspect-[4/3]">
              <iframe
                title="Loverin Studio location"
                src="https://www.google.com/maps?q=Lekki+Phase+1,+Lagos,+Nigeria&output=embed"
                className="w-full h-full grayscale contrast-125 opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </RevealGroup>
      </main>
      <Footer />
    </>
  );
}
