"use client";

import Link from "next/link";
import Image from "next/image";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Product", href: "/product" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Snap Aura by Jayita Laskar</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917729051055"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300"
              >
                <Image src='/assets/whatapp.png' alt="WhatsApp" width={20} height={20} className="invert" />
                <span className="hidden sm:inline">7729051055</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/_Snapaura_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300"
              >
                <Image src='/assets/instagram.png' alt="Instagram" width={20} height={20} className="invert" />
                <span className="hidden sm:inline">_Snapaura_</span>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Quick Links</h3>
            {/* Main Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {mainLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300 text-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Legal Links in one line */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300 text-center whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Snap Aura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;