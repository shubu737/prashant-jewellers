"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Rates from "./rates";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Rates />
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full p-[2px] bg-gradient-to-br from-[#d4af37] to-[#c49650] shadow-md">
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
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Prashant</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">Jewellers</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+917597441777"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 transition"
          >
            Call
          </a>
          <a
            href="mailto:info@prashantjewellers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 transition"
          >
            Email
          </a>
          <a
            href="https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
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
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-600 hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
            <a
              href="tel:+917597441777"
              className="flex-1 text-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 transition"
            >
              Call
            </a>
            <a
              href="https://wa.me/917597441777?text=Hi,+I+am+interested+in+your+jewellery+collection"
              className="flex-1 text-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
