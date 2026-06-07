import Hero from "../components/hero";
import TestimonialCard from "../components/testimonial-card";
import SectionHeading from "../components/section-heading";
import GalleryCarousel from "../components/gallery-carousel";
import VideoReel from "../components/video-reel";
import DesignGallery from "../components/design-gallery";
import FeaturedProductsSection from "../components/featured-products-section";
import Link from "next/link";
import { getProducts } from "../lib/products";

const signatureCollections = [
  {
    title: "Arya 24KT Gold",
    description: "Premium gold foil gifts made for celebratory ceremonies and refined gifting.",
    cta: "/shop",
    image: "/images/gold-coins/gold-coins-2.jpg",
  },
  {
    title: "Momentz Diamond",
    description: "Elegant diamond jewellery for weddings, anniversaries and milestone events.",
    cta: "/shop",
    image: "/images/diamond-earrings/diamond-earrings-3.jpg",
  },
  {
    title: "Kisna Diamond",
    description: "Radiant diamond creations with precision cuts and timeless shine.",
    cta: "/shop",
    image: "/images/diamond-rings/diamond-rings-7.jpg",
  },
];

const benefitFeatures = [
  { title: "BIS Hallmarked", subtitle: "Assured purity in every purchase." },
  { title: "Lifetime Exchange", subtitle: "Flexible support for your jewellery investment." },
  { title: "Custom Crafting", subtitle: "Bring your own jewellery vision to life." },
];

const categories = [
  { title: "Gold Jewellery", description: "22kt & 18kt designs for weddings and gifting." },
  { title: "Silver & Oxidized", description: "Contemporary silver styles with classic charm." },
  { title: "Ameri Diamond", description: "Brilliant pieces with superior clarity and cut." },
  { title: "Custom Crafting", description: "Design services for bespoke and bridal jewellery." },
];

const galleryItems = [
  {
    image: "/images/gold-necklaces/gold-necklaces-7.jpg",
    title: "Gold Heritage Necklace",
    subtitle: "Timeless elegance in every detail.",
  },
  {
    image: "/images/diamond-rings/diamond-rings-9.jpg",
    title: "Diamond Statement Ring",
    subtitle: "A modern heirloom carved in brilliance.",
  },
  {
    image: "/images/gold-rings/gold-rings-4.jpg",
    title: "Intricate Wedding Set",
    subtitle: "Crafted for celebration and legacy.",
  },
  {
    image: "/images/gold-rings/gold-rings-6.jpg",
    title: "Luxury Gold Bracelet",
    subtitle: "Bold design with premium finishing.",
  },
  {
    image: "/images/diamond-earrings/diamond-earrings-5.jpg",
    title: "Signature Silver Cuff",
    subtitle: "Modern shine with classic craftsmanship.",
  },
  {
    image: "/images/gold-necklaces/gold-necklaces-8.jpg",
    title: "Designer Pendant",
    subtitle: "An elegant piece for every occasion.",
  },
];

const testimonials = [
  {
    name: "Asha Verma",
    rating: 5,
    feedback: "The team at Prashant Jewellers helped me choose the perfect wedding set with care and attention. Their craftsmanship is exceptional.",
    date: "March 2026",
  },
  {
    name: "Rohit Gupta",
    rating: 5,
    feedback: "Fast service, honest pricing and beautiful jewellery. I purchased a gold ring and the quality is outstanding.",
    date: "May 2026",
  },
  {
    name: "Priya Sharma",
    rating: 4,
    feedback: "I love the modern silver collection. The staff were very helpful and the final piece was exactly what I wanted.",
    date: "April 2026",
  },
];

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="overflow-hidden bg-white">
      <Hero />

      <section className="bg-[#fbf6ef] py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Timeless Artistry</p>
              <h2 className="mt-4 text-4xl font-serif tracking-tight text-black sm:text-5xl">
                Signature Collections
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-black bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-900 transition"
            >
              Browse all collections
            </Link>
          </div>

          <div className="grid gap-6 mt-12 md:grid-cols-3">
            {signatureCollections.map((collection, index) => (
              <Link
                key={collection.title}
                href={collection.cta}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-700">
                    0{index + 1}
                  </span>
                </div>
                <div className="space-y-4 px-6 py-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Exclusive collection</p>
                  <h3 className="text-2xl font-semibold text-black">{collection.title}</h3>
                  <p className="text-sm leading-7 text-gray-600">{collection.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Explore collection
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProductsSection products={featuredProducts} />

      <GalleryCarousel items={galleryItems} />

      <VideoReel />

      <DesignGallery items={galleryItems} />

      <section className="bg-[#f5f0e8] py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-premium">
            <img
              src="/images/gold-necklaces/gold-necklaces-1.jpg"
              alt="Jewellery artisan"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Since 1957</p>
            <h2 className="text-4xl font-serif tracking-tight text-black sm:text-5xl">
              The art of Prashant Jewellers
            </h2>
            <p className="max-w-xl text-lg leading-8 text-gray-600">
              Our legacy is built on purity, craftsmanship and personalized service. From a family workshop in Rawatbhata, we now offer premium gold, diamond and silver jewellery designed for generations.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">Crafted with passion</p>
                <p className="mt-3 text-sm text-gray-600">Every piece is finished by expert artisans for lasting beauty.</p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">Family values</p>
                <p className="mt-3 text-sm text-gray-600">We combine heritage and trust with modern jewellery design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ede4] py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Founder story</p>
            <h2 className="text-4xl font-serif tracking-tight text-black sm:text-5xl">
              A legacy shaped by generations
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Mr. Krish Soni, the third generation of our jewellery family, carries forward a heritage rooted in artistry, precision and customer trust.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Founder</p>
                <h3 className="mt-3 text-xl font-semibold text-black">Mr. Krish Soni</h3>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Experience</p>
                <h3 className="mt-3 text-xl font-semibold text-black">Over 60 years in jewellery</h3>
              </div>
            </div>
          </div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-premium">
              <img
                src="/images/founder/krish-soni.jpg"
                alt="Founder Mr. Krish Soni"
                className="h-full w-full object-cover"
              />
            </div>
        </div>
      </section>

      <section className="py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Masterpieces in every metal</p>
              <h2 className="text-4xl font-serif tracking-tight text-black sm:text-5xl">
                The royal collection
              </h2>
              <p className="max-w-xl text-lg leading-8 text-gray-600">
                We offer jewellery that blends tradition with contemporary elegance. Every design is curated to become part of your story.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {benefitFeatures.map((feature) => (
                  <div key={feature.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft">
                    <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
                    <p className="mt-3 text-sm text-gray-600">{feature.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {categories.slice(0, 2).map((category) => (
                <div key={category.title} className="rounded-[2rem] border border-gray-200 bg-[#fdfaf5] p-8 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.35em] text-gray-500">{category.title}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-black">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{category.description}</p>
                </div>
              ))}
              {categories.slice(2).map((category) => (
                <div key={category.title} className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.35em] text-gray-500">{category.title}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-black">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ede4] py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeading title="What our clients say" subtitle="Trusted by local customers" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Browse more</p>
          <h2 className="mt-4 text-4xl font-serif tracking-tight text-black sm:text-5xl">
            Shop the full collection
          </h2>
          <Link
            href="/shop"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-sm font-semibold text-white hover:bg-gray-900 transition"
          >
            View all products
          </Link>
        </div>
      </section>
    </div>
  );
}
