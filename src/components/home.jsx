import { Mail, Phone, Facebook, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "../assets/Background.png";
import Logo from "../assets/Logo-removebg.png";
import React, { useState, useEffect } from "react";
import AdImage1 from "../assets/banner/elc.jpeg";
import AdImage2 from "../assets/banner/joy1.jpeg";
import AdImage3 from "../assets/banner/joy2.jpeg";
import AdImage4 from "../assets/banner/Longtorai.jpg"
import Banner from "../assets/Payment_banner.png";
const adImages = [AdImage1, AdImage2, AdImage3, AdImage4];

export default function HomePage() {
    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % adImages.length);
    }, 4000); // slide every 4 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.img
          src={Logo}
          alt="Tripura Durga Puja"
          className="relative z-10 w-40 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="relative z-10 text-4xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Tripura Durga Puja 2025
        </motion.h1>
        <p className="relative z-10 mt-4 text-lg md:text-xl text-center max-w-2xl">
          Experience the devotion, culture, and celebration of Tripura’s grand Durga Puja.
          🌸 Bringing the festival to your screen 🌸
        </p>
        {/* CTA */}
        {/* <motion.a
          href="#collab"
          className="relative z-10 mt-6 px-6 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          Partner With Us
        </motion.a> */}
      </div>

      {/* Ad Space - Banner */}
      {/* <section className="py-6 px-6 md:px-20 bg-gray-100 text-center">
        <div className="bg-white border rounded-lg shadow-md py-10">
          <h2 className="text-xl font-bold mb-2">🌟 Advertisement Space</h2>
          <p className="text-gray-600">Your brand here. Reach thousands during Durga Puja.</p>
        </div>
      </section> */}


{/* Banner new */}
    <section className="py-6 px-6 md:px-20 bg-gray-100 text-center">
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence>
          <motion.img
            key={current}
            src={adImages[current]}
            alt={`Advertisement ${current + 1}`}
            className="absolute w-full h-full object-contain mx-auto my-auto"
            style={{ top: 0, bottom: 0, left: 0, right: 0, margin: "auto" }}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {adImages.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-blue-600 scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>




      {/* Listings Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore the Festivities
        </h2>
<div className="grid md:grid-cols-3 gap-8">
  <div className="bg-white shadow-lg rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
    <h3 className="text-xl font-semibold mb-2">Pandal Listings</h3>
    <p>
      Discover Tripura’s most creative pandals with live updates & routes.
      Can't attend? Experience them online.
    </p>
  </div>

  <div className="bg-white shadow-lg rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-50">
    <h3 className="text-xl font-semibold mb-2">Food Places</h3>
    <p>
      Explore the best food stalls, street bites & festive feasts.
      Taste the true flavor of Puja.
    </p>
  </div>

  <div className="bg-white shadow-lg rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-pink-50">
    <h3 className="text-xl font-semibold mb-2">Pre-Puja Shopping</h3>
    <p>
      Sarees, handicrafts & festive wear — shop everything you need
      to make your Puja special.
    </p>
  </div>
</div>
<div className="py-4"></div>

        <div className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center">
          {/* Wrapper for hover + mobile text */}
          <a
            href="https://rzp.io/rzp/FcuyQeGb"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex flex-col items-center"
          >
            {/* Banner Image */}
            <img
              src={Banner}
              alt="Self Advertisement"
              className="max-w-full max-h-[400px] object-contain rounded-lg shadow-md mb-2 transform transition-transform duration-300 group-hover:scale-110 cursor-pointer"
            />

            {/* Hover / Mobile Text */}
            <span
              className="
        w-full text-center text-white text-sm md:text-base font-semibold rounded-md
        bg-blue-600 py-2
        opacity-100 md:opacity-0 md:group-hover:opacity-100
        transition-opacity duration-300
      "
            >
              Click on the banner to get the subscription
            </span>
          </a>

          {/* Download Button */}
          <a
            href="/Payment_banner.png"
            download="Payment_Banner.png"
            className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:from-yellow-600 hover:to-yellow-700 transition duration-300"
          >
            📥 Download Banner
          </a>
        </div>





      </section>

      {/* Collaboration Section */}
      {/* <section id="collab" className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Collaborate With Us</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Be part of Tripura’s biggest Durga Puja digital celebration.
          Showcase your brand to thousands of devotees & visitors.
        </p>
        <a
          href="mailto:info@rjrinfinity.com"
          className="px-6 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition"
        >
          Become a Partner
        </a>
      </section> */}

      {/* Side Ad */}
      {/* <section className="py-6 px-6 md:px-20 bg-gray-100 text-center">
        <div className="bg-white border rounded-lg shadow-md py-10">
          <h2 className="text-xl font-bold mb-2">📢 Sponsor Highlight</h2>
          <p className="text-gray-600">Feature your business here. Limited premium spots available.</p>
        </div>
      </section> */}

      {/* Ad Space - Banner */}
      {/* <section className="py-6 px-6 md:px-20 bg-gray-100 text-center">
        <div className="bg-white border rounded-lg shadow-md py-10">
          <h2 className="text-xl font-bold mb-2">🌟 Advertisement Space</h2>
          <p className="text-gray-600">Your brand here. Reach thousands during Durga Puja.</p>
        </div>
      </section> */}

      {/* Ad Space - Banner with Image */}
      {/* <section className="py-6 px-6 md:px-20 bg-gray-100 text-center">
        <div className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">🌟 Sponsored Ad</h2>
          <img
            src={AdImage}
            alt="Advertisement"
            className="w-64 h-64 object-cover rounded-lg shadow-md mb-4"
          />
          <p className="text-gray-600">Your brand here. Reach thousands during Durga Puja.</p>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-8">
          For collaborations, sponsorships, or media partnerships — let’s connect.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="mailto:info@rjrinfinity.com" className="flex items-center gap-2 text-blue-600 hover:underline">
            <Mail size={20} /> Email
          </a>
          <a href="https://wa.me/917308656861" className="flex items-center gap-2 text-green-600 hover:underline">
            <MessageCircle size={20} /> WhatsApp
          </a>
          <a href="https://www.facebook.com/tripurdurgapuja" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-700 hover:underline">
            <Facebook size={20} /> Facebook
          </a>
          <a href="tel:+919830410335" className="flex items-center gap-2 text-red-600 hover:underline">
            <Phone size={20} /> Phone
          </a>
        </div>
      </section>
    </div>
  );
}
