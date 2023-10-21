import Image from "next/image";

import { linkIcon } from "@/public/assets/svg";

export default function About() {
  return (
    <section className="flex flex-col items-center py-6">
      <div className="w-full max-w-5xl p-6 lg:p-0">
        <h2 className="text-xl pb-8 underline decoration-wavy underline-offset-8 decoration-red-300">
          Sobre mim
        </h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad minus a
          asperiores ut mollitia? Nam voluptatem in laboriosam tempora labore
          eaque magnam, perspiciatis, illum dignissimos, dolorem corporis. Quas,
          sit qui. Adipisci nisi temporibus nesciunt sed, ipsum quis delectus
          quia similique provident eius possimus laborum hic a aspernatur
          nostrum? Ducimus eos consequuntur velit excepturi impedit quas
          quibusdam dolorem modi veniam rerum.
        </p>

        <button
          type="button"
          className="bg-red-300 text-slate-800 p-4 rounded-md mt-4"
        >
          Baixar currículo em PDF
        </button>

        <h2 className="text-xl py-8 underline decoration-wavy underline-offset-8 decoration-red-300">
          Entre em contato
        </h2>

        <div className="flex gap-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marcele-monteiro/"
            className="bg-red-300 text-slate-800 p-4 rounded-md flex gap-2 hover:bg-pink-500"
          >
            LinkedIn
            <Image src={linkIcon} alt="Link Icon" width={20} />
          </a>

          <a
            target="_blank"
            href="https://github.com/marcelemonteiro"
            className=" bg-red-300 text-slate-800 p-4 rounded-md flex gap-2 hover:bg-pink-500"
          >
            GitHub
            <Image src={linkIcon} alt="Link Icon" width={20} />
          </a>

          <button
            type="button"
            className="bg-red-300 text-slate-800 p-4 rounded-md disabled:bg-slate-800 disabled:text-slate-50"
            disabled
          >
            Email: marcelepmonteiro@gmail.com
          </button>
        </div>
      </div>
    </section>
  );
}
