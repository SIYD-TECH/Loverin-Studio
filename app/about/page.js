import Nav from "../components/Nav";
import Footer from "../components/Footer";
import RevealGroup from "../components/RevealGroup";

export const metadata = {
  title: "About — Loverin Studio",
  description:
    "Meet Tomiwa Adélájá, founder and lead photographer at Loverin Studio, Lagos.",
};

const principles = [
  {
    frame: "01",
    title: "Light first",
    copy: "Every session starts with reading the light in the room, not forcing it. Natural light, wherever possible, shapes the whole shoot.",
  },
  {
    frame: "02",
    title: "Unposed moments",
    copy: "The best frame is usually the one between the poses — a glance, a laugh, a breath. We shoot for those.",
  },
  {
    frame: "03",
    title: "Print-worthy, always",
    copy: "Every image is edited as if it's going on a wall, not just a feed. Color, contrast, and grain are considered, never default.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-grow flex flex-col">
        <section className="py-16 md:py-24 px-5 md:px-16 max-w-[1440px] mx-auto w-full">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="reveal-item md:col-span-5">
              <div className="border border-silver/20 p-1 relative">
                <img
                  src="https://picsum.photos/id/1027/800/1000"
                  alt="Tomiwa Adélájá, founder and lead photographer at Loverin Studio"
                  className="w-full aspect-[4/5] object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 bg-darkroom px-2 py-1 border-t border-r border-silver/20 font-mono-cap text-[10px] tracking-[0.1em] text-silver">
                  FRAME_00 · SELF
                </div>
              </div>
            </div>

            <div className="reveal-item md:col-span-7">
              <p className="font-mono-cap text-[11px] tracking-[0.15em] text-safelight uppercase mb-4">
                03A · About
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-paper mb-6">
                Capturing the quiet moments.
              </h1>
              <p className="text-paper/70 leading-relaxed mb-4">
                I&apos;m Tomiwa, founder and lead photographer at Loverin
                Studio. I picked up a camera in university, shooting friends and
                campus events in Ile-Ife, and never really put it down. Ten
                years later, that habit has turned into a studio built around
                one idea: photography should feel like a quiet moment, not a
                performance.
              </p>
              <p className="text-paper/70 leading-relaxed mb-4">
                Loverin Studio is based in Lagos, but we travel — for weddings
                across the country, for editorial work with independent labels,
                for portrait sessions wherever the light is right. Every shoot
                is small by design: no rushed timelines, no forced poses, just
                enough space to actually see the person in front of the camera.
              </p>
              <p className="text-paper/70 leading-relaxed">
                When I&apos;m not shooting, I&apos;m usually in the
                darkroom-styled edit suite, going through contact sheets frame
                by frame — because that part of the process matters just as much
                as the shoot itself.
              </p>
            </div>
          </RevealGroup>
        </section>

        <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1440px] mx-auto w-full border-t border-silver/10">
          <h2 className="reveal-item font-display text-3xl md:text-[32px] text-paper mb-12 text-center">
            How we work
          </h2>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {principles.map((p) => (
              <div
                key={p.frame}
                className="reveal-item border border-silver/20 p-6"
              >
                <p className="font-mono-cap text-[11px] tracking-[0.15em] text-sepia uppercase mb-4">
                  Frame {p.frame}
                </p>
                <h3 className="font-display text-xl text-paper mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-paper/60 leading-relaxed">
                  {p.copy}
                </p>
              </div>
            ))}
          </RevealGroup>
        </section>

        <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1440px] mx-auto w-full border-t border-silver/10 text-center">
          <RevealGroup>
            <blockquote className="reveal-item font-display italic text-2xl md:text-3xl text-paper/90 max-w-2xl mx-auto leading-snug mb-6">
              &ldquo;A good photograph doesn&apos;t announce itself. It just
              lets you look a little longer.&rdquo;
            </blockquote>
            <p className="reveal-item font-mono-cap text-[11px] tracking-[0.15em] text-silver uppercase">
              — Tomiwa Adélájá, Founder
            </p>
          </RevealGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
