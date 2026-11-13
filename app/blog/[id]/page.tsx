import { Suspense } from 'react'
import Image from 'next/image'

async function BlogContent({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <>
      <h1 className="text-2xl font-bold">ກຳລັງອ່ານ Blog ID: {id}</h1>

      {id === '1' && (
  <div className="flex justify-center">
    <Image src="/my.jpg" alt="ຮູບ Blog 1" width={400} height={300} />
  </div>
)}
    </>
  )
}

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  return (
    <main className="p-8 space-y-4">
      <Suspense fallback={<p>ກຳລັງໂຫຼດ...</p>}>
        <BlogContent params={params} />
      </Suspense>
    </main>
  )
}