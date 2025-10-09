"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  BookOpen,
  Scale,
  Users,
  Target,
} from "lucide-react";

export default function HRServicesPathSection() {
  const steps = [
    {
      icon: ShieldCheck,
      title: "Aitemad Screening Services",
      desc: "Ensure risk-free hiring through comprehensive verification and background checks.",
    },
    {
      icon: Brain,
      title: "Organizational Psychology Services",
      desc: "Enhance employee performance with behavioral insights, assessments, and leadership coaching.",
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      desc: "Empower employees with technical and soft skills training tailored for modern workplaces.",
    },
    {
      icon: Scale,
      title: "Corporate Legal Services",
      desc: "Stay compliant and navigate complex HR legal matters with expert guidance.",
    },
    {
      icon: Users,
      title: "Contract Staffing",
      desc: "Adapt to changing business needs with flexible and scalable staffing solutions.",
    },
    {
      icon: Target,
      title: "Executive Talent Acquisition",
      desc: "Secure top leadership talent through a confidential and strategic recruitment process.",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-[#F8FFFC] to-[#E9FFF5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-extrabold text-[#003728] mb-12"
        >
          Explore Our Core HR & Business Solutions
        </motion.h2>

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center group relative"
            >
              {/* Circle */}
              <div className="w-14 h-14 rounded-full bg-[#E6F9F2] flex items-center justify-center mb-3 border border-[#003728] shadow-sm transition-all group-hover:bg-[#003728] group-hover:text-white">
                <step.icon className="h-6 w-6 text-[#003728] group-hover:text-white transition-colors" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-sm md:text-base text-[#003728] group-hover:text-[#004D3A] transition-colors">
                {step.title}
              </h3>

              {/* Tooltip */}
              <div className="relative min-h-[40px] mt-2">
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 w-48 bg-white shadow-md rounded-xl p-3 text-[#003728] text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  {step.desc}
                </motion.p>
              </div>

              {/* Connecting Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-20 h-0.5 bg-[#003728]/40"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 bg-white/80 backdrop-blur-md border border-[#003728]/10 rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-xl font-bold text-[#003728] mb-3">
            Partner with Aitemad HR for Excellence
          </h3>
          <p className="text-[#003728]/80 max-w-2xl mx-auto mb-6">
            From background verification to leadership hiring — we deliver
            end-to-end HR solutions that empower organizations to build
            productive, compliant, and future-ready teams.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#003728] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#002A1F] transition-colors shadow-md"
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
