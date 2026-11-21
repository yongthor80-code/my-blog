"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4 inset-s-0">
        <Link href="/" className="text-lg font-bold text-foreground">
          My Blog
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className={`text-sm ${pathname === "/" ? "font-bold text-primary" : "text-muted-foreground"}`}>Home</Link>
          <Link href="/products" className={`text-sm ${pathname === "/products" ? "font-bold text-primary" : "text-muted-foreground"}`}>Products</Link>
          <Link href="/blog" className={`text-sm ${pathname === "/blog" ? "font-bold text-primary" : "text-muted-foreground"}`}>Blog</Link>
          <Link href="/about" className={`text-sm ${pathname === "/about" ? "font-bold text-primary" : "text-muted-foreground"}`}>About</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}