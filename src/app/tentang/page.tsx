"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Heart,
  Users,
  Award,
  Target,
  Eye,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Pelayanan Sepenuh Hati",
    description:
      "Kami melayani setiap pelanggan dengan sepenuh hati dan penuh empati.",
  },
  {
    icon: Shield,
    title: "Kualitas Terjamin",
    description:
      "Semua produk kami terjamin keasliannya dan terdaftar di BPOM.",
  },
  {
    icon: Users,
    title: "Profesional",
    description:
      "Tim apoteker kami tersertifikasi dan berpengalaman di bidangnya.",
  },
  {
    icon: Award,
    title: "Harga Terjangkau",
    description: "Kami berkomitmen memberikan harga yang kompetitif dan adil.",
  },
];

const milestones = [
  { year: "2014", event: "SehatKita Farma didirikan di Kemang, Jakarta Selatan" },
  { year: "2016", event: "Membuka cabang kedua di Sudirman" },
  { year: "2018", event: "Meluncurkan layanan antar obat 24 jam" },
  { year: "2020", event: "Membuka cabang ketiga di Kelapa Gading" },
  { year: "2022", event: "Mencapai 50.000+ pelanggan setia" },
  { year: "2024", event: "Meluncurkan program konsultasi online" },
];

const team = [
  {
    name: "Dr. Apt. Sari Wijaya, S.Farm",
    role: "Kepala Apoteker",
    description: "15 tahun pengalaman di bidang farmasi klinik",
  },
  {
    name: "Apt. Budi Santoso, S.Farm",
    role: "Apoteker Senior",
    description: "Spesialisasi obat-obatan kardiovaskular",
  },
  {
    name: "Apt. Dewi Kusuma, S.Farm",
    role: "Apoteker",
    description: "Ahli dalam produk ibu dan anak",
  },
  {
    name: "Apt. Rizky Pratama, S.Farm",
    role: "Apoteker",
    description: "Fokus pada vitamin dan suplemen",
  },
];

export default function TentangPage() {
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
              Tentang Kami
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partner Kesehatan Keluarga Anda
            </h1>
            <p className="text-gray-600">
              Lebih dari 10 tahun melayani kebutuhan kesehatan masyarakat
              Jakarta dengan profesional dan sepenuh hati.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SehatKita Farma didirikan pada tahun 2014 dengan visi sederhana:
                  menjadi apotek yang benar-benar peduli pada kesehatan
                  masyarakat. Kami percaya bahwa setiap orang berhak mendapatkan
                  akses ke obat-obatan berkualitas dengan harga terjangkau.
                </p>
                <p>
                  Berawal dari satu gerai kecil di Kemang, kini SehatKita Farma
                  telah berkembang menjadi jaringan apotek terpercaya dengan 3
                  cabang di Jakarta. Lebih dari 50.000 pelanggan telah
                  mempercayakan kebutuhan kesehatan mereka kepada kami.
                </p>
                <p>
                  Yang membedakan kami adalah komitmen pada pelayanan. Setiap
                  apoteker kami tidak hanya memberikan obat, tetapi juga
                  edukasi dan konsultasi agar pelanggan memahami cara penggunaan
                  obat yang benar.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl p-6 text-white">
                <p className="text-4xl font-bold mb-2">10+</p>
                <p className="text-white/90">Tahun Pengalaman</p>
              </div>
              <div className="bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-2xl p-6 text-white">
                <p className="text-4xl font-bold mb-2">50K+</p>
                <p className="text-white/90">Pelanggan Puas</p>
              </div>
              <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-2xl p-6 text-white">
                <p className="text-4xl font-bold mb-2">3</p>
                <p className="text-white/90">Cabang Apotek</p>
              </div>
              <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl p-6 text-white">
                <p className="text-4xl font-bold mb-2">24</p>
                <p className="text-white/90">Jam Layanan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 bg-[#059669] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-600">
                Menjadi apotek pilihan utama masyarakat Indonesia yang
                memberikan pelayanan kesehatan terpercaya, berkualitas, dan
                terjangkau untuk semua lapisan masyarakat.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 bg-[#059669] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#059669] mt-0.5 flex-shrink-0" />
                  <span>
                    Menyediakan produk kesehatan berkualitas dengan harga
                    terjangkau
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#059669] mt-0.5 flex-shrink-0" />
                  <span>
                    Memberikan pelayanan dan konsultasi profesional oleh
                    apoteker tersertifikasi
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#059669] mt-0.5 flex-shrink-0" />
                  <span>
                    Memudahkan akses kesehatan melalui layanan 24 jam dan antar
                    obat
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi landasan kami dalam melayani pelanggan.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#059669]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#059669]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 mb-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-[#059669]/20 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Tim Apoteker Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Didukung oleh tim apoteker profesional dan berpengalaman.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#059669] to-[#047857] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#059669] text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">{member.description}</p>
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
              Siap Melayani Kebutuhan Kesehatan Anda
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dengan apoteker
              profesional kami.
            </p>
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-[#059669] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={20} />
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
