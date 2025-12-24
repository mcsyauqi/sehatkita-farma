"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Pill, Package, Apple, Stethoscope, Baby, Sparkles, Search, ShoppingCart, MessageCircle } from "lucide-react";

const categories = [
  { id: "all", name: "Semua", icon: Package },
  { id: "obat-resep", name: "Obat Resep", icon: Pill },
  { id: "obat-bebas", name: "Obat Bebas", icon: Package },
  { id: "vitamin", name: "Vitamin", icon: Apple },
  { id: "alkes", name: "Alat Kesehatan", icon: Stethoscope },
  { id: "ibu-bayi", name: "Ibu & Bayi", icon: Baby },
  { id: "skincare", name: "Skincare", icon: Sparkles },
];

const products = [
  { id: 1, name: "Paracetamol 500mg", category: "obat-bebas", price: 15000, desc: "Obat pereda nyeri dan penurun demam" },
  { id: 2, name: "Vitamin C 1000mg", category: "vitamin", price: 85000, desc: "Suplemen untuk daya tahan tubuh" },
  { id: 3, name: "Tensimeter Digital", category: "alkes", price: 350000, desc: "Alat ukur tekanan darah digital" },
  { id: 4, name: "Antangin JRG", category: "obat-bebas", price: 5000, desc: "Obat masuk angin herbal" },
  { id: 5, name: "Blackmores Multivitamin", category: "vitamin", price: 195000, desc: "Multivitamin lengkap harian" },
  { id: 6, name: "Termometer Digital", category: "alkes", price: 75000, desc: "Termometer digital cepat akurat" },
  { id: 7, name: "Susu S-26 Procal Gold", category: "ibu-bayi", price: 285000, desc: "Susu formula anak 1-3 tahun" },
  { id: 8, name: "Cetaphil Gentle Cleanser", category: "skincare", price: 165000, desc: "Pembersih wajah kulit sensitif" },
  { id: 9, name: "Amoxicillin 500mg", category: "obat-resep", price: 45000, desc: "Antibiotik (perlu resep dokter)" },
  { id: 10, name: "Pampers Premium Care", category: "ibu-bayi", price: 145000, desc: "Popok bayi premium anti ruam" },
  { id: 11, name: "Bioderma Sensibio", category: "skincare", price: 225000, desc: "Micellar water kulit sensitif" },
  { id: 12, name: "Nebulizer Omron", category: "alkes", price: 650000, desc: "Alat uap terapi pernapasan" },
];

const formatPrice = (price: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price);

export default function ProdukPage() {
  const [selected, setSelected] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = selected === "all" || p.category === selected;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-16">
        <div className="container text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Katalog Produk</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Produk Kesehatan Lengkap</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Temukan berbagai produk kesehatan berkualitas untuk Anda dan keluarga.</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          {/* Search */}
          <div className="relative max-w-md mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${selected === cat.id ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-shadow">
                <div className="w-full h-36 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                  <Package className="w-12 h-12 text-gray-300" />
                </div>
                <span className="text-xs text-primary font-medium uppercase">{categories.find((c) => c.id === product.category)?.name}</span>
                <h3 className="font-semibold text-gray-900 mt-1 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.desc}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Tersedia</span>
                </div>
                <Link href="https://wa.me/6281234567890" target="_blank" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-xl font-medium transition-colors">
                  <ShoppingCart size={16} />
                  Pesan
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Produk tidak ditemukan.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Tidak Menemukan Produk?</h2>
            <p className="opacity-90 mb-6 max-w-2xl mx-auto">Hubungi kami via WhatsApp untuk menanyakan ketersediaan produk.</p>
            <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              <MessageCircle size={20} />
              Hubungi WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
