import Link from "next/link";
import Image from "next/image";

const categories = [
  { title: "Rings", description: "Delicate and bold pieces for every occasion." },
  { title: "Necklaces", description: "Statement chains and timeless pendants." },
  { title: "Earrings", description: "Everyday luxury with charming finishes." },
  { title: "Bangles", description: "Polished designs crafted for comfort." },
];

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Left: text content */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full p-[3px] bg-gradient-to-br from-[#d4af37] to-[#c49650] shadow-lg flex-shrink-0">
                <div className="rounded-full bg-white p-[2px]">
                  <Image
                    src="/logo.png.png"
                    alt="Prashant Jewellers"
                    width={68}
                    height={68}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">Luxury jewellery shop</p>
                <p className="text-2xl font-serif text-gold font-semibold">Purity is our Priority</p>
              </div>
            </div>

            <h1 className="text-5xl font-serif tracking-tight text-black sm:text-6xl">
              Global luxury experience.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-gray-600">
              Discover curated jewellery crafted to elevate your daily moments. Browse premium rings, necklaces, earrings and bangles with personalised service from Prashant Jewellers.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800 transition"
              >
                Explore Collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-black hover:bg-gray-50 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* Category pills */}
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 mt-4">
              {categories.map((cat) => (
                <div key={cat.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">{cat.title}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury jewellery"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
