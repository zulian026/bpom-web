import React, { useState, useEffect } from "react";
import heroBg from "../assets/images/hero-bg.png";
import {
  Info,
  Target,
  ClipboardList,
  User,
  Users,
  HeartHandshake,
  Activity,
  MapPin,
  UserCircle,
  Lightbulb,
  Award,
  Scale,
  Handshake,
  BookOpen,
  Building,
  Phone,
} from "lucide-react";

const tabs = [
  { id: "sejarah", label: "Sejarah", icon: Info },
  { id: "visi-misi", label: "Visi & Misi", icon: Target },
  { id: "tugas-fungsi", label: "Tugas Pokok & Fungsi", icon: ClipboardList },
  { id: "profil-kepala", label: "Profil Kepala BPOM di Padang", icon: User },
  { id: "struktur", label: "Struktur Organisasi", icon: Users },
  { id: "budaya", label: "Budaya Organisasi", icon: HeartHandshake },
  { id: "kegiatan", label: "Kegiatan", icon: Activity },
];

// Konten tiap tab
const tabContent = {
  sejarah: (
    <p>
      Balai POM di Padang didirikan untuk mengawasi keamanan obat dan makanan di
      wilayah Sumatera Barat...
    </p>
  ),
  "visi-misi": (
    <div>
      <h3 className="font-semibold mb-2">Visi</h3>
      <p>
        Mewujudkan masyarakat yang terlindungi dari obat dan makanan berbahaya.
      </p>
      <h3 className="font-semibold mt-4 mb-2">Misi</h3>
      <ul className="list-disc pl-5">
        <li>Pengawasan berkualitas</li>
        <li>Peningkatan kesadaran masyarakat</li>
      </ul>
    </div>
  ),
  struktur: (
    <p>
      Struktur organisasi terdiri dari kepala balai, bidang pengawasan, bidang
      laboratorium, dan staf administrasi.
    </p>
  ),
  prestasi: (
    <p>
      Balai POM di Padang telah meraih berbagai penghargaan tingkat nasional
      dalam bidang pengawasan obat dan makanan.
    </p>
  ),
};

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState("sejarah");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      {/* HEADER ala HERO */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-0"></div>

        {/* Overlay biru diagonal */}
        <div className="absolute inset-0 bg-header/95 clip-path-diagonal z-10"></div>

        {/* Konten */}
        <div
          className={`container relative z-20 mx-auto px-6 text-white text-left transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Profil Balai POM
          </h1>
          <p className="text-lg md:text-xl text-gray-200  mx-auto">
            Balai Pengawas Obat dan Makanan di Padang
          </p>
          <div className="mt-6 inline-flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <MapPin className="w-5 h-5 mr-2 text-white" />
            Sumatera Barat, Indonesia
          </div>
        </div>

        {/* Elemen floating */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-white/25 rounded-full animate-float"></div>
      </section>

      {/* TAB Navigasi */}
      <section className="bg-white/50 text-sm backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6">
          <nav className="flex overflow-x-auto gap-3 py-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-header text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-200/70"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* KONTEN Tab */}
      <section className="container mx-auto px-6 py-10">
        <div
          className={`transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {tabContent[activeTab]}
        </div>
      </section>
    </main>
  );
}
