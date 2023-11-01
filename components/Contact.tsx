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
    <section className="text-neutral-100 w-full max-w-6xl p-4 m-auto flex flex-wrap gap-2 justify-center md:justify-between">
      <div className="font-semibold text-base flex gap-2 items-center my-4 md:my-8">
        <LocationDotIcon />
        <span>Rio de Janeiro, RJ - Brasil</span>
      </div>

      <div className="flex gap-4 items-center">
        <a target="_blank" href="/" className="flex items-center gap-1">
          <LinkedInLogo width="50" fill="#fafafa" className="hover:fill-purple-400" />
        </a>
        <a target="_blank" href="/" className="flex items-center gap-1">
          <GitHubLogo width="55" fill="#fafafa" className="hover:fill-purple-400" />
        </a>
        <a target="_blank" href="/" className="flex items-center gap-2">
          <EmailIcon width="55" fill="#fafafa" className="hover:fill-purple-400" />
        </a>
      </div>
    </section>
  );
}
