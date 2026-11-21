import Link from "next/link";

import Button from "@/components/Button";

export default function HomePage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <nav className="flex gap-4 text-primary underline">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/products/1">Products</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/use-state">UseState</Link>
        <Link href="/use-effect">UseEffect</Link>
        <Link href="/login">Login</Link>
      </nav>
      <Button />
      <Button title="Save" className="bg-green-900" />
    </main>
  );
}