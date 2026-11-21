import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">ລາຍການ Blog</h1>
      <ul className="space-y-2 text-foreground">
        <li><Link href="/blog/1">Blog 1</Link></li>
        <li><Link href="/blog/2">Blog 2</Link></li>
        <li><Link href="/blog/3">Blog 3</Link></li>
        <li><Link href="/" className="text-primary">ກັບໜ້າຫຼັກ</Link></li>
      </ul>
    </main>
  )
}