"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Shield, CheckCircle, Globe } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      icon: Trophy,
      title: "Best Recruitment Agency 2024",
      organization: "HR Excellence Awards",
      year: "2024",
      description: "Recognized for outstanding service delivery and client satisfaction",
      category: "Excellence"
    },
    {
      icon: Award,
      title: "Top 1% Global Recruiters",
      organization: "LinkedIn Talent Solutions",
      year: "2023",
      description: "Ranked among the world's top performing recruitment professionals",
      category: "Performance"
    },
    {
      icon: Star,
      title: "Client Choice Award",
      organization: "Industry Leaders Forum",
      year: "2023",
      description: "Highest client satisfaction rating in the recruitment industry",
      category: "Satisfaction"
    },
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified",
      organization: "International Standards Organization",
      year: "2022",
      description: "Quality management system certification for consistent service delivery",
      category: "Quality"
    },
    {
      icon: Globe,
      title: "Global Expansion Leader",
      organization: "International Business Awards",
      year: "2022",
      description: "Recognized for successful expansion into 25+ countries",
      category: "Growth"
    },
    {
      icon: CheckCircle,
      title: "Ethical Recruitment Certified",
      organization: "Global Recruitment Standards",
      year: "2021",
      description: "Certified for ethical practices and fair recruitment processes",
      category: "Ethics"
    }
  ];

  const certifications = [
    {
      name: "Certified Professional Recruiter (CPR)",
      issuer: "Recruitment & Employment Confederation",
      year: "2023"
    },
    {
      name: "Senior Professional in Human Resources (SPHR)",
      issuer: "Human Resources Certification Institute",
      year: "2022"
    },
    {
      name: "Certified Talent Acquisition Professional (CTAP)",
      issuer: "Talent Acquisition Institute",
      year: "2022"
    },
    {
      name: "AI in Recruitment Specialist",
      issuer: "Tech Recruitment Academy",
      year: "2023"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F9FFFC] via-white to-[#F2FAF7] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#003728]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#003728]/10 rounded-full blur-3xl"></div>
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
            Awards & Recognition
          </h2>
          <p className="text-xl text-[#003728]/80 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and professional organizations worldwide.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#003728]/10 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#003728]/10 to-[#003728]/5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <award.icon className="h-8 w-8 text-[#003728]" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="text-sm font-semibold text-[#003728]/60 bg-[#003728]/5 px-3 py-1 rounded-full">
                  {award.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#003728] mb-2">
                {award.title}
              </h3>
              
              <p className="text-lg font-semibold text-[#003728]/70 mb-2">
                {award.organization}
              </p>
              
              <p className="text-sm text-[#003728]/60 mb-4">
                {award.year}
              </p>

              <p className="text-[#003728]/70 leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-[#003728]/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#003728] mb-4">
              Professional Certifications
            </h3>
            <p className="text-[#003728]/80 max-w-2xl mx-auto">
              Our team maintains the highest professional standards with industry-recognized certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.8 }}
                className="flex items-center gap-4 p-6 bg-[#F9FFFC] rounded-xl border border-[#003728]/10"
              >
                <div className="w-12 h-12 bg-[#003728]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#003728]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#003728] mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-[#003728]/70">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#003728] to-[#002A1F] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our award-winning team is ready to help you achieve your recruitment goals with proven expertise and industry recognition.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#003728] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              Work with Award-Winning Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
