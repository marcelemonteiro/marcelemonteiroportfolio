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
          <div className="text-slate-200 bg-slate-900 m-0">
            <Header />
            {children}
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
