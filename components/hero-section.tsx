"use client";

import { Button } from "@/components/ui/button";
import { Users, Globe, TrendingUp } from "lucide-react";
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
      className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-12 w-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.png"
          alt="Pakistani professionals"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-10 left-0 w-60 h-60 bg-emerald-400/20 rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-teal-400/20 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE CONTENT */}
        <div className="text-center lg:text-left space-y-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white leading-tight"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="block text-emerald-300">Empowering Careers</span>
              <span className="block text-[#F1F8F6] mt-1">
                Enabling Growth
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-sm sm:text-base md:text-lg font-light text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-wide"
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
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <Link href="/contact">
              <Button className="bg-white text-[#003728] px-7 py-3 text-sm font-medium rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>

            <Link href="/contact">
              <Button className="bg-white text-[#003728] px-7 py-3 text-sm font-medium rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 pt-4 flex-wrap">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
                className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all border border-white/25"
              >
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    <CountUp start={0} end={stat.value} duration={2.5} separator="," />
                    {stat.suffix}
                  </h3>
                  <p className="text-white/90 text-xs font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE EMPTY */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}
