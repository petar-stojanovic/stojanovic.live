import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between w-full h-[64px] px-4 bg-white shadow-md">
      <Link href="/" className="text-lg font-bold text-gray-800">
        Petar Stojanovic
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-gray-800 hover:text-gray-900">
          Projects
        </Link>
        <Link href="/" className="text-gray-800 hover:text-gray-900">
          About
        </Link>
        <Link href="/" className="text-gray-800 hover:text-gray-900">
          Contact
        </Link>
      </nav>
    </header>
  );
}
