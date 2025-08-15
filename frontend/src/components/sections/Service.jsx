import React, { useState } from "react";
import {
  BookOpen,
  HelpCircle,
  Shield,
  Users,
  MessageCircle,
  FileText,
} from "lucide-react";
import siipIcon from "../../assets/icons/Siip.png";

export default function LayananKami() {
  const [tab, setTab] = useState("internal");

  const layananData = {
    internal: [
      {
        icon: siipIcon,
        title: "SIIP",
        desc: "Sampaikan keluhan atau ajukan pertanyaan terkait produk obat dan makanan.",
        btn: "Ajukan Pertanyaan",
      },
      {
        icon: <BookOpen size={40} strokeWidth={1.75} />,
        title: "Kompetensi Sdm",
        desc: "Informasi lengkap dan daftar untuk pengiriman sampel produk.",
        btn: "Lihat Info",
      },
      {
        icon: <HelpCircle size={40} strokeWidth={1.75} />,
        title: "Pengukuran Kinerja",
        desc: "Sampaikan keluhan atau ajukan pertanyaan terkait produk obat dan makanan.",
        btn: "Ajukan Pertanyaan",
      },
      {
        icon: <HelpCircle size={40} strokeWidth={1.75} />,
        title: "Helpdesk Bpom Di Padang",
        desc: "Sampaikan keluhan atau ajukan pertanyaan terkait produk obat dan makanan.",
        btn: "Ajukan Pertanyaan",
      },
      {
        icon: <HelpCircle size={40} strokeWidth={1.75} />,
        title: "Whistlle Blowing",
        desc: "Sampaikan keluhan atau ajukan pertanyaan terkait produk obat dan makanan.",
        btn: "Ajukan Pertanyaan",
      },
    ],
    eksternal: [
      {
        icon: <HelpCircle size={40} strokeWidth={1.75} />,
        title: "Pengaduan Masyarakat",
        desc: "Laporkan masalah terkait obat dan makanan.",
        btn: "Ajukan Pengaduan",
      },
      {
        icon: <BookOpen size={40} strokeWidth={1.75} />,
        title: "Informasi Produk",
        desc: "Cari informasi resmi terkait obat dan makanan.",
        btn: "Lihat Info",
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-header mb-2">Layanan Aplikasi Kami</h2>
        <p className="text-gray-600 mb-8">
          Bisa digunakan kapan saja dan dimana saja
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-12 relative">
          {/* Background indicator */}
          <div className="absolute inset-0 flex justify-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-1 shadow-xl border border-white/20">
              <div className="flex">
                {["internal", "eksternal"].map((t) => (
                  <div key={t} className="relative">
                    <button
                      onClick={() => setTab(t)}
                      className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden group ${
                        tab === t
                          ? "text-white"
                          : "text-gray-700 hover:text-header"
                      }`}
                    >
                      {/* Active background */}
                      {tab === t && (
                        <div className="absolute inset-0 bg-gradient-to-r from-header to-header/90 rounded-xl shadow-lg transition-all duration-500"></div>
                      )}

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-header/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Text */}
                      <span className="relative z-10 flex items-center gap-2">
                        {t === "internal" ? (
                          <>
                            <Users size={18} />
                            Aplikasi Internal
                          </>
                        ) : (
                          <>
                            <Shield size={18} />
                            Aplikasi Eksternal
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer for positioning */}
          <div className="bg-transparent rounded-2xl p-1">
            <div className="flex">
              {["internal", "eksternal"].map((t) => (
                <div key={t} className="px-8 py-4">
                  <span className="opacity-0 font-semibold flex items-center gap-2">
                    {t === "internal" ? (
                      <>
                        <Users size={18} />
                        Layanan Internal
                      </>
                    ) : (
                      <>
                        <Shield size={18} />
                        Layanan Eksternal
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {layananData[tab].map((item, index) => {
            const cornerColors = [
              "bg-red-500",
              "bg-blue-500",
              "bg-green-500",
              "bg-yellow-500",
              "bg-purple-500",
            ];
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center relative overflow-hidden hover:shadow-lg transition"
              >
                {/* Nomor urut & garis pojok kanan */}
                <span className="absolute top-3 left-4 text-gray-400 font-semibold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`absolute top-0 right-0 w-2 h-8 rounded-bl-lg ${
                    cornerColors[index % cornerColors.length]
                  }`}
                ></span>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 flex items-center justify-center">
                    {typeof item.icon === "string" ? (
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      item.icon
                    )}
                  </div>
                </div>

                {/* Judul */}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{item.desc}</p>

                {/* Tombol */}
                <button className="bg-header text-white px-5 py-2 rounded-full hover:bg-red-600 transition">
                  {item.btn}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
