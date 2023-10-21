import Image from "next/image";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import girlCoding from "@/public/assets/images/girl-coding-removebg.png";
import { codeIcon } from "@/public/assets/svg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="max-w-5xl flex flex-col items-center justify-center lg:flex-row py-24">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl">Marcele Monteiro</h2>
            <h2 className="text-2xl md:text-4xl text-purple-500">
              Desenvolvedora Web
            </h2>

            <p className="text-xl md:text-2xl mt-12 hidden lg:block">Olá 👋</p>
            <p className="text-xl md:text-2xl mt-2 hidden lg:block">
              Seja bem-vindo(a) ao meu portfólio!
            </p>
          </div>

          <Image
            src={girlCoding}
            alt="Girl coding"
            width={600}
            className="invert order-1 lg:order-2"
          />
        </div>
      </div>

      <div className="relative">
        <Skills />

        <Image
          src={codeIcon}
          alt="Code Icon"
          className="invert opacity-10 absolute -bottom-24 right-0 lg:left-3/4"
          width={200}
        />
      </div>

      <Projects />
    </main>
  );
}
