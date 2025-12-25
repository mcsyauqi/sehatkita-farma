"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle, Truck, Heart, Calendar, Clock, CheckCircle, Phone, Stethoscope, Pill, Users, Shield,
  ArrowRight, Star, MapPin, CreditCard, Zap, HeartPulse, Activity, Syringe, BadgeCheck, FileText, AlertCircle
} from "lucide-react";

const mainServices = [
  {
    icon: MessageCircle,
    title: "Konsultasi Apoteker Gratis",
    desc: "Konsultasikan keluhan kesehatan Anda dengan apoteker profesional kami tanpa biaya. Kami siap membantu Anda memahami obat yang tepat.",
    features: [
      "Konsultasi tatap muka di apotek",
      "Konsultasi via WhatsApp 24 jam",
      "Penjelasan dosis dan aturan pakai",
      "Informasi efek samping obat",
      "Rekomendasi vitamin dan suplemen",
      "Edukasi kesehatan gratis"
    ],
    color: "from-primary to-emerald-600",
  },
  {
    icon: Truck,
    title: "Antar Obat ke Rumah",
    desc: "Pesan obat via WhatsApp, obat diantar langsung ke rumah Anda dalam 1-2 jam. Layanan tersedia 24 jam untuk kebutuhan darurat.",
    features: [
      "Pengantaran cepat 1-2 jam",
      "Gratis ongkir min. Rp 100.000",
      "Tersedia 24 jam setiap hari",
      "Pembayaran COD atau transfer",
      "Radius pengantaran hingga 10km",
      "Packaging aman dan higienis"
    ],
    color: "from-secondary to-sky-600",
  },
  {
    icon: Heart,
    title: "Cek Kesehatan Gratis",
    desc: "Layanan cek kesehatan gratis setiap hari Sabtu di semua cabang kami. Pantau kesehatan Anda secara rutin tanpa biaya.",
    features: [
      "Cek tekanan darah",
      "Cek gula darah",
      "Cek kolesterol",
      "Cek asam urat",
      "Konsultasi hasil dengan apoteker",
      "Rekam medis tersimpan"
    ],
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Calendar,
    title: "Program Obat Rutin",
    desc: "Langganan obat bulanan dengan harga spesial dan pengingat minum obat. Cocok untuk pasien dengan kondisi kronis.",
    features: [
      "Harga spesial member 10% off",
      "Pengingat minum obat via WA",
      "Pengantaran terjadwal bulanan",
      "Konsultasi rutin gratis",
      "Stok obat terjamin",
      "Fleksibel ubah jadwal"
    ],
    color: "from-purple-500 to-violet-600",
  },
];

const additionalServices = [
  { icon: Pill, title: "Tebus Resep Dokter", desc: "Layanan tebus resep dengan apoteker berpengalaman. Kirim foto resep via WhatsApp untuk pemrosesan cepat." },
  { icon: Stethoscope, title: "Penyewaan Alat Kesehatan", desc: "Sewa kursi roda, nebulizer, oksigen konsentrator, dan alat kesehatan lainnya dengan harga terjangkau." },
  { icon: Users, title: "Layanan Korporat", desc: "Paket kesehatan untuk perusahaan. Medical check-up karyawan, pengadaan obat kantor, dan konsultasi kesehatan." },
  { icon: Shield, title: "Asuransi Kesehatan", desc: "Kami menerima berbagai kartu asuransi kesehatan termasuk BPJS, Prudential, AXA, Allianz, dan lainnya." },
  { icon: Syringe, title: "Layanan Vaksinasi", desc: "Layanan vaksinasi lengkap untuk dewasa dan anak. Tersedia vaksin flu, hepatitis, HPV, dan lainnya." },
  { icon: FileText, title: "Surat Keterangan Sehat", desc: "Penerbitan surat keterangan sehat untuk keperluan kerja, sekolah, atau perjalanan dengan proses cepat." },
];

const operatingHours = [
  { name: "SehatKita Kemang", hours: "Buka 24 Jam", address: "Jl. Kemang Raya No. 88", is24: true },
  { name: "SehatKita Sudirman", hours: "07:00 - 22:00 WIB", address: "Jl. Sudirman No. 45", is24: false },
  { name: "SehatKita Kelapa Gading", hours: "10:00 - 22:00 WIB", address: "Mall of Indonesia Lt. 1", is24: false },
];

const processSteps = [
  { step: "1", title: "Hubungi Kami", desc: "Chat via WhatsApp atau datang langsung ke apotek terdekat", icon: MessageCircle },
  { step: "2", title: "Konsultasi", desc: "Apoteker akan membantu menentukan obat atau layanan yang tepat", icon: Stethoscope },
  { step: "3", title: "Proses", desc: "Kami siapkan obat atau layanan sesuai kebutuhan Anda", icon: Pill },
  { step: "4", title: "Selesai", desc: "Ambil di apotek atau kami antarkan ke rumah Anda", icon: CheckCircle },
];

const testimonials = [
  { name: "Bapak Andi", text: "Layanan antar obat sangat cepat, dalam 45 menit obat sudah sampai. Sangat membantu saat anak sakit malam hari.", rating: 5 },
  { name: "Ibu Dewi", text: "Program obat rutin sangat membantu untuk pengobatan hipertensi saya. Tidak perlu khawatir kehabisan obat.", rating: 5 },
  { name: "Ibu Maya", text: "Cek kesehatan gratis setiap Sabtu membantu saya memantau gula darah. Apotekernya ramah dan informatif.", rating: 5 },
];

export default function LayananPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Layanan Kami</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Layanan Kesehatan Profesional</h1>
            <p className="text-gray-600 text-lg mb-8">Kami berkomitmen memberikan layanan kesehatan terbaik dengan apoteker berpengalaman. Tersedia 24 jam untuk melayani kebutuhan kesehatan Anda.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors">
                <MessageCircle size={20} />
                Konsultasi Sekarang
              </Link>
              <Link href="/cabang" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold transition-colors">
                <MapPin size={20} />
                Cari Cabang Terdekat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-8 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "24/7", label: "Layanan Tersedia" },
              { value: "1-2 Jam", label: "Waktu Antar" },
              { value: "Gratis", label: "Konsultasi" },
              { value: "10+", label: "Layanan" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center text-white">
                <p className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Layanan Unggulan</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">4 Layanan Utama Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Layanan kesehatan lengkap yang dirancang untuk memenuhi kebutuhan Anda dan keluarga.</p>
          </div>

          <div className="space-y-12">
            {mainServices.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`p-8 lg:p-12 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${svc.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <svc.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{svc.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{svc.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {svc.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                      Gunakan Layanan <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-gradient-to-br ${svc.color} p-12 flex items-center justify-center min-h-[300px]`}>
                    <svc.icon className="w-32 h-32 text-white/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Proses Layanan</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Cara Menggunakan Layanan Kami</h2>
            <p className="text-gray-600">Proses mudah dan cepat untuk mendapatkan layanan kesehatan terbaik</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {processSteps.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20"></div>
                )}
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

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Layanan Tambahan</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Layanan Lainnya</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Berbagai layanan tambahan untuk memenuhi kebutuhan kesehatan Anda yang lebih spesifik.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 hover:bg-primary/5 transition-colors group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:shadow-md transition-all">
                  <svc.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Testimoni</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Apa Kata Mereka?</h2>
            <p className="text-gray-600">Pengalaman pelanggan yang telah menggunakan layanan kami</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{t.name.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Jam Operasional</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Kapan Kami Melayani?</h2>
              <p className="text-gray-600 mb-8">Kami melayani Anda setiap hari. Cabang Kemang buka 24 jam untuk kebutuhan darurat!</p>
              <div className="space-y-4">
                {operatingHours.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.is24 ? "bg-primary" : "bg-gray-200"}`}>
                      <Clock className={`w-6 h-6 ${item.is24 ? "text-white" : "text-gray-500"}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.address}</p>
                    </div>
                    <div className="text-right">
                      <span className={`font-semibold ${item.is24 ? "text-primary" : "text-gray-700"}`}>{item.hours}</span>
                      {item.is24 && <span className="block text-xs text-primary">Termasuk hari libur</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Segera?</h3>
              <p className="opacity-90 mb-8 leading-relaxed">Tim apoteker profesional kami siap melayani Anda 24 jam. Jangan ragu untuk menghubungi kami kapan saja!</p>
              <div className="space-y-4">
                <Link href="https://wa.me/6281234567890" target="_blank" className="flex items-center gap-4 bg-white/20 rounded-xl px-5 py-4 hover:bg-white/30 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm opacity-80">0812-3456-7890</p>
                  </div>
                </Link>
                <Link href="tel:02112345678" className="flex items-center gap-4 bg-white/20 rounded-xl px-5 py-4 hover:bg-white/30 transition-colors">
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-sm opacity-80">(021) 1234-5678</p>
                  </div>
                </Link>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm opacity-80 flex items-center gap-2">
                  <AlertCircle size={16} />
                  Untuk keadaan darurat, segera hubungi 119 atau IGD terdekat
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container">
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium">Kami Menerima Berbagai Asuransi Kesehatan</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {["BPJS Kesehatan", "Prudential", "AXA Mandiri", "Allianz", "Manulife", "AIA"].map((ins, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-gray-400 font-bold hover:text-primary transition-colors">
                {ins}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Siap Menggunakan Layanan Kami?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">Hubungi kami sekarang untuk konsultasi gratis dengan apoteker profesional. Kami siap melayani 24 jam!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                <MessageCircle size={20} />
                Hubungi via WhatsApp
              </Link>
              <Link href="/cabang" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                <MapPin size={20} />
                Kunjungi Cabang
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
