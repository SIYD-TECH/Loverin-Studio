import RevealGroup from "./RevealGroup";

const reviews = [
  {
    quote:
      "Loverin Studio shot our traditional wedding in Lekki and somehow made 400 guests and chaos look like art. Every photo felt intentional.",
    name: "Amaka O.",
    location: "shot on location, Lekki",
  },
  {
    quote:
      "I've worked with three studios before. This is the first time I loved every single frame off the contact sheet.",
    name: "Tobi A.",
    location: "shot on location, Abuja",
  },
  {
    quote:
      "Booked a portrait session for my modelling portfolio. The lighting, the direction, the final images — genuinely editorial-grade.",
    name: "Chiamaka N.",
    location: "shot in-studio, Victoria Island",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1440px] mx-auto w-full border-t border-silver/10">
      <h2 className="reveal-item font-display text-3xl md:text-[32px] text-paper mb-12 text-center">
        Word of mouth
      </h2>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="reveal-item border border-silver/20 p-6 flex flex-col justify-between min-h-[240px]"
          >
            <blockquote className="font-display italic text-paper/90 text-lg leading-snug mb-6">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption>
              <p className="text-sm text-paper/80 mb-1">{r.name}</p>
              <p className="font-mono-cap text-[10px] tracking-[0.1em] text-silver uppercase">
                {r.location}
              </p>
            </figcaption>
          </figure>
        ))}
      </RevealGroup>
    </section>
  );
}
