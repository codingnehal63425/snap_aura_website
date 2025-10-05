"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-[#0D0D0D] shadow-lg shadow-[#E5097F]/20 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          } hover:translate-y-0`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Desktop Layout - Single Line */}
          <div className="hidden lg:flex items-center justify-between gap-8">
            {/* Left: Brand Name */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl xl:text-3xl font-bold whitespace-nowrap">
                <span className="text-white">
                  Snap Aura by{" "}
                </span>
                <span className="bg-[#E5097F] text-white px-3 py-1 rounded-lg">
                  Jayita Laskar
                </span>
              </h1>
            </Link>

            {/* Center: Menu Items */}
            <nav className="flex gap-3 xl:gap-4">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`px-4 py-2 font-medium rounded-lg transition-all duration-300 ${isActive
                        ? "bg-[#E5097F] text-white shadow-lg shadow-[#E5097F]/30"
                        : "border-2 text-[#C0C0C0] border-[#E5097F] hover:border-[#FFD369] hover:text-white hover:shadow-lg hover:shadow-[#FFD369]/30"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Social Icons */}
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="https://wa.me/917729051055"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#FFD369] hover:bg-[#FFD369] hover:border-transparent transition-all duration-300 group"
              >
                <Image
                  src='/assets/whatapp.png'
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="brightness-0 invert group-hover:invert-0 transition-all"
                />
              </a>
              <a
                href="https://instagram.com/_Snapaura_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#E5097F] hover:bg-[#E5097F] hover:border-transparent transition-all duration-300 group"
              >
                <Image
                  src='/assets/instagram.png'
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="brightness-0 invert group-hover:invert-0 transition-all"
                />
              </a>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between">
            {/* Left: Brand Name */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl font-bold text-[#E5097F]">
                Snap Aura
              </h1>
            </Link>

            {/* Right: Menu Button and Social Icons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-10 px-4 flex items-center gap-2 rounded-lg font-medium text-[#C0C0C0] border-2 border-[#E5097F] hover:shadow-lg hover:shadow-[#E5097F]/30 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-[#E5097F]">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                </svg>
                <span>Menu</span>
              </button>

              <a
                href="https://wa.me/917729051055"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#FFD369] hover:bg-[#FFD369] transition-all group"
              >
                <Image
                  src='/assets/whatapp.png'
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="brightness-0 invert group-hover:invert-0 transition-all"
                />
              </a>

              <a
                href="https://instagram.com/_Snapaura_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#E5097F] hover:bg-[#E5097F] transition-all group"
              >
                <Image
                  src='/assets/instagram.png'
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="brightness-0 invert group-hover:invert-0 transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu */}
          <div className="lg:hidden fixed top-[72px] left-0 w-full bg-[#0D0D0D] z-50 shadow-2xl border-t border-[#E5097F]/30">
            <div className="max-w-7xl mx-auto p-4">
              <div className="grid grid-cols-2 gap-3">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 font-medium rounded-lg text-center transition-all duration-300 ${isActive
                          ? "bg-[#E5097F] text-white shadow-lg shadow-[#E5097F]/30"
                          : "border-2 text-[#C0C0C0] border-[#E5097F] hover:shadow-lg hover:shadow-[#FFD369]/30 hover:text-white"
                        }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;