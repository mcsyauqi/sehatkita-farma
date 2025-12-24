"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Heart, Users, Award, Target, Eye, CheckCircle, MessageCircle } from "lucide-react";

const values = [
  { icon: Heart, title: "Pelayanan Sepenuh Hati", desc: "Melayani setiap pelanggan dengan sepenuh hati dan empati." },
  { icon: Shield, title: "Kualitas Terjamin", desc: "Semua produk terjamin keasliannya dan terdaftar BPOM." },
  { icon: Users, title: "Profesional", desc: "Tim apoteker tersertifikasi dan berpengalaman." },
  { icon: Award, title: "Harga Terjangkau", desc: "Komitmen memberikan harga kompetitif dan adil." },
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
  { name: "Dr. Apt. Sari Wijaya, S.Farm", role: "Kepala Apoteker", desc: "15 tahun pengalaman farmasi klinik" },
  { name: "Apt. Budi Santoso, S.Farm", role: "Apoteker Senior", desc: "Spesialisasi obat kardiovaskular" },
  { name: "Apt. Dewi Kusuma, S.Farm", role: "Apoteker", desc: "Ahli produk ibu dan anak" },
  { name: "Apt. Rizky Pratama, S.Farm", role: "Apoteker", desc: "Fokus vitamin dan suplemen" },
];

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-16">
        <div className="container text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Tentang Kami</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Partner Kesehatan Keluarga Anda</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Lebih dari 10 tahun melayani kebutuhan kesehatan masyarakat Jakarta.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-gray-600">
                <p>SehatKita Farma didirikan pada tahun 2014 dengan visi sederhana: menjadi apotek yang benar-benar peduli pada kesehatan masyarakat.</p>
                <p>Berawal dari satu gerai kecil di Kemang, kini SehatKita Farma telah berkembang menjadi jaringan apotek terpercaya dengan 3 cabang di Jakarta.</p>
                <p>Yang membedakan kami adalah komitmen pada pelayanan. Setiap apoteker kami memberikan edukasi dan konsultasi agar pelanggan memahami cara penggunaan obat yang benar.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="opacity-90">Tahun</p>
              </div>
              <div className="bg-gradient-to-br from-secondary to-sky-600 rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold mb-1">50K+</p>
                <p className="opacity-90">Pelanggan</p>
              </div>
              <div className="bg-gradient-to-br from-accent to-orange-600 rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold mb-1">3</p>
                <p className="opacity-90">Cabang</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white text-center">
                <p className="text-4xl font-bold mb-1">24</p>
                <p className="opacity-90">Jam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-600">Menjadi apotek pilihan utama masyarakat Indonesia yang memberikan pelayanan kesehatan terpercaya, berkualitas, dan terjangkau.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span>Menyediakan produk kesehatan berkualitas dengan harga terjangkau</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span>Memberikan pelayanan profesional oleh apoteker tersertifikasi</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span>Memudahkan akses kesehatan melalui layanan 24 jam</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Perjalanan Kami</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">{m.year}</div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2"></div>}
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-gray-700">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Tim Apoteker Kami</h2>
            <p className="text-gray-600">Didukung oleh tim apoteker profesional dan berpengalaman.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{t.role}</p>
                <p className="text-sm text-gray-600">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Siap Melayani Kesehatan Anda</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">Hubungi kami untuk konsultasi gratis dengan apoteker profesional.</p>
          <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            <MessageCircle size={20} />
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  );
}
