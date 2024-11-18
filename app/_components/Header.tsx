"use client";

import {useTheme} from "next-themes";
import Link from "next/link";

export default function Header() {
  const {resolvedTheme, setTheme} = useTheme();

  return (
    <header className="mx-auto mt-6 max-w-2xl p-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          stojanovic.live
        </Link>
        <button
          onClick={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
          type="button"
        >
          {resolvedTheme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Dark Theme</title>
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Light Theme</title>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
