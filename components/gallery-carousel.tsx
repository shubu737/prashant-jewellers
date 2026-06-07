"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type GalleryItem = {
  image: string;
  title: string;
  subtitle: string;
};

type Props = {
  items: GalleryItem[];
};

export default function GalleryCarousel({ items }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const updateButtons = () => {
      const container = containerRef.current;
      if (!container) {
        setCanScrollLeft(false);
        setCanScrollRight(false);
        return;
      }

      setCanScrollLeft(container.scrollLeft > 10);
      setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 10);
    };

    updateButtons();
    const observer = new ResizeObserver(updateButtons);
    if (containerRef.current) {
      observer.observe(containerRef.current);
      containerRef.current.addEventListener("scroll", updateButtons);
    }

    return () => {
      observer.disconnect();
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", updateButtons);
      }
    };
  }, []);

  const scrollBy = (value: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: value, behavior: "smooth" });
  };

  return (
    <motion.section className="py-14 sm:py-20" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Gallery</p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-serif tracking-tight text-black">
              Our design story.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                const width = containerRef.current?.clientWidth ?? 600;
                scrollBy(-width);
              }}
              disabled={!canScrollLeft}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-sm transition disabled:opacity-40"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => {
                const width = containerRef.current?.clientWidth ?? 600;
                scrollBy(width);
              }}
              disabled={!canScrollRight}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-sm transition disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="mt-8 flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory touch-pan-x"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="snap-start flex-shrink-0 w-[80%] sm:w-[48%] lg:w-[31%] rounded-2xl sm:rounded-[2rem] bg-gray-100 shadow-soft"
            >
              <div className="relative h-56 sm:h-72 overflow-hidden rounded-2xl sm:rounded-[2rem]">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              </div>
              <div className="space-y-3 px-6 py-6">
                <p className="text-xl font-semibold text-black">{item.title}</p>
                <p className="text-sm leading-6 text-gray-600">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
