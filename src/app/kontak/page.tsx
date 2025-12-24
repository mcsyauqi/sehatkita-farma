"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, MessageCircle, Send, CheckCircle, Facebook, Instagram } from "lucide-react";

const contacts = [
  { icon: Phone, title: "Telepon", value: "(021) 1234-5678", link: "tel:02112345678", desc: "24 Jam" },
  { icon: MessageCircle, title: "WhatsApp", value: "0812-3456-7890", link: "https://wa.me/6281234567890", desc: "Respon cepat" },
  { icon: Mail, title: "Email", value: "info@sehatkitafarma.com", link: "mailto:info@sehatkitafarma.com", desc: "1x24 jam" },
  { icon: MapPin, title: "Alamat", value: "Jl. Kemang Raya No. 88", link: "#", desc: "Jakarta Selatan" },
];

const faqs = [
  { q: "Bagaimana cara memesan obat via WhatsApp?", a: "Kirim foto resep atau nama obat ke WhatsApp. Tim kami akan konfirmasi ketersediaan dan harga." },
  { q: "Apakah bisa tebus resep dokter?", a: "Ya, kirimkan foto resep yang jelas via WhatsApp dan apoteker kami akan memproses pesanan." },
  { q: "Berapa lama waktu pengantaran?", a: "Untuk radius 5km, pengantaran memakan waktu 1-2 jam." },
  { q: "Apakah ada biaya pengantaran?", a: "Gratis ongkir untuk pembelian min. Rp 100.000 dalam radius 5km." },
  { q: "Apakah menerima asuransi?", a: "Ya, kami menerima berbagai kartu asuransi kesehatan." },
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
      <section className="bg-gradient-to-b from-background to-white py-12 lg:py-16">
        <div className="container text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Hubungi Kami</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ada Pertanyaan? Hubungi Kami</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Tim kami siap membantu Anda 24 jam.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((c, i) => (
              <Link key={i} href={c.link} target={c.link.startsWith("http") ? "_blank" : undefined} className="block bg-gray-50 hover:bg-primary/5 rounded-2xl p-6 text-center transition-colors group">
                <div className="w-14 h-14 bg-primary group-hover:scale-110 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform">
                  <c.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{c.title}</h3>
                <p className="text-primary font-medium mb-1">{c.value}</p>
                <p className="text-sm text-gray-500">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
              <p className="text-gray-600 mb-6">Isi formulir dan tim kami akan segera merespons.</p>

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pesan Terkirim!</h3>
                  <p className="text-gray-600">Tim kami akan segera merespons.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nama Lengkap" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                    <input type="tel" placeholder="No. WhatsApp" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                  </div>
                  <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                  <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                    <option value="">Pilih Subjek</option>
                    <option value="order">Pemesanan Obat</option>
                    <option value="consultation">Konsultasi</option>
                    <option value="complaint">Keluhan</option>
                    <option value="other">Lainnya</option>
                  </select>
                  <textarea placeholder="Tulis pesan Anda..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"></textarea>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <Send size={18} />Kirim Pesan
                  </button>
                </form>
              )}
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Peta Lokasi</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Butuh Respons Cepat?</h3>
                <p className="opacity-90 mb-6">Hubungi langsung via WhatsApp. Tim kami siap 24 jam!</p>
                <Link href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  <MessageCircle size={20} />Chat WhatsApp
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
                <div className="flex gap-3">
                  <Link href="#" className="w-12 h-12 bg-blue-600 hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity"><Facebook className="w-6 h-6 text-white" /></Link>
                  <Link href="#" className="w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity"><Instagram className="w-6 h-6 text-white" /></Link>
                  <Link href="https://wa.me/6281234567890" target="_blank" className="w-12 h-12 bg-green-500 hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity"><MessageCircle className="w-6 h-6 text-white" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4">
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <span className={`w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && <div className="px-6 pb-4"><p className="text-gray-600">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm max-w-lg mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Jam Operasional</h3>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b"><span className="text-gray-700">SehatKita Kemang</span><span className="font-semibold text-primary">24 Jam</span></div>
              <div className="flex justify-between items-center py-2 border-b"><span className="text-gray-700">SehatKita Sudirman</span><span className="font-medium text-gray-900">07:00 - 22:00</span></div>
              <div className="flex justify-between items-center py-2"><span className="text-gray-700">SehatKita Kelapa Gading</span><span className="font-medium text-gray-900">10:00 - 22:00</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
