import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo-removebg.png"; // adjust path if needed
import { motion } from "framer-motion";

export default function Intro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish(); // tell App that intro is done
    }, 5000); // slightly longer for emotional impact
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-amber-100">
      <motion.div
        className="flex flex-col items-center text-center px-4"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Tripura Durga Puja Logo"
          className="w-32 md:w-48 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Title */}
        <motion.h1
          className="mt-6 text-3xl md:text-5xl font-extrabold text-red-900 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          🌸 Tripura Durga Puja 2025 🌸
        </motion.h1>

        {/* Initiative line */}
        <motion.p
          className="mt-3 text-base md:text-lg text-amber-950 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          A Sacred Initiative by{" "}
          <a
            href="https://rjrinfinity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline decoration-red-700 hover:text-red-700"
          >
            R J R Infinity
          </a>
        </motion.p>

        {/* Bengali Chant */}
        <motion.div
          className="mt-8 max-w-1xl text-xl md:text-sm italic text-red-900 font-semibold leading-relaxed text-center bg-white/70 rounded-2xl p-4 shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.2 }}
        >
          <p>
            <br />
            যা দেবী সর্বভূতেষু মাতৃরূপেণ সংস্থিতা।<br />
            নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ॥ <br /><br />

            যা দেবী সর্বভূতেষু শক্তিরূপেণ সংস্থিতা।<br />
            নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ॥ <br /><br />

            যা দেবী সর্বভূতেষু বুদ্ধিরূপেণ সংস্থিতা।<br />
            নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ॥ <br /><br />

            যা দেবী সর্বভূতেষু লজ্জারূপেণ সংস্থিতা।<br />
            নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ॥ <br /><br />

            যা দেবী সর্বভূতেষু শান্তিরূপেণ সংস্থিতা।<br />
            নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ॥ <br />
            
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
