"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin, Clock, Phone, Navigation, MessageCircle, Car, Train, Bus,
  CheckCircle, Truck, Heart, Users, Shield, Star, ArrowRight, Wifi, CreditCard, Accessibility
} from "lucide-react";

const branches = [
  {
    name: "SehatKita Kemang",
    address: "Jl. Kemang Raya No. 88, Bangka, Mampang Prapatan",
    city: "Jakarta Selatan 12730",
    phone: "(021) 1234-5678",
    wa: "6281234567890",
    hours: "Buka 24 Jam",
    is24: true,
    mapUrl: "https://maps.google.com/?q=Jl.+Kemang+Raya+No.+88+Jakarta+Selatan",
    facilities: ["Konsultasi Apoteker 24 Jam", "Cek Kesehatan Gratis", "Antar Obat 24 Jam", "Parkir Luas Gratis", "Ruang Tunggu Nyaman", "WiFi Gratis"],
    directions: {
      car: "Dari Blok M, ambil Jl. Kemang Raya ke arah selatan, apotek berada di sebelah kanan setelah perempatan Kemang.",
      publicTransport: "TransJakarta: Halte CSW, lanjutkan dengan ojol sekitar 10 menit. MRT: Stasiun Blok M, lanjut angkot M12.",
      landmark: "Sebelah Bank BCA Kemang, di depan Lippo Kemang Village"
    },
    highlights: ["Cabang Utama", "Buka 24 Jam", "Parkir Luas"]
  },
  {
    name: "SehatKita Sudirman",
    address: "Jl. Jenderal Sudirman No. 45, Karet Tengsin, Tanah Abang",
    city: "Jakarta Pusat 10220",
    phone: "(021) 2345-6789",
    wa: "6281234567891",
    hours: "07:00 - 22:00 WIB",
    is24: false,
    mapUrl: "https://maps.google.com/?q=Jl.+Sudirman+No.+45+Jakarta+Pusat",
    facilities: ["Konsultasi Apoteker", "Antar Obat", "Dekat MRT & Bus", "Layanan Express", "Pembayaran Cashless"],
    directions: {
      car: "Dari Bundaran HI, ambil Jl. Sudirman ke selatan, apotek berada di gedung perkantoran sebelah kiri.",
      publicTransport: "MRT: Stasiun Bendungan Hilir (5 menit jalan kaki). TransJakarta: Halte Karet.",
      landmark: "Di dalam Gedung Sudirman Plaza, Lantai Dasar"
    },
    highlights: ["Area Bisnis", "Dekat MRT", "Express Service"]
  },
  {
    name: "SehatKita Kelapa Gading",
    address: "Mall of Indonesia Lt. 1, Unit 108, Kelapa Gading Barat",
    city: "Jakarta Utara 14240",
    phone: "(021) 3456-7890",
    wa: "6281234567892",
    hours: "10:00 - 22:00 WIB",
    is24: false,
    mapUrl: "https://maps.google.com/?q=Mall+of+Indonesia+Jakarta",
    facilities: ["Konsultasi Apoteker", "Di Dalam Mall", "Parkir Mall", "Dekat Food Court", "Pembayaran Lengkap"],
    directions: {
      car: "Masuk MOI dari pintu utama, menuju lantai 1 area timur dekat entrance B.",
      publicTransport: "TransJakarta: Halte Kelapa Gading, lanjutkan dengan ojol ke MOI (5 menit).",
      landmark: "Lantai 1 dekat pintu timur, sebelah Starbucks"
    },
    highlights: ["Dalam Mall", "Weekend Friendly", "Keluarga"]
  },
];

const branchFeatures = [
  { icon: Users, title: "Apoteker Profesional", desc: "Semua cabang dilayani oleh apoteker tersertifikasi" },
  { icon: Truck, title: "Layanan Antar", desc: "Tersedia di semua cabang dengan radius 5-10km" },
  { icon: Heart, title: "Cek Kesehatan", desc: "Gratis setiap Sabtu di cabang Kemang" },
  { icon: CreditCard, title: "Pembayaran Lengkap", desc: "Tunai, kartu, e-wallet, dan transfer" },
];

export default function CabangPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Lokasi Cabang</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Kunjungi Cabang Terdekat</h1>
            <p className="text-gray-600 text-lg mb-8">3 lokasi strategis di Jakarta untuk melayani kebutuhan kesehatan Anda dan keluarga. Cabang Kemang buka 24 jam!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors">
                <MessageCircle size={20} />
                Pesan Antar Obat
              </Link>
              <Link href="#branches" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold transition-colors">
                <MapPin size={20} />
                Lihat Semua Cabang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "3", label: "Lokasi di Jakarta" },
              { value: "24 Jam", label: "Cabang Kemang" },
              { value: "5-10km", label: "Radius Antar" },
              { value: "Gratis", label: "Parkir" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center text-white">
                <p className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Features */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branchFeatures.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section id="branches" className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cabang Kami</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Pilih Cabang Terdekat</h2>
            <p className="text-gray-600">Klik untuk melihat detail lokasi dan petunjuk arah</p>
          </div>

          <div className="space-y-8">
            {branches.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-5">
                  {/* Info Section */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{b.name}</h2>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {b.highlights.map((h, j) => (
                            <span key={j} className={`text-xs font-semibold px-2 py-1 rounded-full ${b.is24 && j === 0 ? "bg-primary text-white" : "bg-gray-100 text-gray-600"}`}>{h}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-3">
                        <p className="flex items-start gap-3 text-gray-600">
                          <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                          <span>{b.address}, {b.city}</span>
                        </p>
                        <p className="flex items-center gap-3 text-gray-600">
                          <Clock size={18} className="text-gray-400" />
                          <span className={b.is24 ? "text-primary font-semibold" : ""}>{b.hours}</span>
                        </p>
                        <p className="flex items-center gap-3 text-gray-600">
                          <Phone size={18} className="text-gray-400" />
                          <span>{b.phone}</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-2">Fasilitas:</p>
                        <div className="flex flex-wrap gap-2">
                          {b.facilities.slice(0, 4).map((f, j) => (
                            <span key={j} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{f}</span>
                          ))}
                          {b.facilities.length > 4 && (
                            <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">+{b.facilities.length - 4} lainnya</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Directions */}
                    <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Petunjuk Arah:</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Car size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600">{b.directions.car}</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Train size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600">{b.directions.publicTransport}</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600"><strong>Landmark:</strong> {b.directions.landmark}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Link href={`https://wa.me/${b.wa}`} target="_blank" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl font-medium transition-colors">
                        <MessageCircle size={18} />WhatsApp
                      </Link>
                      <Link href={`tel:${b.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 rounded-xl font-medium transition-colors">
                        <Phone size={18} />Telepon
                      </Link>
                      <Link href={b.mapUrl} target="_blank" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 rounded-xl font-medium transition-colors">
                        <Navigation size={18} />Navigasi
                      </Link>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-gray-100 to-gray-200 min-h-[300px] flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium mb-4">Peta Lokasi</p>
                      <Link href={b.mapUrl} target="_blank" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow">
                        <Navigation size={18} />
                        Buka di Google Maps
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Ringkasan Cabang</h2>
            <p className="text-gray-600">Pilih cabang sesuai kebutuhan Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-primary/5 transition-colors">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${b.is24 ? "bg-primary" : "bg-gray-200"}`}>
                  <MapPin className={`w-8 h-8 ${b.is24 ? "text-white" : "text-gray-500"}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.name}</h3>
                <p className={`font-medium mb-2 ${b.is24 ? "text-primary" : "text-gray-600"}`}>{b.hours}</p>
                <p className="text-sm text-gray-500 mb-4">{b.city}</p>
                <Link href={`https://wa.me/${b.wa}`} target="_blank" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Hubungi <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Tidak Bisa ke Apotek?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">Kami bisa antar obat ke rumah Anda dalam 1-2 jam! Layanan tersedia dari semua cabang dengan radius hingga 10km.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                <Truck size={20} />
                Pesan Antar Obat
              </Link>
              <Link href="/produk" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Lihat Produk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
