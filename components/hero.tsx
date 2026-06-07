"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    eyebrow: "Heritage Jewellery House",
    title: "Prashant Jewellers",
    headline: "Luxury jewellery that becomes family legacy.",
    description:
      "Premium gold, diamond and silver collections handcrafted in Rawatbhata for weddings, gifting and modern celebrations.",
    primaryCta: { href: "/shop", label: "Explore collection" },
    secondaryCta: { href: "/contact", label: "Request consultation" },
    image: "https://tankras.com/backos/uploads/sliders/1764766902_2.jpg",
  },
  {
    eyebrow: "Exclusive collections",
    title: "Arya 24KT Gold",
    headline: "Refined gold foil gifts crafted for ceremony and style.",
    description:
      "Discover premium gold pieces made with trusted purity and intricate artisan detail for your most memorable moments.",
    primaryCta: { href: "/shop", label: "Discover Arya" },
    secondaryCta: { href: "/contact", label: "Book a preview" },
    image: "https://tankras.com/backos/uploads/sliders/1764766928_6.jpg",
  },
  {
    eyebrow: "Diamond excellence",
    title: "Momentz Diamond",
    headline: "Timeless shine for weddings and celebrations.",
    description:
      "Our diamond signature line blends premium cuts, elegant design, and the confidence of certified luxury.",
    primaryCta: { href: "/shop", label: "View Momentz" },
    secondaryCta: { href: "/contact", label: "Request private viewing" },
    image: "https://tankras.com/backos/uploads/sliders/1764766911_3.jpg",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-[#f4ede4]">
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5" />
      <div className="max-w-7xl mx-auto relative px-6 sm:px-8 py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/90 px-5 py-2 text-xs uppercase tracking-[0.35em] text-gray-600 shadow-sm">
              {slide.eyebrow}
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-gold">{slide.title}</p>
              <h1 className="text-5xl font-serif tracking-tight text-black sm:text-6xl">
                {slide.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-600">
                {slide.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={slide.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800 transition"
                >
                  {slide.primaryCta.label}
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-gray-50 transition"
                >
                  {slide.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-soft">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">BIS Hallmarked</p>
                <p className="mt-3 text-sm leading-6 text-gray-600">Certified purity in every piece.</p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-soft">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Lifetime Exchange</p>
                <p className="mt-3 text-sm leading-6 text-gray-600">Trusted support from day one.</p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-soft">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Custom Gifting</p>
                <p className="mt-3 text-sm leading-6 text-gray-600">Personalised jewellery experiences.</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href="tel:+917597441777"
                className="rounded-3xl border border-gray-200 bg-white px-6 py-5 text-sm font-medium text-black shadow-soft text-center hover:bg-gray-50 transition"
              >
                Call us
              </a>
              <a
                href="mailto:info@prashantjewellers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-gray-200 bg-white px-6 py-5 text-sm font-medium text-black shadow-soft text-center hover:bg-gray-50 transition"
              >
                Email inquiry
              </a>
              <a
                href="https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-gray-200 bg-black px-6 py-5 text-sm font-semibold text-white shadow-soft text-center hover:bg-gray-800 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-premium">
            <img
              src={slide.image}
              alt={slide.headline}
              className="h-full w-full object-cover transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-xl font-semibold text-black shadow-sm transition hover:bg-gray-50"
          >
            ‹
          </button>
          <div className="flex items-center gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  activeSlide === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setActiveSlide((current) => (current + 1) % heroSlides.length)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-xl font-semibold text-black shadow-sm transition hover:bg-gray-50"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
