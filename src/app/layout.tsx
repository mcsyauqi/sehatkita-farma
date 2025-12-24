import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SehatKita Farma | Apotek 24 Jam Jakarta | Antar Obat",
  description:
    "Apotek lengkap dengan apoteker profesional. Obat resep, vitamin, alkes. Konsultasi gratis, antar obat 24 jam.",
  keywords:
    "apotek, apotek 24 jam, obat, vitamin, suplemen, konsultasi apoteker, antar obat, jakarta",
  openGraph: {
    title: "SehatKita Farma | Apotek 24 Jam Jakarta",
    description:
      "Apotek lengkap dengan apoteker profesional. Obat resep, vitamin, alkes. Konsultasi gratis, antar obat 24 jam.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
