"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { linkIcon } from "@/public/assets/svg";

export default function About() {
  const t = useTranslations("About");

  return (
    <section className="flex flex-col items-center py-6">
      <div className="w-full max-w-5xl p-6 lg:p-0">
        <h2 className="text-xl pb-8 underline decoration-wavy underline-offset-8 decoration-red-300">
          {t("title")}
        </h2>

        <p>{t("aboutMe")}</p>

        <a
          href="/assets/pdf/marcele-monteiro-cv.pdf"
          target="_blank"
          className="inline-block bg-red-300 text-slate-800 p-4 rounded-md mt-4"
        >
          {t("pdfButton")}
        </a>

        <h2 className="text-xl py-8 underline decoration-wavy underline-offset-8 decoration-red-300">
          {t("contactTitle")}
        </h2>

        <div className="grid grid-cols-1 md:flex gap-4 pb-16">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marcele-monteiro/"
            className="bg-red-300 text-slate-800 p-4 rounded-md flex justify-center gap-2 hover:bg-pink-500"
          >
            LinkedIn
            <Image src={linkIcon} alt="Link Icon" width={20} />
          </a>

          <a
            target="_blank"
            href="https://github.com/marcelemonteiro"
            className=" bg-red-300 text-slate-800 p-4 rounded-md flex justify-center gap-2 hover:bg-pink-500"
          >
            GitHub
            <Image src={linkIcon} alt="Link Icon" width={20} />
          </a>

          <div className="group p-4 rounded-md bg-slate-800 text-slate-50 relative overflow-hidden">
            E-mail: marcelepmonteiro@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
}