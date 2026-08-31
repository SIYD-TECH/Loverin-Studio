import RevealGroup from "./RevealGroup";

const services = [
  {
    frame: "FRAME_03",
    title: "Portraits",
    copy: "Individual and couple sessions, shot on location or in-studio.",
    img: "https://picsum.photos/id/91/700/900",
    href: "/portfolio?category=portraits",
  },
  {
    frame: "FRAME_04",
    title: "Weddings",
    copy: "Full-day coverage, from asoebi to reception, told frame by frame.",
    img: "https://picsum.photos/id/177/700/900",
    href: "/portfolio?category=weddings",
  },
  {
    frame: "FRAME_05",
    title: "Editorial",
    copy: "Fashion and brand campaigns for magazines and independent labels.",
    img: "https://picsum.photos/id/342/700/900",
    href: "/portfolio?category=editorial",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1440px] mx-auto w-full border-t border-silver/10">
      <h2 className="reveal-item font-display text-3xl md:text-[32px] text-paper mb-12 text-center">
        What we shoot
      </h2>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((s) => (
            <a
            key={s.frame}
            href={s.href}
            className="reveal-item group block border border-silver/20"
          >
            <div className="relative overflow-hidden">
              <img
                src={s.img}
                alt=""
                className="w-full aspect-[4/5] object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 bg-darkroom px-2 py-1 border-b border-r border-silver/20 font-mono-cap text-[10px] tracking-[0.1em] text-silver">
                {s.frame}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl text-paper mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-paper/60 leading-relaxed">
                {s.copy}
              </p>
            </div>
          </a>
        ))}
      </RevealGroup>
    </section>
  );
}