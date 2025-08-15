// src/components/AboutSection.jsx
import React from "react";
import bpomImage from "../../assets/images/bg-hero-2.png"; // Path gambar

export default function AboutSection() {
  return (
    <section className="py-12 px-6 md:px-16 bg-header">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Gambar */}
        <div className="relative flex justify-center md:justify-start">
          {/* Efek mirror shadow */}
          <img
            src={bpomImage}
            alt="Shadow"
            className="absolute -bottom-8 -left-8 w-112 h-112 object-cover rounded-xl scale-x-[-1] rotate-6 opacity-25 blur-md z-0"
          />

          {/* Gambar utama */}
          <img
            src={bpomImage}
            alt="Gedung BPOM"
            className="relative w-112 h-112 object-cover rounded-xl shadow-lg z-10"
          />
        </div>

        {/* Teks */}
        <div className="">
          <h2 className=" text-white    text-2xl md:text-6xl font-bold mb-12">
            BALAI BESAR POM PADANG
          </h2>
          <p className="text-2xl text-white/50 mb-12 leading-relaxed">
            Balai Besar POM di Padang merupakan Unit Pelaksana Teknis Badan POM,
            sesuai Keputusan Kepala BPOM No. 05018/SK/KBPOM tahun 2001 dengan
            perubahan terakhir Peraturan Kepala BPOM Nomor 12 Tahun 2018.
          </p>
          <a
            href="/profil"
            className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full text-sm font-medium transition"
          >
            Lihat Profil Lengkap
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
