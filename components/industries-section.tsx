"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  GraduationCap,
  Brain,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const services = [
    {
      icon: Users,
      title: "Mass Hiring",
      description:
        "Technology-driven assessment and testing solutions for bulk recruitment, reducing costs and improving efficiency.",
    },
    {
      icon: Briefcase,
      title: "Executive Talent Acquisition",
      description:
        "Strategic recruitment services for C-suite and senior leadership roles, ensuring top-tier talent placement.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Customized training programs with 100+ professional trainers to boost technical and soft skills.",
    },
    {
      icon: Brain,
      title: "Organizational Psychology",
      description:
        "Psychometric testing, employee engagement, leadership coaching, and workplace wellness programs.",
    },
    {
      icon: ShieldCheck,
      title: "Background Verification",
      description:
        "Comprehensive checks including education, employment, references, criminal history, and site visits.",
    },
    {
      icon: FileCheck,
      title: "Contract Staffing",
      description:
        "Qualified professionals on demand with agility, reduced hiring risks, and fast integration into teams.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-[#F9FFFC] to-[#F2FAF7] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-[#003728] mb-4">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-[#003728] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-[#003728]/80 max-w-3xl mx-auto leading-relaxed">
            Scaleup Connect is redefining HR with{" "}
            <span className="font-semibold text-[#003728]">AI-powered recruitment</span>, 
            proven strategies, and people-first solutions that transform how businesses grow.  
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#003728]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#003728]/10 mb-6 group-hover:bg-[#003728]/20 transition-all duration-300">
                <service.icon className="h-8 w-8 text-[#003728]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-[#002A1F] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#003728]/70 leading-relaxed">
                {service.description}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#003728]/5 to-transparent -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-24"
        >
          <div className="backdrop-blur-md bg-white/70 border border-[#003728]/20 rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-[#003728] mb-4">
              Let’s Build the Future Together
            </h3>
            <p className="text-lg text-[#003728]/80 mb-8 max-w-2xl mx-auto">
              Ready to scale your business with the right people and strategies? 
              Our experts are here to make it happen.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#003728] text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-[#002A1F] transition"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
