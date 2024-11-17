import {Rubik} from "next/font/google";
import "./globals.css";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import type {Metadata} from "next";

const rubik = Rubik({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Petar Stojanovic - Portfolio",
  description: "Petar Stojanovic's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.className}>
      <body className="z-[-2] bg-[radial-gradient(var(--background-dots)_1px,var(--background)_2px)] bg-[size:40px_40px]">
        <Header />
        <main className="mx-auto max-w-2xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
