"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MarqueeBand from "@/components/marque";
import {
  Brain,
  CheckCircle,
  ArrowLeft,
  Clock,
  Users,
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
  Heart,
  Lightbulb,
  Rocket,
  BookOpen,
  UserCheck,
  Settings,
  PieChart,
  Activity,
  Target as TargetIcon,
  CheckCircle2,
  AlertCircle,
  Timer,
  Globe,
  Lock,
  Eye,
  Database,
} from "lucide-react";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function OrganizationalPsychologyPage() {
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
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-[#003728] to-emerald-400 rounded-full"></div>
              </div>
              
              {/* HEADING SIZE ADJUSTMENT: From text-5xl md:text-7xl to text-4xl md:text-6xl */}
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#003728] mb-4 leading-tight">
                Organizational
                <span className="block bg-gradient-to-r from-[#003728] to-emerald-600 bg-clip-text text-transparent">
                  Psychology
                </span>
              </h1>
              
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                Enhance workforce effectiveness through deeper understanding of human behavior in the workplace. Science meets strategy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#003728] hover:bg-[#002A1F] text-white rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Brain className="h-5 w-5" />
                  Start Assessment
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
                  <div className="text-2xl font-bold text-[#003728]">85%</div>
                  <div className="text-xs text-[#003728]/70">Engagement Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">40%</div>
                  <div className="text-xs text-[#003728]/70">Retention Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">200+</div>
                  <div className="text-xs text-[#003728]/70">Companies Served</div>
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
                    <h3 className="text-2xl font-bold text-[#003728] mb-2">Psychology Assessment</h3>
                    <p className="text-[#003728]/70">Comprehensive behavioral analysis</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                      <div className="flex items-center gap-3">
                        <Brain className="h-5 w-5 text-emerald-500" />
                        <span className="font-medium text-[#003728]">Cognitive Assessment</span>
                      </div>
                      <span className="text-2xl font-bold text-emerald-600">92%</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <div className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-blue-500" />
                        <span className="font-medium text-[#003728]">Emotional Intelligence</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">88%</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-purple-500" />
                        <span className="font-medium text-[#003728]">Team Dynamics</span>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">95%</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                      <div className="flex items-center gap-3">
                        <Target className="h-5 w-5 text-orange-500" />
                        <span className="font-medium text-[#003728]">Leadership Potential</span>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2FAF7]/50 to-white/50"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* HEADING SIZE ADJUSTMENT: From text-4xl md:text-5xl to text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Our Psychology Services
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Comprehensive psychological solutions designed to enhance workplace effectiveness and employee well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="h-8 w-8 text-[#003728]" />,
                title: "Hiring Quality",
                description: "Psychometric testing & assessments for better hiring decisions",
                features: ["Cognitive ability tests", "Personality assessments", "Skills evaluation", "Cultural fit analysis"],
                color: "from-blue-50 to-blue-100",
                iconBg: "bg-blue-100"
              },
              {
                icon: <Heart className="h-8 w-8 text-[#003728]" />,
                title: "Employee Engagement",
                description: "Strategies to increase engagement and reduce turnover",
                features: ["Engagement surveys", "Motivation analysis", "Retention strategies", "Wellness programs"],
                color: "from-green-50 to-green-100",
                iconBg: "bg-green-100"
              },
              {
                icon: <Target className="h-8 w-8 text-[#003728]" />,
                title: "Leadership Development",
                description: "Cultivating future leaders through personalized coaching",
                features: ["Leadership assessment", "Executive coaching", "Succession planning", "Performance optimization"],
                color: "from-purple-50 to-purple-100",
                iconBg: "bg-purple-100"
              },
              {
                icon: <Activity className="h-8 w-8 text-[#003728]" />,
                title: "Workplace Wellness",
                description: "Mental health and productivity enhancement initiatives",
                features: ["Stress management", "Work-life balance", "Mental health support", "Productivity optimization"],
                color: "from-orange-50 to-orange-100",
                iconBg: "bg-orange-100"
              },
              {
                icon: <Settings className="h-8 w-8 text-[#003728]" />,
                title: "Culture Transformation",
                description: "Change management and positive work culture development",
                features: ["Culture assessment", "Change strategies", "Team building", "Communication improvement"],
                color: "from-teal-50 to-teal-100",
                iconBg: "bg-teal-100"
              },
              {
                icon: <PieChart className="h-8 w-8 text-[#003728]" />,
                title: "Organizational Analysis",
                description: "Deep insights into organizational dynamics and behavior",
                features: ["Organizational assessment", "Team dynamics", "Communication patterns", "Performance analysis"],
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
      <section className="py-20 bg-gradient-to-br from-[#F2FAF7] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-[#003728] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* HEADING SIZE ADJUSTMENT: From text-4xl md:text-5xl to text-3xl md:text-4xl */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
                Our Psychology Process
              </h2>
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                A scientific approach to understanding and improving workplace behavior and performance.
              </p>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Assessment & Analysis",
                    description: "Comprehensive psychological evaluation and behavioral analysis",
                    icon: <Brain className="h-6 w-6" />
                  },
                  {
                    step: "02", 
                    title: "Data Interpretation",
                    description: "Scientific analysis of psychological data and patterns",
                    icon: <BarChart3 className="h-6 w-6" />
                  },
                  {
                    step: "03",
                    title: "Strategy Development",
                    description: "Customized solutions based on psychological insights",
                    icon: <Lightbulb className="h-6 w-6" />
                  },
                  {
                    step: "04",
                    title: "Implementation & Support",
                    description: "Ongoing support and monitoring of psychological interventions",
                    icon: <Rocket className="h-6 w-6" />
                  }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003728]/20 to-emerald-400/20 rounded-3xl transform -rotate-2"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#003728] to-[#002A1F] rounded-full mx-auto mb-4">
                      <Brain className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#003728] mb-2">Psychology Dashboard</h3>
                    <p className="text-[#003728]/70">Real-time psychological insights</p>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#003728]">Team Cohesion</span>
                        <span className="text-sm font-semibold text-emerald-600">High</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#003728]">Employee Satisfaction</span>
                        <span className="text-sm font-semibold text-blue-600">Good</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#003728]">Leadership Effectiveness</span>
                        <span className="text-sm font-semibold text-purple-600">Excellent</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#003728]">Stress Levels</span>
                        <span className="text-sm font-semibold text-orange-600">Low</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* HEADING SIZE ADJUSTMENT: From text-4xl md:text-5xl to text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Real results from organizations that transformed their workplace through psychology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "Tech Startup",
                challenge: "High employee turnover and low engagement",
                solution: "Comprehensive engagement assessment and wellness program",
                result: "40% reduction in turnover, 85% increase in engagement",
                icon: <Rocket className="h-8 w-8 text-[#003728]" />
              },
              {
                company: "Manufacturing Firm",
                challenge: "Poor team dynamics and communication issues",
                solution: "Team psychology assessment and leadership development",
                result: "60% improvement in team collaboration, 50% fewer conflicts",
                icon: <Users className="h-8 w-8 text-[#003728]" />
              },
              {
                company: "Financial Services",
                challenge: "Leadership pipeline and succession planning",
                solution: "Leadership potential assessment and executive coaching",
                result: "90% success rate in leadership promotions, 30% faster development",
                icon: <Target className="h-8 w-8 text-[#003728]" />
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
                      <h4 className="font-semibold text-[#003728] mb-2">Challenge:</h4>
                      <p className="text-xs text-[#003728]/70">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003728] mb-2">Solution:</h4>
                      <p className="text-xs text-[#003728]/70">{story.solution}</p>
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
            {/* HEADING SIZE ADJUSTMENT: From text-4xl md:text-5xl to text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Why Choose Our Psychology Services?
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Evidence-based solutions that deliver measurable improvements in workplace effectiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-[#003728]" />,
                title: "Science-Based",
                description: "Evidence-based psychological methods and assessments"
              },
              {
                icon: <Target className="h-8 w-8 text-[#003728]" />,
                title: "Customized Solutions",
                description: "Tailored approaches for your specific organizational needs"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-[#003728]" />,
                title: "Measurable Results",
                description: "Clear metrics and ROI tracking for all interventions"
              },
              {
                icon: <Award className="h-8 w-8 text-[#003728]" />,
                title: "Expert Team",
                description: "Certified psychologists and organizational behavior specialists"
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
            {/* HEADING SIZE ADJUSTMENT: From text-4xl md:text-5xl to text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Workplace Psychology
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Unlock the potential of your workforce with evidence-based psychological solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#003728] hover:bg-gray-100 rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Brain className="h-5 w-5" />
                Start Psychology Assessment
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
<MarqueeBand/>
      <Footer />
    </main>
  );
}