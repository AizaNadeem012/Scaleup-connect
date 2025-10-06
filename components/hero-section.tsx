"use client";

import { Button } from "@/components/ui/button";
import { Users, Globe, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";  // ✅ ye import add karna hoga

export default function HeroSection() {
  const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Placements" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Satisfaction" },
    { icon: Globe, value: 50, suffix: "+", label: "Partners" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-[#F9FFFC] to-[#F2FAF7] overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16 w-full"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-40 h-40 md:w-60 md:h-60 bg-emerald-100 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-0 w-48 h-48 md:w-72 md:h-72 bg-teal-200 rounded-full mix-blend-multiply blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#003728]/20 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left space-y-6 md:space-y-8">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="pt-6 md:pt-10 text-[#003728] leading-snug"
          >
            <span className="block text-xl md:text-2xl font-medium tracking-wide">
              Empowering{" "}
              <span className="bg-gradient-to-r from-[#003728] to-[#002A1F] bg-clip-text text-transparent font-semibold">
                Careers
              </span>
            </span>
            <span className="mt-2 block text-4xl md:text-6xl font-extrabold relative inline-block">
              Enabling Growth
              <span className="absolute -bottom-2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-20 h-1 bg-[#003728] rounded-full"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-base md:text-lg lg:text-xl font-sans text-[#003728] max-w-xl mx-auto lg:mx-0 leading-relaxed"
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
            {/* ✅ Get in Touch => Contact Page */}
            <Link href="/contact">
              <Button className="bg-[#003728] text-white px-6 md:px-7 py-3 text-sm rounded-xl hover:bg-[#002A1F] transition-colors shadow-md">
                Get in Touch
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-2 border-[#003728] text-[#003728] hover:bg-[#F2FBF7] px-6 md:px-7 py-3 text-sm rounded-xl transition-colors shadow-sm"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-6 flex-wrap">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-[#003728]/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-[#003728]" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#003728]">
                    <CountUp start={0} end={stat.value} duration={2.5} separator="," />
                    {stat.suffix}
                  </h3>
                  <p className="text-[#003728] text-xs md:text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative w-full max-w-sm sm:max-w-md h-[320px] sm:h-[420px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="https://theenterpriseworld.com/wp-content/uploads/2019/08/1.3.-6.-Creating-a-Positive-Workplace-Image-by-Cecilie_Arcurs-from-Getty-Images-Signature.jpg"
              alt="Teamwork"
              fill
              className="object-cover scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent"></div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 shadow-md border border-gray-200"
            >
              <ShieldCheck className="h-4 w-4 text-[#003728]" />
              <span className="text-[10px] sm:text-xs font-semibold text-[#003728]">
                Trusted Worldwide
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
