"use client";

import React from "react";
import Image from "next/image";

const FloatingButtons: React.FC = () => {
    return (
        <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-between px-4 md:px-8 pointer-events-none">
            {/* WhatsApp Button - Left */}
            <a
                href="https://wa.me/917729051055"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[#25D366]/50"
                aria-label="Contact us on WhatsApp"
            >
                <Image
                    src="/assets/whatapp.png"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="w-7 h-7 md:w-8 md:h-8 brightness-0 invert"
                />
            </a>

            {/* Instagram Button - Right */}
            <a
                href="https://instagram.com/_Snapaura_"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-pink-500/50"
                aria-label="Follow us on Instagram"
            >
                <Image
                    src="/assets/instagram.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="w-7 h-7 md:w-8 md:h-8 brightness-0 invert"
                />
            </a>
        </div>
    );
};

export default FloatingButtons;
