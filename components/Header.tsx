import Image from "next/image";
import ActiveLink from "./ActiveLink";

export default function Header() {
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
                  className="py-2 hover:border-b-2 hover:border-pink-500"
                  activeClassName="font-bold border-b-2 border-pink-500"
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
      </div>
    </header>
  );
}
