"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Pill, Package, Apple, Stethoscope, Baby, Sparkles, Search, ShoppingCart, MessageCircle,
  Filter, Star, BadgeCheck, Truck, Shield, ArrowRight, CheckCircle, Heart, Clock, Tag
} from "lucide-react";

const categories = [
  { id: "all", name: "Semua Produk", icon: Package, count: 24 },
  { id: "obat-resep", name: "Obat Resep", icon: Pill, count: 4 },
  { id: "obat-bebas", name: "Obat Bebas", icon: Package, count: 5 },
  { id: "vitamin", name: "Vitamin & Suplemen", icon: Apple, count: 5 },
  { id: "alkes", name: "Alat Kesehatan", icon: Stethoscope, count: 4 },
  { id: "ibu-bayi", name: "Ibu & Bayi", icon: Baby, count: 3 },
  { id: "skincare", name: "Skincare", icon: Sparkles, count: 3 },
];

const products = [
  // Obat Bebas
  { id: 1, name: "Paracetamol 500mg", category: "obat-bebas", price: 15000, originalPrice: 18000, desc: "Obat pereda nyeri dan penurun demam. Aman untuk dewasa dan anak di atas 6 tahun.", stock: true, bestseller: true },
  { id: 2, name: "Antangin JRG", category: "obat-bebas", price: 5000, desc: "Obat masuk angin herbal dengan jahe, royal jelly, dan ginseng.", stock: true, bestseller: true },
  { id: 3, name: "Tolak Angin Cair", category: "obat-bebas", price: 8000, desc: "Jamu herbal untuk mengatasi masuk angin, perut kembung, dan mual.", stock: true },
  { id: 4, name: "Bodrex Extra", category: "obat-bebas", price: 12000, desc: "Obat sakit kepala dan demam dengan formula cepat larut.", stock: true },
  { id: 5, name: "Promag Tablet", category: "obat-bebas", price: 8500, desc: "Antasida untuk meredakan sakit maag, kembung, dan mual.", stock: true },

  // Vitamin & Suplemen
  { id: 6, name: "Vitamin C 1000mg", category: "vitamin", price: 85000, originalPrice: 95000, desc: "Suplemen vitamin C dosis tinggi untuk menjaga daya tahan tubuh.", stock: true, bestseller: true },
  { id: 7, name: "Blackmores Multivitamin", category: "vitamin", price: 195000, desc: "Multivitamin lengkap harian dari Australia dengan 22 nutrisi penting.", stock: true },
  { id: 8, name: "Enervon-C Tablet", category: "vitamin", price: 45000, desc: "Vitamin C dan B kompleks untuk stamina dan daya tahan tubuh.", stock: true, bestseller: true },
  { id: 9, name: "Hemaviton Stamina Plus", category: "vitamin", price: 35000, desc: "Suplemen multivitamin dengan ginseng untuk stamina.", stock: true },
  { id: 10, name: "Neurobion Forte", category: "vitamin", price: 75000, desc: "Vitamin B1, B6, B12 untuk kesehatan saraf.", stock: true },

  // Alat Kesehatan
  { id: 11, name: "Tensimeter Digital Omron", category: "alkes", price: 350000, originalPrice: 420000, desc: "Alat ukur tekanan darah digital akurat dengan memory 60 hasil pengukuran.", stock: true },
  { id: 12, name: "Termometer Digital", category: "alkes", price: 75000, desc: "Termometer digital cepat akurat dengan hasil dalam 10 detik.", stock: true },
  { id: 13, name: "Nebulizer Omron NE-C28", category: "alkes", price: 650000, desc: "Alat uap terapi pernapasan untuk asma dan gangguan paru.", stock: true },
  { id: 14, name: "Oximeter Digital", category: "alkes", price: 185000, desc: "Alat ukur kadar oksigen dalam darah dan detak jantung.", stock: true },

  // Ibu & Bayi
  { id: 15, name: "Susu S-26 Procal Gold 900g", category: "ibu-bayi", price: 285000, desc: "Susu formula pertumbuhan untuk anak 1-3 tahun dengan DHA.", stock: true },
  { id: 16, name: "Pampers Premium Care M68", category: "ibu-bayi", price: 145000, originalPrice: 165000, desc: "Popok bayi premium anti ruam dengan 5 lapisan lembut.", stock: true },
  { id: 17, name: "Nutrilon Royal 3 800g", category: "ibu-bayi", price: 255000, desc: "Susu pertumbuhan dengan Actiduobio+ untuk pencernaan sehat.", stock: true },

  // Skincare
  { id: 18, name: "Cetaphil Gentle Cleanser 500ml", category: "skincare", price: 165000, desc: "Pembersih wajah lembut untuk kulit sensitif dan berminyak.", stock: true },
  { id: 19, name: "Bioderma Sensibio H2O 500ml", category: "skincare", price: 225000, desc: "Micellar water pembersih wajah untuk kulit sensitif.", stock: true },
  { id: 20, name: "Wardah Sunscreen SPF30 50ml", category: "skincare", price: 45000, desc: "Tabir surya halal dengan perlindungan UV lengkap.", stock: true },

  // Obat Resep
  { id: 21, name: "Amoxicillin 500mg (10 Tab)", category: "obat-resep", price: 45000, desc: "Antibiotik untuk infeksi bakteri. HARUS DENGAN RESEP DOKTER.", stock: true, prescription: true },
  { id: 22, name: "Amlodipine 10mg (30 Tab)", category: "obat-resep", price: 55000, desc: "Obat darah tinggi golongan CCB. HARUS DENGAN RESEP DOKTER.", stock: true, prescription: true },
  { id: 23, name: "Metformin 500mg (50 Tab)", category: "obat-resep", price: 35000, desc: "Obat diabetes tipe 2. HARUS DENGAN RESEP DOKTER.", stock: true, prescription: true },
  { id: 24, name: "Omeprazole 20mg (14 Kapsul)", category: "obat-resep", price: 48000, desc: "Obat maag dan GERD. HARUS DENGAN RESEP DOKTER.", stock: true, prescription: true },
];

const featuredBrands = [
  { name: "Blackmores", desc: "Vitamin Australia Premium" },
  { name: "Omron", desc: "Alat Kesehatan Jepang" },
  { name: "Bioderma", desc: "Skincare Prancis" },
  { name: "Nutrilon", desc: "Susu Pertumbuhan" },
];

const formatPrice = (price: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

export default function ProdukPage() {
  const [selected, setSelected] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = selected === "all" || p.category === selected;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const bestsellers = products.filter(p => p.bestseller);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Katalog Produk</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Produk Kesehatan Lengkap & Berkualitas</h1>
            <p className="text-gray-600 text-lg mb-8">Temukan berbagai produk kesehatan berkualitas untuk Anda dan keluarga. Semua produk terjamin asli dan terdaftar BPOM.</p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari obat, vitamin, alat kesehatan..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-primary/5 border-y border-primary/10">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
            {[
              { icon: BadgeCheck, label: "Produk Asli BPOM" },
              { icon: Truck, label: "Antar 1-2 Jam" },
              { icon: Shield, label: "Garansi Resmi" },
              { icon: MessageCircle, label: "Konsultasi Gratis" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <item.icon size={18} className="text-primary" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Produk Terlaris</h2>
              <p className="text-gray-600">Produk yang paling banyak dibeli pelanggan kami</p>
            </div>
            <Link href="#all-products" className="hidden md:inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all">
              Lihat Semua <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="w-full h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-4 flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="absolute top-2 left-2 bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full">Terlaris</span>
                  {product.originalPrice && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">SALE</span>
                  )}
                </div>
                <span className="text-xs text-primary font-medium uppercase">{categories.find((c) => c.id === product.category)?.name}</span>
                <h3 className="font-semibold text-gray-900 mt-1 mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.desc}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
                  {product.originalPrice && <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>}
                </div>
                <Link href="https://wa.me/6281234567890" target="_blank" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-xl font-medium transition-colors">
                  <ShoppingCart size={16} />
                  Pesan via WA
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section id="all-products" className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Filter size={18} />
                  Kategori
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelected(cat.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        selected === cat.id ? "bg-primary text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <cat.icon size={16} />
                        {cat.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${selected === cat.id ? "bg-white/20" : "bg-gray-200"}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">Menampilkan <span className="font-semibold text-gray-900">{filtered.length}</span> produk</p>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product, i) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <div className="w-full h-36 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-4 flex items-center justify-center">
                        <Package className="w-14 h-14 text-gray-300 group-hover:scale-110 transition-transform" />
                      </div>
                      {product.bestseller && (
                        <span className="absolute top-2 left-2 bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full">Terlaris</span>
                      )}
                      {product.prescription && (
                        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Resep</span>
                      )}
                      {product.originalPrice && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-primary font-medium uppercase">{categories.find((c) => c.id === product.category)?.name}</span>
                    <h3 className="font-semibold text-gray-900 mt-1 mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.desc}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
                        {product.originalPrice && <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>}
                      </div>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">Tersedia</span>
                    </div>
                    <Link href="https://wa.me/6281234567890" target="_blank" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-xl font-medium transition-colors">
                      <ShoppingCart size={16} />
                      {product.prescription ? "Tebus Resep" : "Pesan"}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl">
                  <Package className="w-20 h-20 text-gray-200 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Produk tidak ditemukan</h3>
                  <p className="text-gray-500 mb-4">Coba kata kunci lain atau pilih kategori berbeda</p>
                  <button onClick={() => { setSearch(""); setSelected("all"); }} className="text-primary font-semibold">
                    Reset Pencarian
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Brand Unggulan</h2>
            <p className="text-gray-600">Kami menyediakan produk dari brand-brand terpercaya dan berkualitas</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBrands.map((brand, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-primary/5 transition-colors">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl font-bold text-primary">{brand.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{brand.name}</h3>
                <p className="text-sm text-gray-500">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Cara Memesan</h2>
            <p className="text-gray-600">Pesan obat dengan mudah melalui WhatsApp</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Pilih Produk", desc: "Pilih produk yang Anda butuhkan dari katalog", icon: Package },
              { step: "2", title: "Hubungi WhatsApp", desc: "Klik tombol pesan dan kirim ke WhatsApp kami", icon: MessageCircle },
              { step: "3", title: "Konfirmasi", desc: "Tim kami akan konfirmasi ketersediaan dan harga", icon: CheckCircle },
              { step: "4", title: "Terima Obat", desc: "Obat diantar ke rumah Anda dalam 1-2 jam", icon: Truck },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white text-sm font-bold rounded-full flex items-center justify-center">{item.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prescription Info */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Informasi Penting</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Tebus Resep Dokter</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">Untuk obat-obatan resep, Anda perlu mengirimkan foto resep dokter yang jelas melalui WhatsApp. Apoteker kami akan memverifikasi resep dan memproses pesanan Anda.</p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Kirim foto resep yang jelas dan lengkap",
                    "Pastikan nama pasien dan dokter terlihat",
                    "Apoteker akan menghubungi untuk konfirmasi",
                    "Obat diantar setelah verifikasi selesai"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  <MessageCircle size={18} />
                  Tebus Resep via WhatsApp
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg max-w-sm">
                  <Pill className="w-16 h-16 text-primary/20 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Konsultasi Apoteker</h3>
                  <p className="text-gray-600 text-center text-sm">Konsultasikan obat Anda dengan apoteker profesional kami. Gratis!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Tidak Menemukan Produk?</h2>
            <p className="text-white/90 mb-8">Hubungi kami via WhatsApp untuk menanyakan ketersediaan produk. Kami akan membantu Anda menemukan produk yang dibutuhkan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                <MessageCircle size={20} />
                Tanya via WhatsApp
              </Link>
              <Link href="/kontak" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
