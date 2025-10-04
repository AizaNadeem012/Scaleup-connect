"use client";

import { motion } from "framer-motion";
import {
  Users,
  ClipboardList,
  Briefcase,
  ShieldCheck,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function CareerPathSection() {
  const steps = [
    { icon: Users, title: "Apply Online", desc: "Submit your profile quickly and easily." },
    { icon: ClipboardList, title: "Screening", desc: "We evaluate skills and suitability for roles." },
    { icon: Briefcase, title: "Interview Prep", desc: "Guidance to ace your interviews." },
    { icon: TrendingUp, title: "Skill Enhancement", desc: "Upskill with training & development programs." },
    { icon: ShieldCheck, title: "Verification", desc: "Background & reference checks for a secure hiring process." },
    { icon: Globe, title: "Placement", desc: "Get placed with top companies worldwide." },
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-extrabold text-[#003728] mb-12"
        >
          Visualize Your Career Journey
        </motion.h2>

        {/* Timeline */}
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
              <h3 className="font-medium text-sm md:text-base text-[#003728] group-hover:text-[#004D3A] transition-colors">
                {step.title}
              </h3>

              {/* Tooltip Wrapper (fix layout shift) */}
              <div className="relative min-h-[40px] mt-2">
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 w-44 bg-white shadow-md rounded-xl p-3 text-[#003728] text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  {step.desc}
                </motion.p>
              </div>

              {/* Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-20 h-0.5 bg-[#003728]/50"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
