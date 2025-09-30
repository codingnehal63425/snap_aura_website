"use client";

import React, { useState } from "react";
import Header from "../components/BHeader";   // bottom header
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";

const Portfolio: React.FC = () => {
  // Gallery images demo
  const galleryImages = [
    { src: "/assets/d1.png", alt: "Gallery Image 1" },
    { src: "/assets/d2.png", alt: "Gallery Image 2" },
    { src: "/assets/d3.png", alt: "Gallery Image 3" },
    { src: "/assets/d4.png", alt: "Gallery Image 4" },
    { src: "/assets/d5.png", alt: "Gallery Image 5" },
    { src: "/assets/d6.png", alt: "Gallery Image 6" },
    { src: "/assets/d7.png", alt: "Gallery Image 7" },
    { src: "/assets/d8.png", alt: "Gallery Image 8" },
  ];

  // Filter categories
  const categories = ["Fashion", "Portfolio", "Clothing", "Jewellery"];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <>
      <main className="bg-white text-black px-4 md:px-20 lg:px-32 py-16 md:py-14">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Portfolio
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded font-medium border transition-colors duration-200 ${activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black hover:bg-black hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Gallery (currently same demo images for all categories) */}
      </main>
      <ImageGallery images={galleryImages} />

      {/* Bottom Header */}
      <Header />

      {/* Footer */}
      <Footer />

      {/* Space after footer */}
      <div className="h-24"></div>
    </>
  );
};

export default Portfolio;
