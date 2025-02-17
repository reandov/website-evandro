import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-900 flex gap-4 items-center justify-between">
      <Link href="/" className="flex flex-col gap-2 items-center">
        <span className="text-4xl font-semibold">Evandro</span>
        <hr className="border-2 rounded-md w-28 border-sky-500" />
      </Link>
      <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium">
        <Link
          href="#about"
          className="text-xl font-normal transition hover:text-sky-600"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="text-xl font-normal transition hover:text-sky-600"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className="text-xl font-normal transition hover:text-sky-600"
        >
          Contact
        </Link>
        <Link
          href="#articles"
          className="text-xl font-normal transition hover:text-sky-600"
        >
          Articles
        </Link>
      </nav>
      <button className="sm:hidden">
        <Menu />
      </button>
    </header>
  );
}
