import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

const inter = Inter({ subsets: ["latin"] });

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
    <html lang={locale}>
      <body
        className={`bg-neutral-100 m-0 min-h-screen"`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen relative">
            <Header lang={locale} />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
