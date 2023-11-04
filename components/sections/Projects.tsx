import Image from "next/image";

export default function Projects() {
  return (
    <section id="portfolio" className="px-4 lg:px-0 py-20 bg-[#1b2533]">
      <div className="max-w-6xl m-auto">
        <h2 className="text-4xl">Projetos</h2>

        <p className="my-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque est
          libero eius natus ducimus, modi dolor laborum? Fuga, nemo id. Sed quos
          ducimus nesciunt magni dolores rem earum recusandae dolorum!
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
              Site para encurtar URLS utilizando a API T.ly. Esse projeto é um
              desafio do Front-end Mentor, site com vários desafios de
              interfaces para implementar e aperfeiçoar suas técnicas de
              desenvolvimento web front-end.
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
              Site para encurtar URLS utilizando a API T.ly. Esse projeto é um
              desafio do Front-end Mentor, site com vários desafios de
              interfaces para implementar e aperfeiçoar suas técnicas de
              desenvolvimento web front-end.
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
              Site para encurtar URLS utilizando a API T.ly. Esse projeto é um
              desafio do Front-end Mentor, site com vários desafios de
              interfaces para implementar e aperfeiçoar suas técnicas de
              desenvolvimento web front-end.
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
              Site para encurtar URLS utilizando a API T.ly. Esse projeto é um
              desafio do Front-end Mentor, site com vários desafios de
              interfaces para implementar e aperfeiçoar suas técnicas de
              desenvolvimento web front-end.
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
  );
}
