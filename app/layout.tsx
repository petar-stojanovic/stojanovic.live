import type { Metadata } from "next";
import "./globals.css";
import {Rubik} from "next/font/google";

const rubik = Rubik({
  subsets: ['latin'],
    style: ['normal', 'italic'],
  display: 'swap',
})
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
      <body>
        {children}
      </body>
    </html>
  );
}
