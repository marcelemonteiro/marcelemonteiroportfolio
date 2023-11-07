import { EmailIcon, LinkedInLogo, GitHubLogo } from "../icons/svg";

export default function Contact() {
  return (
    <section id="contact" className="px-4 lg:px-0 py-20">
      <div className="max-w-6xl m-auto">
        <h2 className="text-4xl">Contato</h2>

        <p className="my-6">
          Caso queria falar comigo ou saber um pouco mais sobre mim, abaixo
          estão meu LinkedIn e meu GitHub. Também disponibilizo meu endereço de
          e-mail.
        </p>

        <div className="flex gap-4 group hover:text-[#e5a68f]">
          <a
            href="mailto:marcelepmonteiro@gmail.com"
            className="font-bold flex gap-4"
          >
            <EmailIcon
              fill="rgb(229, 229, 229)"
              className="group-hover:fill-[#e5a68f]"
            />
            marcelepmonteiro@gmail.com
          </a>
        </div>

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
        </div>
      </div>
    </section>
  );
}
