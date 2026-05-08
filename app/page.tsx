import Hero from "../components/hero";
import SectionHeading from "../components/section-heading";
import ProductCard from "../components/product-card";
import TestimonialCard from "../components/testimonial-card";
import Link from "next/link";
import { products } from "../lib/products";
import { googleReviews, averageRating, totalReviews, GOOGLE_MAPS_URL } from "../lib/google-reviews";

const featured = [products[0], products[1], products[2]];
const bestSellers = [products[2], products[0], products[3]];

const collections = [
  { title: "Gold Jewellery", subtitle: "22K & 18K gold with BIS hallmark." },
  { title: "Diamond Jewellery", subtitle: "Certified diamonds for brilliance." },
  { title: "Silver Jewellery", subtitle: "Sterling silver and traditional pieces." },
  { title: "Coins & Bars", subtitle: "Pure gold and silver for investment." },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-white">
      <Hero />

      {/* Exclusive Offers */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif tracking-tight text-black sm:text-4xl">
              Exclusive Offers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore exclusive gold, diamond, and silver jewellery offers with the lowest making charges and special discounts.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition"
            >
              View All Exclusive Offers
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured collection */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Featured collection</p>
            <h2 className="mt-4 text-4xl font-serif tracking-tight text-black sm:text-5xl">
              Luxury jewellery curated for you.
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-black hover:bg-gray-50 transition"
          >
            Browse all products
          </Link>
        </div>
        <div className="grid gap-6 xl:grid-cols-3 mt-14">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by collection */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeading title="Shop by collection" subtitle="Explore styles crafted for every moment." />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-12">
            {collections.map((col) => (
              <div key={col.title} className="rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-soft transition">
                <h3 className="text-xl font-semibold text-black">{col.title}</h3>
                <p className="mt-4 text-gray-600">{col.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Best sellers</p>
            <h2 className="text-4xl font-serif tracking-tight text-black sm:text-5xl">
              Discover our top-rated pieces.
            </h2>
            <p className="text-base leading-8 text-gray-600">
              These top-selling jewellery items are favourites for gifting, weddings, and daily luxury. Each piece is selected for its refined design and premium finish.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80"
                alt="Jewellery collection"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
                alt="Jewellery detail"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {bestSellers.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Gifts For Everyone */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif tracking-tight text-black sm:text-4xl">
              Gifts For Everyone
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ship it directly to your friends or loved ones and they'll receive a special gift from us, too!
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Gold Gifts</h3>
                <p className="text-gray-600 mb-6">From minimal gold accents to statement pieces.</p>
                <div className="space-y-2">
                  <Link href="/gold-gifts/under-10000" className="block text-sm text-gray-500 hover:text-black">Under ₹10,000</Link>
                  <Link href="/gold-gifts/under-20000" className="block text-sm text-gray-500 hover:text-black">Under ₹20,000</Link>
                  <Link href="/gold-gifts/under-50000" className="block text-sm text-gray-500 hover:text-black">Under ₹50,000</Link>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Silver Gifts</h3>
                <p className="text-gray-600 mb-6">Traditional silver gifts for every occasion.</p>
                <div className="space-y-2">
                  <Link href="/silver-gifts/under-1000" className="block text-sm text-gray-500 hover:text-black">Under ₹1,000</Link>
                  <Link href="/silver-gifts/under-5000" className="block text-sm text-gray-500 hover:text-black">Under ₹5,000</Link>
                  <Link href="/silver-gifts/under-10000" className="block text-sm text-gray-500 hover:text-black">Under ₹10,000</Link>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Coins</h3>
                <p className="text-gray-600 mb-6">Perfect gifts for investment and gifting.</p>
                <div className="space-y-2">
                  <Link href="/coins/under-1000" className="block text-sm text-gray-500 hover:text-black">Under ₹1,000</Link>
                  <Link href="/coins/under-5000" className="block text-sm text-gray-500 hover:text-black">Under ₹5,000</Link>
                  <Link href="/coins/under-10000" className="block text-sm text-gray-500 hover:text-black">Under ₹10,000</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jewellery Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif tracking-tight text-black sm:text-4xl">
              Jewellery Collections
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-200 rounded-2xl p-8 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-black mb-4">Antique Collection</h3>
                <p className="text-gray-600">Timeless elegance with traditional antique designs.</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 rounded-2xl p-8 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-black mb-4">Diamond Collection</h3>
                <p className="text-gray-600">Certified diamonds with exceptional brilliance.</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-100 to-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-black mb-4">Silver Collection</h3>
                <p className="text-gray-600">Sterling silver and traditional silver jewellery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Why choose Prashant</p>
          <h2 className="mt-4 text-4xl font-serif tracking-tight text-black sm:text-5xl">
            Curated jewellery, trusted service.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-left">
              <p className="text-lg font-semibold text-black">Crafted with care</p>
              <p className="mt-4 text-gray-600">Every design is chosen and finished with premium attention to detail.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-left">
              <p className="text-lg font-semibold text-black">Local boutique</p>
              <p className="mt-4 text-gray-600">A trusted jewellery shop in Rawatbhata offering warm, personalised service.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-left">
              <p className="text-lg font-semibold text-black">Easy enquiries</p>
              <p className="mt-4 text-gray-600">Contact us instantly via WhatsApp for styling advice and custom requests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google reviews */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Google Reviews</p>
        <h2 className="mt-4 text-4xl font-serif tracking-tight text-black sm:text-5xl">
          A premium experience from first visit to final purchase.
        </h2>

        {/* Overall rating badge */}
        <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-8 py-4">
          <div>
            <p className="text-5xl font-bold text-black">{averageRating.toFixed(1)}</p>
            <div className="flex gap-0.5 mt-1 justify-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  className={`w-4 h-4 ${s <= Math.round(averageRating) ? "text-yellow-400" : "text-gray-200"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">{totalReviews} reviews</p>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Google Reviews</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mt-10">
          {googleReviews.slice(0, 3).map((review) => (
            <TestimonialCard key={review.name} testimonial={review} />
          ))}
        </div>

        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition"
        >
          View all reviews on Google
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </section>

      {/* Gold Plans */}
      <section className="bg-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-serif tracking-tight text-black sm:text-4xl mb-4">
            Gold Plans
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Save for your future with our flexible gold saving plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Book My Gold
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-black hover:bg-gray-50 transition"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif tracking-tight text-black sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-2">What types of gold jewellery does Prashant Jewellers offer?</h3>
              <p className="text-gray-600">We offer a refined collection of gold, diamond, and silver jewellery including bridal jewellery, antique designs, and modern gold pieces.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-2">Do you offer BIS hallmarked gold jewellery?</h3>
              <p className="text-gray-600">Yes, all our gold jewellery is BIS 916 hallmarked with HUID for guaranteed purity and authenticity.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-2">Can I buy jewellery online?</h3>
              <p className="text-gray-600">Yes, you can browse and purchase our jewellery online with secure payments and trusted delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-24 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Ready to shop?</p>
        <h2 className="mt-4 text-4xl font-serif tracking-tight text-black sm:text-5xl">
          Explore our curated jewellery collection.
        </h2>
        <Link
          href="/shop"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-9 py-4 text-sm font-semibold text-white hover:bg-gray-800 transition"
        >
          Shop now
        </Link>
      </section>
    </div>
  );
}
