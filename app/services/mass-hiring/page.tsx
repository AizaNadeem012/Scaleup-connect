"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scale,
  Gavel,
  FileSignature,
  XCircle,
  FileText,
  BookOpen,
  BarChart3,
  ClipboardList,
  CalendarCheck,
  BookMarked,
  AlertCircle,
  CheckCircle2,
  // MessageSquareQuote,
  Zap,
  Mail,
  ArrowLeft,
  ArrowRight,
  Star,
  HelpCircle,
} from "lucide-react";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

// ✅ Define prop types for FAQ items
interface FAQItemProps {
  question: string;
  answer: string;
}

// ✅ Strongly typed FAQ component
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
    className="border-b border-emerald-200 py-4"
  >
    <div className="flex justify-between items-center cursor-pointer">
      <h4 className="text-lg font-semibold text-teal-900 flex items-center gap-3">
        <HelpCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
        {question}
      </h4>
      <ArrowRight className="h-5 w-5 text-emerald-600 transition-transform" />
    </div>
    <p className="mt-2 text-teal-900/70 pl-8">{answer}</p>
  </motion.div>
);

export default function CorporateLegalAffairsPage() {
  const primaryColorClass = "text-teal-900";
  const primaryBgClass = "bg-teal-900";
  const primaryHoverBgClass = "hover:bg-teal-800";
  const lightBgClass = "bg-emerald-50";

  // ✅ Compliance risk list
  const complianceRisks = [
    {
      icon: AlertCircle,
      title: "Unfair Dismissal Claims",
      description: "Lacking documentation for termination leads to expensive litigation.",
    },
    {
      icon: ClipboardList,
      title: "Minimum Wage Violation",
      description: "Non-compliance with provincial and federal minimum wage laws.",
    },
    {
      icon: CalendarCheck,
      title: "Statutory Filing Deadlines",
      description: "Missed EOBI, PESSI, and other labour-related official submissions.",
    },
    {
      icon: BookMarked,
      title: "Sexual Harassment Policy",
      description: "Mandatory S.H.P. (Sexual Harassment Policy) is often missing or outdated.",
    },
    {
      icon: XCircle,
      title: "Contractual Ambiguity",
      description: "Vague clauses in employment contracts that are unenforceable in court.",
    },
  ];

  // ✅ Statutory focus data
  const statutoryFocuses = [
    {
      title: "West Pakistan Shops and Establishments Ordinance",
      desc: "Compliance for working hours, holidays, and record-keeping.",
    },
    {
      title: "Industrial Relations Act (IRA)",
      desc: "Guidance on trade unions, collective bargaining, and dispute resolution.",
    },
    {
      title: "Provincial Social Security Ordinances",
      desc: "Correct registration and contribution calculation for PESSI and SESSI.",
    },
    {
      title: "Employment of Children Act",
      desc: "Ensuring zero tolerance and compliance with the prohibition of child labour.",
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation/>
      {/* HERO */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-900 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-900 to-emerald-700 rounded-xl shadow-xl">
                <Scale className="h-6 w-6 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold font-serif text-teal-900 mb-4 leading-tight">
              Corporate Legal
              <span className="block bg-gradient-to-r from-teal-900 to-emerald-600 bg-clip-text text-transparent">
                Affairs
              </span>
              <span className="block text-xl md:text-2xl font-normal font-sans mt-2 text-teal-900/70">
                (HR-Centric Legal Compliance in Pakistan)
              </span>
            </h1>

            <p className="text-lg text-teal-900/80 mb-7 leading-relaxed font-sans">
              Protect your company with the right policies, contracts, and{" "}
              <strong>Pakistan-compliant HR documentation</strong>. We offer pragmatic legal
              support through our licensed partners to secure your workforce foundation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-teal-900 hover:bg-teal-800 text-white rounded-full px-7 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FileText className="h-5 w-5" />
                Get Legal Support Now
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-500 text-teal-900 hover:bg-emerald-50 rounded-full px-7 py-3 font-semibold transition-all duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
                Explore HR Services
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-teal-900/10">
              <h3 className="text-2xl font-bold text-teal-900 mb-6 border-b pb-3 border-emerald-100">
                Immediate Legal Focus Areas
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-teal-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Gavel className="h-5 w-5 text-emerald-600" />
                    <span className="font-medium text-teal-900">
                      Dispute Mitigation & Advisory
                    </span>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FileSignature className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-teal-900">
                      Contract Vetting & Drafting
                    </span>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-teal-900">
                      Termination & Layoff Compliance
                    </span>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPLIANCE RISKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            The Real Cost of Non-Compliance
          </h2>
          <p className="text-xl text-teal-900/80 mb-12 max-w-4xl mx-auto">
            Minimize litigation and regulatory penalties by addressing these common HR legal blind spots.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceRisks.map((risk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
                className="p-8 rounded-2xl bg-white shadow-xl border border-red-50 hover:border-red-200 transition-all duration-300 transform hover:scale-[1.02] text-left"
              >
                <risk.icon className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-bold text-xl text-red-800 mb-2">{risk.title}</h3>
                <p className="text-sm text-gray-600">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATUTORY FOCUS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-12 text-center">
            Pakistan Labour Law Focus
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-xl text-teal-900/80 mb-6">
                Our legal partners are deeply familiar with the complex and decentralized labour
                laws of Pakistan (Sindh, Punjab, KPK, Balochistan). We don’t just provide generic
                documents; we provide{" "}
                <strong>provincially aligned legal protection</strong>.
              </p>
              <div className="p-6 rounded-2xl bg-teal-900 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-emerald-300" />
                  <span className="font-semibold text-lg">Key Insight:</span>
                </div>
                <p className="text-sm mt-2 text-emerald-100">
                  Labour law is a <strong>provincial subject</strong>; a policy compliant in Punjab
                  may not be fully compliant in Sindh. We tailor documents to your exact location.
                </p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {statutoryFocuses.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex items-start gap-4 p-5 bg-emerald-50 rounded-xl border border-emerald-100"
                >
                  <BookMarked className="h-6 w-6 text-teal-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-teal-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className={`${lightBgClass} py-20 text-center`}>
        <div className="max-w-4xl mx-auto px-6">
          {/* <MessageSquareQuote className="h-10 w-10 text-emerald-600 mx-auto mb-4" /> */}
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-2xl font-serif italic text-teal-900 leading-relaxed"
          >
            "The legal audit was eye-opening. We thought our contracts were fine, but their partners
            immediately highlighted critical gaps. Now, we operate with zero legal anxiety."
          </motion.blockquote>
          <p className="mt-6 font-semibold text-teal-900">
            — Saima Khan, CEO of TechBridge Solutions
          </p>
          <div className="flex justify-center mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-10 text-center">
            FAQs on HR Legal Affairs
          </h2>
          <div className="space-y-2">
            <FAQItem
              question="Are you lawyers or HR consultants?"
              answer="We are HR consultants. Our legal services are provided through our licensed, independent legal partners who specialize in Pakistan's corporate and labor law."
            />
            <FAQItem
              question="How often should we update our Employee Handbook?"
              answer="We recommend a full review once a year or after any major change in Provincial or Federal labor law."
            />
            <FAQItem
              question="Do your services cover litigation support?"
              answer="Yes, our legal partners provide advisory and full representation for labor court and industrial tribunal cases."
            />
            <FAQItem
              question="What is the typical turnaround time for a contract draft?"
              answer="For standard employment contracts, the initial draft is typically delivered within 48 hours of receiving all details."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Zap className="h-10 w-10 text-emerald-300 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Legal Perimeter?
          </h2>
          <p className="mb-8 text-emerald-100 max-w-2xl mx-auto">
            Don't wait for a legal challenge. Schedule your consultation with our expert corporate
            legal partners to ensure your HR documentation is compliant.
          </p>
          <Link
            href="/contact"
            className="bg-white text-emerald-800 px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-emerald-100 transition-all shadow-2xl transform hover:scale-105"
          >
            <Mail className="h-5 w-5" />
            Start Legal Compliance
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
