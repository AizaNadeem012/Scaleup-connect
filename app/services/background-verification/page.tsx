"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  ShieldCheck, // Replaced Briefcase with ShieldCheck for Security/Trust
  CheckCircle,
  ArrowLeft,
  Users,
  Target,
  Zap,
  TrendingUp,
  Gavel, // For Compliance/Rules
  Eye, // For Verification/Watch
  FileText, // For Report/Deliverables
  MapPin, // For Address/Local Reach
  Clock, // For Timeline/Efficiency
  Scale, // For Scale/Bulk
} from "lucide-react";

// NOTE: Assuming you have these components in your project structure:
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

// DUMMY COMPONENTS (Kept the original styling/structure, only updated the name to 'Aitemad')



export default function AitemadScreeningPage() {
  // Stats adjusted for a background check service
  const dummyStats = {
    checksCompleted: "10K+",
    avgTurnaround: "48h",
    complianceRate: "100%",
  };

  // Dummy pipeline stats adjusted for a background check service
  const pipelineStats = [
    { icon: <FileText className="h-5 w-5 text-emerald-500" />, label: "Reports Generated", value: "1,247" , color: "from-emerald-50 to-green-50", iconText: "text-emerald-600"},
    { icon: <Gavel className="h-5 w-5 text-blue-500" />, label: "Client Compliance Score", value: "99.8%", color: "from-blue-50 to-blue-100", iconText: "text-blue-600" },
    { icon: <Clock className="h-5 w-5 text-purple-500" />, label: "Avg. Screening Time", value: "2.4 days", color: "from-purple-50 to-purple-100", iconText: "text-purple-600" },
    { icon: <Eye className="h-5 w-5 text-orange-500" />, label: "Risk Flags Detected", value: "7%", color: "from-orange-50 to-orange-100", iconText: "text-orange-600" },
  ];

  // Benefits section updated
  const coreBenefits = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
      title: "Mitigate Hiring Risk",
      description: "Protect your organization from fraud, theft, and operational risk.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      title: "Protect Brand Reputation",
      description: "Ensure every hire aligns with your company's trust and integrity standards.",
    },
    {
      icon: <Gavel className="h-6 w-6 text-purple-500" />,
      title: "Ensure Compliance & Audit",
      description: "Meet strict local and international regulatory and client audit requirements.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: "In-Depth Local Reach",
      description: "Standardized protocols with reliable field verification across the region.",
    }
  ];

  // Process Steps updated
  const processSteps = [
    { step: "1", title: "Scope & Consent", desc: "Define verification modules needed and secure candidate consent." },
    { step: "2", title: "Data Collection", desc: "Gathering necessary documents and information from the applicant." },
    { step: "3", title: "Field/Desk Verification", desc: "Executing verifications like police checks, education, and address visits." },
    { step: "4", title: "Quality Assurance (QA)", desc: "A rigorous quality review of all collected evidence and remarks." },
    { step: "5", title: "Final Report Delivery", desc: "Providing a clear Verification Report with a risk summary and recommendation." },
  ];

  // Verification Modules (Services Overview) updated
  const verificationModules = [
    {
      icon: <Target className="h-8 w-8 text-[#003728]" />,
      title: "Identity & Residence",
      desc: "Crucial checks for legal identity and physical verification.",
      features: [
        "CNIC & identity authentication",
        "Address confirmation",
        "Investigative Site Visit",
      ],
      iconBg: "bg-blue-100"
    },
    {
      icon: <FileText className="h-8 w-8 text-[#003728]" />,
      title: "Professional Credentials",
      desc: "Validating the claims that matter most for the role.",
      features: [
        "Employment history (4 data points)",
        "Education & credentials (Local/Intl)",
        "Professional licenses & memberships",
      ],
      iconBg: "bg-green-100"
    },
    {
      icon: <Eye className="h-8 w-8 text-[#003728]" />,
      title: "Risk & Compliance",
      desc: "Screening for criminal, legal, and reputational red flags.",
      features: [
        "Police/character verification",
        "Structured reference checks",
        "Adverse media & sanction watch (OSINT)",
      ],
      iconBg: "bg-purple-100"
    }
  ];

  // Industries We Serve updated
  const industriesServed = [
    { name: "Banks & Money Exchange", description: "High-risk, high-compliance environments" },
    { name: "BPOs & Call Centers", description: "Large volume hiring, data security focus" },
    { name: "Retail & E-commerce", description: "Trusted staff for public-facing roles" },
    { name: "Hospitals & Healthcare", description: "Validating medical credentials and character" },
    { name: "Education Institutions", description: "Protecting students and faculty" },
    { name: "Logistics & Supply Chain", description: "Vetting for reliable cargo handling" },
    { name: "SMEs & Enterprises", description: "General business risk mitigation" },
    { name: "Government & Public Sector", description: "Character and compliance screening" }
  ];

  // Deliverables/Why Us (Benefits Section) updated
  const keyDeliverables = [
    {
      icon: <FileText className="h-8 w-8 text-[#003728]" />,
      title: "Visual Verification Report",
      desc: "Clear pass/flag/insufficient status and verifier remarks.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#003728]" />,
      title: "Risk Summary & Recommendation",
      desc: "Expert hiring advice based on verified facts and evidence.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#003728]" />,
      title: "Confidential & Compliant Handling",
      desc: "Adherence to local laws and standardized SOPs for all data.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#003728]" />,
      title: "API-Ready Intake Options",
      desc: "Fast, automated processes and dashboard reporting (on request).",
    },
  ];


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
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                {/* <div className="h-1 w-16 bg-gradient-to-r from-[#003728] to-emerald-400 rounded-full"></div> */}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-[#003728] mb-4 leading-tight">
                Aitemad
                <span className="block bg-gradient-to-r from-[#003728] to-emerald-600 bg-clip-text text-transparent">
                  Screening Service
                </span>
              </h1>
              
              <p className="text-lg text-[#003728]/80 mb-8 leading-relaxed">
                Reduce **hiring risk**, protect your **brand reputation**, and ensure **compliance** with client and audit requirements through our detailed background checks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#003728] hover:bg-[#002A1F] text-white rounded-full px-8 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <ShieldCheck className="h-5 w-5" />
                  Request a Screening Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#003728] text-[#003728] hover:bg-[#003728] hover:text-white rounded-full px-8 py-3 font-semibold transition-all duration-300"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Services
                </Link>
              </div>

              {/* Stats - font size reduced for a more compact look */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">{dummyStats.checksCompleted}</div>
                  <div className="text-xs text-[#003728]/70">Checks Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">{dummyStats.avgTurnaround}</div>
                  <div className="text-xs text-[#003728]/70">Avg. Turnaround Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">{dummyStats.complianceRate}</div>
                  <div className="text-xs text-[#003728]/70">Client Compliance Rate</div>
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
                    <h3 className="text-xl font-bold text-[#003728] mb-2">Screening Metrics</h3>
                    <p className="text-[#003728]/70">Insights into our service efficiency</p>
                  </div>

                  <div className="space-y-4">
                    {pipelineStats.map((stat, index) => (
                      <div key={index} className={`flex items-center justify-between p-4 bg-gradient-to-r ${stat.color} rounded-2xl border border-opacity-50`}>
                        <div className="flex items-center gap-3">
                          {stat.icon}
                          <span className="font-medium text-[#003728]">{stat.label}</span>
                        </div>
                        <span className={`text-xl font-bold ${stat.iconText}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="my-0 border-t border-gray-200" />

      {/* Why Choose Contract Staffing -> Why Aitemad Screening */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
                Why Aitemad Screening?
              </h2>
              <p className="text-lg text-[#003728]/80 mb-8 leading-relaxed">
                In a world where trust is paramount, our service is your front line of defense. We provide the **confidential, compliant, and conclusive** data you need to make informed hiring decisions.
              </p>

              <div className="space-y-6">
                {coreBenefits.map((benefit, idx) => (
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
                      <h3 className="text-lg font-bold text-[#003728] mb-1 group-hover:text-emerald-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-[#003728]/70 leading-relaxed text-sm">
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
                  <h3 className="text-xl font-bold text-[#003728] mb-6 text-center">
                    Our Verification Process
                  </h3>
                  
                  <div className="space-y-6">
                    {processSteps.map((s) => (
                      <div key={s.step} className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-[#003728] text-white rounded-full text-sm font-bold flex-shrink-0">
                          {s.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#003728] mb-1">
                            {s.title}
                          </h4>
                          <p className="text-sm text-[#003728]/70">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                    {/* Add-on for visual separation or emphasis */}
                     <div className="border-t pt-4 border-gray-200">
                      <div className="flex items-start gap-4">
                        <Scale className="h-8 w-8 text-gray-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-[#003728] mb-1">
                            Add-ons
                          </h4>
                          <p className="text-sm text-[#003728]/70">Post-hire re-verification, vendor screening, bulk drives for seasonal hiring.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="my-0 border-t border-gray-200" />

      {/* Services Overview -> What We Verify (Modular Checks) */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Verification Modules: What We Verify
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-3xl mx-auto">
              Our service is **modular**—pick only the checks you need for a cost-effective and targeted screening process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verificationModules.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#003728]/5 to-emerald-400/5 rounded-3xl transform group-hover:scale-105 transition-all duration-300"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#003728]/10 group-hover:border-[#003728]/20 h-full">
                  <div className={`flex items-center justify-center w-16 h-16 ${s.iconBg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003728] mb-4 group-hover:text-emerald-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#003728]/70 mb-4 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                  <div className="space-y-3">
                    {s.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-[#003728]/70 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-0 border-t border-gray-200" />

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
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Who This Service is For
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-3xl mx-auto">
              Our services are tailored to organizations across critical industries where trust and compliance are non-negotiable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesServed.map((industry, idx) => (
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

      <hr className="my-0 border-t border-gray-200" />

      {/* Benefits Section -> Key Deliverables & Why Us */}
      <section className="py-20 bg-gradient-to-br from-[#F2FAF7] to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-[#003728] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
        >
          <h2 className="text-3xl font-bold text-[#003728] mb-3">
            Key Deliverables & Our Advantage
          </h2>
          <p className="text-lg text-[#003728]/80 mb-12 max-w-3xl mx-auto">
            Clear, actionable reports and a compliant, standardized service you can rely on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyDeliverables.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#003728]/10 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">
                  {b.title}
                </h3>
                <p className="text-[#003728]/70 text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <hr className="my-0 border-t border-gray-200" />

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-[#003728] mb-3">
            Ready to Trust Your Next Hire?
          </h2>
          <p className="text-lg text-[#003728]/80 mb-8 max-w-2xl mx-auto">
            Begin your journey to a more secure and compliant workforce today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#003728] hover:bg-[#002A1F] text-white px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#003728] text-[#003728] hover:bg-[#003728] hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Contact a Compliance Expert
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
