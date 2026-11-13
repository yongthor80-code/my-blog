import type { Metadata } from 'next'
import './globals.css'
import { Suspense } from 'react'
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: 'My Blog ຂອງ Yongthor',
  description: 'ເວັບ Blog ທຳອິດຂອງຂ້ອຍ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lo">
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <div className="flex flex-1 items-center justify-start border border-red-500">
          <div className="w-full border border-red-500">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}