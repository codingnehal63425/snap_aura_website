"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer>
      {/* Footer Section */}
      <div className="bg-[#0D0D0D] text-white py-6 border-t-2 border-[#E5097F]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Layout - Single Line */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            {/* Left: Copyright */}
            <div className="text-sm whitespace-nowrap flex-shrink-0 text-white">
              © 2025 Snap Aura. All rights reserved.
            </div>

            {/* Center: Navigation Links */}
            <nav className="flex gap-2 xl:gap-3 flex-wrap justify-center">
              {footerLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg border-2 border-white transition-all duration-300 ${isActive
                        ? "bg-white text-[#E5097F]"
                        : "bg-transparent text-white hover:bg-white hover:text-[#E5097F]"
                      }`}
                  >
                    {link.name}
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
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-white hover:bg-white transition-all duration-300 group"
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
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-white hover:bg-white transition-all duration-300 group"
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
          <div className="lg:hidden space-y-4">
            {/* Copyright */}
            <div className="text-center text-sm text-white">
              © 2025 Snap Aura. All rights reserved.
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg border-2 border-white text-center transition-all duration-300 ${isActive
                        ? "bg-white text-[#E5097F]"
                        : "bg-transparent text-white hover:bg-white hover:text-[#E5097F]"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center">
              <a
                href="https://wa.me/917729051055"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-white hover:bg-white transition-all duration-300 group"
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
                className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-white hover:bg-white transition-all duration-300 group"
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
      </div>
    </footer>
  );
};

export default Footer;