"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Truck, Heart, Calendar, Clock, CheckCircle, Phone, Stethoscope, Pill, Users, Shield, ArrowRight } from "lucide-react";

const mainServices = [
  {
    icon: MessageCircle,
    title: "Konsultasi Apoteker Gratis",
    desc: "Konsultasikan keluhan kesehatan Anda dengan apoteker profesional kami tanpa biaya.",
    features: ["Konsultasi tatap muka di apotek", "Konsultasi via WhatsApp", "Penjelasan dosis dan aturan pakai", "Informasi efek samping obat"],
  },
  {
    icon: Truck,
    title: "Antar Obat ke Rumah",
    desc: "Pesan obat via WhatsApp, obat diantar langsung ke rumah Anda dalam 1-2 jam.",
    features: ["Pengantaran cepat 1-2 jam", "Gratis ongkir min. Rp 100.000", "Tersedia 24 jam", "Pembayaran COD atau transfer"],
  },
  {
    icon: Heart,
    title: "Cek Kesehatan Gratis",
    desc: "Layanan cek kesehatan gratis setiap hari Sabtu di semua cabang kami.",
    features: ["Cek tekanan darah", "Cek gula darah", "Cek kolesterol", "Konsultasi hasil dengan apoteker"],
  },
  {
    icon: Calendar,
    title: "Program Obat Rutin",
    desc: "Langganan obat bulanan dengan harga spesial dan pengingat minum obat.",
    features: ["Harga spesial member", "Pengingat minum obat", "Pengantaran terjadwal", "Konsultasi rutin gratis"],
  },
];

const additionalServices = [
  { icon: Pill, title: "Tebus Resep Dokter", desc: "Layanan tebus resep dengan apoteker berpengalaman" },
  { icon: Stethoscope, title: "Penyewaan Alat Kesehatan", desc: "Sewa kursi roda, nebulizer, dll" },
  { icon: Users, title: "Layanan Korporat", desc: "Paket kesehatan untuk perusahaan" },
  { icon: Shield, title: "Asuransi Kesehatan", desc: "Menerima berbagai kartu asuransi" },
];

const operatingHours = [
  { name: "SehatKita Kemang", hours: "Buka 24 Jam" },
  { name: "SehatKita Sudirman", hours: "07:00 - 22:00 WIB" },
  { name: "SehatKita Kelapa Gading", hours: "10:00 - 22:00 WIB" },
];

export default function LayananPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-16">
        <div className="container text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Layanan Kami</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Kesehatan Terbaik</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Kami berkomitmen memberikan layanan kesehatan profesional dengan apoteker berpengalaman.</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container space-y-12">
          {mainServices.map((svc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <svc.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{svc.title}</h2>
                <p className="text-gray-600 mb-6">{svc.desc}</p>
                <ul className="space-y-3 mb-6">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Gunakan Layanan <ArrowRight size={16} />
                </Link>
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-background rounded-2xl p-12 flex items-center justify-center`}>
                <svc.icon className="w-32 h-32 text-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Layanan Lainnya</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Berbagai layanan tambahan untuk memenuhi kebutuhan kesehatan Anda.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((svc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svc.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-600">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Jam Operasional</h2>
              <p className="text-gray-600 mb-6">Kami melayani Anda setiap hari. Cabang Kemang buka 24 jam!</p>
              <div className="space-y-4">
                {operatingHours.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-gray-600 text-sm">{item.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Segera?</h3>
              <p className="opacity-90 mb-6">Tim apoteker kami siap melayani Anda 24 jam.</p>
              <div className="space-y-3">
                <Link href="https://wa.me/6281234567890" target="_blank" className="flex items-center gap-3 bg-white/20 rounded-xl px-4 py-3 hover:bg-white/30 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: 0812-3456-7890</span>
                </Link>
                <Link href="tel:02112345678" className="flex items-center gap-3 bg-white/20 rounded-xl px-4 py-3 hover:bg-white/30 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Telepon: (021) 1234-5678</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
