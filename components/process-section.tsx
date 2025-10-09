"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, ClipboardCheck, LineChart, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Briefcase,
      title: "Strategic HR Planning & Advisory",
      description:
        "We help businesses align their human resource strategies with long-term organizational goals through data-driven insights and HR expertise.",
      details: [
        "Workforce planning & forecasting",
        "HR audits & compliance advisory",
        "Performance management systems",
        "Culture & employee engagement strategies",
      ],
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=400&fit=crop",
    },
    {
      icon: Users,
      title: "Employee Outsourcing & Payroll Management",
      description:
        "We manage employee outsourcing, contracts, and payroll to ensure compliance, efficiency, and stress-free workforce administration.",
      details: [
        "Employee contracts & documentation",
        "Payroll processing & disbursement",
        "Attendance & leave tracking",
        "Tax & legal compliance",
      ],
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=500&h=400&fit=crop",
    },
    {
      icon: ClipboardCheck,
      title: "Training & Development Programs",
      description:
        "Empowering your workforce with customized training programs designed to improve technical, managerial, and soft skills.",
      details: [
        "Leadership & communication workshops",
        "Performance improvement training",
        "Onboarding & employee orientation",
        "Skill enhancement sessions",
      ],
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop",
    },
    {
      icon: LineChart,
      title: "HR Analytics & Continuous Improvement",
      description:
        "We leverage analytics to evaluate HR performance and provide actionable insights that enhance employee retention and productivity.",
      details: [
        "Data-driven decision support",
        "Turnover & retention analysis",
        "Employee satisfaction metrics",
        "HR process optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=400&fit=crop",
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
            Our HR Solutions
          </h2>
          <p className="text-xl text-[#003728]/80 max-w-3xl mx-auto">
            We deliver end-to-end HR services that empower organizations to build efficient teams, improve performance, and ensure compliance — all under one roof.
          </p>
        </motion.div>

        {/* Steps */}
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
                        Service {idx + 1}
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
                      <div key={detailIdx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#003728]" />
                        <span className="text-[#003728]/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-[#003728]/10">
            <h3 className="text-2xl font-bold text-[#003728] mb-4">
              Let’s Build a Stronger Workforce Together
            </h3>
            <p className="text-[#003728]/80 mb-6 max-w-2xl mx-auto">
              Partner with us to optimize your HR operations and create a high-performing, motivated team that drives sustainable growth.
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
