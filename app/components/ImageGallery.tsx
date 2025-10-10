"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageType {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageType[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
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
        prev === null ? 0 : (prev + 1) % images.length
      );
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevious = () => {
    if (selectedImageIndex === null || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImageIndex((prev) =>
        prev === null ? 0 : (prev - 1 + images.length) % images.length
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
    <>
      {/* Image Gallery - Full Width, No Spacing */}
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {images.map((image, index) => (
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
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
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
              {images.map((image, index) => (
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
    </>
  );
};

export default ImageGallery;