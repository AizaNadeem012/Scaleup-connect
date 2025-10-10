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
  Award,
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
    { icon: UserCheck, title: "CNIC & Identity Authentication" },
    { icon: MapPin, title: "Address Confirmation & Investigative Site Visit" },
    { icon: Briefcase, title: "Employment History (designation, tenure, reason for leaving, salary)" },
    { icon: GraduationCap, title: "Education & Credentials (local & international)" },
    { icon: FileText, title: "Professional Licenses & Memberships" },
    { icon: Search, title: "Police / Character Verification" },
    { icon: Users, title: "Reference Checks (structured)" },
    { icon: Database, title: "Adverse Media & Sanction Watch (OSINT)" },
  ];

  const deliverables = [
    "Clear, visual Verification Report (pass/flag/insufficient)",
    "Evidence pack & verifier remarks",
    "Risk summary + hiring recommendation",
  ];

  const process = [
    "Scope & consent",
    "Data collection",
    "Field/desk verification",
    "Quality Assurance (QA)",
    "Final report",
  ];

  const whyUs = [
    "Local reach, standardized SOPs, confidential & compliant handling",
    "API-ready intake options and dashboard reporting (on request)",
  ];

  const addOns = [
    "Post-hire re-verification",
    "Vendor screening",
    "Bulk drives for seasonal hiring",
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#F2FAF7] via-white to-[#E8F5E8] lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4 mx-auto w-max">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#003728] to-[#002A1F] rounded-lg shadow-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-[#003728]/70 uppercase tracking-wide">
                Employment Background Checks
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-[#003728] mb-5">
              Aitemad Screening Service
              <span className="block bg-gradient-to-r from-[#003728] to-emerald-600 bg-clip-text text-transparent">
                Employment Background Checks
              </span>
            </h1>

            <p className="text-lg text-[#003728]/80 mb-7 max-w-2xl mx-auto">
              Purpose: Reduce hiring risk, protect brand reputation, and comply with client/audit requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#003728] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#002A1F] transition"
              >
                Request Screening
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-[#003728] text-[#003728] px-6 py-3 rounded-full font-semibold hover:bg-[#003728] hover:text-white transition"
              >
                <ArrowLeft className="h-5 w-5" />
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
            Who It's For
          </h2>
          <p className="text-lg text-[#003728]/80 mb-8">
            Banks, BPOs, retailers, hospitals, educational institutions, logistics firms, SMEs & enterprises
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {audience.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-emerald-50 rounded-full border border-[#003728]/10 text-sm text-[#003728]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Verify */}
      <section className="py-20 lg:py-24 bg-[#F2FAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003728] mb-8 text-center">
            What We Verify
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg border border-[#003728]/10 hover:shadow-2xl transition"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-[#003728]/10 rounded-xl mb-4">
                    <Icon className="h-7 w-7 text-[#003728]" />
                  </div>
                  <p className="text-center text-[#003728] font-medium">{service.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003728] mb-8 text-center">Deliverables</h2>
          <ul className="max-w-2xl mx-auto space-y-4 list-none">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[#003728]/80">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-24 bg-[#F2FAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#003728] mb-8 text-center">How It Works</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {process.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#003728] to-[#002A1F] text-white rounded-xl font-bold">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-[#003728] font-semibold">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003728] mb-8">Why Us</h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {whyUs.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[#003728]/80 justify-center">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 lg:py-24 bg-[#F2FAF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003728] mb-8">Add-ons</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {addOns.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white rounded-full border border-[#003728]/10 text-sm text-[#003728]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#003728] to-[#002A1F] text-white text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to reduce hiring risk?</h2>
          <p className="mb-8 text-lg">Contact our team for a tailored screening package and pricing.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#003728] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              <Mail className="h-4 w-4" /> Request Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#003728] transition"
            >
              <Phone className="h-4 w-4" /> Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
