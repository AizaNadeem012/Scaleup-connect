"use client";

import { Button } from "@/components/ui/button";
import { Users, Globe, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";

export default function HeroSection() {
  const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Placements" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Satisfaction" },
    { icon: Globe, value: 50, suffix: "+", label: "Partners" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20 pb-8 md:pb-12 w-full"
    >
      {/* Full Page Background Image with optimized loading */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.png"
          alt="Pakistani professionals"
          fill
          className="object-cover"
          priority
          quality={75} // Reduced quality for faster loading
          sizes="100vw" // Proper sizing for optimization
        />
        {/* Reduced Black Overlay for better balance */}
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Simplified Decorative Background Elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-10 left-0 w-40 h-40 md:w-60 md:h-60 bg-emerald-400/20 rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-48 h-48 md:w-72 md:h-72 bg-teal-400/20 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT SIDE - Content aligned to left */}
        <div className="text-center lg:text-left space-y-3 md:space-y-4">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="pt-2 md:pt-4 text-white leading-tight"
          >
            <span className="block text-lg md:text-xl font-light tracking-[0.08em] mb-2">
              Empowering{" "}
              <span className="font-semibold tracking-[0.08em]" style={{ color: "#003728" }}>
                Careers
              </span>
            </span>
            <span className="mt-2 block text-2xl md:text-4xl font-bold relative inline-block leading-[1.1] tracking-tight">
              Enabling Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xs md:text-sm lg:text-base font-light text-white/95 max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-wide"
          >
            From Aitemad Screening that builds trust, to Organizational Psychology that shapes 
            stronger cultures — we help companies grow with purpose. Our L&D Solutions ignite potential, 
            while Corporate Legal Services safeguard every step of the journey. Together, we connect 
            talent and ambition through AI-powered recruitment, creating workplaces where people and 
            businesses thrive.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link href="/contact">
              <Button className="bg-white text-[#003728] px-6 md:px-7 py-2.5 text-sm font-medium rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get in Touch
              </Button>
            </Link>

            <Link href="/contact">
              <Button className="bg-white text-[#003728] px-6 md:px-7 py-2.5 text-sm font-medium rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Stats - Enhanced Design */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 pt-2 flex-wrap">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl px-3 py-2.5 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto border border-white/25"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white">
                    <CountUp start={0} end={stat.value} duration={2.5} separator="," />
                    {stat.suffix}
                  </h3>
                  <p className="text-white/90 text-xs font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Empty space */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}
