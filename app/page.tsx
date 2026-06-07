"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { getProducts } from "../lib/products";
import type { Product } from "../lib/products";
import FeaturedProductsSection from "../components/featured-products-section";
import GalleryCarousel from "../components/gallery-carousel";
import VideoReel from "../components/video-reel";
import DesignGallery from "../components/design-gallery";
import TestimonialCard from "../components/testimonial-card";

const signatureCollections = [
  { title: "Arya 24KT Gold",   description: "Premium gold foil gifts made for celebratory ceremonies and refined gifting.",          cta: "/shop", image: "/images/gold-coins/gold-coins-2.jpg" },
  { title: "Momentz Diamond",  description: "Elegant diamond jewellery for weddings, anniversaries and milestone events.",            cta: "/shop", image: "/images/diamond-earrings/diamond-earrings-3.jpg" },
  { title: "Kisna Diamond",    description: "Radiant diamond creations with precision cuts and timeless shine.",                      cta: "/shop", image: "/images/diamond-rings/diamond-rings-7.jpg" },
];

const galleryItems = [
  { image: "/images/gold-necklaces/gold-necklaces-7.jpg",      title: "Gold Heritage Necklace", subtitle: "Timeless elegance in every detail." },
  { image: "/images/diamond-rings/diamond-rings-9.jpg",        title: "Diamond Statement Ring",  subtitle: "A modern heirloom carved in brilliance." },
  { image: "/images/gold-rings/gold-rings-4.jpg",              title: "Intricate Wedding Set",   subtitle: "Crafted for celebration and legacy." },
  { image: "/images/gold-rings/gold-rings-6.jpg",              title: "Luxury Gold Bracelet",    subtitle: "Bold design with premium finishing." },
  { image: "/images/diamond-earrings/diamond-earrings-5.jpg",  title: "Signature Earrings",      subtitle: "Modern shine with classic craftsmanship." },
  { image: "/images/gold-necklaces/gold-necklaces-8.jpg",      title: "Designer Pendant",        subtitle: "An elegant piece for every occasion." },
];

const stats = [
  { value: 60,   suffix: "+",  label: "Years of Legacy" },
  { value: 5000, suffix: "+",  label: "Happy Families" },
  { value: 100,  suffix: "%",  label: "BIS Hallmarked" },
  { value: 3,    suffix: "rd", label: "Generation Jewellers" },
];

const benefitFeatures = [
  { icon: "✦", title: "BIS Hallmarked",    subtitle: "Assured purity in every purchase." },
  { icon: "♻", title: "Lifetime Exchange", subtitle: "Flexible support for your jewellery investment." },
  { icon: "✿", title: "Custom Crafting",   subtitle: "Bring your own jewellery vision to life." },
];

const testimonials = [
  { name: "Asha Verma",   rating: 5, feedback: "The team at Prashant Jewellers helped me choose the perfect wedding set with care and attention. Their craftsmanship is exceptional.", date: "March 2026" },
  { name: "Rohit Gupta",  rating: 5, feedback: "Fast service, honest pricing and beautiful jewellery. I purchased a gold ring and the quality is outstanding.", date: "May 2026" },
  { name: "Priya Sharma", rating: 4, feedback: "I love the modern silver collection. The staff were very helpful and the final piece was exactly what I wanted.", date: "April 2026" },
];

const marqueeItems = ["BIS Hallmarked Jewellery", "Lifetime Exchange Policy", "Custom Crafting Available", "Since 1957", "Premium Gold & Diamonds", "Trusted by 5000+ Families"];

const fadeUp    = { hidden: { opacity: 0, y: 48 },  visible: { opacity: 1, y: 0 } };
const fadeLeft  = { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 48 },  visible: { opacity: 1, x: 0 } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.section>
  );
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 24);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => { getProducts().then((p) => setProducts(p.slice(0, 4))); }, []);

  return (
    <div className="overflow-hidden bg-white">

      {/* ── Marquee ── */}
      <div className="bg-[#111] py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/80">
              {item} <span className="mx-3 opacity-30">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center bg-[#0a0a0a] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image src="/images/gold-necklaces/gold-necklaces-2.jpg" alt="hero" fill priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>

        <div className="absolute top-20 right-[15%] w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-gold/10 blur-3xl animate-float pointer-events-none" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="text-gold text-[10px] sm:text-xs uppercase tracking-[0.4em]">Since 1957 · Rawatbhata</span>
              <span className="gold-line" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-8xl font-serif text-white tracking-tight">
              Where Gold<br />
              <span className="text-gradient-gold">Tells Stories</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 text-sm sm:text-lg text-white/70 max-w-md leading-7 sm:leading-8">
              Premium gold, diamond and silver collections handcrafted in Rawatbhata for weddings, gifting and modern celebrations.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 flex flex-col xs:flex-row gap-3">
              <Link href="/shop"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,150,80,0.5)]">
                <span className="relative z-10">Explore Collection</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-[#a07030] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                Book Consultation
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4">
              {["BIS Hallmarked", "Lifetime Exchange", "Custom Crafting"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <span className="text-gold text-xs">✦</span>
                  <span className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-7 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <Section className="bg-[#0d0d0d] py-10 sm:py-14 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl sm:text-4xl font-serif text-gradient-gold font-semibold">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Signature Collections ── */}
      <Section className="bg-[#faf6f0] py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <span className="gold-line mb-3 block" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold mb-2">Timeless Artistry</p>
              <h2 className="text-3xl sm:text-5xl font-serif text-black">Signature Collections</h2>
            </div>
            <Link href="/shop" className="group inline-flex items-center gap-2 text-sm font-semibold text-black border-b border-black/20 pb-1 hover:border-gold hover:text-gold transition-all self-start sm:self-auto">
              Browse all <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {signatureCollections.map((col, i) => (
              <motion.div key={col.title} variants={fadeUp} transition={{ delay: i * 0.15 }} whileHover={{ y: -6 }} className="group">
                <Link href={col.cta} className="block overflow-hidden rounded-2xl sm:rounded-3xl luxury-card shadow-soft hover:shadow-premium transition-all duration-500">
                  <div className="relative h-60 sm:h-72 overflow-hidden">
                    <img src={col.image} alt={col.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      0{i + 1}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl sm:text-2xl font-serif text-white">{col.title}</h3>
                    </div>
                  </div>
                  <div className="px-5 py-5 space-y-2">
                    <p className="text-sm leading-6 text-gray-600">{col.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gold">Explore <span>→</span></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Featured Products ── */}
      <FeaturedProductsSection products={products} />

      {/* ── Gallery Carousel ── */}
      <GalleryCarousel items={galleryItems} />

      {/* ── Why Choose Us ── */}
      <Section className="py-14 sm:py-24 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <span className="gold-line mx-auto mb-4 block" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-5xl font-serif text-white">The Prashant Promise</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {benefitFeatures.map((f, i) => (
              <motion.div key={f.title} variants={fadeUp} transition={{ delay: i * 0.15 }} whileHover={{ y: -6 }}
                className="rounded-2xl sm:rounded-3xl border border-gold/15 bg-white/5 p-6 sm:p-8 text-center backdrop-blur-sm hover:border-gold/40 transition-all duration-300">
                <div className="text-2xl sm:text-3xl text-gold mb-4 animate-gold-pulse">{f.icon}</div>
                <h3 className="text-lg sm:text-xl font-serif text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/50 leading-6">{f.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Video Reel ── */}
      <VideoReel />

      {/* ── Design Gallery ── */}
      <DesignGallery items={galleryItems} />

      {/* ── Our Story ── */}
      <Section className="py-14 sm:py-24 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 items-center">
            <motion.div variants={fadeLeft} transition={{ duration: 0.8 }} className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-premium aspect-[4/5]">
                <img src="/images/gold-necklaces/gold-necklaces-2.jpg" alt="Our Craft" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-6 rounded-2xl bg-gold p-4 sm:p-6 shadow-premium text-center">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-white">60+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/80 mt-1">Years of Trust</p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeRight} transition={{ duration: 0.8 }} className="space-y-5 sm:space-y-8">
              <span className="gold-line block" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold">Since 1957</p>
              <h2 className="text-3xl sm:text-5xl font-serif text-black leading-tight">The Art of<br />Prashant Jewellers</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
                Our legacy is built on purity, craftsmanship and personalized service. From a family workshop in Rawatbhata, we now offer premium gold, diamond and silver jewellery designed for generations.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: "Crafted with passion", desc: "Every piece is finished by expert artisans for lasting beauty." },
                  { label: "Family values",         desc: "We combine heritage and trust with modern jewellery design." },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl sm:rounded-2xl border border-gold/15 bg-white p-4 sm:p-6 shadow-soft hover:border-gold/40 transition-colors">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{item.label}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="group inline-flex items-center gap-2 text-sm font-semibold text-black border-b border-black/20 pb-1 hover:border-gold hover:text-gold transition-all">
                Read our story <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── Founder ── */}
      <Section className="py-14 sm:py-24 bg-[#111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,150,80,0.08),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 items-center">
            <motion.div variants={fadeLeft} transition={{ duration: 0.8 }} className="space-y-5 sm:space-y-8 order-2 lg:order-1">
              <span className="gold-line block" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold">Founder Story</p>
              <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">A Legacy Shaped<br />by Generations</h2>
              <p className="text-base sm:text-lg text-white/60 leading-7 sm:leading-8">
                Mr. Krish Soni, the third generation of our jewellery family, carries forward a heritage rooted in artistry, precision and customer trust.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: "Founder",    value: "Mr. Krish Soni" },
                  { label: "Experience", value: "Over 60 years" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl sm:rounded-2xl border border-gold/20 bg-white/5 p-4 sm:p-6">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-2">{item.label}</p>
                    <p className="text-base sm:text-lg font-serif text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeRight} transition={{ duration: 0.8 }} className="relative order-1 lg:order-2">
              <div className="overflow-hidden rounded-3xl shadow-premium aspect-[4/5]">
                <img src="/images/founder/krish-soni.jpg" alt="Founder Mr. Krish Soni" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border border-gold/30 animate-float" />
              <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full border border-gold/20 animate-float" style={{ animationDelay: "1.5s" }} />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section className="py-14 sm:py-24 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="gold-line mx-auto mb-4 block" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold mb-3">Client Love</p>
            <h2 className="text-3xl sm:text-5xl font-serif text-black">What Our Clients Say</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} variants={fadeUp} transition={{ delay: i * 0.15 }}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA Banner ── */}
      <Section className="relative py-20 sm:py-32 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <img src="/images/gold-rings/gold-rings-3.jpg" alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,150,80,0.15),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div variants={fadeUp} transition={{ duration: 0.8 }}>
            <span className="gold-line mx-auto mb-5 block" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold mb-4">Browse More</p>
            <h2 className="text-3xl sm:text-6xl font-serif text-white leading-tight mb-5">
              Find Your Perfect<br />
              <span className="text-gradient-gold">Piece of Gold</span>
            </h2>
            <p className="text-sm sm:text-lg text-white/60 mb-8 max-w-xl mx-auto leading-7">
              Explore our full collection of handcrafted jewellery — from bridal sets to everyday elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/shop"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white overflow-hidden hover:shadow-[0_0_40px_rgba(196,150,80,0.5)] transition-all duration-300">
                <span className="relative z-10">View All Products</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a href="https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

    </div>
  );
}
