"use client";

import { useTranslations } from "next-intl";

import { LinkedInLogo, GitHubLogo, EmailIcon } from "./assets/svg";

export default function Hero() {
  const t = useTranslations("Index");

  return (
    <div className="mx-auto py-20 md:py-32 px-8">
      <div className="flex items-center justify-center sm:justify-start gap-4">
        <h2 className="text-5xl md:text-7xl">Marcele Monteiro</h2>

        <div className="flex flex-col sm:flex-row py-4 md:py-0 gap-4">
          <a target="_blank" href="/">
            <LinkedInLogo />
          </a>
          <a target="_blank" href="/">
            <GitHubLogo />
          </a>
          <a target="_blank" href="/">
            <EmailIcon />
          </a>
        </div>
      </div>

      <h2 className="text-2xl md:text-4xl text-amber-400 font-[500]">{t("subtitle")}</h2>

      <p className="max-w-2xl mt-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        consectetur a blanditiis et vel esse assumenda eaque quos commodi nisi,
        exercitationem atque voluptate perferendis laborum hic molestias non
        rerum? Officiis.
      </p>

      <div className="flex flex-wrap gap-1 max-w-2xl mt-8">
        <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-red-400">HTML & CSS</p>{" "}
        <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-yellow-400">JavaScript</p>{" "}
        <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-blue-500">TypeScript</p>{" "}
        <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-blue-700">React</p>{" "}
        <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-gray-400">Next</p>{" "}
        <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-green-400">Python</p>{" "}
        <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-yellow-500">Java</p>
      </div>
    </div>
  );
}
