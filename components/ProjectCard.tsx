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
    <div className="mb-8 border-2 border-slate-600 bg-slate-700 rounded-xl shadown-lg">
      {isStudyCase && (
        <span className="inline-block ml-4 mt-4 p-2 text-xs uppercase bg-slate-200 dark:bg-slate-800 rounded-md">
          {t("study-case")}
        </span>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4">
          <Image src={imageSrc} alt={title} width={600} height={600} />
        </div>

        <div className="p-4">
          <h3 className="text-lg">{title}</h3>

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
              className="flex items-center justify-center w-full py-2 px-6 mr-2 text-center uppercase text-white bg-pink-500 rounded-sm hover:opacity-60"
            >
              {t("see-website")}
            </a>

            <a
              href={codeURL}
              target="_blank"
              className="flex items-center justify-center w-full py-2 px-6 mr-2  text-center uppercase text-pink-500 border-2 border-pink-500 rounded-sm hover:opacity-60 dark:bg-slate-800"
            >
              {t("see-code")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
