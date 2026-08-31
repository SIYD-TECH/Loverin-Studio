import Nav from "../components/Nav";
import Footer from "../components/Footer";
import RevealGroup from "../components/RevealGroup";

export const metadata = {
  title: "Services & Pricing — Loverin Studio",
  description:
    "Portrait, full session, and wedding day photography packages from Loverin Studio, Lagos. Rates in Naira, custom editorial quotes on request.",
};

const packages = [
  {
    frame: "FRAME_03",
    name: "Mini Session",
    price: "₦120,000",
    duration: "45 minutes · 1 location",
    tagline: "For a quick, focused portrait sitting.",
    includes: [
      "45-minute session, in-studio or one outdoor location",
      "One outfit change",
      "15 fully edited digital images",
      "Private online gallery, delivered in 5 business days",
    ],
  },
  {
    frame: "FRAME_04",
    name: "Full Session",
    price: "₦280,000",
    duration: "2.5 hours · up to 2 locations",
    tagline: "Our most-booked package — portraits, couples, families, or brand headshots.",
    includes: [
      "2.5-hour session, up to two locations",
      "Two outfit changes",
      "40 fully edited digital images",
      "Private online gallery, delivered in 7 business days",
      "Option to add a second shooter",
    ],
    featured: true,
  },
  {
    frame: "FRAME_05",
    name: "Wedding Day",
    price: "From ₦850,000",
    duration: "Full day · 8+ hours coverage",
    tagline: "From asoebi to reception, told frame by frame.",
    includes: [
      "8 hours of continuous coverage",
      "Second shooter included",
      "150+ fully edited digital images",
      "Private online gallery, delivered in 3 weeks",
      "Complimentary engagement mini session",
    ],
  },
];

const addOns = [
  { label: "Extra hour of coverage", price: "₦45,000" },
  { label: "48-hour rush edit", price: "₦35,000" },
  { label: "Printed 10x12 album (20 spreads)", price: "₦95,000" },
  { label: "Additional shooter", price: "₦70,000" },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="flex-grow flex flex-col">
        <section className="pt-16 md:pt-24 pb-10 px-5 md:px-16 max-w-[1440px] mx-auto w-full text-center">
          <p className="font-mono-cap text-[11px] tracking-[0.15em] text-safelight uppercase mb-4">
            04A · Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-paper mb-4">
            Services &amp; Pricing
          </h1>
          <p className="text-paper/60 max-w-lg mx-auto">
            Three core packages, all shot on location across Lagos or
            wherever the story is. Editorial and commercial rates quoted on
            request.
          </p>
        </section>

        <section className="py-10 md:py-16 px-5 md:px-16 max-w-[1440px] mx-auto w-full">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {packages.map((p) => (
              <div
                key={p.frame}
                className={`reveal-item flex flex-col border p-7 ${
                  p.featured
                    ? "border-safelight bg-darkroom-deep"
                    : "border-silver/20"
                }`}
              >
                <p className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase mb-4">
                  {p.frame}
                </p>
                <h2 className="font-display text-2xl text-paper mb-1">
                  {p.name}
                </h2>
                <p className="font-mono-cap text-[11px] tracking-[0.05em] text-silver uppercase mb-5">
                  {p.duration}
                </p>
                <p className="font-display text-3xl text-paper mb-2">
                  {p.price}
                </p>
                <p className="text-sm text-paper/60 mb-6">{p.tagline}</p>

                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {p.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-paper/70"
                    >
                      <span className="text-safelight mt-1">·</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`inline-flex justify-center px-6 py-3 font-mono-cap text-[11px] uppercase tracking-[0.15em] transition-colors ${
                    p.featured
                      ? "bg-safelight text-paper border border-safelight hover:bg-transparent hover:text-safelight"
                      : "border border-silver/40 text-paper hover:border-paper"
                  }`}
                >
                  Enquire about this package
                </a>
              </div>
            ))}
          </RevealGroup>
        </section>

        <section className="py-16 md:py-20 px-5 md:px-16 max-w-[1440px] mx-auto w-full border-t border-silver/10">
          <h2 className="reveal-item font-display text-2xl md:text-3xl text-paper mb-10 text-center">
            Add-ons
          </h2>
          <RevealGroup
            className="max-w-2xl mx-auto flex flex-col divide-y divide-silver/10"
            stagger={0.08}
          >
            {addOns.map((a) => (
              <div
                key={a.label}
                className="reveal-item flex items-center justify-between py-4"
              >
                <span className="text-paper/80">{a.label}</span>
                <span className="font-mono-cap text-sm text-silver">
                  {a.price}
                </span>
              </div>
            ))}
          </RevealGroup>
        </section>

        <section className="py-16 md:py-24 px-5 md:px-16 max-w-[1440px] mx-auto w-full text-center border-t border-silver/10">
          <RevealGroup>
            <p className="reveal-item text-paper/60 max-w-md mx-auto mb-8">
              Planning an editorial shoot, brand campaign, or something
              outside these packages? We&apos;d love to hear about it.
            </p>
            <a
              href="/contact"
              className="reveal-item inline-flex px-8 py-3 bg-safelight text-paper border border-safelight font-mono-cap text-xs uppercase tracking-[0.15em] transition-colors hover:bg-transparent hover:text-safelight"
            >
              Request a custom quote
            </a>
          </RevealGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}