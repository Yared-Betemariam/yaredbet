import type { Metadata } from "next";
import {
  Hanken_Grotesk,
  Inter,
  Lexend_Deca,
  Montserrat,
  Nunito,
  Rubik,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yared Bet.",
  description:
    "I'm a software engineer, who has +3 years experience working on full-stack websites",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="pattern fixed inset-0 opacity-[0.035]" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
