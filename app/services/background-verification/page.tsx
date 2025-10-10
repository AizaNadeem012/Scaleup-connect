"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  ArrowLeft,
  UserCheck,
  MapPin,
  Briefcase,
  GraduationCap,
  FileText,
  Search,
  Users,
  Database,
  CheckCircle,
  Lock,
  Zap,
  Target,
  Mail,
  Phone,
} from "lucide-react";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function AitemadScreeningServicePage() {
  const audience = [
    "Banks & Money Exchange",
    "BPOs",
    "Retail",
    "Hospitals",
    "Education",
    "Logistics",
    "SMEs & Enterprises",
  ];

  const services = [
    { icon: UserCheck, title: "CNIC & Identity Authentication", description: "We verify your candidate’s identity to ensure they are who they claim to be, preventing fraudulent hiring." },
    { icon: MapPin, title: "Address Confirmation & Investigative Site Visit", description: "Our team confirms residential addresses and conducts physical visits when needed to ensure authenticity." },
    { icon: Briefcase, title: "Employment History", description: "We validate designation, tenure, reason for leaving, and salary to verify a candidate's work history." },
    { icon: GraduationCap, title: "Education & Credentials", description: "We confirm educational qualifications, including local and international degrees or certifications." },
    { icon: FileText, title: "Professional Licenses & Memberships", description: "Verification of professional licenses and memberships ensures compliance with industry standards." },
    { icon: Search, title: "Police / Character Verification", description: "Where applicable, we conduct police and character checks to assess integrity and reputation." },
    { icon: Users, title: "Reference Checks", description: "Structured reference checks provide insights from previous employers and supervisors." },
    { icon: Database, title: "Adverse Media & Sanction Watch (OSINT)", description: "We screen candidates against adverse media and sanction lists to protect your organization." },
  ];

  const deliverables = [
    "Clear, visual Verification Report showing pass, flag, or insufficient status",
    "Evidence pack including supporting documents and verifier remarks",
    "Risk summary with actionable hiring recommendations",
  ];

  const process = [
    { step: "Scope & Consent", description: "We start by defining the verification scope and obtaining candidate consent." },
    { step: "Data Collection", description: "Our team collects necessary information from documents, databases, and references." },
    { step: "Field/Desk Verification", description: "Verification is done both remotely and on-site, depending on requirements." },
    { step: "Quality Assurance (QA)", description: "All data is validated through standardized quality checks." },
    { step: "Final Report", description: "A comprehensive report is delivered with clear conclusions and risk assessment." },
  ];

  const whyUs = [
    "Local reach with on-ground presence ensuring accurate verification across Pakistan.",
    "Standardized SOPs for consistent, reliable, and compliant handling of all background checks.",
    "Confidential processes that protect both candidate and client information.",
    "API-ready intake and dashboard reporting available for seamless integration with your HR systems.",
  ];

  const addOns = [
    "Post-hire re-verification to ensure continuous compliance and trust.",
    "Vendor screening for partnerships, contractors, and suppliers.",
    "Bulk drives for seasonal hiring with efficiency and minimal risk.",
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#F2FAF7] via-white to-[#E8F5E8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#003728] to-[#002A1F] shadow-lg">
                <Shield className="text-white w-6 h-6" />
              </div>
              <span className="uppercase text-sm tracking-wide text-[#003728]/80">Employment Background Checks</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#003728] leading-tight">
              Aitemad Screening Service
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#003728] to-emerald-600">
                Comprehensive Employment Background Checks
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#003728]/80 mt-6 max-w-3xl mx-auto">
              Reduce hiring risk, protect your brand reputation, and stay fully compliant with client and audit requirements.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 rounded-full font-semibold bg-[#003728] text-white hover:bg-[#002A1F] transition flex items-center gap-2">
                Request Screening
              </Link>
              <Link href="/services" className="px-6 py-3 rounded-full font-semibold border-2 border-[#003728] text-[#003728] hover:bg-[#003728] hover:text-white transition flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" /> View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">Who It's For</h2>
          <p className="text-[#003728]/80 mb-12 text-lg md:text-xl max-w-3xl mx-auto">
            Our screening services cater to a wide range of sectors, from banking and retail to education and logistics, ensuring you make informed hiring decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {audience.map((item, idx) => (
              <span key={idx} className="px-5 py-3 bg-emerald-50 border border-[#003728]/10 rounded-full text-[#003728] font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Verify Section */}
      <section className="py-24 bg-[#F2FAF7]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-12 text-center">What We Verify</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-[#003728]/10 hover:shadow-2xl transition"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-[#003728]/10 rounded-xl mb-4">
                    <Icon className="w-7 h-7 text-[#003728]" />
                  </div>
                  <h3 className="font-semibold text-[#003728] text-lg mb-2">{service.title}</h3>
                  <p className="text-[#003728]/70 text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-8">Deliverables</h2>
          <p className="text-[#003728]/80 mb-10 text-lg md:text-xl max-w-3xl mx-auto">
            After every verification, you receive a clear and comprehensive report that provides actionable insights to guide your hiring decisions.
          </p>
          <ul className="max-w-2xl mx-auto space-y-5 text-left">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                <span className="text-[#003728]/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#F2FAF7]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-12 text-center">How It Works</h2>
          <div className="space-y-10">
            {process.map((item, idx) => (
              <motion.div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#003728] to-[#002A1F] text-white font-bold text-xl">{idx + 1}</div>
                <div>
                  <h4 className="text-[#003728] font-semibold text-xl">{item.step}</h4>
                  <p className="text-[#003728]/80 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-12">Why Choose Aitemad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUs.map((item, idx) => (
              <motion.div key={idx} className="flex items-start gap-4 p-6 bg-emerald-50 rounded-2xl shadow-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }}>
                <CheckCircle className="w-7 h-7 text-[#003728]" />
                <p className="text-[#003728]/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-[#F2FAF7]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-12">Additional Services & Add-ons</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {addOns.map((item, idx) => (
              <motion.span key={idx} className="px-6 py-3 border border-[#003728]/20 rounded-full bg-white text-[#003728] font-medium shadow-sm" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#003728] to-[#002A1F] text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Secure Your Hiring Process?</h2>
          <p className="mb-10 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Contact our team today for a tailored verification package that suits your business needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#003728] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              <Mail className="w-4 h-4" /> Request a Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#003728] transition">
              <Phone className="w-4 h-4" /> Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
