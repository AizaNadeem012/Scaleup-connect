"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Crown,
  CheckCircle,
  ArrowLeft,
  Target,
  Shield,
  TrendingUp,
  Award,
  Search,
  Briefcase,
  Rocket,
  Settings,
  Lock,
} from "lucide-react";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ExecutiveTalentAcquisitionPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-[#F2FAF7] via-white to-[#E8F5E8] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#003728] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#003728] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#003728] to-[#002A1F] rounded-lg shadow-lg">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-[#003728] to-emerald-400 rounded-full"></div>
              </div>
              
              {/* HEADING SIZE REDUCED HERE */}
              <h1 className="text-4xl md:text-6xl font-bold font-serif text-[#003728] mb-4 leading-tight">
                Executive
                <span className="block bg-gradient-to-r from-[#003728] to-emerald-600 bg-clip-text text-transparent">
                  Talent Acquisition
                </span>
              </h1>
              
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                Secure top-tier leadership talent with our specialized executive recruitment services. Strategic recruitment for C-suite and senior management positions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#003728] hover:bg-[#002A1F] text-white rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Crown className="h-5 w-5" />
                  Start Executive Search
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#003728] text-[#003728] hover:bg-[#003728] hover:text-white rounded-full px-6 py-3 font-semibold text-base transition-all duration-300"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">200+</div>
                  <div className="text-xs text-[#003728]/70">Executives Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">98%</div>
                  <div className="text-xs text-[#003728]/70">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">45</div>
                  <div className="text-xs text-[#003728]/70">Days Avg. Time</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003728]/20 to-emerald-400/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-[#003728]/10">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-[#003728] mb-2">Executive Search</h3>
                    <p className="text-[#003728]/70">Real-time recruitment analytics</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                      <div className="flex items-center gap-3">
                        <Crown className="h-5 w-5 text-emerald-500" />
                        <span className="font-medium text-[#003728]">C-Suite Searches</span>
                      </div>
                      <span className="text-2xl font-bold text-emerald-600">45</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-blue-500" />
                        <span className="font-medium text-[#003728]">Senior Management</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">127</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <div className="flex items-center gap-3">
                        <Target className="h-5 w-5 text-purple-500" />
                        <span className="font-medium text-[#003728]">Specialized Roles</span>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">89</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-orange-500" />
                        <span className="font-medium text-[#003728]">Client Satisfaction</span>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Solutions */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2FAF7]/50 to-white/50"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* HEADING SIZE REDUCED HERE */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
                Executive Leadership Solutions
              </h2>
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                Our Executive Talent Acquisition service is tailored to help organizations secure top-tier leadership talent. Our executive recruitment services are designed to meet the unique demands of senior-level positions.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Crown className="h-6 w-6 text-emerald-500" />,
                    title: "Identifying and attracting high-caliber executives",
                    description: "Access to a vast network of senior professionals and industry leaders"
                  },
                  {
                    icon: <Target className="h-6 w-6 text-blue-500" />,
                    title: "Strategic recruitment solutions for C-suite roles",
                    description: "Comprehensive search strategies tailored to executive positions"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-purple-500" />,
                    title: "Thorough assessments and headhunting services",
                    description: "Rigorous evaluation processes ensuring the right cultural and professional fit"
                  },
                  {
                    icon: <Lock className="h-6 w-6 text-orange-500" />,
                    title: "Confidential and smooth recruitment process",
                    description: "Discrete search process protecting your interests and candidate privacy"
                  }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#003728]/10 to-emerald-400/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#003728] mb-2 group-hover:text-emerald-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-[#003728]/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-[#003728]/20 rounded-3xl transform -rotate-2"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-[#003728]/10">
                  <h3 className="text-xl font-bold text-[#003728] mb-3 text-center">
                    Our Executive Search Process
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Position Analysis",
                        desc: "Deep understanding of role requirements and organizational needs.",
                      },
                      {
                        step: "2",
                        title: "Talent Mapping",
                        desc: "Comprehensive market research and candidate identification.",
                      },
                      {
                        step: "3",
                        title: "Assessment & Evaluation",
                        desc: "Rigorous evaluation of candidates' capabilities and fit.",
                      },
                      {
                        step: "4",
                        title: "Placement & Onboarding",
                        desc: "Seamless integration and ongoing support for new executives.",
                      },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-[#003728] text-white rounded-full text-sm font-bold">
                          {s.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#003728] mb-1">
                            {s.title}
                          </h4>
                          <p className="text-xs text-[#003728]/70">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Services */}
      <section className="py-20 bg-gradient-to-br from-[#F2FAF7] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-[#003728] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* HEADING SIZE REDUCED HERE */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Our Executive Services
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Comprehensive executive recruitment solutions for all senior-level positions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Crown className="h-8 w-8 text-[#003728]" />,
                title: "C-Suite Recruitment",
                description: "CEO, CTO, CFO, COO, and other C-level executive positions",
                features: [
                  "Chief Executive Officer (CEO)",
                  "Chief Technology Officer (CTO)",
                  "Chief Financial Officer (CFO)",
                  "Chief Operating Officer (COO)",
                  "Chief Marketing Officer (CMO)",
                  "Chief Human Resources Officer (CHRO)"
                ],
                color: "from-blue-50 to-blue-100",
                iconBg: "bg-blue-100"
              },
              {
                icon: <Briefcase className="h-8 w-8 text-[#003728]" />,
                title: "Senior Management",
                description: "VP, Director, and other senior management positions",
                features: [
                  "Vice Presidents",
                  "General Managers",
                  "Department Directors",
                  "Regional Managers",
                  "Business Unit Heads",
                  "Functional Leaders"
                ],
                color: "from-green-50 to-green-100",
                iconBg: "bg-green-100"
              },
              {
                icon: <Target className="h-8 w-8 text-[#003728]" />,
                title: "Specialized Roles",
                description: "Industry-specific and specialized executive positions",
                features: [
                  "Industry Specialists",
                  "Technical Leaders",
                  "Strategic Consultants",
                  "Transformation Leaders",
                  "Growth Specialists",
                  "Innovation Directors"
                ],
                color: "from-purple-50 to-purple-100",
                iconBg: "bg-purple-100"
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#003728]/5 to-emerald-400/5 rounded-3xl transform group-hover:scale-105 transition-all duration-300"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#003728]/10 group-hover:border-[#003728]/20">
                  <div className={`flex items-center justify-center w-16 h-16 ${s.iconBg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#003728]/70 mb-4 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="space-y-3">
                    {s.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                        <span className="text-xs text-[#003728]/70">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* HEADING SIZE REDUCED HERE */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Our executive search expertise spans across multiple industries and sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Technology", description: "Software, AI, FinTech, EdTech" },
              { name: "Financial Services", description: "Banking, Insurance, Investment" },
              { name: "Healthcare", description: "Pharma, Medical Devices, Hospitals" },
              { name: "Manufacturing", description: "Industrial, Automotive, Aerospace" },
              { name: "Retail & E-commerce", description: "Fashion, Consumer Goods, Online" },
              { name: "Energy & Utilities", description: "Oil & Gas, Renewable Energy" },
              { name: "Consulting", description: "Management, Strategy, IT Consulting" },
              { name: "Real Estate", description: "Development, Investment, Property" }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#003728]/5 to-emerald-400/5 rounded-2xl transform group-hover:scale-105 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#F9FFFC] to-white rounded-2xl p-6 shadow-lg border border-[#003728]/10 text-center group-hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">{industry.name}</h3>
                  <p className="text-[#003728]/70 text-sm">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-[#F2FAF7] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-[#003728] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* HEADING SIZE REDUCED HERE */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Real results from organizations that have transformed their leadership teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "Tech Startup",
                position: "Chief Technology Officer",
                challenge: "Need for technical leadership to scale product development",
                result: "Successfully placed CTO who led 300% growth in product development",
                icon: <Rocket className="h-8 w-8 text-[#003728]" />
              },
              {
                company: "Financial Services",
                position: "Chief Financial Officer",
                challenge: "Requirement for strategic financial leadership during expansion",
                result: "CFO placement resulted in 40% improvement in financial performance",
                icon: <TrendingUp className="h-8 w-8 text-[#003728]" />
              },
              {
                company: "Manufacturing",
                position: "Chief Operating Officer",
                challenge: "Need for operational excellence and process optimization",
                result: "COO implementation led to 25% increase in operational efficiency",
                icon: <Settings className="h-8 w-8 text-[#003728]" />
              }
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#003728]/5 to-emerald-400/5 rounded-3xl transform group-hover:scale-105 transition-all duration-300"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#003728]/10 group-hover:border-[#003728]/20">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#003728]/10 to-emerald-400/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {story.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">
                    {story.company}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#003728] mb-2">Position:</h4>
                      <p className="text-xs text-[#003728]/70">{story.position}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003728] mb-2">Challenge:</h4>
                      <p className="text-xs text-[#003728]/70">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003728] mb-2">Result:</h4>
                      <p className="text-xs text-[#003728]/70 font-semibold text-emerald-600">{story.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* HEADING SIZE REDUCED HERE */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Why Choose Our Executive Search?
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Proven expertise in identifying and placing top-tier executive talent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="h-8 w-8 text-[#003728]" />,
                title: "Extensive Network",
                description: "Access to a vast network of senior executives and industry leaders"
              },
              {
                icon: <Shield className="h-8 w-8 text-[#003728]" />,
                title: "Confidential Process",
                description: "Discrete and confidential search process to protect your interests"
              },
              {
                icon: <Award className="h-8 w-8 text-[#003728]" />,
                title: "Proven Track Record",
                description: "Successful placements across various industries and roles"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-[#003728]" />,
                title: "Long-term Success",
                description: "Focus on cultural fit and long-term organizational success"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#003728]/10 to-emerald-400/10 rounded-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#003728]/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003728] to-[#002A1F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* HEADING SIZE REDUCED HERE */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your Next Executive Leader
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with us to identify and secure the executive talent that will drive your organization's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#003728] hover:bg-gray-100 rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Crown className="h-5 w-5" />
                Start Executive Search
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#003728] rounded-full px-6 py-3 font-semibold text-base transition-all duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
