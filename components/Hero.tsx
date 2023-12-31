import { EmailIcon, GitHubLogo, LinkedInLogo } from "@/components/icons/svg";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent">
        Marcele Monteiro
      </h1>

      <h2 className="text-2xl md:text-6xl">Desenvolvedora Front-end</h2>

      <div className="flex gap-4 mt-10">
        <a href="https://www.linkedin.com/in/marcele-monteiro/">
          <LinkedInLogo
            fill="rgb(229, 229, 229)"
            width="40"
            className="hover:fill-[#e5a68f]"
          />
        </a>
        <a href="https://github.com/marcelemonteiro">
          <GitHubLogo
            fill="rgb(229, 229, 229)"
            width="45"
            className="hover:fill-[#e5a68f]"
          />
        </a>
        <a href="mailto:marcelepmonteiro@gmail.com">
          <EmailIcon
            fill="rgb(229, 229, 229)"
            width="45"
            className="hover:fill-[#e5a68f]"
          />
        </a>
      </div>
    </main>
  );
}
