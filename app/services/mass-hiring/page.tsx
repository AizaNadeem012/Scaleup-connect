"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  Users,
  CheckCircle,
  ArrowLeft,
  Clock,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Award,
  BarChart3,
  UserPlus,
  FileText,
  Search,
  Filter,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Briefcase,
  Brain,
  Timer,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Rocket,
} from "lucide-react";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function MassHiringPage() {
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
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-[#003728] to-emerald-400 rounded-full"></div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#003728] mb-4 leading-tight">
                Mass Hiring
                <span className="block bg-gradient-to-r from-[#003728] to-emerald-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                Streamlined recruitment for large-scale hiring with our Testing & Assessment Service. Scale your workforce efficiently and effectively.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#003728] hover:bg-[#002A1F] text-white rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Users className="h-5 w-5" />
                  Start Mass Hiring
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
                  <div className="text-2xl font-bold text-[#003728]">40%</div>
                  <div className="text-xs text-[#003728]/70">Faster Hiring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">60%</div>
                  <div className="text-xs text-[#003728]/70">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">500+</div>
                  <div className="text-xs text-[#003728]/70">Hired Monthly</div>
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
                    <h3 className="text-2xl font-bold text-[#003728] mb-2">Hiring Pipeline</h3>
                    <p className="text-[#003728]/70">Real-time recruitment progress</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="font-medium text-[#003728]">Applications Received</span>
                      </div>
                      <span className="text-2xl font-bold text-emerald-600">1,247</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-medium text-[#003728]">Screening Complete</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">892</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="font-medium text-[#003728]">Interviews Scheduled</span>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">456</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="font-medium text-[#003728]">Offers Extended</span>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">234</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
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
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                {/* HEADING SIZE REDUCED: text-3xl -> text-2xl */}
                <h2 className="text-2xl font-bold text-[#003728]">The Challenge</h2>
              </div>
              
              <p className="text-lg text-[#003728]/80 mb-8 leading-relaxed">
                Traditional recruitment processes often struggle with large-scale hiring due to manual, inconsistent, and slow procedures.
              </p>

              <div className="space-y-4">
                {[
                  "Manual screening processes are time-consuming",
                  "Inconsistent evaluation criteria across candidates",
                  "High recruitment costs and administrative burden",
                  "Difficulty in maintaining quality at scale",
                  "Limited scalability for bulk hiring needs",
                  "Poor candidate experience during long processes"
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#003728]/80">{challenge}</span>
                  </div>
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl">
                      <Lightbulb className="h-6 w-6 text-emerald-600" />
                    </div>
                    {/* HEADING SIZE REMAINS text-2xl FOR CONSISTENCY */}
                    <h3 className="text-2xl font-bold text-[#003728]">Our Solution</h3>
                  </div>
                  
                  <p className="text-[#003728]/80 mb-4">
                    Our Testing & Assessment Service for Mass Hiring provides a structured, technology-driven approach to large-scale recruitment.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Standardized testing and assessment protocols",
                      "Automated screening and evaluation systems",
                      "Scalable recruitment infrastructure",
                      "Data-driven candidate selection",
                      "Streamlined onboarding processes",
                      "Comprehensive reporting and analytics"
                    ].map((solution, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-[#003728]/80">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
            {/* HEADING SIZE REDUCED: text-4xl md:text-5xl -> text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Our Mass Hiring Services
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Comprehensive solutions designed to streamline large-scale recruitment processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-[#003728]" />,
                title: "Psychometric Testing",
                description: "Comprehensive cognitive and personality assessments",
                features: ["Cognitive ability tests", "Personality profiling", "Skills assessment", "Behavioral analysis"],
                color: "from-blue-50 to-blue-100",
                iconBg: "bg-blue-100"
              },
              {
                icon: <FileText className="h-8 w-8 text-[#003728]" />,
                title: "Technical Assessments",
                description: "Role-specific technical skills evaluation",
                features: ["Coding challenges", "Technical interviews", "Practical tests", "Domain expertise"],
                color: "from-green-50 to-green-100",
                iconBg: "bg-green-100"
              },
              {
                icon: <Users className="h-8 w-8 text-[#003728]" />,
                title: "Group Activities",
                description: "Collaborative assessment and team dynamics",
                features: ["Group discussions", "Team projects", "Leadership tasks", "Communication skills"],
                color: "from-purple-50 to-purple-100",
                iconBg: "bg-purple-100"
              },
              {
                icon: <Search className="h-8 w-8 text-[#003728]" />,
                title: "Screening Process",
                description: "Automated initial candidate filtering",
                features: ["Resume screening", "Application review", "Initial interviews", "Background checks"],
                color: "from-orange-50 to-orange-100",
                iconBg: "bg-orange-100"
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-[#003728]" />,
                title: "Analytics & Reporting",
                description: "Data-driven insights and performance metrics",
                features: ["Hiring metrics", "Candidate analytics", "Process optimization", "ROI tracking"],
                color: "from-teal-50 to-teal-100",
                iconBg: "bg-teal-100"
              },
              {
                icon: <Rocket className="h-8 w-8 text-[#003728]" />,
                title: "Onboarding Support",
                description: "Seamless transition for new hires",
                features: ["Orientation programs", "Training modules", "Mentorship setup", "Integration support"],
                color: "from-pink-50 to-pink-100",
                iconBg: "bg-pink-100"
              }
            ].map((service, idx) => (
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
                  <div className={`flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#003728]/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-xs text-[#003728]/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003728]/20 to-emerald-400/20 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#003728] mb-2">Assessment Timeline</h3>
                    <p className="text-[#003728]/70">Complete evaluation process in 48 hours</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                      <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 text-white rounded-full font-bold">1</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#003728]">Application Review</h4>
                        <p className="text-xs text-[#003728]/70">Initial screening and document verification</p>
                      </div>
                      <div className="text-sm font-semibold text-emerald-600">2h</div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full font-bold">2</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#003728]">Online Testing</h4>
                        <p className="text-xs text-[#003728]/70">Psychometric and technical assessments</p>
                      </div>
                      <div className="text-sm font-semibold text-blue-600">4h</div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                      <div className="flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full font-bold">3</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#003728]">Group Assessment</h4>
                        <p className="text-xs text-[#003728]/70">Collaborative tasks and team dynamics</p>
                      </div>
                      <div className="text-sm font-semibold text-orange-600">6h</div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full font-bold">4</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#003728]">Final Interview</h4>
                        <p className="text-xs text-[#003728]/70">One-on-one evaluation and decision</p>
                      </div>
                      <div className="text-sm font-semibold text-purple-600">2h</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* HEADING SIZE REDUCED: text-4xl md:text-5xl -> text-3xl md:text-4xl */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
                Our 4-Step Process
              </h2>
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                A systematic approach ensuring efficient and effective mass hiring with quality results.
              </p>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Requirements Analysis",
                    description: "Understanding your specific hiring needs and job requirements",
                    icon: <Target className="h-6 w-6" />
                  },
                  {
                    step: "02", 
                    title: "Assessment Design",
                    description: "Creating customized testing and evaluation protocols",
                    icon: <Brain className="h-6 w-6" />
                  },
                  {
                    step: "03",
                    title: "Execution & Evaluation",
                    description: "Conducting assessments and comprehensive candidate evaluation",
                    icon: <Users className="h-6 w-6" />
                  },
                  {
                    step: "04",
                    title: "Selection & Onboarding",
                    description: "Final selection and seamless integration of new hires",
                    icon: <CheckCircle className="h-6 w-6" />
                  }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#003728] to-[#002A1F] text-white rounded-2xl font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#003728] group-hover:text-emerald-600 transition-colors">
                          {step.title}
                        </h3>
                        <div className="flex items-center justify-center w-8 h-8 bg-[#003728]/10 rounded-lg">
                          {step.icon}
                        </div>
                      </div>
                      <p className="text-[#003728]/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            {/* HEADING SIZE REDUCED: text-4xl md:text-5xl -> text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Transform your mass hiring process with measurable improvements and cost savings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-[#003728]" />,
                title: "40% Faster Hiring",
                description: "Streamlined processes reduce time-to-hire significantly"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-[#003728]" />,
                title: "60% Cost Reduction",
                description: "Automated processes lower recruitment costs"
              },
              {
                icon: <Target className="h-8 w-8 text-[#003728]" />,
                title: "Better Quality Hires",
                description: "Standardized assessments ensure consistent quality"
              },
              {
                icon: <Shield className="h-8 w-8 text-[#003728]" />,
                title: "Reduced Risk",
                description: "Comprehensive screening minimizes hiring mistakes"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#003728]/10 to-emerald-400/10 rounded-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[#003728]/70 leading-relaxed">
                  {benefit.description}
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
            {/* HEADING SIZE REDUCED: text-4xl md:text-5xl -> text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Scale Your Hiring?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Transform your mass hiring process with our comprehensive testing and assessment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#003728] hover:bg-gray-100 rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Users className="h-5 w-5" />
                Start Mass Hiring Process
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
