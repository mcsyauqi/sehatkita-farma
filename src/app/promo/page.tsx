"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tag, Truck, Gift, Calendar, Clock, Copy, CheckCircle, MessageCircle, Apple, Baby, Sparkles } from "lucide-react";

const promos = [
  { id: 1, title: "PROMO VITAMIN", desc: "Diskon 20% untuk semua vitamin dan suplemen!", code: "SEHAT20", discount: "20%", until: "31 Jan 2025", icon: Apple, gradient: "from-accent to-orange-600", featured: true },
  { id: 2, title: "GRATIS ONGKIR", desc: "Gratis ongkir untuk pembelian di atas Rp 100.000", code: "FREEONGKIR", discount: "Gratis", until: "31 Jan 2025", icon: Truck, gradient: "from-secondary to-sky-600", featured: true },
  { id: 3, title: "DISKON IBU & BAYI", desc: "Diskon 15% untuk semua produk ibu dan bayi!", code: "BAYIKU15", discount: "15%", until: "15 Jan 2025", icon: Baby, gradient: "from-pink-500 to-pink-700", featured: false },
  { id: 4, title: "SKINCARE DEALS", desc: "Beli 2 produk skincare, gratis 1 masker wajah!", code: "GLOWING", discount: "Gratis 1", until: "20 Jan 2025", icon: Sparkles, gradient: "from-purple-500 to-purple-700", featured: false },
  { id: 5, title: "MEMBER DISCOUNT", desc: "Diskon 10% untuk member setia SehatKita!", code: "MEMBER10", discount: "10%", until: "Setiap Hari", icon: Gift, gradient: "from-primary to-primary-dark", featured: false },
  { id: 6, title: "WEEKEND SPECIAL", desc: "Diskon tambahan 5% setiap Sabtu & Minggu!", code: "WEEKEND5", discount: "5%", until: "Setiap Weekend", icon: Calendar, gradient: "from-teal-500 to-teal-700", featured: false },
];

export default function PromoPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-16">
        <div className="container text-center">
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Promo & Penawaran</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Promo Spesial untuk Anda</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Jangan lewatkan penawaran menarik dari SehatKita Farma!</p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Promo Unggulan</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {promos.filter((p) => p.featured).map((promo, i) => (
              <motion.div key={promo.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative bg-gradient-to-br ${promo.gradient} rounded-2xl p-8 text-white overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <promo.icon className="w-10 h-10 mb-4" />
                <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-3">{promo.discount} OFF</span>
                <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                <p className="opacity-90 mb-6">{promo.desc}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 rounded-lg px-4 py-2 font-mono font-bold">{promo.code}</span>
                  <button onClick={() => copy(promo.code)} className="bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 transition-colors flex items-center gap-2">
                    {copied === promo.code ? <><CheckCircle size={18} />Tersalin!</> : <><Copy size={18} />Salin</>}
                  </button>
                </div>
                <p className="flex items-center gap-2 text-sm opacity-80"><Clock size={16} />Berlaku hingga {promo.until}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Semua Promo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.filter((p) => !p.featured).map((promo, i) => (
              <motion.div key={promo.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 bg-gradient-to-br ${promo.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <promo.icon className="w-6 h-6 text-white" />
                </div>
                <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-3">{promo.discount}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{promo.desc}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 rounded-lg px-3 py-1.5 font-mono font-semibold text-gray-700">{promo.code}</span>
                  <button onClick={() => copy(promo.code)} className="text-primary hover:text-primary-dark transition-colors">
                    {copied === promo.code ? <CheckCircle size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                <p className="text-sm text-gray-500"><Clock size={14} className="inline mr-1" />{promo.until}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Cara Menggunakan Kode Promo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Salin Kode", desc: "Klik tombol salin pada kode promo" },
              { step: "2", title: "Hubungi WhatsApp", desc: "Kirim pesanan beserta kode promo" },
              { step: "3", title: "Nikmati Diskon", desc: "Diskon langsung diterapkan" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Siap Berbelanja Hemat?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">Gunakan kode promo sekarang dan nikmati penghematan!</p>
          <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            <MessageCircle size={20} />
            Pesan via WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
