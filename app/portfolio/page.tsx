"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";

const Portfolio: React.FC = () => {
  // Gallery images by category
  const imagesByCategory = {
    Fashion: [
      { src: "/assets/d1.png", alt: "Fashion Image 1" },
      { src: "/assets/d1.png", alt: "Fashion Image 1" },
      { src: "/assets/d1.png", alt: "Fashion Image 1" },
      { src: "/assets/d1.png", alt: "Fashion Image 1" },
      { src: "/assets/d1.png", alt: "Fashion Image 1" },
      { src: "/assets/d1.png", alt: "Fashion Image 1" },
      { src: "/assets/d1.png", alt: "Fashion Image 1" },
      { src: "/assets/d1.png", alt: "Fashion Image 1" },
      { src: "/assets/d1.png", alt: "Fashion Image 1" },

    ],
    Product: [
      { src: "/assets/d2.png", alt: "Product Image 1" },
      { src: "/assets/d2.png", alt: "Product Image 1" },
      { src: "/assets/d2.png", alt: "Product Image 1" },
      { src: "/assets/d2.png", alt: "Product Image 1" },
      { src: "/assets/d2.png", alt: "Product Image 1" },
      { src: "/assets/d2.png", alt: "Product Image 1" },
      { src: "/assets/d2.png", alt: "Product Image 1" },
      { src: "/assets/d2.png", alt: "Product Image 1" },
      { src: "/assets/d2.png", alt: "Product Image 1" },
    ],

    Maternity: [
      { src: "/assets/d3.png", alt: "Maternity Image 1" },
      { src: "/assets/d3.png", alt: "Maternity Image 1" },
      { src: "/assets/d3.png", alt: "Maternity Image 1" },
      { src: "/assets/d3.png", alt: "Maternity Image 1" },
      { src: "/assets/d3.png", alt: "Maternity Image 1" },
      { src: "/assets/d3.png", alt: "Maternity Image 1" },
      { src: "/assets/d3.png", alt: "Maternity Image 1" },
      { src: "/assets/d3.png", alt: "Maternity Image 1" },
      { src: "/assets/d3.png", alt: "Maternity Image 1" },
    ],

    Event: [
      { src: "/assets/d4.png", alt: "Event Image 1" },
      { src: "/assets/d4.png", alt: "Event Image 2" },
      { src: "/assets/d4.png", alt: "Event Image 3" },
      { src: "/assets/d4.png", alt: "Event Image 4" },
      { src: "/assets/d4.png", alt: "Event Image 5" },
      { src: "/assets/d4.png", alt: "Event Image 6" },
      { src: "/assets/d4.png", alt: "Event Image 3" },
      { src: "/assets/d4.png", alt: "Event Image 4" },
      { src: "/assets/d4.png", alt: "Event Image 5" },
      { src: "/assets/d4.png", alt: "Event Image 6" },
    ],
    Beauty: [
      { src: "/assets/d5.png", alt: "Beauty Image 1" },
      { src: "/assets/d5.png", alt: "Beauty Image 2" },
      { src: "/assets/d5.png", alt: "Beauty Image 3" },
      { src: "/assets/d5.png", alt: "Beauty Image 4" },
      { src: "/assets/d6.png", alt: "Beauty Image 5" },
    ],
    Home: [
      { src: "/assets/d6.png", alt: "Home Image 1" },
      { src: "/assets/d6.png", alt: "Home Image 2" },
      { src: "/assets/d6.png", alt: "Home Image 3" },
      { src: "/assets/d6.png", alt: "Home Image 4" },
      { src: "/assets/d6.png", alt: "Home Image 5" },
      { src: "/assets/d6.png", alt: "Home Image 6" },
    ],
  };

  // Filter categories
  const categories = ["Fashion", "Product", "Maternity", "Event", "Beauty", "Home"];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <>
      <Header />
      <main className="bg-white text-black pt-32 pb-16">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent px-4">
          Portfolio
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mediumtransition-all duration-300 ${activeCategory === cat
                ? "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white border-transparent shadow-lg shadow-pink-200"
                : " border-2  bg-transparent border-[#ee2a7b] bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent hover:border-[#f9ce34] hover:shadow-lg hover:shadow-pink-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <ImageGallery images={imagesByCategory[activeCategory as keyof typeof imagesByCategory]} />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Portfolio;
