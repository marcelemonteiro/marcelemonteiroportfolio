"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";

import {
  reactIcon,
  nextIcon,
  htmlIcon,
  cssIcon,
  javascriptIcon,
  typescriptIcon,
  figmaIcon,
  gitIcon,
  githubIcon,
  pythonIcon,
  javaIcon,
  restfulIcon,
  commandIcon,
} from "@/public/assets/svg";
import { useState } from "react";

export default function SkillList() {
  const t = useTranslations("Index");

  const [expandMobile, setExpandMobile] = useState(false);

  const icons: { [key: string]: any } = {
    reactIcon,
    nextIcon,
    htmlIcon,
    cssIcon,
    javascriptIcon,
    typescriptIcon,
    figmaIcon,
    gitIcon,
    githubIcon,
    pythonIcon,
    javaIcon,
    restfulIcon,
    commandIcon,
  };

  const tecnologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Figma",
    "Git",
    "GitHub",
    "Python",
    "Java",
    "RESTful APIs",
    "Command Line",
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-12 mt-10">
      {tecnologies.map((item, index) => (
        <div
          key={item}
          className={`skill flex flex-col items-center justify-center gap-4 ${
            index > 4 && "hidden md:flex"
          }`}
        >
          <Image
            src={icons[`${item.split(" ")[0].toLowerCase()}Icon`]}
            alt={`${item} Logo`}
            className="dark:invert"
            width={70}
          />
          <p>{item}</p>
        </div>
      ))}

      {expandMobile &&
        tecnologies.slice(5).map((item) => (
          <div
            key={item}
            className={`flex flex-col items-center justify-center gap-4 md:hidden`}
          >
            <Image
              src={icons[`${item.split(" ")[0].toLowerCase()}Icon`]}
              alt={`${item} Logo`}
              className="dark:invert"
              width={70}
            />
            <p>{item}</p>
          </div>
        ))}

      {!expandMobile && (
        <button
          type="button"
          className="md:hidden"
          onClick={() => setExpandMobile(true)}
        >
          <span className="bg-neutral-800 rounded-md p-4 block uppercase text-sm">
            {t("seeMoreButton")}
          </span>
        </button>
      )}

      <p className="flex flex-col items-center justify-center text-sm opacity-60">
        Icons by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </p>
    </div>
  );
}
