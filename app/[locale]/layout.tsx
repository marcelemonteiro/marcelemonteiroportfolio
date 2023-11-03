import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export const metadata: Metadata = {
  title: "Marcele Monteiro | Desenvolvedora Front-end",
  description: "Marcele Monteiro's Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* <div className="text-xl font-light text-neutral-200 bg-gradient-to-b from-[#4C0070] via-[#9A0680] to-[#160040]"> */}
          <div className="text-xl text-neutral-200 bg-black">
            {/* <Header lang={locale} /> */}
            {children}
            {/* <Footer /> */}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
