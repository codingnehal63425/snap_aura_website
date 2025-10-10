import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 px-4 md:px-20 lg:px-32 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 lg:mb-12 text-black">
          About Jayita Laskar
        </h1>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-shrink-0">
            <img
              src="/assets/me.png"
              alt="Jayita Laskar"
              className="rounded-lg shadow-2xl shadow-gray-400/20 w-full lg:w-auto object-cover border-2 border-black/30"
            />
          </div>

          <div className="flex-1 flex flex-col justify-start space-y-6 text-black">
            <p className="leading-relaxed">
              Every story begins with a spark. For me, it started in 2016, back in school, armed
              with nothing more than a phone camera and a curious eye. What began as playful
              experiments soon became an obsession to freeze moments, capture emotions, and turn
              the ordinary into art.
            </p>

            <p className="leading-relaxed">
              That passion led me to Annapurna College of Film and Media, where I spent three
              years immersing myself in the science and soul of photography. Light, shadows,
              composition, storytelling I learned to see beyond the frame and create visuals
              that spoke a language of their own.
            </p>

            <p className="leading-relaxed">
              After graduation, my journey took me to Mumbai the heartbeat of India creative
              and fashion industries. Here, I worked alongside celebrated designers, iconic
              brands, top modeling agencies, and seasoned Bollywood photographers. Every project
              and collaboration expanded my vision and taught me what it meant to create images
              with purpose and impact.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-black">
              What SnapAura Represents:
            </h2>

            <p className="leading-relaxed">
              SnapAura is not just a name it is a philosophy. It is about capturing more than what
              meets the eye. Every individual, every brand, every concept has an aura a unique
              essence that deserves to be seen, felt, and remembered.
            </p>

            <p className="italic font-medium text-black">
              Because true photography is not about what you see it is about what you feel.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
};

export default About;