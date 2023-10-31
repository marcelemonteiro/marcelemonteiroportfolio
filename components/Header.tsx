"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";

export default function Header({ lang }: { lang: string }) {
  const t = useTranslations("Index");

  return (
    <header className="flex px-4 md:px-8 py-4">
      <div className="flex border-2 border-slate-200 rounded-md">
        <a
          href="/pt"
          className={`flex items-center gap-2 text-sm text-neutral-50 hover:opacity-60 px-4 py-2 ${
            lang === "pt" &&
            "font-bold bg-slate-50 text-neutral-800 rounded-l-sm"
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
          className={`flex items-center gap-2 text-sm text-neutral-50 hover:opacity-60 px-4 py-2 ${
            lang === "en" &&
            "font-bold bg-slate-50 text-neutral-800 rounded-r-sm"
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
    </header>
  );
}
