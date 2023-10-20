import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="px-4">
      <div className="py-12 lg:py-24 md:max-w-lg">
        <p className="text-4xl">Olá 👋</p>
        <p className="text-2xl mt-4">
          Sou a Marcele,{" "}
          <span className="text-purple-500">desenvolvedora frontend</span> e
          curiosa por tudo que envolva tecnologia.
        </p>
        <p className="text-2xl mt-4">Seja bem-vindo(a) ao meu portfólio!</p>
      </div>

      <div>
        <h2 className="text-xl pb-8 underline decoration-wavy underline-offset-8 decoration-purple-500">
          Meus projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            isStudyCase
            imageSrc="/assets/images/rock-paper-scissors.png"
            title="Rock, paper, scissors Project"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit, asas
            consectetur adipisicing elit."
            tecnologies={["HTML & CSS", "JavaScript", "React"]}
            siteURl="/"
            codeURL="/"
          />
          <ProjectCard
            isStudyCase
            imageSrc="/assets/images/rock-paper-scissors.png"
            title="Rock, paper, scissors Project"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit, asas
            consectetur adipisicing elit."
            tecnologies={["HTML & CSS", "JavaScript", "React"]}
            siteURl="/"
            codeURL="/"
          />
        </div>
      </div>
    </main>
  );
}
