"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface ImageType {
  src: string;
  alt: string;
}

const galleryImages: ImageType[] = [
  { src: "/assets/d1.png", alt: "Gallery Image 1" },
  { src: "/assets/d2.png", alt: "Gallery Image 2" },
  { src: "/assets/d3.png", alt: "Gallery Image 3" },
  { src: "/assets/d4.png", alt: "Gallery Image 4" },
  { src: "/assets/d5.png", alt: "Gallery Image 5" },
  { src: "/assets/d6.png", alt: "Gallery Image 6" },
  { src: "/assets/d7.png", alt: "Gallery Image 7" },
  { src: "/assets/d8.png", alt: "Gallery Image 8" },
  { src: "/assets/d1.png", alt: "Gallery Image 9" },
  { src: "/assets/d2.png", alt: "Gallery Image 10" },
  { src: "/assets/d3.png", alt: "Gallery Image 11" },
  { src: "/assets/d4.png", alt: "Gallery Image 12" },
  { src: "/assets/d5.png", alt: "Gallery Image 13" },
  { src: "/assets/d6.png", alt: "Gallery Image 14" },
  { src: "/assets/d7.png", alt: "Gallery Image 15" },
  { src: "/assets/d8.png", alt: "Gallery Image 16" },
  { src: "/assets/d1.png", alt: "Gallery Image 17" },
  { src: "/assets/d2.png", alt: "Gallery Image 18" },
  { src: "/assets/d3.png", alt: "Gallery Image 19" },
  { src: "/assets/d4.png", alt: "Gallery Image 20" },
  { src: "/assets/d5.png", alt: "Gallery Image 21" },
  { src: "/assets/d6.png", alt: "Gallery Image 22" },
  { src: "/assets/d7.png", alt: "Gallery Image 23" },
  { src: "/assets/d8.png", alt: "Gallery Image 24" },
  { src: "/assets/d1.png", alt: "Gallery Image 25" },
  { src: "/assets/d2.png", alt: "Gallery Image 26" },
  { src: "/assets/d3.png", alt: "Gallery Image 27" },
  { src: "/assets/d4.png", alt: "Gallery Image 28" },
  { src: "/assets/d5.png", alt: "Gallery Image 29" },
  { src: "/assets/d6.png", alt: "Gallery Image 30" },
    { src: "/assets/d1.png", alt: "Gallery Image 1" },
  { src: "/assets/d2.png", alt: "Gallery Image 2" },
  { src: "/assets/d3.png", alt: "Gallery Image 3" },
  { src: "/assets/d4.png", alt: "Gallery Image 4" },
  { src: "/assets/d5.png", alt: "Gallery Image 5" },
  { src: "/assets/d6.png", alt: "Gallery Image 6" },
  { src: "/assets/d7.png", alt: "Gallery Image 7" },
  { src: "/assets/d8.png", alt: "Gallery Image 8" },
  { src: "/assets/d1.png", alt: "Gallery Image 9" },
  { src: "/assets/d2.png", alt: "Gallery Image 10" },
  { src: "/assets/d3.png", alt: "Gallery Image 11" },
  { src: "/assets/d4.png", alt: "Gallery Image 12" },
  { src: "/assets/d5.png", alt: "Gallery Image 13" },
  { src: "/assets/d6.png", alt: "Gallery Image 14" },
  { src: "/assets/d7.png", alt: "Gallery Image 15" },
  { src: "/assets/d8.png", alt: "Gallery Image 16" },
  { src: "/assets/d1.png", alt: "Gallery Image 17" },
  { src: "/assets/d2.png", alt: "Gallery Image 18" },
 
 
];

export default function Home() {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowLeft" && selectedImageIndex !== null) handlePrevious();
      if (e.key === "ArrowRight" && selectedImageIndex !== null) handleNext();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImageIndex]);

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const handleNext = () => {
    if (selectedImageIndex === null || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImageIndex((prev) =>
        prev === null ? 0 : (prev + 1) % galleryImages.length
      );
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevious = () => {
    if (selectedImageIndex === null || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImageIndex((prev) =>
        prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length
      );
      setIsAnimating(false);
    }, 300);
  };

  const handleThumbnailClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImageIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
      <Header />
      <main className="pt-[80px] flex-grow">
        {/* Image Gallery - Full Width, No Spacing */}
        <div className="grid grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden bg-[#1a1a1a] cursor-pointer group"
              onClick={() => handleImageClick(index)}
            >
              {/* Loading animation */}
              {!loadedImages[image.src] && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]" />
              )}
              <Image
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                sizes="(max-width: 1024px) 33.33vw, 16.66vw"
                className={`w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${
                  loadedImages[image.src] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(image.src)}
              />
            </div>
          ))}
        </div>

        {/* Image Modal with Smooth Animation */}
        {selectedImageIndex !== null && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center transition-opacity duration-300 ${
              selectedImageIndex !== null ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseModal}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl z-50 w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 rounded-full transition-all hover:bg-opacity-70"
              onClick={handleCloseModal}
            >
              ×
            </button>

            {/* Main Image Container */}
            <div className="relative w-full h-[calc(100vh-180px)] flex items-center justify-center px-16">
              {/* Previous Button */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-5xl z-50 w-14 h-14 flex items-center justify-center bg-black bg-opacity-50 rounded-full transition-all hover:bg-opacity-70 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                ‹
              </button>

              {/* Main Image */}
              <div
                className={`relative max-w-[80vw] max-h-full transition-all duration-300 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImageIndex].src}
                  alt={galleryImages[selectedImageIndex].alt}
                  width={0}
                  height={0}
                  sizes="80vw"
                  className="w-auto h-auto max-w-full max-h-[calc(100vh-180px)] object-contain"
                  priority
                />
              </div>

              {/* Next Button */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-5xl z-50 w-14 h-14 flex items-center justify-center bg-black bg-opacity-50 rounded-full transition-all hover:bg-opacity-70 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                ›
              </button>
            </div>

            {/* Thumbnail Slider at Bottom */}
            <div
              className="w-full bg-black bg-opacity-70 py-4 px-4 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-2 justify-start lg:justify-center">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden transition-all duration-300 ${
                      index === selectedImageIndex
                        ? "ring-4 ring-white scale-110"
                        : "ring-2 ring-gray-500 hover:ring-white opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
