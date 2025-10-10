import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import FloatingButtons from "../components/FloatingButtons";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black px-4">
          Contact Us
        </h1>

        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full mb-12 rounded-xl overflow-hidden shadow-2xl bg-gray-100 p-8 border-2 border-black/30 hover:border-black transition-all duration-300">
            <Image
              src="/assets/map.png"
              alt="Location Map"
              width={1920}
              height={600}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg border-2 border-black/30 hover:border-black transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">
                    Address
                  </h3>
                  <p className="text-black leading-relaxed">
                    Lens Story, 1st Floor, Solitarie Plaza, 1,2,3,4,<br />
                    SURVEY NO 55/3, 1-112/SP/53/5/4F,<br />
                    Kondapur, Hanuman Nagar,<br />
                    Hyderabad, Telangana 500084
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl shadow-lg border-2 border-black/30 hover:border-black transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">
                    Phone
                  </h3>
                  <a href="tel:+917729051055" className="text-black hover:text-gray-700 transition-colors text-lg">
                    +91 77290 51055
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">
                    Email
                  </h3>
                  <a href="mailto:JayitaLaskar20@gmail.com" className="text-black hover:text-gray-700 transition-colors text-lg break-all">
                    JayitaLaskar20@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
              Connect With Us
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917729051055"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-black rounded-lg font-medium text-white hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-black/20"
              >
                <Image src="/assets/whatapp.png" alt="WhatsApp" width={24} height={24} />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/_Snapaura_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-black rounded-lg font-medium text-white hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-black/20"
              >
                <Image src="/assets/instagram.png" alt="Instagram" width={24} height={24} />
                <span>@_Snapaura_</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Contact;