import React from "react";
import Header from "../components/BHeader";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";

export default function Product() {
  const products = ["Jewellery", "Maternity", "T-shirts"];
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
  return (
    <>
      <main className="bg-white text-black px-4 md:px-20 lg:px-32 py-16 md:py-14">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Product
        </h1>

        {/* Product List */}
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
          {products.map((item) => (
            <div
              key={item}
              className="px-6 py-3 border border-black bg-white text-black font-medium rounded hover:bg-black hover:text-white transition-colors cursor-pointer w-full md:w-auto text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </main>

      {/* Image Gallery (currently same demo images for all categories) */}
      <ImageGallery images={galleryImages} />

      {/* Bottom Header */}
      <Header />

      {/* Footer */}
      <Footer />

      {/* Extra Space After Footer */}
      <div className="h-24"></div>
    </>
  );
}
