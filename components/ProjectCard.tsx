import Image from "next/image";

export interface ProjectProps {
  imgSrc: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  imgSrc,
  title,
  description,
}: ProjectProps) {
  return (
    <div className="p-4 rounded-md bg-[#111827]">
      <div className="flex justify-center mb-8">
        <Image src={imgSrc} width={400} height={400} alt="Project" />
      </div>

      <h3 className="text-3xl mb-2">{title}</h3>

      <p>{description}</p>

      <div className="mt-8 flex gap-4">
        <a
          href="/"
          className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-[#e5a68f]"
        >
          Ver site
        </a>
        <a
          href="/"
          className="font-bold p-2 rounded-md border-2 border-neutral-700 hover:bg-[#e5a68f]"
        >
          Ver código
        </a>
      </div>
    </div>
  );
}
