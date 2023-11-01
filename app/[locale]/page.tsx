import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";

import Image from "next/image";
import { codeIcon } from "@/public/assets/svg";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl">
        <Hero />
        <Projects />
        {/* <div className="lg:grid grid-cols-[1fr_minmax(900px,_1fr)] gap-4">
          <Skills />
        </div> */}
      </div>
      {/* <Contact /> */}
      {/* <Skills /> */}
      {/* <div className="relative">

        <Image
          src={codeIcon}
          alt="Code Icon"
          className="w-52 invert opacity-10 absolute -bottom-24 right-0 lg:left-3/4"
        />
      </div> */}
    </div>
  );
}
