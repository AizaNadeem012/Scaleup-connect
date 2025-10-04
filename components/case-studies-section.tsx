"use client";

import { motion } from "framer-motion";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      title: "Scaling Tech Teams Fast",
      company: "NextGen Software",
      industry: "IT & Software",
      challenge: "Needed 40+ developers within 2 months for product launch",
      solution: "AI-driven candidate matching and dedicated technical recruiters",
      results: [
        "Hired 42 developers in 7 weeks",
        "92% retention rate after 1 year",
        "35% faster hiring process"
      ],
      metrics: {
        placements: 42,
        timeReduction: 35,
        satisfaction: 97
      },
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Healthcare Expansion",
      company: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Opening 10 new clinics needing specialized doctors & nurses",
      solution: "Specialized healthcare recruitment with compliance checks",
      results: [
        "100+ medical professionals placed",
        "100% compliance with healthcare standards",
        "Zero turnover in first 9 months"
      ],
      metrics: {
        placements: 105,
        timeReduction: 40,
        satisfaction: 100
      },
      image:
        "https://images.unsplash.com/photo-1580281657521-6c798f90a8f3?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "E-commerce Workforce Growth",
      company: "ShopEase",
      industry: "E-commerce",
      challenge: "Needed 200+ staff for logistics & customer support in peak season",
      solution: "Mass recruitment campaign with cultural-fit assessment",
      results: [
        "220+ hires in 6 weeks",
        "30% increase in customer satisfaction",
        "Improved operational efficiency"
      ],
      metrics: {
        placements: 220,
        timeReduction: 50,
        satisfaction: 95
      },
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&h=500&fit=crop"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F2FAF7] via-white to-[#F9FFFC] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#003728]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#003728]/10 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-[#003728] mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-[#003728]/80 max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed hiring for leading companies across industries.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#003728]/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#003728] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#003728] mb-2">
                  {study.title}
                </h3>
                <p className="text-lg font-semibold text-[#003728]/70 mb-4">
                  {study.company}
                </p>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#003728] mb-2">Challenge:</h4>
                  <p className="text-[#003728]/70 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#003728] mb-2">Solution:</h4>
                  <p className="text-[#003728]/70 text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#003728] mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIdx) => (
                      <li
                        key={resultIdx}
                        className="flex items-center gap-2 text-sm text-[#003728]/70"
                      >
                        <div className="w-2 h-2 bg-[#003728] rounded-full flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#003728]/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#003728]">
                      {study.metrics.placements}+
                    </div>
                    <div className="text-xs text-[#003728]/60">Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#003728]">
                      {study.metrics.timeReduction}%
                    </div>
                    <div className="text-xs text-[#003728]/60">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#003728]">
                      {study.metrics.satisfaction}%
                    </div>
                    <div className="text-xs text-[#003728]/60">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#003728] to-[#002A1F] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies who have transformed their hiring with our proven approach.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#003728] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              Start Your Success Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
