import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Theme from "@/components/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Marcele Monteiro",
  description: "Marcele Monteiro's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme>
          <div className="w-full flex flex-col items-center text-slate-950 dark:text-slate-200 bg-slate-50 dark:bg-slate-800">
            <Header />
            <div className="max-w-5xl">{children}</div>
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
