"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Product", href: "/product" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center">
          {/* Centered Text with Lines aligned to bottom - Shows first on mobile */}
          <div className="flex items-end w-full justify-center mb-6">
            <div className="flex-1 border-t-4 border-black"></div>
            <div className="px-4 text-center font-bold text-black">
              <div className="sm:hidden flex flex-col">
                <span className="text-3xl">Snap Aura</span>
                <span className="text-xl mt-1">_ by Jayita Laskar _</span>
              </div>
              <span className="hidden sm:block text-xl md:text-4xl lg:text-6xl">
                _ Snap Aura by Jayita Laskar _
              </span>
            </div>
            <div className="flex-1 border-t-4 border-black"></div>
          </div>

          {/* Mobile Navigation Bar */}
          <div className="lg:hidden w-full flex justify-between items-center">
            {/* WhatsApp Icon Button */}
            <a
              href="https://wa.me/917729051055"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-black rounded"
            >
              <Image src='/assets/whatapp.png' alt="WhatsApp" width={24} height={24} />
            </a>

            {/* Center Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-12 px-4 flex items-center gap-2 border border-black rounded bg-white text-black hover:bg-black hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
              <span className="font-medium">Menu</span>
            </button>

            {/* Instagram Icon Button */}
            <a
              href="https://instagram.com/_Snapaura_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-black rounded"
            >
              <Image src='/assets/instagram.png' alt="Instagram" width={24} height={24} />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-nowrap justify-between items-center w-full px-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/917729051055"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-black text-black font-medium rounded hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Image src='/assets/whatapp.png' alt="WhatsApp" width={20} height={20} />
            7729051055
          </a>

          {/* Menu Items */}
          <div className="flex gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 py-2 border border-black text-black font-medium rounded hover:bg-black hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Instagram */}
          <a
            href="https://instagram.com/_Snapaura_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-black text-black font-medium rounded hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Image src='/assets/instagram.png' alt="Instagram" width={20} height={20} />
            _Snapaura_
          </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0  z-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu */}
          <div className="lg:hidden fixed top-[160px] left-0 w-full bg-white z-50 border-t border-black shadow-lg">
            <div className="max-w-7xl mx-auto p-4">
              <div className="grid grid-cols-2 gap-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 border border-black text-black font-medium rounded hover:bg-black hover:text-white transition-colors duration-300 text-center"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;