import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto mt-6 max-w-2xl p-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          stojanovic.live
        </Link>
        <button type="button">
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
            <title>asd</title>
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
