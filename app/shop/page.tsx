"use client";

import { useEffect, useMemo, useState } from "react";
import SectionHeading from "../../components/section-heading";
import ProductCard from "../../components/product-card";
import FilterPanel from "../../components/filter-panel";
import SkeletonCard from "../../components/skeleton-card";
import { categories, products, Product } from "../../lib/products";

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹25,000", min: 0, max: 25000 },
  { label: "₹25,000 - ₹50,000", min: 25000, max: 50000 },
  { label: "Above ₹50,000", min: 50000, max: Infinity },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    let result = products;

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const range = priceRanges.find((r) => r.label === selectedPrice);
    if (range) {
      result = result.filter((p) => p.priceValue >= range.min && p.priceValue <= range.max);
    }

    return result;
  }, [selectedCategory, selectedPrice]);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 bg-white">
      <SectionHeading title="Shop Collection" subtitle="Explore luxury jewellery crafted for your signature moments." />

      <div className="mt-12 grid gap-8 xl:grid-cols-[280px_1fr]">
        <FilterPanel
          categories={categories}
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
