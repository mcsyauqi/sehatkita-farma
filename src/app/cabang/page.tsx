"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  MessageCircle,
  Car,
  Train,
} from "lucide-react";

const branches = [
  {
    id: 1,
    name: "SehatKita Kemang",
    address: "Jl. Kemang Raya No. 88, Bangka, Mampang Prapatan",
    city: "Jakarta Selatan 12730",
    phone: "(021) 1234-5678",
    whatsapp: "6281234567890",
    hours: "Buka 24 Jam",
    is24Hours: true,
    facilities: [
      "Konsultasi Apoteker",
      "Cek Kesehatan",
      "Antar Obat",
      "Parkir Luas",
    ],
    directions: {
      car: "Dari Blok M, ambil Jl. Kemang Raya ke arah selatan. Apotek berada di sebelah kanan.",
      publicTransport:
        "TransJakarta: Turun di Halte CSW, lanjut ojol ke Jl. Kemang Raya No. 88",
    },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890",
  },
  {
    id: 2,
    name: "SehatKita Sudirman",
    address: "Jl. Jenderal Sudirman No. 45, Karet Tengsin",
    city: "Jakarta Pusat 10220",
    phone: "(021) 2345-6789",
    whatsapp: "6281234567891",
    hours: "07:00 - 22:00 WIB",
    is24Hours: false,
    facilities: [
      "Konsultasi Apoteker",
      "Antar Obat",
      "Dekat Stasiun MRT",
    ],
    directions: {
      car: "Dari Bundaran HI, ambil Jl. Sudirman ke arah selatan. Apotek berada di sisi kiri jalan.",
      publicTransport: "MRT: Turun di Stasiun Bendungan Hilir, jalan kaki 5 menit",
    },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890",
  },
  {
    id: 3,
    name: "SehatKita Kelapa Gading",
    address: "Mall of Indonesia Lt. 1, Unit 108",
    city: "Jakarta Utara 14240",
    phone: "(021) 3456-7890",
    whatsapp: "6281234567892",
    hours: "10:00 - 22:00 WIB",
    is24Hours: false,
    facilities: [
      "Konsultasi Apoteker",
      "Di Dalam Mall",
      "Parkir Mall",
    ],
    directions: {
      car: "Masuk Mall of Indonesia dari pintu utama. Apotek berada di lantai 1 dekat pintu timur.",
      publicTransport:
        "TransJakarta: Turun di Halte Kelapa Gading, lanjut ojol ke Mall of Indonesia",
    },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8!2d106.9!3d-6.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMDAuMCJTIDEwNsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890",
  },
];

export default function CabangPage() {
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
              Lokasi Cabang
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kunjungi Cabang Terdekat
            </h1>
            <p className="text-gray-600">
              SehatKita Farma hadir di 3 lokasi strategis di Jakarta untuk
              melayani kebutuhan kesehatan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Info */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          {branch.name}
                        </h2>
                        {branch.is24Hours && (
                          <span className="inline-block bg-[#059669]/10 text-[#059669] text-xs font-semibold px-2 py-0.5 rounded-full">
                            24 JAM
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={18}
                          className="text-gray-400 mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="text-gray-700">{branch.address}</p>
                          <p className="text-gray-500 text-sm">{branch.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={18} className="text-gray-400" />
                        <span className="text-gray-700">{branch.hours}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-gray-400" />
                        <span className="text-gray-700">{branch.phone}</span>
                      </div>
                    </div>

                    {/* Facilities */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-500 mb-2">
                        Fasilitas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {branch.facilities.map((facility, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Directions */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <p className="text-sm font-medium text-gray-700 mb-3">
                        Petunjuk Arah:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Car size={16} className="text-[#059669] mt-0.5" />
                          <span className="text-gray-600">
                            {branch.directions.car}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Train size={16} className="text-[#059669] mt-0.5" />
                          <span className="text-gray-600">
                            {branch.directions.publicTransport}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`https://wa.me/${branch.whatsapp}`}
                        target="_blank"
                        className="flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-6 py-3 rounded-xl font-medium transition-colors"
                      >
                        <MessageCircle size={18} />
                        WhatsApp
                      </Link>
                      <Link
                        href={`tel:${branch.phone.replace(/[^0-9]/g, "")}`}
                        className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors"
                      >
                        <Phone size={18} />
                        Telepon
                      </Link>
                      <Link
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          branch.address + " " + branch.city
                        )}`}
                        target="_blank"
                        className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors"
                      >
                        <Navigation size={18} />
                        Navigasi
                      </Link>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="h-64 lg:h-auto bg-gray-100">
                    <iframe
                      src={branch.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "300px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Peta ${branch.name}`}
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "3 Lokasi",
                description: "Tersebar di Jakarta Selatan, Pusat, dan Utara",
              },
              {
                icon: Clock,
                title: "24 Jam",
                description: "Cabang Kemang melayani 24 jam non-stop",
              },
              {
                icon: Phone,
                title: "Mudah Dihubungi",
                description: "WhatsApp dan telepon siap melayani Anda",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-[#059669]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#059669]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-[#059669]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Tidak Bisa ke Apotek?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Tenang, kami bisa mengantar obat ke rumah Anda! Pesan via
              WhatsApp dan obat akan diantar dalam 1-2 jam.
            </p>
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-[#059669] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={20} />
              Pesan Antar Obat
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
