import Nav from "./components/Nav";
import Hero from "./components/Hero";
import GalleryTeaser from "./components/GalleryTeaser";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ServicesTeaser from "./components/ServiceTeaser";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow flex flex-col">
        <Hero />
        <GalleryTeaser />
        <ServicesTeaser />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
