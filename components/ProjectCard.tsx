import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProjectCard({
  isStudyCase,
  imageSrc,
  title,
  description,
  tecnologies,
  siteURl,
  codeURL,
}: {
  isStudyCase: boolean;
  imageSrc: string;
  title: string;
  description: string;
  tecnologies: string[];
  siteURl: string;
  codeURL: string;
}) {
  const t = useTranslations("Projects");

  return (
    <div className="mb-8 border-2 border-slate-200 bg-neutral-100 rounded-xl shadown-lg">
      {isStudyCase && (
        <span className="inline-block ml-4 mt-4 p-2 text-xs uppercase bg-slate-200 text-neutral-600 rounded-md">
          {t("study-case")}
        </span>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4">
          <Image src={imageSrc} alt={title} width={600} height={600} />
        </div>

        <div className="p-4 flex flex-col justify-evenly">
          <h3 className="text-2xl font-[500] text-purple-900">{title}</h3>

          <p className="text-gray-600 dark:text-slate-400">{description}</p>

          <p className="my-4 text-gray-600 dark:text-slate-400">
            <span className="border-b-2 dark:border-slate-600">
              {t("used-technologies")}
            </span>{" "}
            {tecnologies.join(" ")}
          </p>

          <div className="flex text-sm">
            <a
              href={siteURl}
              target="_blank"
              className="flex items-center justify-center lg:w-1/3 py-2 px-6 mr-2 text-center uppercase text-white bg-purple-900 rounded-sm hover:opacity-60"
            >
              {t("see-website")}
            </a>

            <a
              href={codeURL}
              target="_blank"
              className="flex items-center justify-center lg:w-1/3 py-2 px-6 mr-2  text-center uppercase text-purple-900 border-2 border-purple-900 rounded-sm hover:opacity-60 dark:bg-slate-800"
            >
              {t("see-code")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
