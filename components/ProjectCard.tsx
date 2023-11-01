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
    <div className="p-4 rounded-md border-2 border-neutral-700 shadow-[4px_4px_0px_2px_rgba(51,51,51,1)]">
      <h3 className="font-bold">{title}</h3>

      <p className="my-3">{description}</p>

      <p>
        <span className="border-b-2 dark:border-slate-600">
          {t("used-technologies")}
        </span>{" "}
        {tecnologies.join(" ")}
      </p>

      <div className="flex gap-4 mt-4 pb-2">
        <a
          className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100"
          href={siteURl}
          target="_blank"
        >
          {t("see-website")}
        </a>

        <a
          className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100"
          href={codeURL}
          target="_blank"
        >
          {t("see-code")}
        </a>
      </div>
    </div>
  );
}
