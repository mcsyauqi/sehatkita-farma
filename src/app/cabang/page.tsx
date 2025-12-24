"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Phone, Navigation, MessageCircle, Car, Train } from "lucide-react";

const branches = [
  {
    name: "SehatKita Kemang",
    address: "Jl. Kemang Raya No. 88, Bangka, Mampang Prapatan",
    city: "Jakarta Selatan 12730",
    phone: "(021) 1234-5678",
    wa: "6281234567890",
    hours: "Buka 24 Jam",
    is24: true,
    facilities: ["Konsultasi Apoteker", "Cek Kesehatan", "Antar Obat", "Parkir Luas"],
    car: "Dari Blok M, ambil Jl. Kemang Raya ke arah selatan.",
    transport: "TransJakarta: Halte CSW, lanjut ojol.",
  },
  {
    name: "SehatKita Sudirman",
    address: "Jl. Jenderal Sudirman No. 45, Karet Tengsin",
    city: "Jakarta Pusat 10220",
    phone: "(021) 2345-6789",
    wa: "6281234567891",
    hours: "07:00 - 22:00 WIB",
    is24: false,
    facilities: ["Konsultasi Apoteker", "Antar Obat", "Dekat MRT"],
    car: "Dari Bundaran HI, ambil Jl. Sudirman ke selatan.",
    transport: "MRT: Stasiun Bendungan Hilir, jalan 5 menit.",
  },
  {
    name: "SehatKita Kelapa Gading",
    address: "Mall of Indonesia Lt. 1, Unit 108",
    city: "Jakarta Utara 14240",
    phone: "(021) 3456-7890",
    wa: "6281234567892",
    hours: "10:00 - 22:00 WIB",
    is24: false,
    facilities: ["Konsultasi Apoteker", "Di Dalam Mall", "Parkir Mall"],
    car: "Masuk MOI dari pintu utama, lantai 1 dekat pintu timur.",
    transport: "TransJakarta: Halte Kelapa Gading, lanjut ojol.",
  },
];

export default function CabangPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-16">
        <div className="container text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Lokasi Cabang</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kunjungi Cabang Terdekat</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">3 lokasi strategis di Jakarta untuk melayani kebutuhan kesehatan Anda.</p>
        </div>
      </section>

      {/* Branches */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container space-y-8">
          {branches.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{b.name}</h2>
                      {b.is24 && <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">24 JAM</span>}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <p className="flex items-start gap-3"><MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" /><span className="text-gray-700">{b.address}, {b.city}</span></p>
                    <p className="flex items-center gap-3"><Clock size={16} className="text-gray-400" /><span className="text-gray-700">{b.hours}</span></p>
                    <p className="flex items-center gap-3"><Phone size={16} className="text-gray-400" /><span className="text-gray-700">{b.phone}</span></p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-500 mb-2">Fasilitas:</p>
                    <div className="flex flex-wrap gap-2">
                      {b.facilities.map((f, j) => <span key={j} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{f}</span>)}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-3">Petunjuk Arah:</p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-start gap-2"><Car size={16} className="text-primary mt-0.5" /><span className="text-gray-600">{b.car}</span></p>
                      <p className="flex items-start gap-2"><Train size={16} className="text-primary mt-0.5" /><span className="text-gray-600">{b.transport}</span></p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href={`https://wa.me/${b.wa}`} target="_blank" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-medium transition-colors">
                      <MessageCircle size={18} />WhatsApp
                    </Link>
                    <Link href={`tel:${b.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium transition-colors">
                      <Phone size={18} />Telepon
                    </Link>
                    <Link href={`https://maps.google.com/?q=${encodeURIComponent(b.address + " " + b.city)}`} target="_blank" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium transition-colors">
                      <Navigation size={18} />Navigasi
                    </Link>
                  </div>
                </div>

                <div className="h-64 lg:h-auto bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Peta Lokasi</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "3 Lokasi", desc: "Jakarta Selatan, Pusat, dan Utara" },
              { icon: Clock, title: "24 Jam", desc: "Cabang Kemang buka non-stop" },
              { icon: Phone, title: "Mudah Dihubungi", desc: "WhatsApp dan telepon tersedia" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Tidak Bisa ke Apotek?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">Kami bisa antar obat ke rumah Anda dalam 1-2 jam!</p>
          <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            <MessageCircle size={20} />
            Pesan Antar Obat
          </Link>
        </div>
      </section>
    </>
  );
}
