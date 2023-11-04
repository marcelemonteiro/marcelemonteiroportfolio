// "use client";

// import { useTranslations } from "next-intl";
// import ProjectCard from "@/components/ProjectCard";

// export default function Projects() {
//   const t = useTranslations("Projects");

//   return (
//     <section className="p-4">
//       <h2 className="text-4xl lg:text-5xl font-semibold pb-4 border-b-4 border-neutral-700 border-dotted">
//         {t("title")}
//       </h2>

//       <div className="grid md:grid-cols-2 gap-4 my-4">
//         <ProjectCard
//           isStudyCase
//           imageSrc="/assets/images/shortly-project.png"
//           title={t("shortly")}
//           description={t("shortly-description")}
//           tecnologies={["TypeScript", "Next", "TailwindCSS"]}
//           siteURl="https://url-shortening-api-five-kappa.vercel.app/"
//           codeURL="https://github.com/marcelemonteiro/url-shortening-api"
//         />

//         <ProjectCard
//           isStudyCase
//           imageSrc="/assets/images/rock-paper-scissors.png"
//           title={t("rock-paper-scissors")}
//           description={t("rock-paper-scissors-description")}
//           tecnologies={["HTML & CSS", "JavaScript", "React"]}
//           siteURl="https://marcelemonteiro.github.io/rock-paper-scissors-challenge/"
//           codeURL="https://github.com/marcelemonteiro/rock-paper-scissors-challenge"
//         />
//       </div>
//     </section>
//     // <section className="flex flex-col items-center py-4 md:py-18 px-4 md:px-8 text-neutral-50">
//     //   <div className="w-full lg:p-0">
//     //     <h2 className="text-4xl pb-8 font-bold underline decoration-wavy underline-offset-8 decoration-fuchsia-700">
//     //       {t("title")}
//     //     </h2>

//     //     <ProjectCard
//     //       isStudyCase
//     //       imageSrc="/assets/images/shortly-project.png"
//     //       title={t("shortly")}
//     //       description={t("shortly-description")}
//     //       tecnologies={["TypeScript", "Next", "TailwindCSS"]}
//     //       siteURl="https://url-shortening-api-five-kappa.vercel.app/"
//     //       codeURL="https://github.com/marcelemonteiro/url-shortening-api"
//     //     />

//     //     <ProjectCard
//     //       isStudyCase
//     //       imageSrc="/assets/images/rock-paper-scissors.png"
//     //       title={t("rock-paper-scissors")}
//     //       description={t("rock-paper-scissors-description")}
//     //       tecnologies={["HTML & CSS", "JavaScript", "React"]}
//     //       siteURl="https://marcelemonteiro.github.io/rock-paper-scissors-challenge/"
//     //       codeURL="https://github.com/marcelemonteiro/rock-paper-scissors-challenge"
//     //     />
//     //   </div>
//     // </section>
//   );
// }
