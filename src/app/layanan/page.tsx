"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Truck,
  Heart,
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  Stethoscope,
  Pill,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";

const mainServices = [
  {
    icon: MessageCircle,
    title: "Konsultasi Apoteker Gratis",
    description:
      "Konsultasikan keluhan kesehatan Anda dengan apoteker profesional kami tanpa biaya. Kami siap membantu Anda memahami obat yang tepat dan cara penggunaannya.",
    features: [
      "Konsultasi tatap muka di apotek",
      "Konsultasi via WhatsApp",
      "Penjelasan dosis dan aturan pakai",
      "Informasi efek samping obat",
    ],
  },
  {
    icon: Truck,
    title: "Antar Obat ke Rumah",
    description:
      "Pesan obat via WhatsApp, obat diantar langsung ke rumah Anda dalam 1-2 jam untuk area radius 5km dari cabang kami.",
    features: [
      "Pengantaran cepat 1-2 jam",
      "Gratis ongkir minimal Rp 100.000",
      "Tersedia 24 jam",
      "Pembayaran COD atau transfer",
    ],
  },
  {
    icon: Heart,
    title: "Cek Kesehatan Gratis",
    description:
      "Kami menyediakan layanan cek kesehatan gratis setiap hari Sabtu. Cek tekanan darah, gula darah, dan kolesterol Anda secara rutin.",
    features: [
      "Cek tekanan darah",
      "Cek gula darah",
      "Cek kolesterol",
      "Konsultasi hasil dengan apoteker",
    ],
  },
  {
    icon: Calendar,
    title: "Program Obat Rutin",
    description:
      "Langganan obat bulanan dengan harga spesial. Kami akan mengingatkan jadwal minum obat dan mengantarkan obat tepat waktu.",
    features: [
      "Harga spesial member",
      "Pengingat minum obat",
      "Pengantaran terjadwal",
      "Konsultasi rutin gratis",
    ],
  },
];

const additionalServices = [
  {
    icon: Pill,
    title: "Tebus Resep Dokter",
    description: "Layanan tebus resep dengan apoteker berpengalaman",
  },
  {
    icon: Stethoscope,
    title: "Penyewaan Alat Kesehatan",
    description: "Sewa alat kesehatan seperti kursi roda, nebulizer, dll",
  },
  {
    icon: Users,
    title: "Layanan Korporat",
    description: "Paket kesehatan untuk perusahaan dan instansi",
  },
  {
    icon: Shield,
    title: "Asuransi Kesehatan",
    description: "Menerima berbagai kartu asuransi kesehatan",
  },
];

export default function LayananPage() {
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
              Layanan Kami
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kesehatan Terbaik untuk Anda
            </h1>
            <p className="text-gray-600">
              Kami berkomitmen memberikan layanan kesehatan profesional dengan
              apoteker berpengalaman untuk kebutuhan Anda dan keluarga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-[#059669] rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#059669]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    className="inline-flex items-center gap-2 mt-6 text-[#059669] font-semibold hover:gap-3 transition-all"
                  >
                    Gunakan Layanan Ini <ArrowRight size={16} />
                  </Link>
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  } bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5] rounded-2xl p-8 lg:p-12 flex items-center justify-center`}
                >
                  <service.icon className="w-32 h-32 text-[#059669]/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Layanan Lainnya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai layanan tambahan untuk memenuhi kebutuhan kesehatan Anda.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-[#059669]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-[#059669]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Jam Operasional
              </h2>
              <p className="text-gray-600 mb-6">
                Kami melayani Anda setiap hari dengan jam operasional yang
                fleksibel. Cabang utama kami di Kemang buka 24 jam!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-6 h-6 text-[#059669]" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      SehatKita Kemang
                    </p>
                    <p className="text-gray-600">Buka 24 Jam</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-6 h-6 text-[#059669]" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      SehatKita Sudirman
                    </p>
                    <p className="text-gray-600">07:00 - 22:00 WIB</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-6 h-6 text-[#059669]" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      SehatKita Kelapa Gading
                    </p>
                    <p className="text-gray-600">10:00 - 22:00 WIB</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Butuh Bantuan Segera?
              </h3>
              <p className="text-white/90 mb-6">
                Tim apoteker kami siap melayani Anda 24 jam. Hubungi kami
                sekarang untuk konsultasi atau pemesanan obat.
              </p>
              <div className="space-y-3">
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  className="flex items-center gap-3 bg-white/20 rounded-xl px-4 py-3 hover:bg-white/30 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp: 0812-3456-7890</span>
                </Link>
                <Link
                  href="tel:02112345678"
                  className="flex items-center gap-3 bg-white/20 rounded-xl px-4 py-3 hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <span>Telepon: (021) 1234-5678</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
