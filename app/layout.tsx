import {Rubik} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    <html lang="en" className={rubik.className} suppressHydrationWarning>
      {/*<body className="z-[-2] bg-[radial-gradient(var(--background-dots)_1px,var(--background)_2px)] bg-[size:40px_40px]">*/}
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="relative before:fixed before:inset-0 before:z-[-10] before:bg-[url('/noise.jpg')] before:bg-cover before:opacity-[0.025]">
            <Header />
            <main className="mx-auto max-w-2xl px-4 md:px-0">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(80%_50%_at_50%_-20%,rgba(40,75,185,0.1),transparent)] dark:bg-[radial-gradient(80%_50%_at_50%_-20%,rgba(40,75,185,0.2),transparent)]" />
      </body>
    </html>
  );
}
