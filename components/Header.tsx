"use client";

import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const {resolvedTheme, setTheme} = useTheme();

  return (
    <header className="mx-auto mt-6 max-w-2xl p-4">
      <div className="flex items-center justify-between">
        <Link href="/public" className="font-bold text-lg">
          stojanovic.live
        </Link>
        <button
          onClick={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
          type="button"
        >
          {resolvedTheme && (
            <Image
              src={`/${resolvedTheme}.svg`}
              alt={"Theme Icon"}
              width={24}
              height={24}
            />
          )}
        </button>
      </div>
    </header>
  );
}
