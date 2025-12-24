"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Pill, Package, Apple, Stethoscope, Baby, Sparkles, MessageCircle, Truck, Heart, Calendar, MapPin, Clock, Phone, ArrowRight, CheckCircle, Shield, Users, Tag } from "lucide-react";

const categories = [
  { icon: Pill, title: "Obat Resep", desc: "Tebus resep dokter dengan apoteker berpengalaman", color: "bg-emerald-500" },
  { icon: Package, title: "Obat Bebas", desc: "Obat-obatan umum tanpa resep", color: "bg-sky-500" },
  { icon: Apple, title: "Vitamin & Suplemen", desc: "Jaga imunitas dengan suplemen berkualitas", color: "bg-orange-500" },
  { icon: Stethoscope, title: "Alat Kesehatan", desc: "Tensimeter, termometer, nebulizer", color: "bg-purple-500" },
  { icon: Baby, title: "Ibu & Bayi", desc: "Susu formula, popok, perlengkapan bayi", color: "bg-pink-500" },
  { icon: Sparkles, title: "Perawatan Kulit", desc: "Skincare dan produk kecantikan", color: "bg-rose-500" },
];

const services = [
  { icon: MessageCircle, title: "Konsultasi Apoteker Gratis", desc: "Konsultasikan keluhan kesehatan Anda dengan apoteker profesional kami tanpa biaya." },
  { icon: Truck, title: "Antar Obat ke Rumah", desc: "Pesan via WhatsApp, obat diantar dalam 1-2 jam (radius 5km)." },
  { icon: Heart, title: "Cek Kesehatan Gratis", desc: "Cek tekanan darah, gula darah, kolesterol setiap hari Sabtu." },
  { icon: Calendar, title: "Program Obat Rutin", desc: "Langganan obat bulanan dengan harga spesial dan pengingat minum obat." },
];

const branches = [
  { name: "SehatKita Kemang", address: "Jl. Kemang Raya No. 88", hours: "Buka 24 Jam", phone: "(021) 1234-5678" },
  { name: "SehatKita Sudirman", address: "Jl. Sudirman No. 45", hours: "07:00 - 22:00", phone: "(021) 2345-6789" },
  { name: "SehatKita Kelapa Gading", address: "Mall of Indonesia Lt. 1", hours: "10:00 - 22:00", phone: "(021) 3456-7890" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                Apotek Terpercaya #1 di Jakarta
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Kesehatan Keluarga, <span className="text-primary">Prioritas Kami</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Apotek lengkap dengan apoteker profesional. Obat resep, vitamin, alat kesehatan dengan harga terjangkau dan layanan konsultasi gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/produk" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors">
                  <Pill size={20} />
                  Cari Obat
                </Link>
                <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold transition-colors">
                  <MessageCircle size={20} />
                  Konsultasi Apoteker
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Pill, label: "Obat Lengkap" },
                  { icon: Users, label: "Apoteker 24 Jam" },
                  { icon: MessageCircle, label: "Gratis Konsultasi" },
                  { icon: Truck, label: "Antar Obat" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-center">
                  <div>
                    <span className="text-xs block">BUKA</span>
                    <span className="text-xl font-bold block">24</span>
                    <span className="text-xs block">JAM</span>
                  </div>
                </div>
                <Shield className="w-14 h-14 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">Partner Kesehatan Keluarga Anda</h3>
                <p className="opacity-90 mb-6">Lebih dari 10 tahun melayani kebutuhan kesehatan masyarakat Jakarta.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold">50K+</p>
                    <span className="text-sm opacity-90">Pelanggan Puas</span>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold">3</p>
                    <span className="text-sm opacity-90">Cabang</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Kategori Produk</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Temukan Produk yang Anda Butuhkan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami menyediakan berbagai kategori produk kesehatan untuk kebutuhan Anda dan keluarga.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
                <div className={`w-14 h-14 ${cat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600 mb-4">{cat.desc}</p>
                <Link href="/produk" className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                  Lihat Produk <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Layanan Unggulan</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Terbaik untuk Anda</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami berkomitmen memberikan layanan kesehatan terbaik dengan apoteker profesional.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svc.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{svc.title}</h3>
                    <p className="text-gray-600">{svc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Promo Spesial</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Penawaran Menarik untuk Anda</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative bg-gradient-to-br from-accent to-orange-600 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Tag className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-2">PROMO VITAMIN</h3>
              <p className="opacity-90 mb-4">Diskon 20% untuk semua produk vitamin dan suplemen!</p>
              <span className="inline-block bg-white/20 rounded-lg px-4 py-2 font-mono font-bold">SEHAT20</span>
            </div>
            <div className="relative bg-gradient-to-br from-secondary to-sky-600 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Truck className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-2">GRATIS ONGKIR</h3>
              <p className="opacity-90 mb-4">Untuk pembelian di atas Rp 100.000 dalam radius 5km</p>
              <span className="inline-block bg-white/20 rounded-lg px-4 py-2 font-mono font-bold">Min. Rp 100.000</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/promo" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Lihat Semua Promo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cabang */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Lokasi Cabang</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kunjungi Cabang Terdekat</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Temukan apotek SehatKita Farma terdekat dari lokasi Anda.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{branch.name}</h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <p className="flex items-center gap-3"><MapPin size={16} className="text-gray-400 flex-shrink-0" />{branch.address}</p>
                  <p className="flex items-center gap-3"><Clock size={16} className="text-gray-400 flex-shrink-0" />{branch.hours}</p>
                  <p className="flex items-center gap-3"><Phone size={16} className="text-gray-400 flex-shrink-0" />{branch.phone}</p>
                </div>
                <Link href="/cabang" className="inline-flex items-center gap-1 text-primary font-semibold mt-4 hover:gap-2 transition-all">
                  Lihat di Peta <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Butuh Obat atau Konsultasi?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">Tim apoteker profesional kami siap membantu Anda 24 jam. Hubungi kami sekarang!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              <MessageCircle size={20} />
              Hubungi via WhatsApp
            </Link>
            <Link href="tel:02112345678" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
              <Phone size={20} />
              (021) 1234-5678
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 bg-white border-t">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Apotek Resmi BPOM", "Apoteker Tersertifikasi", "Terdaftar IAI", "Pelayanan 24 Jam"].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-600">
                <CheckCircle size={20} className="text-primary" />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
