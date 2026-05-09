"use client";

import { useEffect, useMemo, useState } from "react";
import SectionHeading from "./section-heading";
import ProductCard from "./product-card";
import FilterPanel from "./filter-panel";
import SkeletonCard from "./skeleton-card";
import type { Product } from "../lib/products";

type PriceRange = {
  label: string;
  min: number;
  max: number;
};

type Props = {
  initialProducts: Product[];
  categories: string[];
  priceRanges: PriceRange[];
};

export default function ShopBrowser({ initialProducts, categories, priceRanges }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  const allCategories = useMemo(() => ["All", ...categories.filter((category) => category !== "All")], [categories]);

  const filtered = useMemo(() => {
    let result = initialProducts;

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const range = priceRanges.find((r) => r.label === selectedPrice);
    if (range) {
      result = result.filter((p) => p.priceValue >= range.min && p.priceValue <= range.max);
    }

    return result;
  }, [initialProducts, selectedCategory, selectedPrice, priceRanges]);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 bg-white">
      <SectionHeading title="Shop Collection" subtitle="Explore luxury jewellery crafted for your signature moments." />

      <div className="mt-12 grid gap-8 xl:grid-cols-[280px_1fr]">
        <FilterPanel
          categories={allCategories}
          priceRanges={priceRanges}
          activeCategory={selectedCategory}
          activePrice={selectedPrice}
          onCategoryChange={setSelectedCategory}
          onPriceChange={setSelectedPrice}
        />

        <div>
          <div
            key={`${selectedCategory}-${selectedPrice}`}
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 animate-fade-in-up"
          >
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : filtered.map((product: Product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
          </div>

          {!loading && filtered.length === 0 && (
            <div className="mt-12 rounded-3xl bg-white p-10 text-center text-gray-600 shadow-soft">
              <p>No products match your filter. Try a different category or price range.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
