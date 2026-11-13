import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">ກ່ຽວກັບຂ້ອຍ</h1>
      <p>ຂ້ອຍຊື່ Yongthor, ເປັນນັກສຶກສາສາຍການພັດທະນາໂປຣແກຣມທີ່ມະຫາວິທະຍາໄລແຫ່ງຊາດ.</p>
      <p>ຕອນນີ້ກຳລັງຮຽນ Next.js.</p>
      <Link href="/" className="text-blue-600 underline">ກັບໜ້າຫຼັກ</Link>
    </main>
  )
}