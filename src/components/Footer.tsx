"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/layanan", label: "Layanan" },
  { href: "/promo", label: "Promo" },
  { href: "/cabang", label: "Cabang" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

const services = [
  "Konsultasi Apoteker Gratis",
  "Antar Obat ke Rumah",
  "Cek Kesehatan Gratis",
  "Program Obat Rutin",
  "Obat Resep Dokter",
  "Vitamin & Suplemen",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-white text-lg">SehatKita</span>
                <span className="block text-xs text-gray-400">Farma</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Partner Kesehatan Keluarga Anda. Apotek lengkap dengan apoteker profesional.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="https://wa.me/6281234567890" target="_blank" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors">
                <MessageCircle size={18} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Jl. Kemang Raya No. 88, Jakarta Selatan 12730</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@sehatkitafarma.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">Buka 24 Jam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2025 SehatKita Farma. Apotek Terdaftar No. SI-XXX/BPOM/2024</p>
          <p>
            Dibuat dengan ❤️ oleh{" "}
            <Link href="https://creativism.id" target="_blank" className="text-primary hover:underline">
              Creativism Digital Marketing Agency
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
