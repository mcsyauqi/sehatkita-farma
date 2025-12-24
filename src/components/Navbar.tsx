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
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#059669] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>(021) 1234-5678</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Jl. Kemang Raya No. 88, Jakarta</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Buka 24 Jam</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#059669] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="font-bold text-[#059669] text-lg leading-tight">
                  SehatKita
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Farma</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#059669] transition-colors font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://wa.me/6281234567890"
                target="_blank"
                className="bg-[#059669] hover:bg-[#047857] text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#059669]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              <div className="container mx-auto px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-gray-700 hover:text-[#059669] font-medium border-b border-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  className="mt-4 block text-center bg-[#059669] hover:bg-[#047857] text-white px-5 py-3 rounded-full font-semibold transition-colors"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
