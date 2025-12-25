"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin, Clock, Phone, Mail, MessageCircle, Send, CheckCircle, Facebook, Instagram,
  ChevronDown, HelpCircle, Users, Truck, Pill, CreditCard, Shield, ArrowRight, AlertCircle
} from "lucide-react";

const contacts = [
  { icon: Phone, title: "Telepon", value: "(021) 1234-5678", link: "tel:02112345678", desc: "24 Jam", color: "bg-primary" },
  { icon: MessageCircle, title: "WhatsApp", value: "0812-3456-7890", link: "https://wa.me/6281234567890", desc: "Respon cepat", color: "bg-green-500" },
  { icon: Mail, title: "Email", value: "info@sehatkitafarma.com", link: "mailto:info@sehatkitafarma.com", desc: "1x24 jam", color: "bg-secondary" },
  { icon: MapPin, title: "Alamat Pusat", value: "Jl. Kemang Raya No. 88", link: "/cabang", desc: "Jakarta Selatan", color: "bg-accent" },
];

const faqs = [
  { q: "Bagaimana cara memesan obat via WhatsApp?", a: "Sangat mudah! Kirim foto resep (jika ada) atau nama obat yang dibutuhkan ke WhatsApp kami. Tim akan mengkonfirmasi ketersediaan, harga, dan metode pembayaran. Obat akan diantar dalam 1-2 jam untuk radius 5km." },
  { q: "Apakah bisa tebus resep dokter?", a: "Ya, tentu! Kirimkan foto resep yang jelas melalui WhatsApp. Pastikan nama pasien, nama dokter, dan obat yang diresepkan terlihat jelas. Apoteker kami akan memverifikasi dan memproses pesanan Anda." },
  { q: "Berapa lama waktu pengantaran obat?", a: "Untuk radius 5km dari cabang, pengantaran memakan waktu 1-2 jam. Untuk radius 5-10km, estimasi 2-3 jam. Kami juga melayani pengantaran express dengan biaya tambahan." },
  { q: "Apakah ada biaya pengantaran?", a: "Gratis ongkir untuk pembelian minimal Rp 100.000 dalam radius 5km. Untuk pembelian di bawah Rp 100.000 atau jarak lebih dari 5km, dikenakan biaya sesuai jarak." },
  { q: "Metode pembayaran apa saja yang diterima?", a: "Kami menerima pembayaran tunai (COD), transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, Dana, ShopeePay), dan kartu kredit/debit. Untuk pembelian di apotek juga menerima QRIS." },
  { q: "Apakah menerima asuransi kesehatan?", a: "Ya, kami menerima berbagai asuransi kesehatan termasuk BPJS Kesehatan, Prudential, AXA, Allianz, Manulife, dan lainnya. Silakan bawa kartu asuransi saat berkunjung ke apotek." },
  { q: "Jam operasional apotek?", a: "Cabang Kemang buka 24 jam setiap hari. Cabang Sudirman buka 07:00-22:00 WIB. Cabang Kelapa Gading (di MOI) buka 10:00-22:00 WIB mengikuti jam mall." },
  { q: "Apakah ada layanan konsultasi gratis?", a: "Ya! Konsultasi dengan apoteker kami gratis, baik tatap muka di apotek maupun via WhatsApp. Kami juga menyediakan cek kesehatan gratis (tekanan darah, gula darah, kolesterol) setiap Sabtu di cabang Kemang." },
];

const quickLinks = [
  { icon: Pill, title: "Cari Obat", desc: "Lihat katalog produk lengkap", link: "/produk" },
  { icon: MapPin, title: "Lokasi Cabang", desc: "Temukan cabang terdekat", link: "/cabang" },
  { icon: Truck, title: "Antar Obat", desc: "Pesan antar ke rumah", link: "https://wa.me/6281234567890" },
  { icon: Users, title: "Tentang Kami", desc: "Kenali SehatKita Farma", link: "/tentang" },
];

export default function KontakPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Hubungi Kami</span>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Ada Pertanyaan? Kami Siap Membantu</h1>
            <p className="text-gray-600 text-lg mb-8">Tim kami siap melayani Anda 24 jam. Hubungi melalui WhatsApp untuk respons tercepat!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                <MessageCircle size={20} />
                Chat WhatsApp
              </Link>
              <Link href="tel:02112345678" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold transition-colors">
                <Phone size={20} />
                (021) 1234-5678
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={c.link} target={c.link.startsWith("http") || c.link.startsWith("tel") || c.link.startsWith("mailto") ? "_blank" : undefined} className="block bg-gray-50 hover:bg-primary/5 rounded-2xl p-6 text-center transition-all duration-300 group hover:-translate-y-1">
                  <div className={`w-16 h-16 ${c.color} group-hover:scale-110 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform shadow-lg`}>
                    <c.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-primary font-medium mb-1">{c.value}</p>
                  <p className="text-sm text-gray-500">{c.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Akses Cepat</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={link.link} target={link.link.startsWith("http") ? "_blank" : undefined} className="flex items-center gap-4 bg-white rounded-xl p-4 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <link.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{link.title}</h3>
                    <p className="text-sm text-gray-500">{link.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
              <p className="text-gray-600 mb-8">Isi formulir di bawah dan tim kami akan segera merespons.</p>

              {sent ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h3>
                  <p className="text-gray-600">Tim kami akan segera menghubungi Anda.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                      <input type="text" placeholder="Nama Anda" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">No. WhatsApp *</label>
                      <input type="tel" placeholder="08xx-xxxx-xxxx" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" placeholder="email@contoh.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek *</label>
                    <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white">
                      <option value="">Pilih Subjek</option>
                      <option value="order">Pemesanan Obat</option>
                      <option value="consultation">Konsultasi Kesehatan</option>
                      <option value="prescription">Tebus Resep</option>
                      <option value="delivery">Layanan Antar</option>
                      <option value="complaint">Keluhan & Masukan</option>
                      <option value="partnership">Kerjasama</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan *</label>
                    <textarea placeholder="Tulis pesan Anda secara detail..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-xl font-semibold transition-colors">
                    <Send size={18} />Kirim Pesan
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right Side */}
            <div className="space-y-6">
              {/* Map */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium mb-4">Lokasi Kantor Pusat</p>
                  <Link href="/cabang" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow">
                    Lihat Semua Cabang <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>

              {/* Quick Contact */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Butuh Respons Cepat?</h3>
                <p className="opacity-90 mb-6">Untuk respons tercepat, hubungi langsung via WhatsApp. Tim kami online 24 jam!</p>
                <Link href="https://wa.me/6281234567890" target="_blank" className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  <MessageCircle size={20} />Chat WhatsApp Sekarang
                </Link>
              </motion.div>

              {/* Social Media */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Ikuti Media Sosial Kami</h3>
                <div className="flex gap-4">
                  <Link href="https://facebook.com/sehatkitafarma" target="_blank" className="w-14 h-14 bg-blue-600 hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity">
                    <Facebook className="w-7 h-7 text-white" />
                  </Link>
                  <Link href="https://instagram.com/sehatkitafarma" target="_blank" className="w-14 h-14 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity">
                    <Instagram className="w-7 h-7 text-white" />
                  </Link>
                  <Link href="https://wa.me/6281234567890" target="_blank" className="w-14 h-14 bg-green-500 hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4">Dapatkan info promo dan tips kesehatan terbaru</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">FAQ</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-gray-600">Temukan jawaban untuk pertanyaan umum di sini</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 pl-8 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Tidak menemukan jawaban yang Anda cari?</p>
            <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Hubungi kami langsung <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Jam Operasional</h2>
                  <p className="text-gray-600">Semua cabang SehatKita Farma</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl">
                  <div>
                    <span className="font-semibold text-gray-900">SehatKita Kemang</span>
                    <p className="text-sm text-gray-500">Jl. Kemang Raya No. 88</p>
                  </div>
                  <span className="font-bold text-primary text-lg">24 Jam</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900">SehatKita Sudirman</span>
                    <p className="text-sm text-gray-500">Jl. Sudirman No. 45</p>
                  </div>
                  <span className="font-medium text-gray-700">07:00 - 22:00</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900">SehatKita Kelapa Gading</span>
                    <p className="text-sm text-gray-500">Mall of Indonesia Lt. 1</p>
                  </div>
                  <span className="font-medium text-gray-700">10:00 - 22:00</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">Untuk keadaan darurat di luar jam operasional, silakan hubungi cabang Kemang yang buka 24 jam atau hubungi IGD rumah sakit terdekat.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Siap Membantu Anda 24 Jam</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">Apapun kebutuhan kesehatan Anda, tim SehatKita Farma siap melayani. Hubungi kami sekarang!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                <MessageCircle size={20} />
                Chat WhatsApp
              </Link>
              <Link href="/produk" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                <Pill size={20} />
                Lihat Produk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
