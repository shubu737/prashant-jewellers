"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Rates from "./rates";

const navLinks = [
  { label: "Home",    href: "/" },
  { label: "Shop",    href: "/shop" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // on home: transparent until scrolled; on other pages: always solid
  const solid = !isHome || scrolled;

  return (
    <>
      <Rates />
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          solid
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
            : "bg-transparent border-b border-white/10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="rounded-full p-[2px] bg-gradient-to-br from-[#d4af37] to-[#c49650] shadow-md group-hover:shadow-[0_0_16px_rgba(196,150,80,0.5)] transition-shadow duration-300">
              <div className="rounded-full bg-white p-[2px]">
                <Image
                  src="/logo.png.png"
                  alt="Prashant Jewellers"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <p className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${solid ? "text-gold" : "text-gold"}`}>
                Prashant
              </p>
              <p className={`text-xs uppercase tracking-widest transition-colors duration-300 ${solid ? "text-gray-500" : "text-white/60"}`}>
                Jewellers
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  solid ? "text-gray-600 hover:text-black" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full ${
                  pathname === link.href ? "w-full" : ""
                }`} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917597441777"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                solid
                  ? "border-gray-300 text-black hover:bg-gray-50"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Call
            </a>
            <a
              href="https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white hover:shadow-[0_0_20px_rgba(196,150,80,0.5)] hover:bg-[#a07030] transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors ${solid ? "text-black" : "text-white"}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
            >
              <div className="px-6 py-5 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between py-3 text-sm font-medium border-b border-gray-100 transition-colors ${
                      pathname === link.href ? "text-gold" : "text-gray-700 hover:text-black"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && <span className="text-gold text-xs">✦</span>}
                  </Link>
                ))}
                <div className="pt-4 flex items-center gap-3">
                  <a
                    href="tel:+917597441777"
                    className="flex-1 text-center rounded-full border border-gray-300 px-4 py-2.5 text-sm font-medium text-black hover:bg-gray-50 transition"
                  >
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection"
                    className="flex-1 text-center rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#a07030] transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
