"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Pill, Package, Apple, Stethoscope, Baby, Sparkles, MessageCircle, Truck, Heart, Calendar,
  MapPin, Clock, Phone, ArrowRight, CheckCircle, Shield, Users, Tag, Star, Quote,
  Award, ThumbsUp, Zap, Headphones, CreditCard, Lock, BadgeCheck, Percent
} from "lucide-react";

const categories = [
  { icon: Pill, title: "Obat Resep", desc: "Tebus resep dokter dengan apoteker berpengalaman. Konsultasi gratis untuk setiap pembelian.", color: "bg-emerald-500", link: "/produk?kategori=obat-resep" },
  { icon: Package, title: "Obat Bebas", desc: "Obat-obatan umum tanpa resep untuk keluhan sehari-hari. Tersedia berbagai merek terpercaya.", color: "bg-sky-500", link: "/produk?kategori=obat-bebas" },
  { icon: Apple, title: "Vitamin & Suplemen", desc: "Jaga imunitas dengan suplemen berkualitas. Dari vitamin C hingga multivitamin lengkap.", color: "bg-orange-500", link: "/produk?kategori=vitamin" },
  { icon: Stethoscope, title: "Alat Kesehatan", desc: "Tensimeter, termometer, nebulizer, dan alat kesehatan lainnya dengan garansi resmi.", color: "bg-purple-500", link: "/produk?kategori=alkes" },
  { icon: Baby, title: "Ibu & Bayi", desc: "Susu formula, popok, perlengkapan bayi dari merek terpercaya. Konsultasi gizi tersedia.", color: "bg-pink-500", link: "/produk?kategori=ibu-bayi" },
  { icon: Sparkles, title: "Perawatan Kulit", desc: "Skincare dan produk kecantikan dari brand lokal hingga internasional.", color: "bg-rose-500", link: "/produk?kategori=skincare" },
];

const services = [
  { icon: MessageCircle, title: "Konsultasi Apoteker Gratis", desc: "Konsultasikan keluhan kesehatan Anda dengan apoteker profesional kami tanpa biaya. Tersedia tatap muka dan via WhatsApp.", link: "/layanan" },
  { icon: Truck, title: "Antar Obat ke Rumah", desc: "Pesan via WhatsApp, obat diantar dalam 1-2 jam (radius 5km). Gratis ongkir untuk pembelian di atas Rp 100.000.", link: "/layanan" },
  { icon: Heart, title: "Cek Kesehatan Gratis", desc: "Cek tekanan darah, gula darah, kolesterol setiap hari Sabtu di semua cabang. Tanpa biaya apapun.", link: "/layanan" },
  { icon: Calendar, title: "Program Obat Rutin", desc: "Langganan obat bulanan dengan harga spesial dan pengingat minum obat. Cocok untuk pasien dengan penyakit kronis.", link: "/layanan" },
];

const branches = [
  { name: "SehatKita Kemang", address: "Jl. Kemang Raya No. 88", hours: "Buka 24 Jam", phone: "(021) 1234-5678", is24: true },
  { name: "SehatKita Sudirman", address: "Jl. Sudirman No. 45", hours: "07:00 - 22:00", phone: "(021) 2345-6789", is24: false },
  { name: "SehatKita Kelapa Gading", address: "Mall of Indonesia Lt. 1", hours: "10:00 - 22:00", phone: "(021) 3456-7890", is24: false },
];

const testimonials = [
  { name: "Ibu Ratna", role: "Pelanggan Setia", text: "Saya sudah jadi pelanggan SehatKita sejak 2018. Pelayanannya ramah dan apotekernya sangat membantu menjelaskan cara minum obat dengan benar.", rating: 5 },
  { name: "Bapak Hendra", role: "Pelanggan", text: "Layanan antar obat sangat membantu. Bisa pesan via WhatsApp dan obat sampai dalam 1 jam. Sangat praktis!", rating: 5 },
  { name: "Ibu Siti", role: "Pelanggan", text: "Harga obat di sini sangat bersaing dan sering ada promo. Apotekernya juga sabar menjawab semua pertanyaan saya.", rating: 5 },
  { name: "Bapak Rizky", role: "Pelanggan", text: "Cek kesehatan gratis setiap Sabtu sangat membantu saya memantau tekanan darah. Terima kasih SehatKita!", rating: 5 },
];

const whyChooseUs = [
  { icon: BadgeCheck, title: "Produk Asli & Terdaftar BPOM", desc: "Semua produk dijamin keasliannya dan terdaftar resmi di BPOM." },
  { icon: Users, title: "Apoteker Profesional", desc: "Tim apoteker tersertifikasi siap memberikan konsultasi gratis." },
  { icon: Zap, title: "Layanan Cepat", desc: "Pengantaran obat dalam 1-2 jam untuk area Jakarta." },
  { icon: Headphones, title: "Layanan 24 Jam", desc: "Cabang Kemang buka 24 jam untuk kebutuhan darurat." },
  { icon: CreditCard, title: "Pembayaran Fleksibel", desc: "Terima tunai, kartu debit/kredit, dan transfer bank." },
  { icon: Lock, title: "Privasi Terjaga", desc: "Data dan riwayat kesehatan Anda kami jaga kerahasiaannya." },
];

const brands = [
  "Panadol", "Sanmol", "Blackmores", "Enervon-C", "Tolak Angin", "Antangin",
  "Bioderma", "Cetaphil", "Omron", "Beurer", "Nutrilon", "SGM"
];

const stats = [
  { value: "50.000+", label: "Pelanggan Puas" },
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "3", label: "Cabang di Jakarta" },
  { value: "24/7", label: "Layanan Tersedia" },
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
                🏆 Apotek Terpercaya #1 di Jakarta
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Kesehatan Keluarga, <span className="text-primary">Prioritas Kami</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Apotek lengkap dengan apoteker profesional siap melayani 24 jam. Obat resep, vitamin, alat kesehatan dengan harga terjangkau dan layanan konsultasi gratis untuk setiap pelanggan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/produk" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg shadow-primary/30">
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
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white shadow-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-center shadow-lg">
                  <div>
                    <span className="text-xs block font-medium">BUKA</span>
                    <span className="text-2xl font-bold block">24</span>
                    <span className="text-xs block font-medium">JAM</span>
                  </div>
                </div>
                <Shield className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">Partner Kesehatan Keluarga Anda</h3>
                <p className="opacity-90 mb-6 leading-relaxed">Lebih dari 10 tahun melayani kebutuhan kesehatan masyarakat Jakarta dengan produk berkualitas dan apoteker profesional.</p>
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <span className="text-sm opacity-90">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center text-white">
                <p className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Kategori Produk</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Temukan Produk yang Anda Butuhkan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami menyediakan berbagai kategori produk kesehatan lengkap untuk kebutuhan Anda dan keluarga tercinta.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={cat.link} className="block bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className={`w-14 h-14 ${cat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <cat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                    Lihat Produk <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/produk" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors">
              Lihat Semua Produk <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Mengapa SehatKita?</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Alasan Memilih Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami berkomitmen memberikan pelayanan terbaik untuk kesehatan Anda dan keluarga.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
            <p className="text-gray-600 max-w-2xl mx-auto">Kami berkomitmen memberikan layanan kesehatan terbaik dengan apoteker profesional dan berpengalaman.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={svc.link} className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svc.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{svc.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">{svc.desc}</p>
                      <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                        Pelajari Lebih Lanjut <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/layanan" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg">
              Lihat Semua Layanan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">🎉 Promo Spesial</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Penawaran Menarik untuk Anda</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Jangan lewatkan promo-promo menarik dari SehatKita Farma. Hemat lebih banyak untuk kesehatan keluarga!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-accent to-orange-600 rounded-2xl p-8 text-white overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Percent className="w-10 h-10 mb-4" />
              <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-3">20% OFF</span>
              <h3 className="text-2xl font-bold mb-2">PROMO VITAMIN</h3>
              <p className="opacity-90 mb-4">Diskon 20% untuk semua produk vitamin dan suplemen!</p>
              <span className="inline-block bg-white/20 rounded-lg px-4 py-2 font-mono font-bold">SEHAT20</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative bg-gradient-to-br from-secondary to-sky-600 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Truck className="w-10 h-10 mb-4" />
              <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-3">GRATIS</span>
              <h3 className="text-2xl font-bold mb-2">GRATIS ONGKIR</h3>
              <p className="opacity-90 mb-4">Untuk pembelian di atas Rp 100.000 dalam radius 5km</p>
              <span className="inline-block bg-white/20 rounded-lg px-4 py-2 font-mono font-bold">FREEONGKIR</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Baby className="w-10 h-10 mb-4" />
              <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-3">15% OFF</span>
              <h3 className="text-2xl font-bold mb-2">IBU & BAYI</h3>
              <p className="opacity-90 mb-4">Diskon 15% untuk semua produk ibu dan bayi!</p>
              <span className="inline-block bg-white/20 rounded-lg px-4 py-2 font-mono font-bold">BAYIKU15</span>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <Link href="/promo" className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
              Lihat Semua Promo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Testimoni</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Apa Kata Pelanggan Kami?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ribuan pelanggan telah mempercayakan kebutuhan kesehatan mereka kepada SehatKita Farma.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-gray-600 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-white border-y">
        <div className="container">
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium">Menyediakan Produk dari Brand Terpercaya</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-gray-400 font-bold text-lg hover:text-primary transition-colors">
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabang */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Lokasi Cabang</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kunjungi Cabang Terdekat</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Temukan apotek SehatKita Farma terdekat dari lokasi Anda. 3 cabang strategis di Jakarta siap melayani.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  {branch.is24 && (
                    <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">24 JAM</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{branch.name}</h3>
                <div className="space-y-3 text-gray-600 text-sm mb-4">
                  <p className="flex items-center gap-3"><MapPin size={16} className="text-gray-400 flex-shrink-0" />{branch.address}</p>
                  <p className="flex items-center gap-3"><Clock size={16} className="text-gray-400 flex-shrink-0" />{branch.hours}</p>
                  <p className="flex items-center gap-3"><Phone size={16} className="text-gray-400 flex-shrink-0" />{branch.phone}</p>
                </div>
                <Link href="/cabang" className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all">
                  Lihat Detail <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/cabang" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg">
              Lihat Semua Cabang <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Butuh Obat atau Konsultasi?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">Tim apoteker profesional kami siap membantu Anda 24 jam. Hubungi kami sekarang untuk konsultasi gratis!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                <MessageCircle size={20} />
                Hubungi via WhatsApp
              </Link>
              <Link href="tel:02112345678" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                <Phone size={20} />
                (021) 1234-5678
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 bg-white border-t">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {[
              { icon: Award, label: "Apotek Resmi BPOM" },
              { icon: BadgeCheck, label: "Apoteker Tersertifikasi" },
              { icon: Shield, label: "Terdaftar IAI" },
              { icon: Clock, label: "Pelayanan 24 Jam" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-600">
                <badge.icon size={24} className="text-primary" />
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
