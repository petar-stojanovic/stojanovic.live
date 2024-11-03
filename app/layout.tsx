import {Rubik} from "next/font/google";
import "./globals.css";
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
      <body
        className={
          "bg-[radial-gradient(var(--background-dots)_2px,var(--background)_2px)] bg-[size:70px_70px]"
        }
      >
        {children}
      </body>
    </html>
  );
}
