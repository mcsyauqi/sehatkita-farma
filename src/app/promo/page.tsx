"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tag,
  Truck,
  Percent,
  Gift,
  Calendar,
  Clock,
  Copy,
  CheckCircle,
  MessageCircle,
  Apple,
  Baby,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const promos = [
  {
    id: 1,
    title: "PROMO VITAMIN",
    description: "Diskon 20% untuk semua produk vitamin dan suplemen!",
    code: "SEHAT20",
    discount: "20%",
    validUntil: "31 Januari 2025",
    terms: [
      "Berlaku untuk semua produk vitamin dan suplemen",
      "Tidak dapat digabung dengan promo lain",
      "Berlaku untuk pembelian di apotek dan online",
    ],
    icon: Apple,
    gradient: "from-[#F97316] to-[#EA580C]",
    featured: true,
  },
  {
    id: 2,
    title: "GRATIS ONGKIR",
    description: "Gratis ongkos kirim untuk pembelian di atas Rp 100.000",
    code: "FREEONGKIR",
    discount: "Gratis Ongkir",
    validUntil: "31 Januari 2025",
    terms: [
      "Minimal pembelian Rp 100.000",
      "Berlaku untuk radius 5km dari cabang",
      "Hanya berlaku untuk pengantaran reguler",
    ],
    icon: Truck,
    gradient: "from-[#0EA5E9] to-[#0284C7]",
    featured: true,
  },
  {
    id: 3,
    title: "DISKON IBU & BAYI",
    description: "Diskon 15% untuk semua produk ibu dan bayi!",
    code: "BAYIKU15",
    discount: "15%",
    validUntil: "15 Januari 2025",
    terms: [
      "Berlaku untuk produk kategori Ibu & Bayi",
      "Termasuk susu formula, popok, dan perlengkapan bayi",
      "Maksimal diskon Rp 100.000",
    ],
    icon: Baby,
    gradient: "from-[#EC4899] to-[#DB2777]",
    featured: false,
  },
  {
    id: 4,
    title: "SKINCARE DEALS",
    description: "Beli 2 produk skincare, gratis 1 masker wajah!",
    code: "GLOWING",
    discount: "Gratis 1",
    validUntil: "20 Januari 2025",
    terms: [
      "Berlaku untuk pembelian 2 produk skincare",
      "Masker gratis senilai maksimal Rp 50.000",
      "Selama persediaan masih ada",
    ],
    icon: Sparkles,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    featured: false,
  },
  {
    id: 5,
    title: "MEMBER DISCOUNT",
    description: "Diskon 10% untuk member setia SehatKita!",
    code: "MEMBER10",
    discount: "10%",
    validUntil: "Berlaku Setiap Hari",
    terms: [
      "Khusus member SehatKita Farma",
      "Berlaku untuk semua produk",
      "Tidak berlaku untuk produk promo lain",
    ],
    icon: Gift,
    gradient: "from-[#059669] to-[#047857]",
    featured: false,
  },
  {
    id: 6,
    title: "WEEKEND SPECIAL",
    description: "Diskon tambahan 5% setiap Sabtu & Minggu!",
    code: "WEEKEND5",
    discount: "5%",
    validUntil: "Setiap Weekend",
    terms: [
      "Berlaku setiap Sabtu dan Minggu",
      "Dapat digabung dengan promo member",
      "Berlaku untuk semua cabang",
    ],
    icon: Calendar,
    gradient: "from-[#14B8A6] to-[#0D9488]",
    featured: false,
  },
];

export default function PromoPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
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
            <span className="inline-block bg-[#F97316]/10 text-[#F97316] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Promo & Penawaran
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Promo Spesial untuk Anda
            </h1>
            <p className="text-gray-600">
              Jangan lewatkan penawaran menarik dari SehatKita Farma. Hemat
              lebih banyak untuk kesehatan keluarga!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Promos */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Promo Unggulan
            </h2>
            <p className="text-gray-600">
              Penawaran terbaik yang sayang untuk dilewatkan!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {promos
              .filter((p) => p.featured)
              .map((promo, index) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br ${promo.gradient} rounded-2xl p-8 text-white overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                  <promo.icon className="w-12 h-12 mb-4" />
                  <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-3">
                    {promo.discount} OFF
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-white/90 mb-6">{promo.description}</p>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-lg px-4 py-2 font-mono font-bold text-lg">
                      {promo.code}
                    </div>
                    <button
                      onClick={() => copyCode(promo.code)}
                      className="bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 transition-colors flex items-center gap-2"
                    >
                      {copiedCode === promo.code ? (
                        <>
                          <CheckCircle size={18} />
                          Tersalin!
                        </>
                      ) : (
                        <>
                          <Copy size={18} />
                          Salin
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Clock size={16} />
                    <span>Berlaku hingga {promo.validUntil}</span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* All Promos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Semua Promo
            </h2>
            <p className="text-gray-600">
              Lihat semua penawaran yang tersedia saat ini.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos
              .filter((p) => !p.featured)
              .map((promo, index) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${promo.gradient} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <promo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="inline-block bg-[#059669]/10 text-[#059669] rounded-full px-3 py-1 text-sm font-medium mb-3">
                    {promo.discount}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {promo.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-gray-100 rounded-lg px-3 py-1.5 font-mono font-semibold text-gray-700">
                      {promo.code}
                    </div>
                    <button
                      onClick={() => copyCode(promo.code)}
                      className="text-[#059669] hover:text-[#047857] transition-colors"
                    >
                      {copiedCode === promo.code ? (
                        <CheckCircle size={20} />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    <Clock size={14} className="inline mr-1" />
                    {promo.validUntil}
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-500 font-medium mb-2">
                      Syarat & Ketentuan:
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {promo.terms.map((term, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-[#059669]">•</span>
                          {term}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Cara Menggunakan Kode Promo
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Salin Kode Promo",
                description:
                  "Klik tombol salin pada kode promo yang ingin Anda gunakan",
              },
              {
                step: "2",
                title: "Hubungi via WhatsApp",
                description:
                  "Kirim pesanan Anda beserta kode promo ke WhatsApp kami",
              },
              {
                step: "3",
                title: "Nikmati Diskon",
                description:
                  "Diskon akan langsung diterapkan pada pesanan Anda",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-[#059669] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-[#059669]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Siap Berbelanja Hemat?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Gunakan kode promo sekarang dan nikmati penghematan untuk
              kebutuhan kesehatan Anda!
            </p>
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-[#059669] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={20} />
              Pesan via WhatsApp
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
