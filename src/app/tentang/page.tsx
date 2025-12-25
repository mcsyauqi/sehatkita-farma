"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield, Heart, Users, Award, Target, Eye, CheckCircle, MessageCircle, Star,
  MapPin, Clock, ArrowRight, Zap, BadgeCheck, TrendingUp, Building, Handshake, Medal
} from "lucide-react";

const values = [
  { icon: Heart, title: "Pelayanan Sepenuh Hati", desc: "Melayani setiap pelanggan dengan sepenuh hati, empati, dan kepedulian yang tulus terhadap kesehatan mereka." },
  { icon: Shield, title: "Kualitas Terjamin", desc: "Semua produk terjamin keasliannya, terdaftar BPOM, dan disimpan sesuai standar penyimpanan yang tepat." },
  { icon: Users, title: "Profesional", desc: "Tim apoteker tersertifikasi dan berpengalaman yang terus mengikuti perkembangan ilmu farmasi terkini." },
  { icon: Award, title: "Harga Terjangkau", desc: "Komitmen memberikan harga kompetitif dan adil tanpa mengorbankan kualitas produk dan layanan." },
  { icon: Zap, title: "Layanan Cepat", desc: "Pengantaran obat dalam 1-2 jam dan pelayanan apotek yang efisien tanpa antrian panjang." },
  { icon: BadgeCheck, title: "Terpercaya", desc: "Lebih dari 50.000 pelanggan telah mempercayakan kebutuhan kesehatan mereka kepada kami." },
];

const milestones = [
  { year: "2014", event: "SehatKita Farma didirikan di Kemang, Jakarta Selatan", desc: "Memulai perjalanan dengan satu gerai kecil dan 3 orang karyawan." },
  { year: "2015", event: "Meluncurkan layanan konsultasi apoteker gratis", desc: "Berkomitmen memberikan edukasi kesehatan kepada masyarakat." },
  { year: "2016", event: "Membuka cabang kedua di Sudirman", desc: "Ekspansi ke kawasan bisnis untuk melayani pekerja kantoran." },
  { year: "2018", event: "Meluncurkan layanan antar obat 24 jam", desc: "Menjadi apotek pertama di Jakarta dengan layanan delivery 24 jam." },
  { year: "2020", event: "Membuka cabang ketiga di Kelapa Gading", desc: "Memperluas jangkauan ke Jakarta Utara dan Mall of Indonesia." },
  { year: "2022", event: "Mencapai 50.000+ pelanggan setia", desc: "Milestone penting yang membuktikan kepercayaan masyarakat." },
  { year: "2024", event: "Meluncurkan program konsultasi online", desc: "Digitalisasi layanan untuk kemudahan akses pelanggan." },
  { year: "2025", event: "Rencana ekspansi ke 5 cabang baru", desc: "Terus bertumbuh untuk melayani lebih banyak masyarakat." },
];

const team = [
  { name: "Dr. Apt. Sari Wijaya, S.Farm, M.Farm", role: "Kepala Apoteker", desc: "15 tahun pengalaman farmasi klinik. Spesialisasi dalam farmasi klinis dan konseling pasien.", expertise: ["Farmasi Klinis", "Konseling Pasien", "Manajemen Terapi"] },
  { name: "Apt. Budi Santoso, S.Farm", role: "Apoteker Senior", desc: "12 tahun pengalaman. Ahli dalam obat kardiovaskular dan penyakit kronis.", expertise: ["Kardiovaskular", "Diabetes", "Hipertensi"] },
  { name: "Apt. Dewi Kusuma, S.Farm", role: "Apoteker", desc: "8 tahun pengalaman. Spesialisasi produk ibu, bayi, dan kesehatan anak.", expertise: ["Ibu & Anak", "Nutrisi", "Imunisasi"] },
  { name: "Apt. Rizky Pratama, S.Farm", role: "Apoteker", desc: "6 tahun pengalaman. Fokus pada vitamin, suplemen, dan kesehatan preventif.", expertise: ["Vitamin", "Suplemen", "Preventif"] },
];

const achievements = [
  { icon: Medal, title: "Apotek Terbaik 2023", desc: "Penghargaan dari Asosiasi Apotek Indonesia" },
  { icon: Award, title: "Service Excellence", desc: "Rating 4.9/5 dari 10.000+ review pelanggan" },
  { icon: BadgeCheck, title: "ISO 9001:2015", desc: "Tersertifikasi standar manajemen mutu" },
  { icon: Building, title: "BPOM Certified", desc: "Terdaftar resmi di Badan POM RI" },
];

const stats = [
  { value: "10+", label: "Tahun Berdiri" },
  { value: "50.000+", label: "Pelanggan Puas" },
  { value: "3", label: "Cabang di Jakarta" },
  { value: "20+", label: "Tim Profesional" },
];

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Tentang Kami</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Partner Kesehatan Keluarga Anda</h1>
            <p className="text-gray-600 text-lg mb-8">Lebih dari 10 tahun melayani kebutuhan kesehatan masyarakat Jakarta dengan dedikasi, profesionalisme, dan kepedulian yang tulus.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cabang" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors">
                <MapPin size={20} />
                Kunjungi Cabang Kami
              </Link>
              <Link href="/kontak" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold transition-colors">
                <MessageCircle size={20} />
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cerita Kami</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">Bermula dari Kepedulian</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>SehatKita Farma didirikan pada tahun 2014 oleh sekelompok apoteker yang memiliki visi sederhana namun mulia: menjadi apotek yang benar-benar peduli pada kesehatan masyarakat, bukan sekadar menjual obat.</p>
                <p>Berawal dari satu gerai kecil di Kemang dengan hanya 3 orang karyawan, kami memulai perjalanan dengan prinsip bahwa setiap pelanggan berhak mendapatkan edukasi tentang obat yang mereka konsumsi.</p>
                <p>Kami percaya bahwa apotek bukan hanya tempat membeli obat, tetapi juga tempat untuk mendapatkan informasi kesehatan yang akurat. Itulah mengapa konsultasi dengan apoteker kami selalu gratis.</p>
                <p>Kini, SehatKita Farma telah berkembang menjadi jaringan apotek terpercaya dengan 3 cabang di Jakarta dan lebih dari 50.000 pelanggan setia yang mempercayakan kebutuhan kesehatan mereka kepada kami.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold mb-1">2014</p>
                <p className="text-sm opacity-90">Tahun Berdiri</p>
              </div>
              <div className="bg-gradient-to-br from-secondary to-sky-600 rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold mb-1">50K+</p>
                <p className="text-sm opacity-90">Pelanggan</p>
              </div>
              <div className="bg-gradient-to-br from-accent to-orange-600 rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold mb-1">3</p>
                <p className="text-sm opacity-90">Cabang</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold mb-1">24</p>
                <p className="text-sm opacity-90">Jam Layanan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Visi & Misi</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">Arah Perjalanan Kami</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Menjadi apotek pilihan utama masyarakat Indonesia yang memberikan pelayanan kesehatan terpercaya, berkualitas, dan terjangkau untuk semua kalangan.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-sky-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Menyediakan produk kesehatan berkualitas dengan harga terjangkau dan jaminan keaslian.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Memberikan pelayanan profesional oleh apoteker tersertifikasi dengan konsultasi gratis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Memudahkan akses kesehatan melalui layanan 24 jam dan pengantaran cepat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Memberikan edukasi kesehatan untuk meningkatkan kesadaran masyarakat.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Nilai-Nilai Kami</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Prinsip yang Kami Pegang</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Nilai-nilai ini menjadi fondasi dalam setiap tindakan dan keputusan yang kami ambil.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 hover:bg-primary/5 transition-colors group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:shadow-md transition-all">
                  <v.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Pencapaian</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Penghargaan & Sertifikasi</h2>
            <p className="text-gray-600">Bukti komitmen kami dalam memberikan layanan terbaik</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <a.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{a.title}</h3>
                <p className="text-sm text-gray-500">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Perjalanan Kami</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">Milestone Penting</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{m.year}</div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-2"></div>}
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:bg-primary/5 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">{m.event}</h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Tim Kami</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Tim Apoteker Profesional</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Didukung oleh tim apoteker profesional, tersertifikasi, dan berpengalaman di bidangnya masing-masing.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-1">{t.name}</h3>
                <p className="text-primary text-sm font-medium text-center mb-3">{t.role}</p>
                <p className="text-sm text-gray-600 text-center mb-4">{t.desc}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {t.expertise.map((exp, j) => (
                    <span key={j} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{exp}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-white border-y">
        <div className="container">
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium">Partner & Supplier Resmi</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {["Kalbe Farma", "Dexa Medica", "Sanbe Farma", "Kimia Farma", "Tempo Scan", "Phapros"].map((partner, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-gray-400 font-bold hover:text-primary transition-colors">
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Siap Melayani Kesehatan Anda</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">Kunjungi cabang kami atau hubungi untuk konsultasi gratis dengan apoteker profesional. Kami siap 24 jam!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                <MessageCircle size={20} />
                Hubungi Kami
              </Link>
              <Link href="/cabang" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                <MapPin size={20} />
                Lihat Cabang
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
