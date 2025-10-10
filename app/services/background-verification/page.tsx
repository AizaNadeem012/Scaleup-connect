"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
} from "lucide-react";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function AitemadScreeningPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#F2FAF7] via-white to-[#E8F5E8] overflow-hidden lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#003728] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
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
                Aitemad
                <span className="block bg-gradient-to-r from-[#003728] to-emerald-600 bg-clip-text text-transparent">
                  Screening Services
                </span>
              </h1>

              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                Aitemad Screening Services provides trusted background screening, identity checks, and verification solutions — ensuring your hiring and partnership decisions are accurate, transparent, and secure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#003728] hover:bg-[#002A1F] text-white rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Shield className="h-5 w-5" />
                  Start Screening
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#003728] text-[#003728] hover:bg-[#003728] hover:text-white rounded-full px-6 py-3 font-semibold text-base transition-all duration-300"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Services
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">99.8%</div>
                  <div className="text-xs text-[#003728]/70">Data Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">24h</div>
                  <div className="text-xs text-[#003728]/70">Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">10K+</div>
                  <div className="text-xs text-[#003728]/70">Profiles Screened</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-2xl border border-[#003728]/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#F2FAF7] to-white rounded-xl border border-[#003728]/10">
                    <UserCheck className="h-5 w-5 text-[#003728]" />
                    <div>
                      <h3 className="font-semibold text-sm text-[#003728]">Identity Check</h3>
                      <p className="text-xs text-[#003728]/70">National ID & biometric match</p>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-auto" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#F2FAF7] to-white rounded-xl border border-[#003728]/10">
                    <GraduationCap className="h-5 w-5 text-[#003728]" />
                    <div>
                      <h3 className="font-semibold text-sm text-[#003728]">Education Check</h3>
                      <p className="text-xs text-[#003728]/70">Verified academic credentials</p>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-auto" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#F2FAF7] to-white rounded-xl border border-[#003728]/10">
                    <Briefcase className="h-5 w-5 text-[#003728]" />
                    <div>
                      <h3 className="font-semibold text-sm text-[#003728]">Employment History</h3>
                      <p className="text-xs text-[#003728]/70">Authentic job verification</p>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Our Core Screening Solutions
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-3xl mx-auto">
              Trusted and verified screening services tailored to your organization’s needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="h-7 w-7 text-[#003728]" />,
                title: "Identity Verification",
                description: "National ID, CNIC & biometric validation.",
                features: ["NADRA verification", "Face match", "Document validation", "ID authenticity"],
              },
              {
                icon: <GraduationCap className="h-7 w-7 text-[#003728]" />,
                title: "Education Verification",
                description: "Authenticating educational qualifications and degrees.",
                features: ["Degree validation", "Institution verification", "Result confirmation", "Transcript check"],
              },
              {
                icon: <Briefcase className="h-7 w-7 text-[#003728]" />,
                title: "Employment Verification",
                description: "Confirming candidate’s employment history and experience.",
                features: ["Company check", "Role confirmation", "Tenure validation", "Salary verification"],
              },
              {
                icon: <FileText className="h-7 w-7 text-[#003728]" />,
                title: "Criminal Record Check",
                description: "Ensuring candidates are clear of any criminal background.",
                features: ["Police clearance", "Court record check", "Blacklist screening", "FIR verification"],
              },
              {
                icon: <Users className="h-7 w-7 text-[#003728]" />,
                title: "Reference Check",
                description: "Evaluating professional references to assess integrity.",
                features: ["Reference validation", "Behavioral insights", "Professional feedback", "Reputation analysis"],
              },
              {
                icon: <MapPin className="h-7 w-7 text-[#003728]" />,
                title: "Address Verification",
                description: "Verifying the physical address and residency status.",
                features: ["Site visit", "Neighbour check", "Location photo", "Address authenticity"],
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-[#003728]/10 hover:shadow-2xl hover:border-[#003728]/20 transition-all"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-[#003728]/10 rounded-xl mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003728] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#003728]/70 mb-5 text-base leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-[#003728]/70">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#003728] to-[#002A1F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner with Aitemad Screening Services Today
            </h2>
            <p className="text-lg text-white/80 mb-7 max-w-2xl mx-auto">
              Secure, accurate, and fast background screening trusted by leading organizations across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#003728] hover:bg-gray-100 rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Shield className="h-5 w-5" />
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#003728] rounded-full px-6 py-3 font-semibold text-base transition-all duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
