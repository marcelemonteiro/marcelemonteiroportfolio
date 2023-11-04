"use client";

import { useState } from "react";
import MenuIcon from "@/components/icons/svg/MenuIcon";

export default function Header() {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <header
      className={` ${
        expandNav ? "bg-[#4c0070]" : "bg-[#151d29]"
      } fixed z-10 w-full pt-4 flex flex-col justify-end transition-all ease-linear`}
    >
      <button
        type="button"
        className="self-end pr-10 pb-4 md:hidden"
        onClick={() => setExpandNav(!expandNav)}
      >
        <MenuIcon />
      </button>

      <nav
        className={`${
          expandNav ? "max-h-72 py-12" : "max-h-0"
        } self-center w-full md:max-h-72 transition-all duration-300 overflow-hidden`}
      >
        <ul
          className="flex flex-col md:flex-row md:justify-end md:pr-10 md:pb-4 items-center gap-6"
          onClick={() => setExpandNav(false)}
        >
          <li>
            <a href="#about">Sobre</a>
          </li>

          <li>
            <a href="#skills">Habilidades</a>
          </li>

          <li>
            <a href="#portfolio">Portfólio</a>
          </li>

          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
