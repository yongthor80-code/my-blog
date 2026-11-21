"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/products/1", label: "Products" },
    { href: "/login", label: "Login" },
  ];

  return (
    <nav className="bg-background fixed w-full z-20 top-0 start-0 border-b border-border">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-xl text-foreground font-semibold whitespace-nowrap">
            My Blog
          </span>
        </Link>

        <div className="flex items-center gap-1 md:order-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-muted-foreground rounded-lg md:hidden hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            aria-controls="navbar-default"
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${open ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-border rounded-lg bg-muted md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-foreground rounded hover:bg-background md:hover:bg-transparent md:hover:text-primary md:p-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
