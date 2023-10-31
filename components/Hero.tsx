"use client";

import { useTranslations } from "next-intl";

import { LinkedInLogo, GitHubLogo, EmailIcon } from "./assets/svg";

export default function Hero() {
  const t = useTranslations("Index");

  return (
    <div className="px-4 md:px-8 py-16 md:py-32 text-neutral-50">
      <div className="max-w-4xl flex items-center gap-4">
        <h2 className="text-5xl md:text-7xl">Marcele Monteiro</h2>
        <div className="flex gap-4">
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

      <div className="max-w-2xl flex flex-col">
        <h2 className="mt-2 text-2xl md:text-4xl font-light">
          {t("subtitle")}
        </h2>

        <p className="mt-8 text-xl font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          consectetur a blanditiis et vel esse assumenda eaque quos commodi
          nisi, exercitationem atque voluptate perferendis laborum hic molestias
          non rerum? Officiis.
        </p>

        <div className="flex flex-wrap gap-1 max-w-2xl mt-8 text-xl font-light">
          <p className="block border-2 border-slate-200 p-2 rounded-md hover:bg-red-400">
            HTML & CSS
          </p>{" "}
          <p className="block border-2 border-slate-200 p-2 rounded-md hover:bg-yellow-400">
            JavaScript
          </p>{" "}
          <p className="block border-2 border-slate-200 p-2 rounded-md hover:bg-blue-500">
            TypeScript
          </p>{" "}
          <p className="block border-2 border-slate-200 p-2 rounded-md hover:bg-blue-700">
            React
          </p>{" "}
          <p className="block border-2 border-slate-200 p-2 rounded-md hover:bg-gray-400">
            Next
          </p>{" "}
          <p className="block border-2 border-slate-200 p-2 rounded-md hover:bg-green-400">
            Python
          </p>{" "}
          <p className="block border-2 border-slate-200 p-2 rounded-md hover:bg-yellow-500">
            Java
          </p>
        </div>
      </div>
      {/* <div className="flex items-center justify-center gap-4 border-2 border-red-600 ">
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

      <div className="flex flex-col items-center border-2 border-red-600 ">
        <h2 className="text-2xl md:text-4xl text-amber-400 font-[500]">
          {t("subtitle")}
        </h2>

        <p className="max-w-2xl mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          consectetur a blanditiis et vel esse assumenda eaque quos commodi
          nisi, exercitationem atque voluptate perferendis laborum hic molestias
          non rerum? Officiis.
        </p>

        <div className="flex flex-wrap gap-1 max-w-2xl mt-8">
          <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-red-400">
            HTML & CSS
          </p>{" "}
          <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-yellow-400">
            JavaScript
          </p>{" "}
          <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-blue-500">
            TypeScript
          </p>{" "}
          <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-blue-700">
            React
          </p>{" "}
          <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-gray-400">
            Next
          </p>{" "}
          <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-green-400">
            Python
          </p>{" "}
          <p className="block bg-white border-2 border-slate-200 p-2 rounded-md hover:bg-yellow-500">
            Java
          </p>
        </div>
      </div> */}
    </div>
  );
}
