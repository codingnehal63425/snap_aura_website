"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-[200px] flex-grow max-w-7xl mx-auto px-4">
        <div className="prose max-w-none text-black [&_p]:text-black [&_li]:text-black [&_ul]:text-black">
          <h1 className="text-3xl font-bold text-center mb-8 text-black">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">1. Introduction</h2>
            <p>Welcome to Snap Aura. This Privacy Policy explains how we collect, use, and protect your personal information when you use our photography services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Event details and preferences</li>
              <li>Photography session information</li>
              <li>Images and photographs taken during sessions</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide photography services</li>
              <li>To communicate about appointments and services</li>
              <li>To process payments</li>
              <li>To deliver final photographs and products</li>
              <li>To improve our services</li>
              <li>For marketing purposes (with consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">4. Image Rights and Usage</h2>
            <p>We respect your privacy and image rights. Images will only be used for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivering to you as part of our service</li>
              <li>Portfolio display (with explicit consent)</li>
              <li>Marketing materials (with explicit consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">5. Data Protection</h2>
            <p>We implement security measures to protect your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure storage of digital files</li>
              <li>Limited access to personal information</li>
              <li>Regular security updates</li>
              <li>Encrypted data transmission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request data correction</li>
              <li>Request data deletion</li>
              <li>Withdraw consent for image usage</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">7. Contact Us</h2>
            <p>For any privacy-related questions or requests, please contact us at:</p>
            <ul className="list-none pl-6 space-y-2">
              <li>Email: [Your Email]</li>
              <li>Phone: +91 7729051055</li>
              <li>Instagram: _Snapaura_</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">8. Updates to Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. The latest version will always be posted on our website.</p>
            <p>Last updated: September 29, 2025</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}