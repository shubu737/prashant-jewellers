import Link from "next/link";
import Image from "next/image";
import type { Product } from "../lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-soft hover:-translate-y-1 hover:shadow-premium transition"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 opacity-0 group-hover:opacity-100 transition rounded-b-2xl">
          <p className="text-sm font-medium text-white">View details</p>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 py-5">
        <p className="text-xs uppercase tracking-widest text-gray-500">{product.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-black">{product.name}</h3>
        <p className="mt-2 text-lg font-semibold text-gold">{product.price}</p>
      </div>
    </Link>
  );
}
