"use client";

import { motion } from "framer-motion";
import { Search, Users, FileCheck, Handshake, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Client Consultation & Needs Analysis",
      description:
        "We collaborate closely with your organization to fully understand hiring goals, company culture, and workforce requirements.",
      details: [
        "Role & responsibility mapping",
        "Understanding organizational culture",
        "Industry & market research",
        "Customized recruitment strategy",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    },
    {
      icon: Users,
      title: "Talent Sourcing",
      description:
        "Our recruitment experts use modern tools, networks, and referrals to source top-quality candidates tailored to your business needs.",
      details: [
        "Access to diverse talent pools",
        "Active & passive candidate outreach",
        "Industry referrals & partnerships",
        "Social media & digital sourcing",
      ],
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=400&fit=crop",
    },
    {
      icon: FileCheck,
      title: "Screening & Evaluation",
      description:
        "We carefully screen each candidate through skill-based assessments, background checks, and cultural-fit evaluations.",
      details: [
        "Initial interviews & phone screening",
        "Technical & soft skills assessment",
        "Behavioral & cultural evaluation",
        "Reference & background checks",
      ],
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop",
    },
    {
      icon: Handshake,
      title: "Placement & Onboarding Support",
      description:
        "From final interviews to offer negotiations, we ensure a smooth placement and onboarding process for long-term success.",
      details: [
        "Final selection & client interviews",
        "Salary & offer negotiations",
        "Seamless onboarding support",
        "Post-placement follow-up",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#F9FFFC] to-[#F2FAF7] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#003728]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#003728]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003728] mb-6">
            Our Recruitment Process
          </h2>
          <p className="text-xl text-[#003728]/80 max-w-3xl mx-auto">
            As a trusted HR partner, we follow a structured 4-step process to
            connect businesses with the right talent, ensuring long-term growth
            and retention.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#003728] rounded-full flex items-center justify-center text-white">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#003728]/60 uppercase tracking-wide">
                        Step {idx + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#003728]">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-[#003728]/80 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIdx) => (
                      <div
                        key={detailIdx}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-[#003728] flex-shrink-0" />
                        <span className="text-[#003728]/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 + 0.3 }}
                    className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#003728]/90 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Step number */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center">
                      <span className="text-[#003728] font-bold text-lg">
                        {idx + 1}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#003728]/10">
            <h3 className="text-2xl font-bold text-[#003728] mb-4">
              Partner With Us Today
            </h3>
            <p className="text-[#003728]/80 mb-6 max-w-2xl mx-auto">
              Whether you’re scaling your team or filling key leadership roles,
              our HR experts are here to deliver tailored hiring solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#003728] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#002A1F] transition-colors shadow-lg"
            >
              Start Hiring Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
