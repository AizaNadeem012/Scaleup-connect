"use client";

import { motion } from "framer-motion";

export default function MarqueeSection() {
  const messages = [
    "Thousands of talented people power ambitious companies",
    "Building strong teams for a brighter tomorrow",
    "Empowering Careers, Enabling Growth",
    "AI-driven HR solutions for modern businesses",
    "Flexible staffing and recruitment services",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F2FAF7] py-3">
      <div className="w-full overflow-hidden">
        <motion.div
          className="whitespace-nowrap flex gap-10 text-[#003728] font-semibold text-sm md:text-base"
          animate={{ x: [0, "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {messages.map((msg, idx) => (
            <span key={idx} className="inline-block flex-shrink-0">
              {msg}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
