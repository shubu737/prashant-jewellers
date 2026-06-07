"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = {
  "Explore": [
    { label: "Home",              href: "/" },
    { label: "Shop Collection",   href: "/shop" },
    { label: "About Us",          href: "/about" },
    { label: "Contact",           href: "/contact" },
  ],
  "Policies": [
    { label: "Privacy Policy",            href: "/privacy-policy" },
    { label: "Shipping Policy",           href: "/shipping-policy" },
    { label: "Refund & Exchange",         href: "/refund-policy" },
    { label: "Payment Terms",             href: "/payment-terms" },
  ],
  "Support": [
    { label: "FAQ",               href: "/faq" },
    { label: "Terms & Conditions",href: "/terms" },
    { label: "Bridal Collections",href: "/shop" },
    { label: "Custom Crafting",   href: "/contact" },
  ],
};

const contactItems = [
  { icon: "📍", text: "Shop No. 2, Near Axis Bank, Anu Kiran Colony, Rawatbhata, Rajasthan" },
  { icon: "📞", text: "+91 75974 41777", href: "tel:+917597441777" },
  { icon: "✉️", text: "info@prashantjewellers.com", href: "mailto:info@prashantjewellers.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">

      {/* top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-10 sm:gap-12 grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-5 sm:space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="rounded-full p-[2px] bg-gradient-to-br from-[#d4af37] to-[#c49650] shadow-md group-hover:shadow-[0_0_20px_rgba(196,150,80,0.4)] transition-shadow duration-300">
                <div className="rounded-full bg-[#0a0a0a] p-[2px]">
                  <Image
                    src="/logo.png.png"
                    alt="Prashant Jewellers"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">Prashant</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Jewellers</p>
              </div>
            </Link>

            <p className="text-sm leading-7 text-white/50 max-w-xs">
              Purity is our priority. Serving Rawatbhata with premium gold and diamond jewellery since 1957.
            </p>

            <div className="space-y-3">
              {contactItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-white/50 hover:text-gold transition-colors duration-300">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm text-white/50">{item.text}</p>
                  )}
                </div>
              ))}
            </div>

            {/* social / CTA */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#a07030] hover:shadow-[0_0_20px_rgba(196,150,80,0.4)] transition-all duration-300"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+917597441777"
                className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-white/70 hover:border-gold/50 hover:text-white transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gold mb-1">{title}</p>
                <div className="h-px w-8 bg-gradient-to-r from-gold to-transparent mt-2" />
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      <span className="h-px w-0 bg-gold group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Prashant Jewellers. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gold text-xs animate-gold-pulse">✦</span>
            <p className="text-xs text-white/30 uppercase tracking-widest">Purity is our Priority</p>
            <span className="text-gold text-xs animate-gold-pulse">✦</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
