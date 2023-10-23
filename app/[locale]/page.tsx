"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import girlCoding from "@/public/assets/images/girl-coding-removebg.png";
import { codeIcon } from "@/public/assets/svg";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center lg:justify-between lg:flex-row py-24">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl">Marcele Monteiro</h2>
            <h2 className="text-2xl md:text-4xl text-pink-500">
              {t("subtitle")}
            </h2>

            <p className="text-xl md:text-2xl mt-12 hidden lg:block">
              {t("greeting")} 👋
            </p>
            <p className="text-xl md:text-2xl mt-2 hidden lg:block">
              {t("introduction")}
            </p>
          </div>

          <Image
            src={girlCoding}
            alt="Girl coding"
            className="invert order-1 lg:order-2"
            priority
          />
        </div>
      </div>

      <div className="relative">
        <Skills />

        <Image
          src={codeIcon}
          alt="Code Icon"
          className="w-52 invert opacity-10 absolute -bottom-24 right-0 lg:left-3/4"
        />
      </div>

      <Projects />
    </main>
  );
}
