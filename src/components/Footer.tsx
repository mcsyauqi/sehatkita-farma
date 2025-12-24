"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#059669] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">
                  SehatKita
                </h3>
                <p className="text-xs text-gray-400 -mt-1">Farma</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Partner Kesehatan Keluarga Anda. Apotek lengkap dengan apoteker
              profesional, melayani dengan sepenuh hati.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-[#059669] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-[#059669] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://wa.me/6281234567890"
                target="_blank"
                className="w-9 h-9 bg-gray-800 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Beranda" },
                { href: "/produk", label: "Produk" },
                { href: "/layanan", label: "Layanan" },
                { href: "/promo", label: "Promo" },
                { href: "/cabang", label: "Cabang" },
                { href: "/tentang", label: "Tentang Kami" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#059669] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Konsultasi Apoteker Gratis</li>
              <li>Antar Obat ke Rumah</li>
              <li>Cek Kesehatan Gratis</li>
              <li>Program Obat Rutin</li>
              <li>Obat Resep Dokter</li>
              <li>Vitamin & Suplemen</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#059669] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Jl. Kemang Raya No. 88, Jakarta Selatan 12730
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#059669] flex-shrink-0" />
                <span className="text-gray-400 text-sm">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#059669] flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@sehatkitafarma.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#059669] flex-shrink-0" />
                <span className="text-gray-400 text-sm">Buka 24 Jam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 SehatKita Farma. Apotek Terdaftar No. SI-XXX/BPOM/2024</p>
            <p>
              Website ini dibuat dengan ❤️ oleh{" "}
              <Link
                href="https://creativism.id"
                target="_blank"
                className="text-[#059669] hover:underline"
              >
                Creativism Digital Marketing Agency
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
