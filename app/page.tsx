import Header from './components/Header';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';

// This is a placeholder. You'll need to add your actual images here
const galleryImages = [
  { src: '/assets/d1.png', alt: 'Gallery Image 1' },
  { src: '/assets/d2.png', alt: 'Gallery Image 2' },
  { src: '/assets/d3.png', alt: 'Gallery Image 3' },
  { src: '/assets/d4.png', alt: 'Gallery Image 4' },
  { src: '/assets/d5.png', alt: 'Gallery Image 5' },
  { src: '/assets/d6.png', alt: 'Gallery Image 6' },
  { src: '/assets/d7.png', alt: 'Gallery Image 7' },
  { src: '/assets/d8.png', alt: 'Gallery Image 8' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-[200px] flex-grow">
        <div className="max-w-7xl mx-auto">
          <ImageGallery images={galleryImages} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
