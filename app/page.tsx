import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <nav className="flex gap-4 text-blue-600 underline">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/products/1">Products</Link>
      </nav>
    </main>
  )
}