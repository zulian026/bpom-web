// src/components/Footer.jsx
import React from "react";
import {
  Twitter,
  Youtube,
  Instagram,
  Facebook,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Background biru dengan lengkungan smooth */}
      <svg
        className="absolute top-0 right-0 h-full w-[65%] lg:w-[75%]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M 30 0 Q 10 50 0 100 L 100 100 L 100 0 Z" fill="#003366" />
      </svg>

      <div className="max-w-88xl mx-auto relative z-10 grid md:grid-cols-2">
        {/* Kiri */}
        <div className="p-4 flex flex-col items-center md:items-start text-center md:text-left md:pl-16 md:translate-x-8">
          <img src={logo} alt="BPOM Logo" className="w-28 mb-2" />
          <p className="text-sm font-bold text-gray-700 text-center">
            BADAN POM
          </p>
          <p className="text-xs font-semibold text-gray-600 mb-4 text-center">
            Balai Besar POM di PADANG
          </p>
          <div className="flex space-x-4 mt-2 text-blue-700">
            <a href="#">
              <Twitter size={20} />
            </a>
            <a href="#">
              <Youtube size={20} />
            </a>
            <a href="#">
              <Instagram size={20} />
            </a>
            <a href="#">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Kanan */}
        <div className="p-6 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kontak */}
            <div>
              <h3 className="text-lg font-bold mb-3">Kontak</h3>
              <p className="flex items-start space-x-2 mb-2">
                <MapPin className="text-orange-500 mt-1" size={18} />
                <span>
                  Jalan Gajah Mada, Gunung Pangilun, Nanggalo, Gn. Pangilun,
                  Kec. Padang Utara, Kota Padang, Sumatera Barat 25173
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="text-cyan-400" size={18} />
                <a href="tel:07517055213" className="hover:underline">
                  (0751) 7055213
                </a>
              </p>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-lg font-bold mb-3">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Profil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Berita
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Kontak
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <p className="font-bold">Pengunjung</p>
                <p>Hari ini: 101</p>
                <p>Bulan ini: 3151</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
