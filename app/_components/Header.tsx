import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto mt-6 max-w-2xl p-4">
      <Link href="/" className="font-bold text-lg">
        stojanovic.live
      </Link>
    </header>
  );
}
