import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Animasi masuk saat component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Mulai fixed setelah scroll 100px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "BERANDA", path: "/" },
    { name: "PROFIL", path: "/profil" },
    { name: "LAYANAN", path: "/layanan" },
    { name: "BERITA", path: "/berita" },
    { name: "KONTAK", path: "/kontak" },
  ];

  return (
    <>
      {/* Logo Section - Always Absolute */}
      <div className="absolute top-0 left-0 z-20">
        <div className="py-4 pl-6">
          <div
            className={`
            flex items-center gap-3 
            transform transition-all duration-700 ease-out
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }
          `}
          >
            <div className="bg-white rounded-full p-1">
              <img
                src={logo}
                alt="Logo BPOM"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="w-[1px] h-8 bg-white/50"></div>
            <div className="text-white">
              <h1 className="font-semibold leading-tight">
                BALAI POM DI PADANG
              </h1>
              <p className="text-xs opacity-80">Republik Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Fixed when scrolled */}
      <nav
        className={`
    ${isScrolled ? "fixed" : "absolute"} 
    top-0 right-0 z-30
  `}
      >
        <div className="py-4 pr-0">
          <div
            className={`
        flex items-center
        ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }
        transition-transform duration-700 ease-out delay-300
      `}
          >
            <ul
              className={`
          flex items-center gap-8 bg-white border border-gray-300 rounded-l-full px-16 py-4
          ${isScrolled ? "bg-white/95 backdrop-blur-sm" : ""}
        `}
            >
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium cursor-pointer transition-colors ${
                      location.pathname === item.path
                        ? "text-header"
                        : "hover:text-header"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={`
          bg-header border-l-0 px-12 py-4
          ${isScrolled ? "bg-header/95" : ""}
        `}
            >
              <span className="text-sm font-medium text-white cursor-pointer hover:text-blue-100 transition-colors">
                SUBSITE BBPOM
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
