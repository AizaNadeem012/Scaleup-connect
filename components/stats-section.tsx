"use client";

import { motion } from "framer-motion";
import { Users, Building2, Award, TrendingUp, Clock, Globe } from "lucide-react";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Successful Placements",
      description: "Talented professionals placed in top companies",
    },
    {
      icon: Building2,
      value: 200,
      suffix: "+",
      label: "Partner Companies",
      description: "Leading organizations trust our services",
    },
    {
      icon: Award,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently high satisfaction ratings",
    },
    {
      icon: TrendingUp,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Proven track record in recruitment",
    },
    {
      icon: Clock,
      value: 24,
      suffix: "hrs",
      label: "Average Response Time",
      description: "Quick turnaround for all inquiries",
    },
    {
      icon: Globe,
      value: 25,
      suffix: "+",
      label: "Countries Served",
      description: "Global reach with local expertise",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#003728] to-[#002A1F] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our numbers speak for themselves. Join thousands of satisfied clients
            and candidates who have achieved their goals with ScaleUp Connect.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon; // ✅ Fix: assign to a component before using
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-white/80 text-sm">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/90 mb-6">
            Ready to be part of our success story?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#003728] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
