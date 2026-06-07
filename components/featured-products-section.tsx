"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "../lib/products";
import FeaturedProductModal from "./featured-product-modal";

type Props = {
  products: Product[];
};

export default function FeaturedProductsSection({ products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <motion.section
      className="py-20 bg-[#fffaf3]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Featured products</p>
            <h2 className="mt-4 text-4xl font-serif tracking-tight text-black sm:text-5xl">
              Shop our best-selling jewellery.
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full border border-black bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-gray-900 transition"
          >
            Browse all products
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <motion.div
              key={product.slug}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white shadow-soft"
            >
              <Link href={`/product/${product.slug}`} className="group block">
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="absolute right-4 top-4 rounded-full border border-white bg-black/80 px-4 py-2 text-xs font-semibold text-white transition hover:bg-black"
                  >
                    Quick view
                  </button>
                </div>

                <div className="space-y-3 px-6 py-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">{product.category}</p>
                  <h3 className="text-xl font-semibold text-black">{product.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{product.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-semibold text-gold">{product.price}</span>
                    <span className="text-sm text-gray-500">{product.details[0]}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <FeaturedProductModal product={selectedProduct} open={Boolean(selectedProduct)} onClose={() => setSelectedProduct(null)} />
    </motion.section>
  );
}
