"use client";

import { useTranslations } from "next-intl";

import {
  LinkedInLogo,
  GitHubLogo,
  EmailIcon,
  LocationDotIcon,
} from "./assets/svg";

export default function Contact() {
  const t = useTranslations("About");

  return (
    <section className="text-neutral-50 bg-neutral-800">
      <div className="py-6 px-4 md:px-8 max-w-7xl m-auto">
        <h2 className="text-4xl pb-8 font-bold underline decoration-wavy underline-offset-8 decoration-fuchsia-900">
          {t("contactTitle")}
        </h2>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo placeat,
          exercitationem autem sed eaque omnis fugiat.
        </p>

        <div className="font-bold flex gap-2 items-center my-8">
          <LocationDotIcon />
          <span>Rio de Janeiro, RJ - Brasil</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 md:py-0 font-bold text-sm uppercase">
          <a target="_blank" href="/" className="flex items-center gap-1">
            <LinkedInLogo width="50" />
            <span>LinkedIn</span>
          </a>
          <a target="_blank" href="/" className="flex items-center gap-1">
            <GitHubLogo width="55" />
            <span>GitHub</span>
          </a>
          <a target="_blank" href="/" className="flex items-center gap-2">
            <EmailIcon width="55" />
            <p>
              Email:{" "}
              <span className="normal-case">marcelepmonteiro@gmail.com</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
