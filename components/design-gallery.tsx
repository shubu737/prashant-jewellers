"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import SectionHeading from "./section-heading";

type GalleryItem = {
  image: string;
  title: string;
  subtitle: string;
};

type Props = {
  items: GalleryItem[];
};

export default function DesignGallery({ items }: Props) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const gridItems = useMemo(() => items.slice(0, 8), [items]);

  return (
    <motion.section
      className="bg-white py-20"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading title="Product design images" subtitle="A curated gallery of our craftsmanship" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gridItems.map((item) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setSelected(item)}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 transition hover:shadow-premium"
            >
              <div className="relative h-72 overflow-hidden rounded-[2rem] bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/75">Design image</p>
                  <p className="mt-3 text-xl font-semibold">{item.title}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full overflow-hidden rounded-[2rem] bg-white shadow-premium"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xl font-semibold text-gray-700 shadow-sm"
              >
                ×
              </button>
              <div className="relative w-full overflow-hidden rounded-[2rem] bg-black">
                <img src={selected.image} alt={selected.title} className="h-[70vh] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">Design image</p>
                  <h3 className="mt-2 text-3xl font-semibold">{selected.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">{selected.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}
