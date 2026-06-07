"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
      <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
        {children}
      </motion.div>
    );
  }

  const values = [
    { icon: "✦", title: "Premium Quality",   desc: "Only the finest gold and diamonds, certified for purity and authenticity." },
    { icon: "◈", title: "Local Expertise",   desc: "Deep knowledge of local preferences and traditional jewellery designs." },
    { icon: "❋", title: "Personal Service",  desc: "Individual attention and guidance for every customer, every time." },
    { icon: "⟡", title: "BIS Hallmarked",    desc: "Every piece carries certified purity you can trust completely." },
    { icon: "↺", title: "Lifetime Exchange", desc: "Flexible support and exchange policy for your jewellery investment." },
    { icon: "✿", title: "Custom Crafting",   desc: "Bring your vision to life with our bespoke jewellery service." },
  ];

  const milestones = [
    { year: "1957", event: "Founded in Rawatbhata by the Soni family" },
    { year: "1980", event: "Expanded to gold and diamond jewellery" },
    { year: "2005", event: "Became authorised Kisna & Momentz dealer" },
    { year: "2020", event: "Third generation takes charge under Mr. Krish Soni" },
    { year: "2024", event: "5000+ families served across Rawatbhata" },
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* ── Dark Hero ── */}
      <section className="relative bg-[#0a0a0a] py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gold-necklaces/gold-necklaces-7.jpg" alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/3 right-[10%] w-64 h-64 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="text-gold text-xs uppercase tracking-[0.4em]">Since 1957</span>
              <span className="gold-line" />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight max-w-3xl">
              A Legacy of <br /><span className="text-gradient-gold">Trust & Craft</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/60 max-w-xl leading-7 sm:leading-8">
              Three generations of jewellery mastery, serving the Rawatbhata community with purity, craftsmanship and heart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="bg-[#faf6f0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Section>
              <span className="gold-line block mb-4" />
              <p className="text-xs uppercase tracking-[0.4em] text-gold mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-5xl font-serif text-black leading-tight mb-6">
                Your Trusted<br />Local Jeweller
              </h2>
              <div className="space-y-4 text-gray-600 leading-7 sm:leading-8">
                <p>For over six decades, Prashant Jewellers has been serving the Rawatbhata community with premium gold and diamond jewellery. Our commitment to quality, authenticity, and personalised service has made us the preferred choice for generations.</p>
                <p>Located in the heart of Anu Kiran Colony, we offer expert craftsmanship, competitive pricing, and the peace of mind that comes with dealing with a trusted local establishment.</p>
              </div>
              <Link href="/shop" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#a07030] hover:shadow-[0_0_24px_rgba(196,150,80,0.4)] transition-all duration-300">
                Explore Collection <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Section>

            <Section>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-2xl aspect-[3/4] row-span-2">
                  <img src="/images/gold-necklaces/gold-necklaces-2.jpg" alt="Jewellery store" className="h-full w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl aspect-square">
                  <img src="/images/diamond-rings/diamond-rings-7.jpg" alt="Diamond rings" className="h-full w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl aspect-square">
                  <img src="/images/gold-rings/gold-rings-3.jpg" alt="Gold rings" className="h-full w-full object-cover" />
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[#0d0d0d] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,150,80,0.06),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
          <Section className="text-center mb-14">
            <span className="gold-line mx-auto mb-4 block" />
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-3">Our Journey</p>
            <h2 className="text-3xl sm:text-5xl font-serif text-white">Milestones of Legacy</h2>
          </Section>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((m, i) => (
                <Section key={m.year} className={`flex gap-6 sm:gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-center`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                    <div className="rounded-2xl border border-gold/20 bg-white/5 p-5 sm:p-6 inline-block w-full sm:max-w-xs">
                      <p className="text-gold font-serif text-2xl font-semibold">{m.year}</p>
                      <p className="mt-2 text-sm text-white/60 leading-6">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-gold border-4 border-[#0d0d0d] shadow-[0_0_12px_rgba(196,150,80,0.6)]" />
                  <div className="flex-1 hidden sm:block" />
                </Section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#faf6f0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Section className="text-center mb-12">
            <span className="gold-line mx-auto mb-4 block" />
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-3">What We Stand For</p>
            <h2 className="text-3xl sm:text-5xl font-serif text-black">Our Promise to You</h2>
          </Section>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Section key={v.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-gold/15 bg-white p-5 sm:p-7 shadow-soft hover:border-gold/40 hover:shadow-premium transition-all duration-300 h-full">
                  <div className="text-xl sm:text-2xl text-gold mb-3 animate-gold-pulse">{v.icon}</div>
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-black mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-6">{v.desc}</p>
                </motion.div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="bg-[#111] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(196,150,80,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <Section className="relative">
              <div className="overflow-hidden rounded-3xl aspect-[4/5] shadow-premium">
                <img src="/images/founder/krish-soni.jpg" alt="Mr. Krish Soni" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-4 -right-3 sm:-right-6 rounded-2xl bg-gold p-4 sm:p-6 shadow-premium text-center">
                <p className="text-xl sm:text-2xl font-serif font-bold text-white">3rd</p>
                <p className="text-[10px] uppercase tracking-widest text-white/80 mt-1">Generation</p>
              </motion.div>
            </Section>
            <Section className="space-y-5 sm:space-y-7">
              <span className="gold-line block" />
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Meet the Founder</p>
              <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">Mr. Krish Soni</h2>
              <p className="text-base sm:text-lg text-white/60 leading-7 sm:leading-8">
                The third generation of our jewellery family, Mr. Krish Soni carries forward a heritage rooted in artistry, precision and customer trust. Under his leadership, Prashant Jewellers has grown into the most trusted jewellery destination in Rawatbhata.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Experience", value: "20+ years" },
                  { label: "Location",   value: "Rawatbhata" },
                  { label: "Speciality", value: "Gold & Diamond" },
                  { label: "Legacy",     value: "Since 1957" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-gold/20 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold/70">{item.label}</p>
                    <p className="mt-1 text-sm sm:text-base font-serif text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="bg-[#faf6f0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Section className="text-center mb-10">
            <span className="gold-line mx-auto mb-4 block" />
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-3">Find Us</p>
            <h2 className="text-3xl sm:text-5xl font-serif text-black">Visit Our Store</h2>
            <p className="mt-3 text-gray-600 text-sm sm:text-base">Shop No. 2, Near Axis Bank, Anu Kiran Colony, Rawatbhata, Rajasthan</p>
          </Section>
          <Section className="overflow-hidden rounded-3xl shadow-premium">
            <iframe
              title="Prashant Jewellers location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1!2d75.6071379!3d24.9392277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396587cfddbc1af3%3A0x664a4a2b98d63681!2sPrashant%20Jewellers!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" height="400" loading="lazy" className="border-0 w-full block"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Section>
        </div>
      </section>

    </div>
  );
}
