type PriceRange = {
  label: string;
  min: number;
  max: number;
};

type Props = {
  categories: string[];
  priceRanges: PriceRange[];
  activeCategory: string;
  activePrice: string;
  onCategoryChange: (cat: string) => void;
  onPriceChange: (price: string) => void;
};

export default function FilterPanel({
  categories,
  priceRanges,
  activeCategory,
  activePrice,
  onCategoryChange,
  onPriceChange,
}: Props) {
  return (
    <aside className="rounded-2xl bg-white p-8 shadow-soft border border-gray-200 h-fit">
      {/* Category filter */}
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">Category</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "border-gray-200 text-gray-700 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mt-8">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">Price range</p>
        <div className="mt-4 space-y-3">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              type="button"
              onClick={() => onPriceChange(range.label)}
              className={`w-full rounded-2xl border px-5 py-3 text-left text-sm transition ${
                activePrice === range.label
                  ? "bg-black text-white border-black"
                  : "border-gray-200 text-gray-700 hover:border-black hover:text-black"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
