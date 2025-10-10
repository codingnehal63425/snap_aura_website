"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
import FloatingButtons from "../components/FloatingButtons";

const Portfolio: React.FC = () => {
  // Gallery images by category
  const imagesByCategory = {
    Fashion: [
      { src: "/fashion/1.jpg", alt: "Fashion Image 1" },
      { src: "/fashion/2.jpg", alt: "Fashion Image 2" },
      { src: "/fashion/3.jpg", alt: "Fashion Image 3" },
      { src: "/fashion/4.jpg", alt: "Fashion Image 4" },
      { src: "/fashion/5.jpg", alt: "Fashion Image 5" },
      { src: "/fashion/6.jpg", alt: "Fashion Image 6" },
      { src: "/fashion/7.jpg", alt: "Fashion Image 7" },
      { src: "/fashion/8.jpg", alt: "Fashion Image 8" },
      { src: "/fashion/9.jpg", alt: "Fashion Image 9" },
      { src: "/fashion/10.jpg", alt: "Fashion Image 10" },
      { src: "/fashion/11.jpg", alt: "Fashion Image 11" },
      { src: "/fashion/12.jpg", alt: "Fashion Image 12" },
      { src: "/fashion/13.jpg", alt: "Fashion Image 13" },
      { src: "/fashion/14.jpg", alt: "Fashion Image 14" },
      { src: "/fashion/15.jpg", alt: "Fashion Image 15" },
      { src: "/fashion/16.jpg", alt: "Fashion Image 16" },
      { src: "/fashion/17.jpg", alt: "Fashion Image 17" },
      { src: "/fashion/18.jpg", alt: "Fashion Image 18" },
      { src: "/fashion/19.jpg", alt: "Fashion Image 19" },
      { src: "/fashion/20.jpg", alt: "Fashion Image 20" },
      { src: "/fashion/21.jpg", alt: "Fashion Image 21" },
      { src: "/fashion/22.jpg", alt: "Fashion Image 22" },
      { src: "/fashion/23.jpg", alt: "Fashion Image 23" },
      { src: "/fashion/24.jpg", alt: "Fashion Image 24" },
      { src: "/fashion/25.jpg", alt: "Fashion Image 25" },
      { src: "/fashion/26.jpg", alt: "Fashion Image 26" },
      { src: "/fashion/27.jpg", alt: "Fashion Image 27" },
      { src: "/fashion/28.jpg", alt: "Fashion Image 28" },
      { src: "/fashion/29.jpg", alt: "Fashion Image 29" },
      { src: "/fashion/30.jpg", alt: "Fashion Image 30" },
      { src: "/fashion/31.jpg", alt: "Fashion Image 31" },
      { src: "/fashion/32.jpg", alt: "Fashion Image 32" },
      { src: "/fashion/33.jpg", alt: "Fashion Image 33" },
      { src: "/fashion/34.jpg", alt: "Fashion Image 34" },
      { src: "/fashion/35.jpg", alt: "Fashion Image 35" },
      { src: "/fashion/36.jpg", alt: "Fashion Image 36" },
      { src: "/fashion/37.jpg", alt: "Fashion Image 37" },
      { src: "/fashion/38.jpg", alt: "Fashion Image 38" },
      { src: "/fashion/39.jpg", alt: "Fashion Image 39" },
      { src: "/fashion/40.jpg", alt: "Fashion Image 40" },
      { src: "/fashion/41.jpg", alt: "Fashion Image 41" },
      { src: "/fashion/42.jpg", alt: "Fashion Image 42" },

    ],

    Product: [
      { src: "/product/d1.jpg", alt: "Product Image 1" },
      { src: "/product/d2.jpg", alt: "Product Image 2" },
      { src: "/product/d3.jpg", alt: "Product Image 3" },
      { src: "/product/d4.jpg", alt: "Product Image 4" },
      { src: "/product/d5.jpg", alt: "Product Image 5" },
      { src: "/product/d6.jpg", alt: "Product Image 6" },
      { src: "/product/d7.jpg", alt: "Product Image 7" },
      { src: "/product/d8.jpg", alt: "Product Image 8" },
      { src: "/product/d9.jpg", alt: "Product Image 9" },
      { src: "/product/d10.jpg", alt: "Product Image 10" },
      { src: "/product/d11.jpg", alt: "Product Image 11" },
      { src: "/product/d12.jpg", alt: "Product Image 12" },
      { src: "/product/d13.jpg", alt: "Product Image 13" },
      { src: "/product/d14.jpg", alt: "Product Image 14" },
      { src: "/product/d15.jpg", alt: "Product Image 15" },
      { src: "/product/d16.jpg", alt: "Product Image 16" },
      { src: "/product/d17.jpg", alt: "Product Image 17" },
      { src: "/product/d18.jpg", alt: "Product Image 18" },
      { src: "/product/d19.jpg", alt: "Product Image 19" },
      { src: "/product/d20.jpg", alt: "Product Image 20" },
      { src: "/product/d21.jpg", alt: "Product Image 21" },
      { src: "/product/d22.jpg", alt: "Product Image 22" },
      { src: "/product/d23.jpg", alt: "Product Image 23" },
      { src: "/product/d24.jpg", alt: "Product Image 24" },
      { src: "/product/d25.jpg", alt: "Product Image 25" },
      { src: "/product/d26.jpg", alt: "Product Image 26" },
      { src: "/product/d27.jpg", alt: "Product Image 27" },
      { src: "/product/d28.jpg", alt: "Product Image 28" },
      { src: "/product/d29.jpg", alt: "Product Image 29" },
      { src: "/product/d30.jpg", alt: "Product Image 30" },
      { src: "/product/d31.jpg", alt: "Product Image 31" },

      { src: "/product/d37.jpg", alt: "Product Image 37" },
      { src: "/product/d38.jpg", alt: "Product Image 38" },
      { src: "/product/d39.jpg", alt: "Product Image 39" },
      { src: "/product/d40.jpg", alt: "Product Image 40" },
      { src: "/product/d1.jpg", alt: "Product Image 1" },

    ],


    Maternity: [
      { src: "/maternity/1.jpg", alt: "Maternity Image 1" },
      { src: "/maternity/3.jpg", alt: "Maternity Image 3" },
      { src: "/maternity/4.jpg", alt: "Maternity Image 4" },
      { src: "/maternity/5.jpg", alt: "Maternity Image 5" },
      { src: "/maternity/6.jpg", alt: "Maternity Image 6" },
      { src: "/maternity/7.jpg", alt: "Maternity Image 7" },
      { src: "/maternity/8.jpg", alt: "Maternity Image 8" },
      { src: "/maternity/9.jpg", alt: "Maternity Image 9" },
      { src: "/maternity/10.jpg", alt: "Maternity Image 10" },
      { src: "/maternity/11.jpg", alt: "Maternity Image 11" },
      { src: "/maternity/12.jpg", alt: "Maternity Image 12" },
      { src: "/maternity/13.jpg", alt: "Maternity Image 13" },
      { src: "/maternity/14.jpg", alt: "Maternity Image 14" },
      { src: "/maternity/15.jpg", alt: "Maternity Image 15" },
      { src: "/maternity/16.jpg", alt: "Maternity Image 16" },
      { src: "/maternity/17.jpg", alt: "Maternity Image 17" },
      { src: "/maternity/18.jpg", alt: "Maternity Image 18" },
      { src: "/maternity/19.jpg", alt: "Maternity Image 19" },
      { src: "/maternity/20.jpg", alt: "Maternity Image 20" },
      { src: "/maternity/21.jpg", alt: "Maternity Image 21" },
      { src: "/maternity/22.jpg", alt: "Maternity Image 22" },
      { src: "/maternity/23.jpg", alt: "Maternity Image 23" },
      { src: "/maternity/24.jpg", alt: "Maternity Image 24" },
      { src: "/maternity/25.jpg", alt: "Maternity Image 25" },
      { src: "/maternity/26.jpg", alt: "Maternity Image 26" },
      { src: "/maternity/27.jpg", alt: "Maternity Image 27" },
      { src: "/maternity/28.jpg", alt: "Maternity Image 28" },
      { src: "/maternity/29.jpg", alt: "Maternity Image 29" },
      { src: "/maternity/30.jpg", alt: "Maternity Image 30" },
      { src: "/maternity/31.jpg", alt: "Maternity Image 31" },
      { src: "/maternity/32.jpg", alt: "Maternity Image 32" },
      { src: "/maternity/33.jpg", alt: "Maternity Image 33" },
      { src: "/maternity/34.jpg", alt: "Maternity Image 34" },
      { src: "/maternity/35.jpg", alt: "Maternity Image 35" },
      { src: "/maternity/36.jpg", alt: "Maternity Image 36" },
      { src: "/maternity/37.jpg", alt: "Maternity Image 37" },
      { src: "/maternity/38.jpg", alt: "Maternity Image 38" },
      { src: "/maternity/39.jpg", alt: "Maternity Image 39" },
      { src: "/maternity/40.jpg", alt: "Maternity Image 40" },
      { src: "/maternity/41.jpg", alt: "Maternity Image 41" },
      { src: "/maternity/42.jpg", alt: "Maternity Image 42" },
      { src: "/maternity/43.jpg", alt: "Maternity Image 43" },
      { src: "/maternity/44.jpg", alt: "Maternity Image 44" },
      { src: "/maternity/45.jpg", alt: "Maternity Image 45" },
      { src: "/maternity/46.jpg", alt: "Maternity Image 46" },
      { src: "/maternity/47.jpg", alt: "Maternity Image 47" },
      { src: "/maternity/1.jpg", alt: "Maternity Image 1" },
      { src: "/maternity/3.jpg", alt: "Maternity Image 3" },
    ],


    Event: [
      { src: "/event/1.jpg", alt: "Event Image 1" },
      { src: "/event/2.jpg", alt: "Event Image 2" },
      { src: "/event/3.jpg", alt: "Event Image 3" },
      { src: "/event/4.jpg", alt: "Event Image 4" },
      { src: "/event/5.jpg", alt: "Event Image 5" },
      { src: "/event/6.jpg", alt: "Event Image 6" },
      { src: "/event/7.jpg", alt: "Event Image 7" },
      { src: "/event/8.jpg", alt: "Event Image 8" },
      { src: "/event/9.jpg", alt: "Event Image 9" },
      { src: "/event/10.jpg", alt: "Event Image 10" },
      { src: "/event/11.jpg", alt: "Event Image 11" },
      { src: "/event/12.jpg", alt: "Event Image 12" },
      { src: "/event/13.jpg", alt: "Event Image 13" },
      { src: "/event/14.jpg", alt: "Event Image 14" },
      { src: "/event/15.jpg", alt: "Event Image 15" },
      { src: "/event/16.jpg", alt: "Event Image 16" },
      { src: "/event/17.jpg", alt: "Event Image 17" },
      { src: "/event/18.jpg", alt: "Event Image 18" },
      { src: "/event/19.jpg", alt: "Event Image 19" },
      { src: "/event/20.jpg", alt: "Event Image 20" },
      { src: "/event/21.jpg", alt: "Event Image 21" },
      { src: "/event/22.jpg", alt: "Event Image 22" },
      { src: "/event/23.jpg", alt: "Event Image 23" },
      { src: "/event/24.jpg", alt: "Event Image 24" },
      { src: "/event/25.jpg", alt: "Event Image 25" },
      { src: "/event/26.jpg", alt: "Event Image 26" },
      { src: "/event/27.jpg", alt: "Event Image 27" },
      { src: "/event/28.jpg", alt: "Event Image 28" },
      { src: "/event/29.jpg", alt: "Event Image 29" },
      { src: "/event/30.jpg", alt: "Event Image 30" },
      { src: "/event/31.jpg", alt: "Event Image 31" },
      { src: "/event/32.jpg", alt: "Event Image 32" },
      { src: "/event/33.jpg", alt: "Event Image 33" },
      { src: "/event/34.jpg", alt: "Event Image 34" },
      { src: "/event/35.jpg", alt: "Event Image 35" },
      { src: "/event/36.jpg", alt: "Event Image 36" },
      { src: "/event/37.jpg", alt: "Event Image 37" },
      { src: "/event/38.jpg", alt: "Event Image 38" },
      { src: "/event/39.jpg", alt: "Event Image 39" },
      { src: "/event/40.jpg", alt: "Event Image 40" },
      { src: "/event/41.jpg", alt: "Event Image 41" },
      { src: "/event/42.jpg", alt: "Event Image 42" },
      { src: "/event/43.jpg", alt: "Event Image 43" },
      { src: "/event/44.jpg", alt: "Event Image 44" },
      { src: "/event/45.jpg", alt: "Event Image 45" },
      { src: "/event/46.jpg", alt: "Event Image 46" },
      { src: "/event/47.jpg", alt: "Event Image 47" },
      { src: "/event/48.jpg", alt: "Event Image 48" },
      { src: "/event/49.jpg", alt: "Event Image 49" },
      { src: "/event/50.jpg", alt: "Event Image 50" },
      { src: "/event/51.jpg", alt: "Event Image 51" },
      { src: "/event/52.jpg", alt: "Event Image 52" },
      { src: "/event/53.jpg", alt: "Event Image 53" },
      { src: "/event/54.jpg", alt: "Event Image 54" },
    ],

    Beauty: [
      { src: "/beauty/1.jpg", alt: "Beauty Image 1" },
      { src: "/beauty/2.jpg", alt: "Beauty Image 2" },
      { src: "/beauty/3.jpg", alt: "Beauty Image 3" },
      { src: "/beauty/4.jpg", alt: "Beauty Image 4" },
      { src: "/beauty/5.jpg", alt: "Beauty Image 5" },
      { src: "/beauty/6.jpg", alt: "Beauty Image 6" },
      { src: "/beauty/7.jpg", alt: "Beauty Image 7" },
      { src: "/beauty/8.jpg", alt: "Beauty Image 8" },
      { src: "/beauty/9.jpg", alt: "Beauty Image 9" },
      { src: "/beauty/10.jpg", alt: "Beauty Image 10" },
      { src: "/beauty/11.jpg", alt: "Beauty Image 11" },
      { src: "/beauty/12.jpg", alt: "Beauty Image 12" },
      { src: "/beauty/13.jpg", alt: "Beauty Image 13" },
      { src: "/beauty/14.jpg", alt: "Beauty Image 14" },
      { src: "/beauty/15.jpg", alt: "Beauty Image 15" },
      { src: "/beauty/16.jpg", alt: "Beauty Image 16" },
      { src: "/beauty/17.jpg", alt: "Beauty Image 17" },
      { src: "/beauty/18.jpg", alt: "Beauty Image 18" },
      { src: "/beauty/19.jpg", alt: "Beauty Image 19" },
      { src: "/beauty/20.jpg", alt: "Beauty Image 20" },
      { src: "/beauty/21.jpg", alt: "Beauty Image 21" },
      { src: "/beauty/22.jpg", alt: "Beauty Image 22" },
      { src: "/beauty/23.jpg", alt: "Beauty Image 23" },
      { src: "/beauty/24.jpg", alt: "Beauty Image 24" },
      { src: "/beauty/25.jpg", alt: "Beauty Image 25" },
      { src: "/beauty/26.jpg", alt: "Beauty Image 26" },
      { src: "/beauty/27.jpg", alt: "Beauty Image 27" },
      { src: "/beauty/28.jpg", alt: "Beauty Image 28" },
      { src: "/beauty/29.jpg", alt: "Beauty Image 29" },
      { src: "/beauty/30.jpg", alt: "Beauty Image 30" },
      { src: "/beauty/31.jpg", alt: "Beauty Image 31" },
      { src: "/beauty/32.jpg", alt: "Beauty Image 32" },
      { src: "/beauty/33.jpg", alt: "Beauty Image 33" },
      { src: "/beauty/34.jpg", alt: "Beauty Image 34" },
      { src: "/beauty/35.jpg", alt: "Beauty Image 35" },
      { src: "/beauty/36.jpg", alt: "Beauty Image 36" },
      { src: "/beauty/37.jpg", alt: "Beauty Image 37" },
      { src: "/beauty/38.jpg", alt: "Beauty Image 38" },
      { src: "/beauty/39.jpg", alt: "Beauty Image 39" },
      { src: "/beauty/40.jpg", alt: "Beauty Image 40" },
      { src: "/beauty/41.jpg", alt: "Beauty Image 41" },
      { src: "/beauty/42.jpg", alt: "Beauty Image 42" },
      { src: "/beauty/43.jpg", alt: "Beauty Image 43" },
      { src: "/beauty/44.jpg", alt: "Beauty Image 44" },
      { src: "/beauty/45.jpg", alt: "Beauty Image 45" },
      { src: "/beauty/46.jpg", alt: "Beauty Image 46" },
      { src: "/beauty/47.jpg", alt: "Beauty Image 47" },
      { src: "/beauty/48.jpg", alt: "Beauty Image 48" },
      { src: "/beauty/49.jpg", alt: "Beauty Image 49" },
      { src: "/beauty/50.jpg", alt: "Beauty Image 50" },
      { src: "/beauty/51.jpg", alt: "Beauty Image 51" },
      { src: "/beauty/52.jpg", alt: "Beauty Image 52" },
      { src: "/beauty/53.jpg", alt: "Beauty Image 53" },
      { src: "/beauty/54.jpg", alt: "Beauty Image 54" },
      { src: "/beauty/55.jpg", alt: "Beauty Image 55" },
      { src: "/beauty/56.jpg", alt: "Beauty Image 56" },
      { src: "/beauty/57.jpg", alt: "Beauty Image 57" },
      { src: "/beauty/58.jpg", alt: "Beauty Image 58" },
      { src: "/beauty/59.jpg", alt: "Beauty Image 59" },
      { src: "/beauty/60.jpg", alt: "Beauty Image 60" },
      { src: "/beauty/61.jpg", alt: "Beauty Image 61" },
      { src: "/beauty/62.jpg", alt: "Beauty Image 62" },
      { src: "/beauty/63.jpg", alt: "Beauty Image 63" },
      { src: "/beauty/64.jpg", alt: "Beauty Image 64" },
      { src: "/beauty/65.jpg", alt: "Beauty Image 65" },
      { src: "/beauty/66.jpg", alt: "Beauty Image 66" },
      { src: "/beauty/67.jpg", alt: "Beauty Image 67" },
      { src: "/beauty/68.jpg", alt: "Beauty Image 68" },
      { src: "/beauty/69.jpg", alt: "Beauty Image 69" },
      { src: "/beauty/70.jpg", alt: "Beauty Image 70" },
      { src: "/beauty/71.jpg", alt: "Beauty Image 71" },
      { src: "/beauty/72.jpg", alt: "Beauty Image 72" },
    ],

    // Home: [
    //   { src: "/assets/d6.png", alt: "Home Image 1" },
    //   { src: "/assets/d6.png", alt: "Home Image 2" },
    //   { src: "/assets/d6.png", alt: "Home Image 3" },
    //   { src: "/assets/d6.png", alt: "Home Image 4" },
    //   { src: "/assets/d6.png", alt: "Home Image 5" },
    //   { src: "/assets/d6.png", alt: "Home Image 6" },
    // ],
  };

  // Filter categories
  const categories = ["Fashion", "Product", "Maternity", "Event", "Beauty"];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 pt-32 pb-16">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-black px-4">
          Portfolio
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeCategory === cat
                ? "bg-black text-white shadow-lg"
                : "border-2 bg-transparent border-black text-black hover:bg-black hover:text-white hover:shadow-lg"
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
      <FloatingButtons />
    </>
  );
};

export default Portfolio;
