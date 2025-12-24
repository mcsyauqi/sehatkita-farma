"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Pill,
  Package,
  Apple,
  Stethoscope,
  Baby,
  Sparkles,
  Search,
  Filter,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";

const categories = [
  { id: "all", name: "Semua Produk", icon: Package },
  { id: "obat-resep", name: "Obat Resep", icon: Pill },
  { id: "obat-bebas", name: "Obat Bebas", icon: Package },
  { id: "vitamin", name: "Vitamin & Suplemen", icon: Apple },
  { id: "alkes", name: "Alat Kesehatan", icon: Stethoscope },
  { id: "ibu-bayi", name: "Ibu & Bayi", icon: Baby },
  { id: "skincare", name: "Perawatan Kulit", icon: Sparkles },
];

const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "obat-bebas",
    price: 15000,
    description: "Obat pereda nyeri dan penurun demam",
    stock: true,
  },
  {
    id: 2,
    name: "Vitamin C 1000mg",
    category: "vitamin",
    price: 85000,
    description: "Suplemen vitamin C untuk daya tahan tubuh",
    stock: true,
  },
  {
    id: 3,
    name: "Tensimeter Digital",
    category: "alkes",
    price: 350000,
    description: "Alat ukur tekanan darah digital akurat",
    stock: true,
  },
  {
    id: 4,
    name: "Antangin JRG",
    category: "obat-bebas",
    price: 5000,
    description: "Obat masuk angin herbal",
    stock: true,
  },
  {
    id: 5,
    name: "Blackmores Multivitamin",
    category: "vitamin",
    price: 195000,
    description: "Multivitamin lengkap untuk kebutuhan harian",
    stock: true,
  },
  {
    id: 6,
    name: "Termometer Digital",
    category: "alkes",
    price: 75000,
    description: "Termometer digital cepat dan akurat",
    stock: true,
  },
  {
    id: 7,
    name: "Susu S-26 Procal Gold",
    category: "ibu-bayi",
    price: 285000,
    description: "Susu formula untuk anak 1-3 tahun",
    stock: true,
  },
  {
    id: 8,
    name: "Cetaphil Gentle Cleanser",
    category: "skincare",
    price: 165000,
    description: "Pembersih wajah untuk kulit sensitif",
    stock: true,
  },
  {
    id: 9,
    name: "Amoxicillin 500mg",
    category: "obat-resep",
    price: 45000,
    description: "Antibiotik (memerlukan resep dokter)",
    stock: true,
  },
  {
    id: 10,
    name: "Pampers Premium Care",
    category: "ibu-bayi",
    price: 145000,
    description: "Popok bayi premium anti ruam",
    stock: true,
  },
  {
    id: 11,
    name: "Bioderma Sensibio",
    category: "skincare",
    price: 225000,
    description: "Micellar water untuk kulit sensitif",
    stock: true,
  },
  {
    id: 12,
    name: "Nebulizer Omron",
    category: "alkes",
    price: 650000,
    description: "Alat uap untuk terapi pernapasan",
    stock: true,
  },
];

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0FDF4] via-white to-[#ECFDF5] py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-[#059669]/10 text-[#059669] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Katalog Produk
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Produk Kesehatan Lengkap
            </h1>
            <p className="text-gray-600">
              Temukan berbagai produk kesehatan berkualitas untuk kebutuhan Anda
              dan keluarga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search & Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Filter size={20} />
              <span className="text-sm font-medium">Filter:</span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-[#059669] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <category.icon size={16} />
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all group"
              >
                <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl mb-4 flex items-center justify-center">
                  <Package className="w-16 h-16 text-gray-300" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-[#059669] font-medium uppercase">
                    {categories.find((c) => c.id === product.category)?.name}
                  </span>
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-[#059669]">
                      {formatPrice(product.price)}
                    </span>
                    {product.stock && (
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        Tersedia
                      </span>
                    )}
                  </div>
                  <Link
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    className="mt-3 w-full flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white py-2.5 rounded-xl font-medium transition-colors"
                  >
                    <ShoppingCart size={16} />
                    Pesan Sekarang
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                Produk tidak ditemukan. Coba kata kunci lain.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Tidak Menemukan Produk yang Dicari?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Hubungi kami via WhatsApp untuk menanyakan ketersediaan produk
              atau konsultasi dengan apoteker kami.
            </p>
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-[#059669] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={20} />
              Hubungi via WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
