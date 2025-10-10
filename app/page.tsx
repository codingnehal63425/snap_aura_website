"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

interface ImageType {
  src: string;
  alt: string;
}

const galleryImages: ImageType[] = [
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
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-[80px] flex-grow">
        {/* Image Gallery - Full Width, No Spacing */}
        <div className="grid grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full min-h-[200px] md:min-h-[250px] lg:min-h-[200px] overflow-hidden bg-gray-100 cursor-pointer group"
              onClick={() => handleImageClick(index)}
            >
              {/* Loading animation */}
              {!loadedImages[image.src] && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300" />
              )}
              <Image
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                sizes="(max-width: 1024px) 33.33vw, 16.66vw"
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${loadedImages[image.src] ? "opacity-100" : "opacity-0"
                  }`}
                onLoad={() => handleImageLoad(image.src)}
              />
            </div>
          ))}
        </div>

        {/* Image Modal with Smooth Animation */}
        {selectedImageIndex !== null && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center transition-opacity duration-300 ${selectedImageIndex !== null ? "opacity-100" : "opacity-0"
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
                className={`relative max-w-[80vw] max-h-full transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
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
                    className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden transition-all duration-300 ${index === selectedImageIndex
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
      <FloatingButtons />
    </div>
  );
}
