"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "../lib/products";

type Props = {
  product: Product | null;
  open: boolean;
  onClose: () => void;
};

export default function FeaturedProductModal({ product, open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && product ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 text-sm text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-5xl w-full overflow-hidden rounded-2xl sm:rounded-[2rem] bg-white shadow-premium max-h-[90vh] overflow-y-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button type="button" onClick={onClose}
              className="sticky top-3 right-3 float-right z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-xl font-semibold text-gray-700 shadow-sm mr-3 mt-3">
              ×
            </button>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] p-4 sm:p-6 lg:p-10">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] bg-gray-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {product.images.slice(0, 3).map((image) => (
                    <div key={image} className="overflow-hidden rounded-3xl bg-gray-100">
                      <img src={image} alt={product.name} className="h-28 w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gold">Quick view</p>
                  <h2 className="mt-3 text-3xl font-serif text-black">{product.name}</h2>
                  <p className="mt-3 text-xl font-semibold text-gold">{product.price}</p>
                </div>

                <p className="text-gray-600 leading-7">{product.description}</p>

                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-sm uppercase tracking-[0.35em] text-gray-500">Details</h3>
                  <ul className="mt-4 space-y-3 text-sm text-gray-600">
                    {product.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 block h-2 w-2 rounded-full bg-gold" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/product/${product.slug}`}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-semibold text-white hover:bg-gray-900 transition"
                  >
                    See full product
                  </Link>
                  <a
                    href={`https://wa.me/917597441777?text=Hi,+I+would+like+to+know+more+about+your+product+%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-4 text-sm font-semibold text-black hover:bg-gray-50 transition"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
