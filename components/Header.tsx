"use client";

import {ModeToggle} from "@/app/_components/ToggleTheme";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto max-w-2xl p-4 pt-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          stojanovic.live
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
