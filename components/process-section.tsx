"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  BookOpen,
  Scale,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Aitemad Screening Services",
      description:
        "Ensure risk-free hiring with our comprehensive employee verification and background screening solutions designed to build trust and compliance.",
      details: [
        "Employment & education verification",
        "Criminal & financial background checks",
        "Reference validation",
        "Identity & address verification",
      ],
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&h=600", // people verification / background check
    },
    {
      icon: Brain,
      title: "Organizational Psychology Services",
      description:
        "Boost workforce productivity through psychological assessments, behavior analysis, and tailored coaching programs for leaders and teams.",
      details: [
        "Employee behavior assessments",
        "Leadership & emotional intelligence coaching",
        "Conflict resolution programs",
        "Workplace motivation strategies",
      ],
      image:
        "https://www.tuw.edu/wp-content/uploads/2024/07/TUW_Careers-With-a-Degree-in-Industrial-Organizational-Psychology.jpg", // psychology / team discussion
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      description:
        "Empowering employees with modern technical and soft skills through result-oriented training programs for the AI-driven workplace.",
      details: [
        "Customized learning modules",
        "Soft skills & communication workshops",
        "AI & digital transformation training",
        "Performance improvement sessions",
      ],
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&h=600", // corporate training
    },
    {
      icon: Scale,
      title: "Corporate Legal Services",
      description:
        "Navigate complex HR and corporate legal challenges with expert guidance ensuring compliance, transparency, and risk mitigation.",
      details: [
        "Employment law advisory",
        "Contracts & documentation support",
        "Regulatory compliance management",
        "Workplace dispute resolution",
      ],
      image:
        "https://www.pmattorneys.co.za/wp-content/uploads/2025/04/Top-corporate-law-firms-in-South-Africa.jpg", // legal consultancy
    },
    {
      icon: Users,
      title: "Contract Staffing",
      description:
        "Flexible staffing solutions to meet your short-term or project-based workforce requirements with speed and reliability.",
      details: [
        "Temporary & project-based hiring",
        "On-demand workforce management",
        "Payroll & HR administration",
        "Scalable staffing models",
      ],
      image:
        "https://brookwoods.com/wp-content/uploads/Contract-Staffing-1024x672.png", // office team collaboration
    },
    {
      icon: Target,
      title: "Executive Talent Acquisition",
      description:
        "Secure top leadership talent through strategic executive search services tailored to your organization’s culture and long-term vision.",
      details: [
        "C-level & senior management hiring",
        "Market mapping & talent research",
        "Confidential search process",
        "Leadership onboarding support",
      ],
      image:
        "https://ccy.com/wp-content/uploads/2021/08/strategic-executive-talent-acquisition-ccy.jpg", // leadership / boardroom
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-[#F9FFFC] to-[#F2FAF7] overflow-hidden">
      {/* Background Decorative Circles */}
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
            Our HR & Business Solutions
          </h2>
          <p className="text-xl text-[#003728]/80 max-w-3xl mx-auto">
            We deliver innovative HR, legal, and workforce services that help
            organizations grow confidently, improve performance, and stay
            compliant.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="space-y-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
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
                {/* Text Section */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#003728] rounded-full flex items-center justify-center text-white">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#003728]/60 uppercase tracking-wide">
                        Service {idx + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#003728]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-[#003728]/80 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#003728]" />
                        <span className="text-[#003728]/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 + 0.3 }}
                    className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#003728]/90 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#003728]/10">
            <h3 className="text-2xl font-bold text-[#003728] mb-4">
              Partner With Aitemad HR Today
            </h3>
            <p className="text-[#003728]/80 mb-6 max-w-2xl mx-auto">
              From screening and psychology services to legal compliance and
              executive recruitment, we provide everything your organization
              needs to thrive with confidence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#003728] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#002A1F] transition-colors shadow-lg"
            >
              Contact Our HR Experts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
