"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon",
    value: "(021) 1234-5678",
    link: "tel:02112345678",
    description: "Senin - Minggu, 24 Jam",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "0812-3456-7890",
    link: "https://wa.me/6281234567890",
    description: "Respon cepat 24 jam",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@sehatkitafarma.com",
    link: "mailto:info@sehatkitafarma.com",
    description: "Balas dalam 1x24 jam",
  },
  {
    icon: MapPin,
    title: "Alamat Kantor Pusat",
    value: "Jl. Kemang Raya No. 88",
    link: "https://maps.google.com/?q=Jl.+Kemang+Raya+No.+88+Jakarta",
    description: "Jakarta Selatan 12730",
  },
];

const faqs = [
  {
    question: "Bagaimana cara memesan obat via WhatsApp?",
    answer:
      "Cukup kirim foto resep atau nama obat yang dibutuhkan ke WhatsApp kami. Tim kami akan mengonfirmasi ketersediaan dan harga, lalu Anda bisa memilih untuk ambil sendiri atau diantar.",
  },
  {
    question: "Apakah bisa tebus resep dokter?",
    answer:
      "Ya, kami menerima tebus resep dokter. Kirimkan foto resep yang jelas via WhatsApp, dan apoteker kami akan memproses pesanan Anda.",
  },
  {
    question: "Berapa lama waktu pengantaran obat?",
    answer:
      "Untuk area dalam radius 5km dari cabang kami, pengantaran biasanya memakan waktu 1-2 jam. Untuk area yang lebih jauh, kami akan menginformasikan estimasi waktu.",
  },
  {
    question: "Apakah ada biaya pengantaran?",
    answer:
      "Gratis ongkir untuk pembelian minimal Rp 100.000 dalam radius 5km. Di luar itu, biaya pengantaran akan diinformasikan sebelum konfirmasi pesanan.",
  },
  {
    question: "Apakah menerima pembayaran dengan asuransi?",
    answer:
      "Ya, kami menerima berbagai kartu asuransi kesehatan. Silakan konfirmasi terlebih dahulu ke apotek untuk memastikan kerja sama dengan asuransi Anda.",
  },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Hubungi Kami
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ada Pertanyaan? Hubungi Kami
            </h1>
            <p className="text-gray-600">
              Tim kami siap membantu Anda 24 jam. Jangan ragu untuk menghubungi
              kami melalui berbagai channel yang tersedia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  className="block bg-gray-50 hover:bg-[#059669]/5 rounded-2xl p-6 text-center transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#059669] group-hover:scale-110 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-[#059669] font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-6">
                Isi formulir di bawah ini dan tim kami akan segera merespons.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-600">
                    Terima kasih telah menghubungi kami. Tim kami akan segera
                    merespons pesan Anda.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-all"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        No. WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-all"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subjek
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="order">Pemesanan Obat</option>
                      <option value="consultation">Konsultasi</option>
                      <option value="complaint">Keluhan</option>
                      <option value="partnership">Kerja Sama</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    <Send size={18} />
                    Kirim Pesan
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi SehatKita Farma"
                ></iframe>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Butuh Respons Cepat?
                </h3>
                <p className="text-white/90 mb-6">
                  Hubungi langsung via WhatsApp untuk respons lebih cepat.
                  Tim kami siap 24 jam!
                </p>
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white text-[#059669] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat via WhatsApp
                </Link>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Ikuti Kami di Media Sosial
                </h3>
                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="w-12 h-12 bg-[#1877F2] hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </Link>
                  <Link
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    className="w-12 h-12 bg-[#25D366] hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum seputar layanan kami.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center text-white transition-transform ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#059669] rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Jam Operasional
                </h3>
                <p className="text-gray-600">Layanan kami tersedia:</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-700">SehatKita Kemang</span>
                <span className="font-semibold text-[#059669]">24 Jam</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-700">SehatKita Sudirman</span>
                <span className="font-medium text-gray-900">
                  07:00 - 22:00 WIB
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">SehatKita Kelapa Gading</span>
                <span className="font-medium text-gray-900">
                  10:00 - 22:00 WIB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
