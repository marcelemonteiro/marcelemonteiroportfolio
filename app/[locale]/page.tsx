import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import CaretDownIcon from "@/components/icons/CaretDownIcon";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="absolute top-[90%] right-[48%] animate-bounce">
        <a href="#about">
          <CaretDownIcon />
        </a>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
