import React from "react";
import Header from "../components/BHeader";
import Footer from "../components/Footer";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <>
      <main className="bg-white text-black px-4 md:px-20 lg:px-32 pt-12 lg:pt-14">
        {/* Top Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact
        </h1>

        {/* Map Image */}
        <div className="w-full mb-12">
          <Image
            src="/assets/map.png"
            alt="Map"
            width={1920}
            height={600}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Info Sections */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Side - Address */}
          <div className="flex-1 flex flex-col items-start gap-4">
            <div className="flex items-start gap-3">
              <Image src="/assets/address.png" alt="Address Icon" width={24} height={24} />
              <p>
                Lens Story, 1st Floor, Solitarie Plaza, 1,2,3,4, <br />
                SURVEY NO 55/3, 1-112/SP/53/5/4F, Kondapur, Hanuman Nagar, <br />
                Hyderabad, Telangana 500084
              </p>
            </div>
          </div>

          {/* Right Side - Phone & Email */}
          <div className="flex-1 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/phone.png" alt="Phone Icon" width={24} height={24} />
              <p>077 29 051055</p>
            </div>

            <div className="flex items-center gap-3">
              <Image src="/assets/email.png" alt="Email Icon" width={24} height={24} />
              <p>JayitaLaskar20@gmail.com</p>
            </div>
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

export default Contact;
