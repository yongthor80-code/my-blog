"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 bg-gray-100 px-6 py-4 shadow">
      <Link
        href="/"
        className={pathname === "/" ? "font-bold text-blue-600" : "text-gray-700 hover:text-blue-500"}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={pathname === "/about" ? "font-bold text-blue-600" : "text-gray-700 hover:text-blue-500"}
      >
        About
      </Link>
      <Link
        href="/blog"
        className={pathname === "/blog" ? "font-bold text-blue-600" : "text-gray-700 hover:text-blue-500"}
      >
        Blog
      </Link>
      <Link
        href="/products"
        className={pathname.startsWith("/products") ? "font-bold text-blue-600" : "text-gray-700 hover:text-blue-500"}
      >
        Products
      </Link>
    </nav>
  );
}