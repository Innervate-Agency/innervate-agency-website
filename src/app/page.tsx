import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
