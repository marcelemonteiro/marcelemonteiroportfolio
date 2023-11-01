import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Open_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

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
    <html lang={locale} className={openSans.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="text-xl text-neutral-700">
            <Header lang={locale} />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
