"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-[200px] flex-grow max-w-7xl mx-auto px-4">
        <div className="prose max-w-none text-black [&_p]:text-black [&_li]:text-black [&_ul]:text-black">
          <h1 className="text-3xl font-bold text-center mb-8 text-black">Terms of Service</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">1. Agreement Overview</h2>
            <p className="text-black">Welcome to Snap Aura. By using our services, you agree to these terms. Please read them carefully before booking our photography services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">2. Services</h2>
            <p className="text-black">Our photography services include:</p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li className="text-black">Portrait Photography</li>
              <li className="text-black">Event Photography</li>
              <li className="text-black">Commercial Photography</li>
              <li className="text-black">Photo Editing and Retouching</li>
              <li className="text-black">Digital Image Delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">3. Booking and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bookings are confirmed upon receipt of deposit payment</li>
              <li>Remaining balance is due before or on the day of the shoot</li>
              <li>Cancellation policies apply as per booking agreement</li>
              <li>Rescheduling may be subject to availability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">4. Copyright and Usage Rights</h2>
            <p>Copyright of all images remains with Snap Aura. Clients receive:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal use license for purchased images</li>
              <li>Digital copies as specified in the package</li>
              <li>Permission for social media sharing with credit</li>
              <li>Commercial usage rights must be separately negotiated</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">5. Session Policies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Please arrive on time for scheduled sessions</li>
              <li>Rescheduling requires 48-hour notice</li>
              <li>Weather-related rescheduling for outdoor shoots</li>
              <li>Shot list must be provided in advance for events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">6. Image Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Digital images delivered within 2-3 weeks</li>
              <li>Preview selection provided when applicable</li>
              <li>Online gallery access for 30 days</li>
              <li>Additional copies available for purchase</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">7. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information</li>
              <li>Secure necessary permits for locations</li>
              <li>Ensure proper clothing and preparation</li>
              <li>Communicate special requirements in advance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">8. Limitation of Liability</h2>
            <p>While we strive for excellence, we cannot guarantee:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specific shots or compositions</li>
              <li>Perfect weather conditions</li>
              <li>Particular emotional responses</li>
              <li>Technical issues beyond our control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>For any questions about these terms, please contact us:</p>
            <ul className="list-none pl-6 space-y-2">
              <li>WhatsApp: +91 7729051055</li>
              <li>Instagram: _Snapaura_</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be posted on our website.</p>
            <p>Last updated: September 29, 2025</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}