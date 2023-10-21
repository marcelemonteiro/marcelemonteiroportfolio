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
    <header className="w-full p-4 flex justify-center md:pt-6">
      <div className="w-full max-w-5xl flex flex-wrap items-center justify-between gap-4">
        <nav className="flex-1">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li className="text-slate-50" key={link.name}>
                <ActiveLink
                  href={link.route}
                  className="py-2 hover:border-b-2 hover:border-purple-500"
                  activeClassName="font-bold border-b-2 border-purple-500"
                >
                  {link.name}
                </ActiveLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 border-2 border-slate-200 dark:border-slate-600 rounded-md">
          <button className="flex items-center gap-2 text-slate-50 font-bold bg-slate-800 px-4 py-2 rounded-md text-sm hover:opacity-60">
            <Image
              src="/assets/images/Brazil_flag.png"
              alt="Brazil flag"
              width={320}
              height={224}
              className="w-6 h-4"
            />
            PT-BR
          </button>

          <button className="flex items-center gap-2 text-slate-50 text-sm hover:opacity-60 px-4 py-2">
            <Image
              src="/assets/images/US_flag.png"
              alt="US flag"
              width={320}
              height={224}
              className="w-6 h-4"
            />
            ENG
          </button>
        </div>

        {/* <div className="flex flex-col px-2">
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
        </div> */}
      </div>
    </header>
  );
}
