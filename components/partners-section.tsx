"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative pt-28 pb-24 bg-gradient-to-b from-[#F2FAF7] via-white to-[#F9FFFC] overflow-hidden">
      {/* Glow Background Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[650px] h-[650px] bg-[#00A06B]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#003728] mb-4"
        >
          Our Proud Partner
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base md:text-lg text-gray-600 mb-14 max-w-2xl mx-auto"
        >
          Together with{" "}
          <span className="text-[#00A06B] font-semibold">ScaleUp Connect</span>,  
          we build innovation, drive growth, and shape a brighter future.
        </motion.p>

        {/* Big Logo with hover effect */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Logo Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00A06B]/30 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
            
            {/* Logo Image */}
            <Image
              src="/logo.png"
              alt="ScaleUp Connect Logo"
              width={600}
              height={280}
              className="relative z-10 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

        {/* Decorative tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-16 text-sm md:text-base tracking-[0.3em] text-[#003728]/80 uppercase"
        >
          Empowering Growth Together
        </motion.p>
      </div>
    </section>
  );
}
