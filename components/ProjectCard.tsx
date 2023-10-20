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
  return (
    <div className="border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-xl shadown-lg">
      <div className="rounded-t-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="object-cover w-full"
        />
      </div>

      {isStudyCase && (
        <span className="inline-block ml-4 mt-4 p-2 text-xs uppercase bg-slate-200 dark:bg-slate-800 rounded-md">
          Study Case
        </span>
      )}

      <div className="p-4">
        <h3 className="text-lg">{title}</h3>

        <p className="text-gray-600 dark:text-slate-400">{description}</p>

        <p className="my-4 text-gray-600 dark:text-slate-400">
          <span className="border-b-2 dark:border-slate-600">
            Tecnologias utilizadas:
          </span>{" "}
          {tecnologies.join(" ")}
        </p>

        <div className="flex text-sm">
          <a
            href={siteURl}
            className="flex items-center justify-center w-full py-2 px-6 mr-2 text-center uppercase text-white bg-purple-500 rounded-sm hover:opacity-60"
          >
            Ver site
          </a>

          <a
            href={codeURL}
            className="flex items-center justify-center w-full py-2 px-6 mr-2  text-center uppercase text-purple-500 border-2 border-purple-500 rounded-sm hover:opacity-60 dark:bg-slate-800"
          >
            Ver código
          </a>
        </div>
      </div>
    </div>
  );
}
