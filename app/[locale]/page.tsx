"use client";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";

import Image from "next/image";
import { codeIcon } from "@/public/assets/svg";
import Contact from "@/components/Contact";
import { EmailIcon, GitHubLogo, LinkedInLogo } from "@/components/assets/svg";
import CaretDownIcon from "@/components/assets/CaretDownIcon";
import { useState } from "react";
import MenuIcon from "@/components/assets/svg/MenuIcon";

export default function Home() {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <header
          className={`fixed z-10 w-full ${
            expandNav ? "bg-[#4c0070]" : "bg-[#222]"
          } pt-4 flex flex-col justify-end transition-all ease-linear`}
        >
          <button
            type="button"
            className="self-end pr-10 pb-4 md:hidden"
            onClick={() => setExpandNav(!expandNav)}
          >
            <MenuIcon />
          </button>

          <nav
            className={`self-center w-full ${
              expandNav ? "max-h-72 py-12" : "max-h-0"
            } md:max-h-72 transition-all duration-300 overflow-hidden`}
          >
            <ul
              className="flex flex-col md:flex-row md:justify-end md:pr-10 md:pb-4 items-center gap-6"
              onClick={() => setExpandNav(false)}
            >
              <li>
                <a href="#about">Sobre</a>
              </li>

              <li>
                <a href="#skills">Habilidades</a>
              </li>

              <li>
                <a href="#portfolio">Portfólio</a>
              </li>

              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="w-full">
          <main className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-tl from-[#222] via-purple-900 to-violet-600">
            {/* <Image className="absolute w-full h-full object-cover opacity-[15%] invert backdrop-opacity-15"  src="/fundoo.jpg" width={1000} height={1000} alt="fundo" /> */}
            <h1 className="text-4xl md:text-7xl">Marcele Monteiro</h1>
            <h2 className="text-2xl md:text-6xl">Desenvolvedora Front-end</h2>

            <div className="flex gap-4 mt-10">
              <LinkedInLogo fill="rgb(229, 229, 229)" width="40" />
              <GitHubLogo fill="rgb(229, 229, 229)" width="45" />
              <EmailIcon fill="rgb(229, 229, 229)" width="45" />
            </div>
          </main>

          {/* 
            position: absolute;
            top: 90%;
            left: 50%;
          */}

          <div className="absolute top-[90%] right-[48%] animate-bounce">
            <a href="#about">
              <CaretDownIcon />
            </a>
          </div>

          <section id="about" className="px-4 lg:px-0 py-20 bg-neutral-800">
            <div className="max-w-6xl m-auto">
              <h2 className="text-4xl">Sobre mim</h2>

              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis nemo culpa quidem, officiis nam praesentium,
                necessitatibus doloremque dolore tenetur sapiente placeat eos
                possimus odit numquam omnis nesciunt rerum quisquam! Laboriosam.
              </p>

              <p className="my-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis quis error in. Eligendi, quos molestias? Ad delectus
                eligendi non quibusdam corrupti odio, mollitia eos voluptas
                minus ex cum? Asperiores, temporibus.
              </p>

              <p className="my-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                est libero eius natus ducimus, modi dolor laborum? Fuga, nemo
                id. Sed quos ducimus nesciunt magni dolores rem earum recusandae
                dolorum!
              </p>

              <a href="#contact">Entre em contato!</a>
            </div>
          </section>

          <section id="skills" className="px-4 lg:px-0 py-20">
            <div className="max-w-6xl m-auto">
              <h2 className="text-4xl">Habilidades</h2>

              <p className="my-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                est libero eius natus ducimus, modi dolor laborum? Fuga, nemo
                id. Sed quos ducimus nesciunt magni dolores rem earum recusandae
                dolorum!
              </p>

              <Skills />
            </div>
          </section>

          <section id="portfolio" className="px-4 lg:px-0 py-20 bg-neutral-800">
            <div className="max-w-6xl m-auto">
              <h2 className="text-4xl">Projetos</h2>

              <p className="my-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                est libero eius natus ducimus, modi dolor laborum? Fuga, nemo
                id. Sed quos ducimus nesciunt magni dolores rem earum recusandae
                dolorum!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="p-4 rounded-md bg-gradient-to-b from-[#eee] to-[#4B3F6B]">
                  <div className="flex justify-center mb-8">
                    <Image
                      src={"/assets/images/shortly-project.png"}
                      width={400}
                      height={400}
                      alt="Project"
                    />
                  </div>

                  <h3 className="text-3xl mb-2">
                    Encurtador de URL usando a API T.ly
                  </h3>

                  <p>
                    Site para encurtar URLS utilizando a API T.ly. Esse projeto
                    é um desafio do Front-end Mentor, site com vários desafios
                    de interfaces para implementar e aperfeiçoar suas técnicas
                    de desenvolvimento web front-end.
                  </p>

                  <div className="mt-8 flex gap-4">
                    <a
                      href="/"
                      className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-purple-300"
                    >
                      Ver site
                    </a>
                    <a
                      href="/"
                      className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-purple-300"
                    >
                      Ver código
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-md bg-gradient-to-b from-[#222] to-[#1C2F4F]">
                  <div className="flex justify-center mb-8">
                    <Image
                      src={"/assets/images/rock-paper-scissors.png"}
                      width={400}
                      height={400}
                      alt="Project"
                    />
                  </div>

                  <h3 className="text-3xl mb-2">
                    Encurtador de URL usando a API T.ly
                  </h3>

                  <p>
                    Site para encurtar URLS utilizando a API T.ly. Esse projeto
                    é um desafio do Front-end Mentor, site com vários desafios
                    de interfaces para implementar e aperfeiçoar suas técnicas
                    de desenvolvimento web front-end.
                  </p>

                  <div className="mt-8 flex gap-4">
                    <a
                      href="/"
                      className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100"
                    >
                      Ver site
                    </a>
                    <a
                      href="/"
                      className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100"
                    >
                      Ver código
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-md border-2 border-[#eeeeee51]">
                  <div className="flex justify-center mb-8">
                    <Image
                      src={"/assets/images/shortly-project.png"}
                      width={400}
                      height={400}
                      alt="Project"
                    />
                  </div>

                  <h3 className="text-3xl mb-2">
                    Encurtador de URL usando a API T.ly
                  </h3>

                  <p>
                    Site para encurtar URLS utilizando a API T.ly. Esse projeto
                    é um desafio do Front-end Mentor, site com vários desafios
                    de interfaces para implementar e aperfeiçoar suas técnicas
                    de desenvolvimento web front-end.
                  </p>

                  <div className="mt-8 flex gap-4">
                    <a
                      href="/"
                      className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100"
                    >
                      Ver site
                    </a>
                    <a
                      href="/"
                      className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100"
                    >
                      Ver código
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-md border-2 border-[#eeeeee51]">
                  <div className="flex justify-center mb-8">
                    <Image
                      src={"/assets/images/shortly-project.png"}
                      width={400}
                      height={400}
                      alt="Project"
                    />
                  </div>

                  <h3 className="text-3xl mb-2">
                    Encurtador de URL usando a API T.ly
                  </h3>

                  <p>
                    Site para encurtar URLS utilizando a API T.ly. Esse projeto
                    é um desafio do Front-end Mentor, site com vários desafios
                    de interfaces para implementar e aperfeiçoar suas técnicas
                    de desenvolvimento web front-end.
                  </p>

                  <div className="mt-8 flex gap-4">
                    <a
                      href="/"
                      className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100"
                    >
                      Ver site
                    </a>
                    <a
                      href="/"
                      className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100"
                    >
                      Ver código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="px-4 lg:px-0 py-20">
            <div className="max-w-6xl m-auto">
              <h2 className="text-4xl">Contato</h2>

              <p className="my-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                est libero eius natus ducimus, modi dolor laborum? Fuga, nemo
                id. Sed quos ducimus nesciunt magni dolores rem earum recusandae
                dolorum!
              </p>

              <div className="flex gap-4">
                <EmailIcon fill="rgb(229, 229, 229)" />
                <a
                  href="mailto:marcelepmonteiro@gmail.com"
                  className="font-bold"
                >
                  marcelepmonteiro@gmail.com
                </a>
              </div>

              <div className="flex gap-4 mt-10">
                <LinkedInLogo fill="rgb(229, 229, 229)" width="40" />
                <GitHubLogo fill="rgb(229, 229, 229)" width="45" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="text-center p-4 bg-neutral-800 text-neutral-100">
        <span className="font-light">© 2023 Marcele Monteiro</span>
      </footer>
    </>
  );
}
