import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <div className="flex flex-col w-full">
        <About />
        <Services />
        <CTA />
        <Contact />
      </div>
    </div>
  );
}
