import { Mail, Phone, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Background from "../assets/Background.png";
import Logo from "../assets/Logo-removebg.png";
import React from "react";

export default function HomePage() {
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
          Celebrate the spirit, devotion, and joy of Durga Puja in Tripura.
          For those who can’t be here, we bring the festival to your screen.
        </p>
      </div>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Why Durga Puja Matters</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Durga Puja in Tripura is not just a festival, it is an emotion.
          It connects families, unites communities, and brings divine energy
          to every corner of the state. From majestic pandals to soulful prayers,
          the celebration reflects the heritage and devotion of our land.
        </p>
      </section>

      {/* Listings Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore the Festivities
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Pandal Listings</h3>
            <p>
              See the creativity of Tripura’s pandals and route your visit.
              Even if you can’t attend in person, experience them online.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Food Places</h3>
            <p>
              Discover the best food stalls and restaurants near puja pandals.
              From street food to traditional feasts, taste the essence of Puja.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Pre-Puja Shopping</h3>
            <p>
              Get ready for Puja with listings of boutiques, shops, and markets.
              From sarees to handicrafts, shop what makes your Puja special.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-8">
          Reach out to us for collaboration, listings, or any inquiries.
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

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>
          An initiative inspired by{" "}
          <a
            href="https://rjrinfinity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-400 hover:underline"
          >
            Mr. Arindam Chakraborty (Founder - R J R Infinity)
          </a>
          , proudly from Tripura — keeping the spirit of Durga Puja alive everywhere.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          © 2025{" "}
          <a
            href="https://rjrinfinity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            R J R Infinity
          </a>
          . All rights reserved.
        </p>
      </footer>

    </div>
  );
}
