import React from "react";
import Header from "../components/BHeader";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <>
      <main className="bg-white text-black px-4 md:px-20 lg:px-32 pt-12 lg:pt-14">
        {/* Top Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 lg:mb-12">
          About Jayita / My Journey
        </h1>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-stretch gap-12">
          {/* Left Side Image with Button */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <img
              src="/assets/me.png"
              alt="Jayita Laskar"
              className="rounded-lg shadow-lg w-full object-cover lg:h-[500px] mb-4"
            />
            {/* Button below image */}
            <button className="px-6 py-2 border border-black bg-white text-black font-medium rounded hover:bg-black hover:text-white transition-colors">
              Jayita Laskar
            </button>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <p>
              Every story begins with a spark. For me, it started in 2016, back in school, armed
              with nothing more than a phone camera and a curious eye. What began as playful
              experiments soon became an obsession—to freeze moments, capture emotions, and turn
              the ordinary into art.
            </p>

            <p>
              That passion led me to Annapurna College of Film and Media, where I spent three
              years immersing myself in the science and soul of photography. Light, shadows,
              composition, storytelling—I learned to see beyond the frame and create visuals
              that spoke a language of their own.
            </p>

            <p>
              After graduation, my journey took me to Mumbai—the heartbeat of India’s creative
              and fashion industries. Here, I worked alongside celebrated designers, iconic
              brands, top modeling agencies, and seasoned Bollywood photographers. Every project
              and collaboration expanded my vision and taught me what it meant to create images
              with purpose and impact.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
              What SnapAura Represents:
            </h2>

            <p>
              SnapAura is not just a name—it’s a philosophy. It’s about capturing more than what
              meets the eye. Every individual, every brand, every concept has an aura—a unique
              essence that deserves to be seen, felt, and remembered.
            </p>

            <p className="italic font-medium">
              Because true photography isn’t about what you see—it’s about what you feel.
            </p>
          </div>
        </div>

        {/* Space between content and footer */}
        <div className="h-12 lg:h-16"></div>
      </main>

      {/* Bottom Header */}
      <Header />

      {/* Footer */}
      <Footer />

      {/* Extra space after footer */}
      <div className="h-24"></div>
    </>
  );
};

export default About;
