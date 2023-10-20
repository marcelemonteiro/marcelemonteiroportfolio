"use client";

import Image from "next/image";
import ActiveLink from "./ActiveLink";
import DarkModeIcon from "./icons/DarkModeIcon";
import LightModeIcon from "./icons/LightModeIcon";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
  ];

  return (
    <header className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:pt-6 border-b-2 border-slate-100 md:border-none">
      <h1 className="flex-1">Marcele Monteiro</h1>

      <nav>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li className="hover:opacity-60" key={link.name}>
              <ActiveLink href={link.route} activeClassName="font-bold">
                {link.name}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-4 px-2 py-1 border-2 border-slate-200 dark:border-slate-600 rounded-md">
        <button className="flex items-center gap-2 font-bold text-sm hover:opacity-60">
          <Image
            src="/assets/images/Brazil_flag.png"
            alt="Brazil flag"
            width={320}
            height={224}
            className="w-6 h-4"
          />
          PT-BR
        </button>

        <button className="flex items-center gap-2 text-sm hover:opacity-60">
          <Image
            src="/assets/images/US_flag.png"
            alt="US flag"
            width={320}
            height={224}
            className="w-6 h-4"
          />
          ENG
        </button>

        <div className="flex flex-col">
          <input
            type="checkbox"
            id="light-switch"
            className="sr-only"
            checked={theme === "light"}
            onChange={() => {
              if (theme === "dark") {
                return setTheme("light");
              }
              return setTheme("dark");
            }}
          />

          <label className="relative cursor-pointer" htmlFor="light-switch">
            <LightModeIcon />
            <DarkModeIcon />
            <span className="sr-only">Switch to light / dark version</span>
          </label>
        </div>
      </div>
    </header>
  );
}
