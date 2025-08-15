// src/components/NewsSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import newsImage from "../../assets/images/hero-bg.png"; // ganti sesuai aset kamu

export default function NewsSection() {
  const mainNews = [
    {
      title: "Tips Memilih Makanan Kemasan yang Aman",
      date: "28 Agustus 2025",
      desc: "Kenali cara membaca label gizi, tanggal kedaluwarsa, dan kode produksi pada makanan kemasan. Dengan memahami informasi ini, konsumen dapat menghindari produk yang tidak aman atau kadaluarsa.",
      image: newsImage,
    },
    {
      title: "Penggerebekan Pabrik Obat Ilegal di Jakarta",
      date: "28 Agustus 2025",
      desc: "BPOM menggerebek pabrik obat ilegal di Jakarta, menemukan ratusan obat tanpa izin edar.",
      image: newsImage,
    },
    {
      title: "Edukasi Penggunaan Suplemen di Kalangan Remaja",
      date: "28 Agustus 2025",
      desc: "BPOM mengedukasi masyarakat, terutama remaja, untuk mengonsumsi suplemen sesuai kebutuhan.",
      image: newsImage,
    },
  ];

  const latestNews = [
    {
      title: "Edukasi Keamanan Pangan di Sekolah",
      date: "28 Agustus 2025",
      desc: "Sosialisasi membaca label gizi dan masa kedaluwarsa bagi siswa sekolah.",
      image: newsImage,
    },
    {
      title: "Kolaborasi Pengawasan Pangan Daerah",
      date: "28 Agustus 2025",
      desc: "Sinergi BPOM dengan pemerintah daerah memperkuat pengawasan pangan.",
      image: newsImage,
    },
    {
      title: "Pelatihan Inspeksi Pangan",
      date: "28 Agustus 2025",
      desc: "Pelatihan bagi petugas pengawas untuk meningkatkan keamanan pangan di masyarakat.",
      image: newsImage,
    },
    {
      title: "Kampanye Makanan Aman",
      date: "28 Agustus 2025",
      desc: "Kampanye nasional untuk mengedukasi masyarakat tentang makanan aman.",
      image: newsImage,
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-white mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-blue-900 mb-8">
          BERITA DAN EVENT
        </h2>

        {/* Slider Berita Utama */}
        <div className="mb-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }} // <-- ini bikin otomatis
            spaceBetween={20}
            slidesPerView={1}
            className="mb-10"
          >
            {mainNews.map((news, i) => (
              <SwiperSlide key={i}>
                <article className=" rounded-2xl overflow-hidden shadow">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div>
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-80 md:h-[420px] object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-10 flex flex-col justify-center">
                      <h3 className="text-xl md:text-3xl font-semibold mb-3">
                        {news.title}
                      </h3>
                      <p className="text-sm text-header mb-5">{news.date}</p>
                      <p className="text-gray-700 leading-relaxed text-base mb-6">
                        {news.desc}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Lihat Selengkapnya →
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Header Terbaru */}
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-2xl font-bold text-blue-900">Terbaru</h4>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:underline text-sm"
          >
            Lihat Semua →
          </a>
        </div>

        {/* Grid berita terbaru */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNews.map((n, i) => (
            <a
              key={i}
              href="#"
              className=" rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
            >
              <img
                src={n.image}
                alt={n.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-medium text-header">{n.date}</p>
                <h5 className="text-base font-semibold mt-2">{n.title}</h5>
                <p className="text-sm text-gray-600 mt-2 line-clamp-4">
                  {n.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
