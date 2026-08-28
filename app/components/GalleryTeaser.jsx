import RevealGroup from "./RevealGroup";

const frames = [
  { id: "FRAME_01", img: "https://picsum.photos/id/338/700/900", ratio: "aspect-[3/4]" },
  { id: "FRAME_02", img: "https://picsum.photos/id/823/700/700", ratio: "aspect-square" },
];

export default function GalleryTeaser() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1440px] mx-auto w-full">
      <RevealGroup className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="reveal-item md:col-span-4 flex flex-col justify-center pr-0 md:pr-8">
          <h2 className="font-display text-3xl md:text-[32px] text-paper mb-5">
            The craft of seeing.
          </h2>
          <p className="text-paper/70 mb-8 leading-relaxed">
            We specialize in editorial and portrait photography that goes
            beyond documentation. Every frame is a considered study of light,
            texture, and emotion — shot on location across Lagos and beyond.
          </p>
          <a
            href="/about"
            className="inline-flex px-6 py-2.5 border border-silver/50 font-mono-cap text-[11px] uppercase tracking-[0.15em] text-paper self-start transition-colors hover:border-paper"
          >
            Read our story
          </a>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 gap-4 md:gap-8">
          {frames.map((f, i) => (
            <div
              key={f.id}
              className={`reveal-item flex flex-col gap-2 ${i === 0 ? "mt-0 md:mt-12" : ""}`}
            >
              <div className="border border-silver/20 p-1 relative group overflow-hidden">
                <img
                  src={f.img}
                  alt=""
                  className={`w-full h-auto ${f.ratio} object-cover grayscale transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute bottom-0 left-0 bg-darkroom px-2 py-1 border-t border-r border-silver/20 font-mono-cap text-[10px] tracking-[0.1em] text-silver">
                  {f.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}