"use client";

import { useTranslations } from "next-intl";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section className="flex flex-col items-center py-24 bg-pink-800">
      <div className="w-full max-w-5xl p-6 lg:p-0">
        <h2 className="text-xl pb-8 underline decoration-wavy underline-offset-8 decoration-red-300">
          {t("title")}
        </h2>

        <ProjectCard
          isStudyCase
          imageSrc="/assets/images/shortly-project.png"
          title={t("shortly")}
          description={t("shortly-description")}
          tecnologies={["TypeScript", "Next", "Tailwind CSS"]}
          siteURl="https://url-shortening-api-five-kappa.vercel.app/"
          codeURL="https://github.com/marcelemonteiro/url-shortening-api"
        />

        <ProjectCard
          isStudyCase
          imageSrc="/assets/images/rock-paper-scissors.png"
          title={t("rock-paper-scissors")}
          description={t("rock-paper-scissors-description")}
          tecnologies={["HTML & CSS", "JavaScript", "React"]}
          siteURl="https://marcelemonteiro.github.io/rock-paper-scissors-challenge/"
          codeURL="https://github.com/marcelemonteiro/rock-paper-scissors-challenge"
        />
      </div>
    </section>
  );
}
