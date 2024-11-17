import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 mt-6 mx-auto max-w-2xl">
      <Link href="/" className="font-bold text-lg">
        stojanovic.live
      </Link>
    </header>
  );
}
