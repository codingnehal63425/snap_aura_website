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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }));
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {images.map((image, index) => (
          <div key={index} className="relative w-full overflow-hidden bg-gray-100">
            {/* Loading animation */}
            {!loadedImages[image.src] && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300" />
            )}
            <div className="cursor-pointer group" onClick={() => handleImageClick(image.src)}>
              <Image
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 25vw"
                className={`w-full h-auto transition-all duration-300 group-hover:scale-105 ${
                  loadedImages[image.src] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(image.src)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-3xl"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={0}
              height={0}
              sizes="90vw"
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;