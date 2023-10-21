import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col items-center py-24 bg-violet-900">
      <div className="w-full max-w-5xl p-6 lg:p-0">
        <h2 className="text-xl pb-8 underline decoration-wavy underline-offset-8 decoration-red-300">
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
    </section>
  );
}
