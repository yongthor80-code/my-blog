"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "../data";

function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="mx-auto max-w-md p-6 text-center">
        <p className="text-red-500">ບໍ່ພົບສິນຄ້າ</p>
        <Link href="/products" className="mt-2 inline-block text-blue-600 hover:underline">
          ← ກັບຄືນລາຍການ
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <Link href="/products" className="text-sm text-gray-500 hover:text-blue-600">
        ← ກັບຄືນລາຍການ
      </Link>

      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md">
        <div className="text-7xl">{product.emoji}</div>
        <h1 className="mt-4 text-2xl font-bold text-gray-800">{product.name}</h1>
        <p className="mt-1 text-sm text-gray-400">ລະຫັດສິນຄ້າ #{product.id}</p>
        <p className="mt-4 text-3xl font-bold text-blue-600">
          {product.price.toLocaleString("en-US")} ກີບ
        </p>
        <button className="mt-6 w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600">
          ເພີ່ມໃສ່ກະຕ່າ
        </button>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<p className="p-6">ກຳລັງໂຫຼດ...</p>}>
      <ProductDetail />
    </Suspense>
  );
}