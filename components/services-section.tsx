"use client";

import { motion } from "framer-motion";
import { Users, ClipboardList, Briefcase, ShieldCheck, Globe, TrendingUp } from "lucide-react";

export default function OurEdgeSection() {
  const features = [
    { icon: ShieldCheck, title: "Aitemad Screening Services", description: "Ensure risk-free hiring with comprehensive verification services." },
    { icon: TrendingUp, title: "Organizational Psychology Services", description: "Boost workforce productivity with behavioral insights and coaching." },
    { icon: Briefcase, title: "Learning & Development", description: "Empowering employees with soft & technical skills for the AI-driven world." },
    { icon: ClipboardList, title: "Corporate Legal Services", description: "Navigate complex legal landscapes with expert guidance and compliance." },
    { icon: Globe, title: "Contract Staffing", description: "Flexible staffing solutions to adapt to dynamic business needs." },
    { icon: Users, title: "Executive Talent Acquisition", description: "Secure top leadership talent for strategic business growth." },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F2FAF7] via-white to-[#F9FFFC] overflow-hidden w-full">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#003728]/10 rounded-full mix-blend-multiply blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#003728]/20 rounded-full mix-blend-multiply blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-[#003728] mb-6"
        >
          Our Edge
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[#003728] text-lg md:text-xl max-w-3xl mx-auto mb-16"
        >
          <b>Trust. Growth. Compliance.</b>
          <br />
          Scaleup Connect transforms hiring with Aitemad Screening, strengthens teams through L&D
          and Organizational Psychology, and safeguards success with Corporate Legal Services.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.8 }}
              className="bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform border border-[#003728]/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#003728]/10 rounded-full mb-4 mx-auto">
                <feature.icon className="h-8 w-8 text-[#003728]" />
              </div>
              <h3 className="text-xl font-semibold text-[#003728] text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-[#003728] text-center text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
