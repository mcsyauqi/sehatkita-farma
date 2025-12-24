"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Pill,
  Package,
  Apple,
  Stethoscope,
  Baby,
  Sparkles,
  MessageCircle,
  Truck,
  Heart,
  Calendar,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle,
  Shield,
  Users,
  Tag,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categories = [
  {
    icon: Pill,
    title: "Obat Resep",
    description: "Tebus resep dokter dengan apoteker berpengalaman",
    color: "bg-emerald-500",
  },
  {
    icon: Package,
    title: "Obat Bebas",
    description: "Obat-obatan umum tanpa resep",
    color: "bg-sky-500",
  },
  {
    icon: Apple,
    title: "Vitamin & Suplemen",
    description: "Jaga imunitas dengan suplemen berkualitas",
    color: "bg-orange-500",
  },
  {
    icon: Stethoscope,
    title: "Alat Kesehatan",
    description: "Tensimeter, termometer, nebulizer, dll",
    color: "bg-purple-500",
  },
  {
    icon: Baby,
    title: "Ibu & Bayi",
    description: "Susu formula, popok, perlengkapan bayi",
    color: "bg-pink-500",
  },
  {
    icon: Sparkles,
    title: "Perawatan Kulit",
    description: "Skincare dan produk kecantikan",
    color: "bg-rose-500",
  },
];

const services = [
  {
    icon: MessageCircle,
    title: "Konsultasi Apoteker Gratis",
    description:
      "Konsultasikan keluhan kesehatan Anda dengan apoteker profesional kami tanpa biaya.",
  },
  {
    icon: Truck,
    title: "Antar Obat ke Rumah",
    description:
      "Pesan via WhatsApp, obat diantar dalam 1-2 jam (radius 5km).",
  },
  {
    icon: Heart,
    title: "Cek Kesehatan Gratis",
    description:
      "Cek tekanan darah, gula darah, kolesterol setiap hari Sabtu.",
  },
  {
    icon: Calendar,
    title: "Program Obat Rutin",
    description:
      "Langganan obat bulanan dengan harga spesial dan pengingat minum obat.",
  },
];

const branches = [
  {
    name: "SehatKita Kemang",
    address: "Jl. Kemang Raya No. 88",
    hours: "Buka 24 Jam",
    phone: "(021) 1234-5678",
  },
  {
    name: "SehatKita Sudirman",
    address: "Jl. Sudirman No. 45",
    hours: "07:00 - 22:00",
    phone: "(021) 2345-6789",
  },
  {
    name: "SehatKita Kelapa Gading",
    address: "Mall of Indonesia Lt. 1",
    hours: "10:00 - 22:00",
    phone: "(021) 3456-7890",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F0FDF4] via-white to-[#ECFDF5] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#059669]/10 text-[#059669] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Apotek Terpercaya #1 di Jakarta
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Kesehatan Keluarga,{" "}
                <span className="text-[#059669]">Prioritas Kami</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Apotek lengkap dengan apoteker profesional. Obat resep, vitamin,
                alat kesehatan dengan harga terjangkau dan layanan konsultasi
                gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/produk"
                  className="inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-full font-semibold transition-colors"
                >
                  <Pill size={20} />
                  Cari Obat
                </Link>
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#059669] border-2 border-[#059669] px-8 py-4 rounded-full font-semibold transition-colors"
                >
                  <MessageCircle size={20} />
                  Konsultasi Apoteker
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {[
                  { icon: Pill, label: "Obat Lengkap" },
                  { icon: Users, label: "Apoteker 24 Jam" },
                  { icon: MessageCircle, label: "Gratis Konsultasi" },
                  { icon: Truck, label: "Antar Obat" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-8 h-8 bg-[#059669]/10 rounded-full flex items-center justify-center">
                      <feature.icon size={16} className="text-[#059669]" />
                    </div>
                    <span className="text-sm font-medium">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#059669] to-[#047857] rounded-3xl p-8 text-white">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F97316] rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xs">BUKA</span>
                    <p className="text-xl font-bold">24</p>
                    <span className="text-xs">JAM</span>
                  </div>
                </div>
                <Shield className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">
                  Partner Kesehatan Keluarga Anda
                </h3>
                <p className="opacity-90 mb-6">
                  Lebih dari 10 tahun melayani kebutuhan kesehatan masyarakat
                  Jakarta dengan profesional dan sepenuh hati.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <p className="text-3xl font-bold">50K+</p>
                    <span className="text-sm opacity-90">Pelanggan Puas</span>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <p className="text-3xl font-bold">3</p>
                    <span className="text-sm opacity-90">Cabang Tersedia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-[#059669]/10 text-[#059669] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Kategori Produk
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Temukan Produk yang Anda Butuhkan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai kategori produk kesehatan untuk memenuhi
              kebutuhan Anda dan keluarga.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
                <Link
                  href="/produk"
                  className="inline-flex items-center gap-1 text-[#059669] font-semibold mt-4 group-hover:gap-2 transition-all"
                >
                  Lihat Produk <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-[#059669]/10 text-[#059669] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Layanan Unggulan
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Terbaik untuk Anda
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan kesehatan terbaik dengan
              apoteker profesional dan berpengalaman.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-[#F97316]/10 text-[#F97316] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Promo Spesial
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Penawaran Menarik untuk Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-2xl p-8 text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Tag className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">PROMO VITAMIN</h3>
              <p className="text-white/90 mb-4">
                Diskon 20% untuk semua produk vitamin dan suplemen!
              </p>
              <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
                <span className="font-mono font-bold">SEHAT20</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-2xl p-8 text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Truck className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">GRATIS ONGKIR</h3>
              <p className="text-white/90 mb-4">
                Untuk pembelian di atas Rp 100.000 dalam radius 5km
              </p>
              <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
                <span className="font-mono font-bold">Min. Rp 100.000</span>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/promo"
              className="inline-flex items-center gap-2 text-[#059669] font-semibold hover:gap-3 transition-all"
            >
              Lihat Semua Promo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-[#059669]/10 text-[#059669] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Lokasi Cabang
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kunjungi Cabang Terdekat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan apotek SehatKita Farma terdekat dari lokasi Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#059669]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {branch.name}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    {branch.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />
                    {branch.hours}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-400" />
                    {branch.phone}
                  </p>
                </div>
                <Link
                  href="/cabang"
                  className="inline-flex items-center gap-1 text-[#059669] font-semibold mt-4 hover:gap-2 transition-all"
                >
                  Lihat di Peta <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#059669]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Butuh Obat atau Konsultasi?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Tim apoteker profesional kami siap membantu Anda 24 jam. Hubungi
              kami sekarang untuk konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/6281234567890"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#059669] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                <MessageCircle size={20} />
                Hubungi via WhatsApp
              </Link>
              <Link
                href="tel:02112345678"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone size={20} />
                (021) 1234-5678
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {[
              "Apotek Resmi BPOM",
              "Apoteker Tersertifikasi",
              "Terdaftar IAI",
              "Pelayanan 24 Jam",
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-600"
              >
                <CheckCircle size={20} className="text-[#059669]" />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
