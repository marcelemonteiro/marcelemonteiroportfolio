import Image from "next/image";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section id="portfolio" className="px-4 lg:px-0 py-20 bg-[#1b2533]">
      <div className="max-w-6xl m-auto">
        <h2 className="text-4xl">Projetos</h2>

        <p className="my-6">
          Esses são os projetos que realizei para estudo das tecnologias.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <ProjectCard
            imgSrc="/assets/images/shortly-project.png"
            title="Encurtador de URL usando a API T.ly"
            description="Site para encurtar URLS utilizando a API T.ly. Esse projeto é um
              desafio do Front-end Mentor, site com vários desafios de
              interfaces para implementar e aperfeiçoar suas técnicas de
              desenvolvimento web front-end."
          />

          <ProjectCard
            imgSrc="/assets/images/rock-paper-scissors.png"
            title="Rock, Paper, Scissors game"
            description="Site do clássico jogo 'Pedra, papel e tesoura' onde você pode jogar contra o computador. Esse projeto é um desafio do Front-end Mentor, site com vários desafios de interfaces para implementar e aperfeiçoar suas técnicas de desenvolvimento web front-end."
          />
        </div>
      </div>
    </section>
  );
}
