"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  Shield,
  CheckCircle,
  ArrowLeft,
  Clock,
  Users,
  FileText,
  MapPin,
  GraduationCap,
  Briefcase,
  UserCheck,
  Search,
  Database,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle2,
  Award,
  TrendingUp,
  Zap,
  Target,
  Star,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import Navigation from "@/components/navigation";

import { Footer } from "@/components/footer";


export default function BackgroundVerificationPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#F2FAF7] via-white to-[#E8F5E8] overflow-hidden lg:pt-32 lg:pb-20">
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
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#003728] mb-5 leading-tight">
                Background
                <span className="block bg-gradient-to-r from-[#003728] to-emerald-600 bg-clip-text text-transparent">
                  Verification
                </span>
              </h1>
              
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                Comprehensive background verification services to ensure your hiring decisions are well-informed and risk-free. Trust, verified.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#003728] hover:bg-[#002A1F] text-white rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Shield className="h-5 w-5" />
                  Start Verification
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#003728] text-[#003728] hover:bg-[#003728] hover:text-white rounded-full px-6 py-3 font-semibold text-base transition-all duration-300"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Services
                </Link>
              </div>

              {/* Stats - size is appropriate */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">99.8%</div>
                  <div className="text-xs text-[#003728]/70">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">24h</div>
                  <div className="text-xs text-[#003728]/70">Average Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">5000+</div>
                  <div className="text-xs text-[#003728]/70">Verified</div>
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
                {/* Reduced padding slightly */}
                <div className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-2xl border border-[#003728]/10">
                  <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#F2FAF7] to-white rounded-xl border border-[#003728]/10">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#003728]/10 rounded-lg">
                        <UserCheck className="h-5 w-5 text-[#003728]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[#003728]">Identity Verification</h3>
                        <p className="text-xs text-[#003728]/70">Complete identity validation</p>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-auto" />
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#F2FAF7] to-white rounded-xl border border-[#003728]/10">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#003728]/10 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-[#003728]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[#003728]">Education Check</h3>
                        <p className="text-xs text-[#003728]/70">Degree verification complete</p>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-auto" />
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#F2FAF7] to-white rounded-xl border border-[#003728]/10">
                      <div className="flex items-center justify-center w-10 h-10 bg-[#003728]/10 rounded-lg">
                        <Briefcase className="h-5 w-5 text-[#003728]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[#003728]">Employment History</h3>
                        <p className="text-xs text-[#003728]/70">Work experience verified</p>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      ---

      {/* Services Overview */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2FAF7]/50 to-white/50"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Our Verification Services
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-3xl mx-auto">
              Comprehensive background checks that provide complete transparency and peace of mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="h-7 w-7 text-[#003728]" />,
                title: "Education Verification",
                description: "Confirming the educational qualifications of candidates",
                features: ["Degree validation", "Institution verification", "Grade confirmation", "Document authentication"],
                color: "from-blue-50 to-blue-100",
                iconBg: "bg-blue-100"
              },
              {
                icon: <FileText className="h-7 w-7 text-[#003728]" />,
                title: "Degree Verification",
                description: "Ensuring authenticity of academic degrees",
                features: ["Certificate validation", "Institution check", "Date verification", "Seal verification"],
                color: "from-green-50 to-green-100",
                iconBg: "bg-green-100"
              },
              {
                icon: <Shield className="h-7 w-7 text-[#003728]" />,
                title: "Criminal Check",
                description: "Verifying criminal history through police checks",
                features: ["Police clearance", "Criminal records", "Court verification", "Background screening"],
                color: "from-red-50 to-red-100",
                iconBg: "bg-red-100"
              },
              {
                icon: <Users className="h-7 w-7 text-[#003728]" />,
                title: "Reference Verification",
                description: "Validating references provided by candidates",
                features: ["Reference check", "Contact verification", "Recommendation validation", "Character assessment"],
                color: "from-purple-50 to-purple-100",
                iconBg: "bg-purple-100"
              },
              {
                icon: <Briefcase className="h-7 w-7 text-[#003728]" />,
                title: "Employment Verification",
                description: "Confirming past employment details for accuracy",
                features: ["Job history check", "Position verification", "Duration confirmation", "Salary validation"],
                color: "from-orange-50 to-orange-100",
                iconBg: "bg-orange-100"
              },
              {
                icon: <MapPin className="h-7 w-7 text-[#003728]" />,
                title: "Site Visit",
                description: "Verifying residential address of candidates",
                features: ["Address verification", "Residence check", "Neighborhood inquiry", "Location validation"],
                color: "from-teal-50 to-teal-100",
                iconBg: "bg-teal-100"
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
                <div className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#003728]/10 group-hover:border-[#003728]/20">
                  <div className={`flex items-center justify-center w-14 h-14 ${service.iconBg} rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#003728]/70 mb-5 text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-[#003728]/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      ---

      {/* Process Section with Image */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#F2FAF7] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-[#003728] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
                Our Verification Process
              </h2>
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                A systematic approach ensuring thorough and accurate background verification.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Document Collection",
                    description: "Gathering all necessary documents and information from candidates",
                    icon: <FileText className="h-5 w-5" />
                  },
                  {
                    step: "02", 
                    title: "Initial Screening",
                    description: "Preliminary verification of provided information and documents",
                    icon: <Search className="h-5 w-5" />
                  },
                  {
                    step: "03",
                    title: "Deep Verification",
                    description: "Comprehensive checks across all verification categories",
                    icon: <Database className="h-5 w-5" />
                  },
                  {
                    step: "04",
                    title: "Report Generation",
                    description: "Detailed report compilation with findings and recommendations",
                    icon: <CheckCircle className="h-5 w-5" />
                  }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 lg:gap-6 group"
                  >
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#003728] to-[#002A1F] text-white rounded-xl font-bold text-base shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-[#003728] group-hover:text-emerald-600 transition-colors">
                          {step.title}
                        </h3>
                        <div className="flex items-center justify-center w-7 h-7 bg-[#003728]/10 rounded-lg">
                          {step.icon}
                        </div>
                      </div>
                      <p className="text-[#003728]/70 text-sm leading-relaxed">
                        {step.description}
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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003728]/20 to-emerald-400/20 rounded-3xl transform -rotate-2"></div>
                <div className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#003728] to-[#002A1F] rounded-full mx-auto mb-3">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#003728] mb-1">Verification Dashboard</h3>
                    <p className="text-[#003728]/70 text-sm">Real-time verification status</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span className="font-medium text-sm text-[#003728]">Identity Verified</span>
                      </div>
                      <span className="text-xs text-emerald-600 font-semibold">100%</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-blue-500" />
                        <span className="font-medium text-sm text-[#003728]">Education Check</span>
                      </div>
                      <span className="text-xs text-blue-600 font-semibold">95%</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-orange-500" />
                        <span className="font-medium text-sm text-[#003728]">Employment History</span>
                      </div>
                      <span className="text-xs text-orange-600 font-semibold">88%</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-500" />
                        <span className="font-medium text-sm text-[#003728]">Reference Check</span>
                      </div>
                      <span className="text-xs text-purple-600 font-semibold">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      ---

      {/* Benefits Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Why Choose Our Verification?
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-3xl mx-auto">
              Trusted by leading organizations for comprehensive and reliable background verification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lock className="h-7 w-7 text-[#003728]" />,
                title: "100% Secure",
                description: "Bank-level security for all data and documents"
              },
              {
                icon: <Zap className="h-7 w-7 text-[#003728]" />,
                title: "Fast Turnaround",
                description: "Complete verification within 24-48 hours"
              },
              {
                icon: <Target className="h-7 w-7 text-[#003728]" />,
                title: "99.8% Accuracy",
                description: "Industry-leading accuracy in verification results"
              },
              {
                icon: <Award className="h-7 w-7 text-[#003728]" />,
                title: "Compliance Ready",
                description: "Meets all regulatory and industry standards"
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
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#003728]/10 to-emerald-400/10 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-[#003728] mb-2 group-hover:text-emerald-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[#003728]/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      ---

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#003728] to-[#002A1F] relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Verify with Confidence?
            </h2>
            <p className="text-lg text-white/80 mb-7 max-w-2xl mx-auto">
              Get comprehensive background verification that ensures informed hiring decisions and reduces risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#003728] hover:bg-gray-100 rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Shield className="h-5 w-5" />
                Start Verification Process
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
