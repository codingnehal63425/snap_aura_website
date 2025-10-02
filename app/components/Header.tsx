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
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          } hover:translate-y-0`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Desktop Layout - Single Line */}
          <div className="hidden lg:flex items-center justify-between gap-8">
            {/* Left: Brand Name */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl xl:text-3xl font-bold whitespace-nowrap">
                <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
                  Snap Aura by{" "}
                </span>
                <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]  text-white px-3 py-1 rounded-lg">
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
                        ? "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white border-transparent shadow-lg shadow-pink-200"
                        : "border-2 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent border-[#ee2a7b] hover:border-[#f9ce34] hover:shadow-lg hover:shadow-pink-200"
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
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#f9ce34] hover:bg-gradient-to-r hover:from-[#f9ce34] hover:to-[#ee2a7b] hover:border-transparent transition-all duration-300 group"
              >
                <Image
                  src='/assets/whatapp.png'
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
              <a
                href="https://instagram.com/_Snapaura_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#6228d7] hover:bg-gradient-to-r hover:from-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent transition-all duration-300 group"
              >
                <Image
                  src='/assets/instagram.png'
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between">
            {/* Left: Brand Name */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
                Snap Aura
              </h1>
            </Link>

            {/* Right: Menu Button and Social Icons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-10 px-4 flex items-center gap-2 rounded-lg font-medium bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent border-2 border-[#ee2a7b] hover:shadow-lg hover:shadow-pink-200 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-[#ee2a7b]">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                </svg>
                <span>Menu</span>
              </button>

              <a
                href="https://wa.me/917729051055"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#f9ce34] hover:bg-gradient-to-r hover:from-[#f9ce34] hover:to-[#ee2a7b] transition-all group"
              >
                <Image
                  src='/assets/whatapp.png'
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>

              <a
                href="https://instagram.com/_Snapaura_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-[#6228d7] hover:bg-gradient-to-r hover:from-[#ee2a7b] hover:to-[#6228d7] transition-all group"
              >
                <Image
                  src='/assets/instagram.png'
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="group-hover:brightness-0 group-hover:invert transition-all"
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
            className="lg:hidden fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu */}
          <div className="lg:hidden fixed top-[72px] left-0 w-full bg-white z-50 shadow-2xl">
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
                          ? "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white border-transparent shadow-lg shadow-pink-200"
                          : "border-2  bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent border-[#ee2a7b] hover:shadow-lg hover:shadow-pink-200"
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