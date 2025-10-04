"use client";

import Image from "next/image";
import { Quote, Award, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export default function FounderShowcase() {
  return (
    <section className="relative w-full bg-white py-20 px-6 lg:px-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#003728]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#003728]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-[340px] h-[460px] rounded-3xl shadow-xl overflow-hidden border-4 border-[#003728]/80">
            <Image
              src="/founder.jpg"
              alt="Muhammad Hassaan Rasheed"
              width={400}
              height={500}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#003728] text-white px-7 py-3 rounded-full shadow-lg text-sm font-semibold tracking-wide">
            Visionary Leader
          </div>
        </motion.div>

        {/* Founder Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6"
        >
          {/* Headline */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#003728] leading-tight">
              Muhammad Hassaan Rasheed
            </h2>
            <p className="text-lg text-gray-600 mt-1 border-b border-gray-200 pb-2 italic">
              Founder & CEO, ScaleUp Connect
            </p>
          </div>

          {/* Bio */}
          <p className="text-gray-700 text-lg leading-relaxed">
            With over a decade of experience spanning{" "}
            <span className="font-semibold">education, banking, eCommerce, and human capital</span>, 
            Hassaan has spearheaded HR transformations at global companies including{" "}
            <span className="font-semibold">Standard Chartered Bank, Iberianz Pvt Ltd, and Siddiqsons Group</span>.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-[#003728]">ScaleUp Connect</span>, his mission is to{" "}
            <span className="italic font-semibold">
              empower people, connect businesses, and build sustainable opportunities for the future.
            </span>
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-2 bg-[#F9FFFC] border border-[#003728]/20 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition">
              <Award className="h-5 w-5 text-[#003728]" />
              <span className="font-medium text-gray-800">Global HR Expert</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F9FFFC] border border-[#003728]/20 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition">
              <Handshake className="h-5 w-5 text-[#003728]" />
              <span className="font-medium text-gray-800">People-First Leadership</span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative bg-[#F9FFFC] border border-[#003728]/20 rounded-2xl shadow-md px-6 py-6 mt-4">
            <div className="absolute -top-6 left-6 w-12 h-12 bg-[#003728] flex items-center justify-center rounded-full shadow-md">
              <Quote className="h-6 w-6 text-white" />
            </div>
            <p className="text-[#003728] font-medium text-lg leading-relaxed italic">
              “True growth comes from collaboration and innovation.”
            </p>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 55, 40, 0.25)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 bg-[#003728] text-white font-semibold rounded-full shadow-md hover:bg-[#002A1F] transition duration-300 self-start"
          >
            Connect with Our Founder
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
