import React, { useEffect, useState } from "react";
import heroBg from "../../assets/images/hero2.png"; // ganti dengan gambar Anda

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animasi setelah komponen mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradasi hitam dari bawah ke atas dengan animasi fade */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/20 z-0 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Overlay biru miring dengan animasi slide */}
      <div
        className={`absolute inset-0 bg-header/95 clip-path-diagonal z-10 transition-all duration-1200 ease-out ${
          isLoaded ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>

      {/* Konten utama */}
      <div className="container relative z-20 mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          {/* Judul dengan animasi slide up dan fade */}
          <h2
            className={`text-4xl md:text-5xl font-bold leading-tight transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <span
              className="inline-block animate-fade-in-word"
              style={{ animationDelay: "0.5s" }}
            >
              BALAI
            </span>{" "}
            <span
              className="inline-block animate-fade-in-word"
              style={{ animationDelay: "0.7s" }}
            >
              BESAR
            </span>
            <br />
            <span
              className="inline-block animate-fade-in-word"
              style={{ animationDelay: "0.9s" }}
            >
              POM
            </span>{" "}
            <span
              className="inline-block animate-fade-in-word"
              style={{ animationDelay: "1.1s" }}
            >
              DI
            </span>{" "}
            <span
              className="inline-block animate-fade-in-word"
              style={{ animationDelay: "1.3s" }}
            >
              PADANG
            </span>
          </h2>

          {/* Deskripsi dengan animasi slide up */}
          <p
            className={`mt-4 text-lg text-gray-200 max-w-lg transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            Melindungi kesehatan masyarakat melalui pengawasan obat dan makanan
            yang aman, bermutu, dan berkhasiat.
          </p>

          {/* Garis pembatas dengan animasi scale */}
          <div
            className={`w-10 h-1 bg-white my-6 transition-all duration-800 ease-out ${
              isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{
              transformOrigin: "left center",
              transitionDelay: "0.9s",
            }}
          ></div>

          {/* Tombol dengan animasi slide up dan bounce */}
          <div
            className={`flex gap-4 transition-all duration-1000 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1.2s" }}
          >
            <button className="bg-white text-header font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse-subtle">
              Lihat Layanan
            </button>
            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-header transition-all duration-300 transform hover:scale-105">
              Tentang Kami
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements untuk efek visual tambahan */}
      <div
        className="absolute top-20 right-20 w-2 h-2 bg-white/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-40 right-40 w-1 h-1 bg-white/40 rounded-full animate-float"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white/25 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Custom CSS untuk animasi tambahan */}
      <style jsx>{`
        @keyframes fade-in-word {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fade-in-word {
          animation: fade-in-word 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }

        .clip-path-diagonal {
          clip-path: polygon(0 0, 60% 0, 50% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
