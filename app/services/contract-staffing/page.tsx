"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Briefcase,
  CheckCircle,
  ArrowLeft,
  Clock,
  Users,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Award,
} from "lucide-react";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";


export default function ContractStaffingPage() {
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
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-[#003728] to-emerald-400 rounded-full"></div>
              </div>
              
              {/* HEADING SIZE ADJUSTED: text-5xl -> text-4xl | md:text-7xl -> md:text-5xl */}
              <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-[#003728] mb-4 leading-tight">
                Contract
                <span className="block bg-gradient-to-r from-[#003728] to-emerald-600 bg-clip-text text-transparent">
                  Staffing
                </span>
              </h1>
              
              {/* LEAD PARAGRAPH SIZE ADJUSTED: text-xl -> text-lg */}
              <p className="text-lg text-[#003728]/80 mb-8 leading-relaxed">
                Flexible staffing solutions that provide organizations with the agility to adapt quickly to changing business needs. Scale your workforce efficiently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  // BUTTON PADDING ADJUSTED: py-4 -> py-3 (slightly smaller)
                  className="inline-flex items-center justify-center gap-2 bg-[#003728] hover:bg-[#002A1F] text-white rounded-full px-8 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Briefcase className="h-5 w-5" />
                  Find Contract Staff
                </Link>
                <Link
                  href="/services"
                  // BUTTON PADDING ADJUSTED: py-4 -> py-3 (slightly smaller)
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#003728] text-[#003728] hover:bg-[#003728] hover:text-white rounded-full px-8 py-3 font-semibold transition-all duration-300"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Services
                </Link>
              </div>

              {/* Stats - font size reduced for a more compact look */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  {/* STAT FONT SIZE ADJUSTED: text-3xl -> text-2xl */}
                  <div className="text-2xl font-bold text-[#003728]">500+</div>
                  <div className="text-xs text-[#003728]/70">Active Contracts</div>
                </div>
                <div className="text-center">
                  {/* STAT FONT SIZE ADJUSTED: text-3xl -> text-2xl */}
                  <div className="text-2xl font-bold text-[#003728]">48h</div>
                  <div className="text-xs text-[#003728]/70">Deployment Time</div>
                </div>
                <div className="text-center">
                  {/* STAT FONT SIZE ADJUSTED: text-3xl -> text-2xl */}
                  <div className="text-2xl font-bold text-[#003728]">95%</div>
                  <div className="text-xs text-[#003728]/70">Success Rate</div>
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
                    {/* DASHBOARD HEADING ADJUSTED: text-2xl -> text-xl */}
                    <h3 className="text-xl font-bold text-[#003728] mb-2">Contract Pipeline</h3>
                    <p className="text-[#003728]/70">Real-time staffing analytics</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-emerald-500" />
                        <span className="font-medium text-[#003728]">Available Talent</span>
                      </div>
                      {/* VALUE FONT SIZE ADJUSTED: text-2xl -> text-xl */}
                      <span className="text-xl font-bold text-emerald-600">1,247</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-blue-500" />
                        <span className="font-medium text-[#003728]">Active Projects</span>
                      </div>
                      {/* VALUE FONT SIZE ADJUSTED: text-2xl -> text-xl */}
                      <span className="text-xl font-bold text-blue-600">89</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-purple-500" />
                        <span className="font-medium text-[#003728]">Avg. Response Time</span>
                      </div>
                      {/* VALUE FONT SIZE ADJUSTED: text-2xl -> text-xl */}
                      <span className="text-xl font-bold text-purple-600">2.4h</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-orange-500" />
                        <span className="font-medium text-[#003728]">Client Satisfaction</span>
                      </div>
                      {/* VALUE FONT SIZE ADJUSTED: text-2xl -> text-xl */}
                      <span className="text-xl font-bold text-orange-600">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      ---

      {/* Why Choose Contract Staffing */}
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
              {/* HEADING SIZE ADJUSTED: text-4xl md:text-5xl -> text-3xl md:text-4xl */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
                Why Choose Contract Staffing?
              </h2>
              {/* LEAD PARAGRAPH SIZE ADJUSTED: text-xl -> text-lg */}
              <p className="text-lg text-[#003728]/80 mb-8 leading-relaxed">
                In today's fast-paced business environment, flexibility is key. Our contract staffing solutions provide organizations with the agility to adapt quickly to evolving needs.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Zap className="h-6 w-6 text-emerald-500" />,
                    title: "Quick Access to Skilled Professionals",
                    description: "Get the right talent when you need it, without the lengthy hiring process"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-blue-500" />,
                    title: "Reduced Hiring Risks",
                    description: "Minimize administrative burden and long-term commitments"
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
                    title: "Cost-Effective Solution",
                    description: "Perfect for project-based work and temporary needs"
                  },
                  {
                    icon: <Target className="h-6 w-6 text-orange-500" />,
                    title: "Scalable Workforce",
                    description: "Scale up or down based on project demands"
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
                  {/* PROCESS HEADING ADJUSTED: text-2xl -> text-xl */}
                  <h3 className="text-xl font-bold text-[#003728] mb-4 text-center">
                    Our Process
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Requirements Analysis",
                        desc: "Understanding your specific staffing needs and project requirements.",
                      },
                      {
                        step: "2",
                        title: "Talent Sourcing",
                        desc: "Identifying and screening qualified professionals from our network.",
                      },
                      {
                        step: "3",
                        title: "Matching & Placement",
                        desc: "Matching the right candidate with your project requirements.",
                      },
                      {
                        step: "4",
                        title: "Ongoing Support",
                        desc: "Continuous support and management throughout the engagement.",
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

      ---

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
            {/* HEADING SIZE ADJUSTED: text-4xl md:text-5xl -> text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Our Contract Staffing Services
            </h2>
            {/* LEAD PARAGRAPH SIZE ADJUSTED: text-xl -> text-lg */}
            <p className="text-lg text-[#003728]/80 max-w-3xl mx-auto">
              Comprehensive staffing solutions tailored to your project needs and business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-[#003728]" />,
                title: "Qualified Professionals",
                desc: "We ensure that the professionals we provide meet your exact requirements.",
                features: [
                  "Pre-screened candidates",
                  "Skills verification",
                  "Background checks",
                  "Experience validation",
                ],
                color: "from-blue-50 to-blue-100",
                iconBg: "bg-blue-100"
              },
              {
                icon: <Zap className="h-8 w-8 text-[#003728]" />,
                title: "Fast Results",
                desc: "Quickly integrate skilled professionals into your teams.",
                features: [
                  "Rapid deployment",
                  "Quick onboarding",
                  "Immediate productivity",
                  "Seamless integration",
                ],
                color: "from-green-50 to-green-100",
                iconBg: "bg-green-100"
              },
              {
                icon: <Shield className="h-8 w-8 text-[#003728]" />,
                title: "Reduced Hiring Risks",
                desc: "Meet project goals without long-term commitments.",
                features: [
                  "Flexible terms",
                  "Risk mitigation",
                  "Cost control",
                  "Easy termination",
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
                  {/* CARD HEADING ADJUSTED: text-2xl -> text-xl */}
                  <h3 className="text-xl font-bold text-[#003728] mb-4 group-hover:text-emerald-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#003728]/70 mb-4 leading-relaxed">
                    {s.desc}
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

      ---

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
            {/* HEADING SIZE ADJUSTED: text-4xl md:text-5xl -> text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Industries We Serve
            </h2>
            {/* LEAD PARAGRAPH SIZE ADJUSTED: text-xl -> text-lg */}
            <p className="text-lg text-[#003728]/80 max-w-3xl mx-auto">
              Our contract staffing solutions span across various industries and domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Information Technology", description: "Software developers, system analysts, IT support" },
              { name: "Finance & Banking", description: "Financial analysts, accountants, risk managers" },
              { name: "Healthcare", description: "Medical professionals, healthcare administrators" },
              { name: "Manufacturing", description: "Engineers, production managers, quality control" },
              { name: "Marketing & Sales", description: "Digital marketers, sales professionals, content creators" },
              { name: "Human Resources", description: "HR specialists, recruiters, training professionals" },
              { name: "Project Management", description: "Project managers, coordinators, consultants" },
              { name: "Customer Service", description: "Support agents, customer success managers" }
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

      ---

      {/* Benefits Section */}
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
          {/* HEADING SIZE ADJUSTED: text-4xl -> text-3xl */}
          <h2 className="text-xl font-bold text-[#003728] mb-3">
            Key Benefits
          </h2>
          {/* LEAD PARAGRAPH SIZE ADJUSTED: text-xl -> text-lg */}
          <p className="text-lg text-[#003728]/80 mb-12 max-w-3xl mx-auto">
            Why organizations choose our contract staffing solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-[#003728]" />,
                title: "Quick Deployment",
                desc: "Get professionals on board within days.",
              },
              {
                icon: <Target className="h-8 w-8 text-[#003728]" />,
                title: "Precise Matching",
                desc: "Find candidates who perfectly match your needs.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-[#003728]" />,
                title: "Cost Effective",
                desc: "Reduce recruitment costs and overhead.",
              },
              {
                icon: <Award className="h-8 w-8 text-[#003728]" />,
                title: "Quality Assured",
                desc: "All candidates undergo rigorous screening.",
              },
            ].map((b, i) => (
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
                <p className="text-[#003728]/70">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      ---

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          {/* HEADING SIZE ADJUSTED: text-4xl -> text-3xl */}
          <h2 className="text-xl font-bold text-[#003728] mb-3">
            Ready to Scale Your Team?
          </h2>
          {/* LEAD PARAGRAPH SIZE ADJUSTED: text-xl -> text-lg */}
          <p className="text-lg text-[#003728]/80 mb-8 max-w-2xl mx-auto">
            Get access to top talent quickly and efficiently with our contract
            staffing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              // BUTTON PADDING/SIZE ADJUSTED: py-3 text-lg (maintained)
              className="rounded-full bg-[#003728] hover:bg-[#002A1F] text-white px-8 py-3 text-lg transition-all duration-300"
            >
              Find Contract Staff
            </Link>
            <Link
              href="/services"
              // BUTTON PADDING/SIZE ADJUSTED: py-3 text-lg (maintained)
              className="rounded-full border border-[#003728] text-[#003728] hover:bg-[#003728] hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
