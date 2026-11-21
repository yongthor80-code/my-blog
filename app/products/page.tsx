import Link from "next/link";
import { products } from "./data";
import { formatPrice } from "@/lib/format";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold text-foreground">ສິນຄ້າທັງໝົດ</h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-5xl">{product.emoji}</div>
            <h2 className="mt-3 text-lg font-semibold text-card-foreground">
              {product.name}
            </h2>
            <p className="mt-1 text-primary">{formatPrice(product.price)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
