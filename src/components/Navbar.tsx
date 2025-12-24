"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/layanan", label: "Layanan" },
  { href: "/promo", label: "Promo" },
  { href: "/cabang", label: "Cabang" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-white text-sm">
        <div className="container py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              (021) 1234-5678
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              Jl. Kemang Raya No. 88, Jakarta
            </span>
          </div>
          <span className="flex items-center gap-2">
            <Clock size={14} />
            Buka 24 Jam
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container h-16 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-primary text-lg">SehatKita</span>
              <span className="block text-xs text-gray-500">Farma</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            className="hidden lg:inline-flex bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
          >
            Hubungi Kami
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-gray-600 hover:text-primary font-medium border-b border-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 text-center bg-primary text-white font-semibold py-3 rounded-full"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
