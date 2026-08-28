import { Suspense } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PortfolioGrid from "../components/PorfolioGrid";

export const metadata = {
  title: "Portfolio — Loverin Studio",
  description:
    "Portrait, wedding, and editorial photography from Loverin Studio, Lagos.",
};

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main className="flex-grow flex flex-col py-16 md:py-24 px-5 md:px-16 max-w-[1440px] mx-auto w-full">
        <div className="text-center mb-14">
          <p className="font-mono-cap text-[11px] tracking-[0.15em] text-safelight uppercase mb-4">
            02A · Contact Sheet
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-paper mb-4">
            Portfolio
          </h1>
          <p className="text-paper/60 max-w-lg mx-auto">
            A working contact sheet of recent frames. Hover to mark a favorite,
            click to view full size.
          </p>
        </div>

        <Suspense fallback={null}>
          <PortfolioGrid />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
