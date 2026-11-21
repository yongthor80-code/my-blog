"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductById } from "../data";
import { formatPrice } from "@/lib/format";

function ProductDetail() {
  const params = useParams();
  const product = getProductById(Number(params.id));

  if (!product) {
    return (
      <div className="mx-auto max-w-md p-6 text-center">
        <p className="text-red-500">ບໍ່ພົບສິນຄ້າ</p>
        <Link href="/products" className="mt-2 inline-block text-primary hover:underline">
          ← ກັບຄືນລາຍການ
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <Link href="/products" className="text-sm text-muted-foreground hover:text-primary">
        ← ກັບຄືນລາຍການ
      </Link>

      <div className="mt-4 rounded-2xl border border-border bg-card p-8 text-center shadow-md">
        <div className="text-7xl">{product.emoji}</div>
        <h1 className="mt-4 text-2xl font-bold text-card-foreground">{product.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">ລະຫັດສິນຄ້າ #{product.id}</p>
        <p className="mt-4 text-muted-foreground">{product.description}</p>
        <p className="mt-4 text-3xl font-bold text-primary">
          {formatPrice(product.price)}
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
