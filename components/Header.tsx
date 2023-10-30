"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import ActiveLink from "./ActiveLink";

export default function Header({ lang }: { lang: string }) {
  const t = useTranslations("Index");

  const navLinks = [
    { name: t("homepage"), route: `/${lang}` },
    { name: t("aboutpage"), route: `/${lang}/about` },
  ];

  return (
    <header className="w-full p-4 pb-0 md:pb-4 flex justify-center md:pt-6">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        <nav className="flex-1">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li className="text-slate-50" key={link.name}>
                <ActiveLink
                  href={link.route}
                  className="py-2 hover:border-b-2 hover:border-pink-500"
                  activeClassName="font-bold border-b-2 border-pink-500"
                >
                  {link.name}
                </ActiveLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex border-2 border-slate-200 dark:border-slate-600 rounded-md">
          <a
            href="/pt"
            className={`flex items-center gap-2 text-slate-50 text-sm hover:opacity-60 px-4 py-2 ${
              lang === "pt" &&
              "font-bold bg-slate-50 text-greenish-gray rounded-l-sm"
            }`}
          >
            <Image
              src="/assets/images/Brazil_flag.png"
              alt="Brazil flag"
              width={320}
              height={224}
              className="w-6 h-4"
            />
            PT-BR
          </a>

          <a
            href="/en"
            className={`flex items-center gap-2 text-slate-50 text-sm hover:opacity-60 px-4 py-2 ${
              lang === "en" &&
              "font-bold bg-slate-50 text-greenish-gray rounded-r-sm"
            }`}
          >
            <Image
              src="/assets/images/US_flag.png"
              alt="US flag"
              width={320}
              height={224}
              className="w-6 h-4"
            />
            ENG
          </a>
        </div>
      </div>
    </header>
  );
}
