// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/Homepage";
import ProfilPage from "./pages/ProfilPage";
import Lenis from "@studio-freight/lenis";
import ServicePage from "./pages/ServicePage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/layanan" element={<ServicePage />} />
          <Route path="/berita" element={<NewsPage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
