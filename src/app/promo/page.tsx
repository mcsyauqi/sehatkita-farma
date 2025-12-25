"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tag, Truck, Gift, Calendar, Clock, Copy, CheckCircle, MessageCircle, Apple, Baby, Sparkles,
  Percent, Star, ArrowRight, Users, CreditCard, Shield, AlertCircle, Info
} from "lucide-react";

const promos = [
  { id: 1, title: "PROMO VITAMIN", desc: "Diskon 20% untuk semua vitamin dan suplemen! Tingkatkan imunitas Anda dengan harga hemat.", code: "SEHAT20", discount: "20%", until: "31 Jan 2025", icon: Apple, gradient: "from-accent to-orange-600", featured: true, terms: ["Berlaku untuk semua produk vitamin", "Minimal pembelian Rp 100.000", "Tidak dapat digabung promo lain"] },
  { id: 2, title: "GRATIS ONGKIR", desc: "Gratis ongkir untuk pembelian di atas Rp 100.000 dalam radius 5km dari cabang kami.", code: "FREEONGKIR", discount: "Gratis", until: "31 Jan 2025", icon: Truck, gradient: "from-secondary to-sky-600", featured: true, terms: ["Minimal pembelian Rp 100.000", "Radius maksimal 5km", "Berlaku untuk semua cabang"] },
  { id: 3, title: "DISKON IBU & BAYI", desc: "Diskon 15% untuk semua produk ibu dan bayi! Dari susu formula hingga perlengkapan bayi.", code: "BAYIKU15", discount: "15%", until: "15 Jan 2025", icon: Baby, gradient: "from-pink-500 to-pink-700", featured: false, terms: ["Berlaku untuk kategori ibu & bayi", "Tidak berlaku untuk susu formula tertentu"] },
  { id: 4, title: "SKINCARE DEALS", desc: "Beli 2 produk skincare, gratis 1 masker wajah! Pilihan masker sesuai tipe kulit.", code: "GLOWING", discount: "Gratis 1", until: "20 Jan 2025", icon: Sparkles, gradient: "from-purple-500 to-purple-700", featured: false, terms: ["Beli minimal 2 produk skincare", "Gratis 1 masker wajah pilihan", "Selama persediaan masih ada"] },
  { id: 5, title: "MEMBER DISCOUNT", desc: "Diskon 10% untuk member setia SehatKita! Daftar gratis dan nikmati keuntungannya.", code: "MEMBER10", discount: "10%", until: "Setiap Hari", icon: Gift, gradient: "from-primary to-primary-dark", featured: false, terms: ["Khusus member terdaftar", "Berlaku untuk semua produk", "Dapat digabung dengan promo ongkir"] },
  { id: 6, title: "WEEKEND SPECIAL", desc: "Diskon tambahan 5% setiap Sabtu & Minggu! Belanja weekend makin hemat.", code: "WEEKEND5", discount: "5%", until: "Setiap Weekend", icon: Calendar, gradient: "from-teal-500 to-teal-700", featured: false, terms: ["Berlaku Sabtu & Minggu", "Berlaku untuk semua produk", "Dapat digabung dengan member discount"] },
  { id: 7, title: "FIRST ORDER", desc: "Diskon 25% untuk pembelian pertama! Selamat datang di SehatKita Farma.", code: "WELCOME25", discount: "25%", until: "Untuk Pelanggan Baru", icon: Star, gradient: "from-yellow-500 to-amber-600", featured: false, terms: ["Hanya untuk pelanggan baru", "Maksimal diskon Rp 50.000", "Satu kali penggunaan"] },
  { id: 8, title: "CASHBACK 10%", desc: "Cashback 10% untuk pembayaran dengan e-wallet! GoPay, OVO, Dana, ShopeePay.", code: "EWALLET10", discount: "10%", until: "31 Jan 2025", icon: CreditCard, gradient: "from-indigo-500 to-indigo-700", featured: false, terms: ["Pembayaran dengan e-wallet", "Maksimal cashback Rp 25.000", "Minimal pembelian Rp 50.000"] },
];

const memberBenefits = [
  { icon: Percent, title: "Diskon Member 10%", desc: "Diskon tambahan 10% untuk setiap pembelian" },
  { icon: Gift, title: "Poin Rewards", desc: "Kumpulkan poin dan tukar dengan hadiah menarik" },
  { icon: Calendar, title: "Promo Eksklusif", desc: "Akses ke promo khusus member setiap bulan" },
  { icon: Users, title: "Konsultasi Prioritas", desc: "Layanan konsultasi prioritas dengan apoteker" },
];

export default function PromoPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  const featuredPromos = promos.filter((p) => p.featured);
  const regularPromos = promos.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">🎉 Promo & Penawaran</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Promo Spesial untuk Anda</h1>
            <p className="text-gray-600 text-lg mb-8">Jangan lewatkan penawaran menarik dari SehatKita Farma! Hemat lebih banyak untuk kesehatan Anda dan keluarga.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produk" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                <Tag size={20} />
                Belanja Sekarang
              </Link>
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-accent border-2 border-accent px-8 py-4 rounded-full font-semibold transition-colors">
                <MessageCircle size={20} />
                Tanya Promo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Stats */}
      <section className="py-8 bg-accent">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "8+", label: "Promo Aktif" },
              { value: "25%", label: "Diskon Terbesar" },
              { value: "Gratis", label: "Ongkir" },
              { value: "24/7", label: "Berlaku Setiap Hari" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center text-white">
                <p className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Promos */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Promo Unggulan</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Penawaran Terbaik Bulan Ini</h2>
            <p className="text-gray-600">Promo paling populer yang tidak boleh Anda lewatkan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPromos.map((promo, i) => (
              <motion.div key={promo.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative bg-gradient-to-br ${promo.gradient} rounded-3xl p-8 lg:p-10 text-white overflow-hidden`}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative">
                  <promo.icon className="w-12 h-12 mb-6 opacity-80" />
                  <span className="inline-block bg-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">{promo.discount} OFF</span>
                  <h3 className="text-3xl font-bold mb-3">{promo.title}</h3>
                  <p className="opacity-90 mb-6 text-lg leading-relaxed">{promo.desc}</p>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-white/20 rounded-xl px-5 py-3 font-mono font-bold text-lg">{promo.code}</span>
                    <button onClick={() => copy(promo.code)} className="bg-white/20 hover:bg-white/30 rounded-xl px-5 py-3 transition-colors flex items-center gap-2 font-semibold">
                      {copied === promo.code ? <><CheckCircle size={20} />Tersalin!</> : <><Copy size={20} />Salin Kode</>}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2 text-sm opacity-80"><Clock size={16} />Berlaku hingga {promo.until}</p>
                    <Link href="/produk" className="flex items-center gap-1 font-semibold hover:gap-2 transition-all">
                      Belanja <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Promos */}
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Semua Promo</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularPromos.map((promo, i) => (
              <motion.div key={promo.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-14 h-14 bg-gradient-to-br ${promo.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <promo.icon className="w-7 h-7 text-white" />
                </div>
                <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold mb-3">{promo.discount}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{promo.desc}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gray-100 rounded-lg px-3 py-2 font-mono font-semibold text-gray-700">{promo.code}</span>
                  <button onClick={() => copy(promo.code)} className="p-2 text-primary hover:text-primary-dark transition-colors">
                    {copied === promo.code ? <CheckCircle size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                <p className="text-sm text-gray-500 flex items-center gap-1"><Clock size={14} />{promo.until}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cara Penggunaan</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Cara Menggunakan Kode Promo</h2>
            <p className="text-gray-600">Mudah dan cepat! Ikuti langkah-langkah berikut</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Pilih Promo", desc: "Pilih promo yang sesuai dengan kebutuhan Anda", icon: Tag },
              { step: "2", title: "Salin Kode", desc: "Klik tombol salin untuk menyalin kode promo", icon: Copy },
              { step: "3", title: "Hubungi WhatsApp", desc: "Kirim pesanan beserta kode promo ke WhatsApp", icon: MessageCircle },
              { step: "4", title: "Nikmati Diskon", desc: "Diskon langsung diterapkan pada pesanan Anda", icon: CheckCircle },
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

      {/* Member Program */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Program Member</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Jadi Member, Dapat Lebih!</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Daftar sebagai member SehatKita Farma dan nikmati berbagai keuntungan eksklusif. Pendaftaran gratis!</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {memberBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                      <p className="text-xs text-gray-500">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="https://wa.me/6281234567890?text=Halo, saya ingin mendaftar sebagai member SehatKita Farma" target="_blank" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors">
                <Users size={20} />
                Daftar Member Gratis
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 lg:p-10 text-white">
              <Gift className="w-16 h-16 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Member Exclusive</h3>
              <p className="opacity-90 mb-6 leading-relaxed">Sebagai member, Anda akan mendapatkan akses ke promo eksklusif setiap bulan, poin rewards yang bisa ditukar hadiah, dan layanan prioritas.</p>
              <div className="bg-white/20 rounded-xl p-6">
                <p className="font-semibold mb-2">Promo Member Bulan Ini:</p>
                <p className="text-3xl font-bold">DISKON 10%</p>
                <p className="text-sm opacity-80 mt-2">Untuk semua produk. Kode: MEMBER10</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Informasi</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Syarat & Ketentuan</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ketentuan Umum Promo</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span>Promo berlaku selama periode yang ditentukan atau selama persediaan masih ada</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span>Satu kode promo hanya dapat digunakan satu kali per transaksi</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span>Promo tidak dapat ditukar dengan uang tunai</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span>SehatKita Farma berhak mengubah atau membatalkan promo tanpa pemberitahuan sebelumnya</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span>Promo berlaku di semua cabang SehatKita Farma</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span>Untuk promo yang tidak dapat digabung, diskon terbesar yang akan diterapkan</span></li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">Pastikan untuk menginformasikan kode promo kepada kasir atau melalui WhatsApp sebelum pembayaran dilakukan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Siap Berbelanja Hemat?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">Gunakan kode promo sekarang dan nikmati penghematan! Tim kami siap membantu Anda 24 jam.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                <MessageCircle size={20} />
                Pesan via WhatsApp
              </Link>
              <Link href="/produk" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                <Tag size={20} />
                Lihat Produk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
