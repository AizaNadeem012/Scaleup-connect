"use client";

import Navigation from "@/components/navigation";
import {Footer} from "@/components/footer"; // ✅ default import, not named
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Brain,
  BookOpen,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#F2FAF7] via-white to-[#F9FFFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold font-serif text-[#003728] mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-[#003728]/80 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive HR solutions designed to empower businesses and
            accelerate workforce growth. From background checks to leadership
            coaching, we ensure your people strategies are future-ready.
          </motion.p>
        </div>
      </section>

      {/* Section 1: Background Verification Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#003728]/10 rounded-2xl">
                  <Shield className="h-8 w-8 text-[#003728]" />
                </div>
                <h2 className="text-4xl font-bold text-[#003728]">
                  Background Verification
                </h2>
              </div>
              <p className="text-lg text-[#003728]/80 leading-relaxed mb-8">
                Make informed hiring decisions with our comprehensive background
                verification services. We help organizations reduce risk and
                hire with confidence by validating candidates’ educational,
                professional, and personal histories.
              </p>
              <div className="space-y-4">
                {[
                  "Education Verification: Confirming academic qualifications",
                  "Degree Verification: Ensuring authenticity of degrees",
                  "Criminal Check: Screening for legal history",
                  "Reference Verification: Authenticating references",
                  "Employment Verification: Confirming past work details",
                  "Site Visit: Verifying residential address",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#003728] mt-0.5 flex-shrink-0" />
                    <span className="text-[#003728]/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/services/background-verification">
                  <Button className="rounded-full bg-[#003728] hover:bg-[#002A1F] text-white flex items-center gap-2">
                    Explore Service <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#F9FFFC] to-white rounded-3xl p-8 shadow-xl border border-[#003728]/10"
            >
              <h3 className="text-2xl font-bold text-[#003728] mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {[
                  "Comprehensive screening process",
                  "Fast turnaround times",
                  "Detailed and transparent reporting",
                  "Confidential handling of sensitive data",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#003728] rounded-full"></div>
                    <span className="text-[#003728]/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Mass Hiring */}
      <section className="py-24 bg-gradient-to-b from-[#F2FAF7] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-[#003728]/10"
            >
              <h3 className="text-2xl font-bold text-[#003728] mb-6">
                Benefits of Our Mass Hiring
              </h3>
              <div className="space-y-4">
                {[
                  "Hire at scale with precision",
                  "Reduce recruitment costs",
                  "Access larger, better talent pools",
                  "Save significant HR time & effort",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#003728] rounded-full"></div>
                    <span className="text-[#003728]/80">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#003728]/10 rounded-2xl">
                  <Users className="h-8 w-8 text-[#003728]" />
                </div>
                <h2 className="text-4xl font-bold text-[#003728]">
                  Mass Hiring
                </h2>
              </div>
              <p className="text-lg text-[#003728]/80 leading-relaxed mb-6">
                Large-scale recruitment in Pakistan often suffers from manual,
                inconsistent, and time-consuming processes. Our Mass Hiring
                service introduces structured testing and assessment solutions
                to help organizations screen, evaluate, and select from large
                applicant pools effectively.
              </p>
              <p className="text-[#003728]/80 leading-relaxed">
                With technology-driven assessments, we provide standardized and
                reliable hiring processes that ensure better candidate quality
                while reducing costs and effort.
              </p>
              <div className="mt-6">
                <Link href="/services/mass-hiring">
                  <Button className="rounded-full bg-[#003728] hover:bg-[#002A1F] text-white flex items-center gap-2">
                    Explore Service <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Organizational Psychology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-[#003728]/10 rounded-2xl">
                <Brain className="h-8 w-8 text-[#003728]" />
              </div>
              <h2 className="text-4xl font-bold text-[#003728]">
                Organizational Psychology
              </h2>
            </div>
            <p className="text-xl text-[#003728]/80 max-w-4xl mx-auto leading-relaxed">
              Unlock the full potential of your workforce by applying
              psychological insights to recruitment, leadership, and workplace
              culture. We blend science and strategy to elevate performance.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hiring Quality",
                desc: "Using psychometrics to find the right fit for roles.",
                features: [
                  "Psychometric Testing",
                  "Assessment Tools",
                  "Talent Evaluation",
                ],
              },
              {
                title: "Employee Engagement",
                desc: "Boosting motivation and reducing attrition rates.",
                features: [
                  "Engagement Surveys",
                  "Retention Strategies",
                  "Team Building",
                ],
              },
              {
                title: "Leadership Development",
                desc: "Developing future-ready leaders with personalized coaching.",
                features: [
                  "Executive Coaching",
                  "Leadership Training",
                  "Succession Planning",
                ],
              },
              {
                title: "Workplace Wellness",
                desc: "Integrating wellness initiatives for productivity gains.",
                features: [
                  "Mental Health Support",
                  "Wellness Programs",
                  "Productivity Boost",
                ],
              },
              {
                title: "Culture Transformation",
                desc: "Shaping positive, adaptive workplace cultures.",
                features: [
                  "Change Management",
                  "Culture Assessments",
                  "Transformation Roadmaps",
                ],
              },
              {
                title: "Performance Optimization",
                desc: "Maximizing output with behavioral science.",
                features: [
                  "Performance Analysis",
                  "Behavioral Insights",
                  "Optimization Plans",
                ],
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-gradient-to-br from-[#F9FFFC] to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#003728]/10"
              >
                <h3 className="text-xl font-bold text-[#003728] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#003728]/70 mb-4">{service.desc}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#003728]" />
                      <span className="text-sm text-[#003728]/70">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Learning & Development */}
      <section className="py-24 bg-gradient-to-b from-[#F2FAF7] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#003728]/10 rounded-2xl">
                  <BookOpen className="h-8 w-8 text-[#003728]" />
                </div>
                <h2 className="text-4xl font-bold text-[#003728]">
                  Learning & Development
                </h2>
              </div>
              <p className="text-lg text-[#003728]/80 leading-relaxed mb-6">
                With a network of 100+ trainers, we deliver tailored soft skills
                and technical training that prepares employees to thrive in a
                fast-changing, AI-driven economy.
              </p>
              <p className="text-[#003728]/80 leading-relaxed mb-8">
                Our programs focus on practical, real-world applications, from
                communication and leadership to AI, data, and technology
                upskilling.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-[#003728] mb-2">
                    Soft Skills
                  </h4>
                  <p className="text-sm text-[#003728]/70">
                    Communication, Leadership, Teamwork
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <h4 className="font-semibold text-[#003728] mb-2">
                    Technical Skills
                  </h4>
                  <p className="text-sm text-[#003728]/70">
                    AI, Data, Technology, Domain Expertise
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/services/learning-development">
                  <Button className="rounded-full bg-[#003728] hover:bg-[#002A1F] text-white flex items-center gap-2">
                    Explore Service <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Approach */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#003728]/10">
                <h3 className="text-xl font-semibold text-[#003728] mb-3">
                  Our Approach
                </h3>
                <ul className="space-y-2 text-[#003728]/80">
                  <li>✔ Customized curriculum design</li>
                  <li>✔ Interactive, engaging methods</li>
                  <li>✔ Real-world project applications</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#003728]/10">
                <h3 className="text-xl font-semibold text-[#003728] mb-3">
                  Expert Trainers
                </h3>
                <p className="text-[#003728]/80">
                  100+ industry professionals serving as trainers across domains
                  — from finance and technology to leadership and HR.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Staffing Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#003728] mb-6">
              Flexible Staffing Solutions
            </h2>
            <p className="text-xl text-[#003728]/80 max-w-3xl mx-auto leading-relaxed">
              From contract staffing to executive hiring, our staffing solutions
              give you the flexibility to meet today’s workforce challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contract Staffing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#F9FFFC] to-white rounded-3xl p-8 shadow-xl border border-[#003728]/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#003728]/10 rounded-2xl">
                  <Briefcase className="h-8 w-8 text-[#003728]" />
                </div>
                <h3 className="text-2xl font-bold text-[#003728]">
                  Contract Staffing
                </h3>
              </div>
              <p className="text-[#003728]/80 mb-4">
                Meet project-based and seasonal workforce needs with flexible
                staffing solutions. Scale up or down quickly without long-term
                commitments.
              </p>
              <ul className="space-y-2 text-[#003728]/80">
                <li>✔ Temporary workforce solutions</li>
                <li>✔ Specialized skill-based hiring</li>
                <li>✔ Reduced payroll burden</li>
              </ul>
            </motion.div>

            {/* Executive Hiring */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="bg-gradient-to-br from-[#F9FFFC] to-white rounded-3xl p-8 shadow-xl border border-[#003728]/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#003728]/10 rounded-2xl">
                  <Users className="h-8 w-8 text-[#003728]" />
                </div>
                <h3 className="text-2xl font-bold text-[#003728]">
                  Executive Hiring
                </h3>
              </div>
              <p className="text-[#003728]/80 mb-4">
                Finding leaders who can transform your business. We connect you
                with visionary executives ready to drive growth.
              </p>
              <ul className="space-y-2 text-[#003728]/80">
                <li>✔ C-suite and senior-level placements</li>
                <li>✔ Industry-specific expertise</li>
                <li>✔ Confidential search process</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#003728] to-[#005F48] text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-white/90">
            Let’s build a future-ready team together. Our services are designed
            to make hiring, training, and managing people easier and more
            effective.
          </p>
          <Link href="/contact">
            <Button className="rounded-full bg-white text-[#003728] hover:bg-[#F2FAF7] px-6 py-3 text-lg font-semibold">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
