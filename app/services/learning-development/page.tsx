"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MarqueeBand from "@/components/marque";
import {
  BookOpen,
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
  Brain,
  Lightbulb,
  Rocket,
  GraduationCap,
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
  Play,
  Video,
  Headphones,
  Laptop,
  Monitor,
  Smartphone,
  Wifi,
  Download,
  Upload,
  Share2,
  MessageCircle,
  ThumbsUp,
  Award as AwardIcon,
  Trophy,
  Medal,
  // Certificate, // Removed: no exported member 'Certificate' in 'lucide-react'
} from "lucide-react";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function LearningDevelopmentPage() {
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
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-[#003728] to-emerald-400 rounded-full"></div>
              </div>
              
              {/* HEADING SIZE REDUCED from text-5xl md:text-7xl to text-4xl md:text-6xl */}
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#003728] mb-4 leading-tight">
                Learning &
                <span className="block bg-gradient-to-r from-[#003728] to-emerald-600 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                Empowering your workforce with comprehensive training programs designed for the AI-driven, tech-oriented world. 100+ expert trainers at your service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#003728] hover:bg-[#002A1F] text-white rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <BookOpen className="h-5 w-5" />
                  Start Training
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
                  <div className="text-2xl font-bold text-[#003728]">100+</div>
                  <div className="text-xs text-[#003728]/70">Expert Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">95%</div>
                  <div className="text-xs text-[#003728]/70">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#003728]">5000+</div>
                  <div className="text-xs text-[#003728]/70">Trained</div>
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
                    <h3 className="text-2xl font-bold text-[#003728] mb-2">Learning Progress</h3>
                    <p className="text-[#003728]/70">Real-time training analytics</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-emerald-500" />
                        <span className="font-medium text-[#003728]">Courses Completed</span>
                      </div>
                      <span className="text-2xl font-bold text-emerald-600">1,247</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="font-medium text-[#003728]">Active Learners</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">892</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-purple-500" />
                        <span className="font-medium text-[#003728]">Certifications</span>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">456</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-orange-500" />
                        <span className="font-medium text-[#003728]">Skill Improvement</span>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">87%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Training Categories */}
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
            {/* HEADING SIZE REDUCED from text-4xl md:text-5xl to text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Our Training Categories
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Comprehensive training programs covering both soft skills and technical domains for the modern workplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-blue-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl">
                    {/* Replaced Heart with a suitable lucide icon, using Brain for 'Soft' which relates to mind/behavior, since Heart is not a standard Lucide icon */}
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#003728]">Soft Skills Training</h3>
                    <p className="text-[#003728]/70">Essential interpersonal and communication skills</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Leadership & Management",
                    "Communication Excellence",
                    "Team Collaboration",
                    "Emotional Intelligence",
                    "Problem Solving",
                    "Time Management",
                    "Presentation Skills",
                    "Conflict Resolution"
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-[#003728]/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-emerald-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl">
                    <Zap className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#003728]">Technical Training</h3>
                    <p className="text-[#003728]/70">Cutting-edge technical skills for the digital age</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "AI & Machine Learning",
                    "Data Analytics",
                    "Cloud Computing",
                    "Cybersecurity",
                    "Software Development",
                    "Digital Marketing",
                    "Project Management",
                    "Agile Methodologies"
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-[#003728]/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Delivery Methods */}
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
            {/* HEADING SIZE REDUCED from text-4xl md:text-5xl to text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Flexible Delivery Methods
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Choose the learning format that best fits your organization's needs and schedule.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-[#003728]" />,
                title: "In-Person Training",
                description: "Traditional classroom-based learning with expert instructors",
                features: ["Face-to-face interaction", "Hands-on practice", "Real-time Q&A", "Group activities"],
                color: "from-blue-50 to-blue-100",
                iconBg: "bg-blue-100"
              },
              {
                icon: <Video className="h-8 w-8 text-[#003728]" />,
                title: "Virtual Training",
                description: "Live online sessions with interactive learning experience",
                features: ["Live streaming", "Interactive sessions", "Screen sharing", "Virtual breakout rooms"],
                color: "from-green-50 to-green-100",
                iconBg: "bg-green-100"
              },
              {
                icon: <Laptop className="h-8 w-8 text-[#003728]" />,
                title: "Self-Paced Learning",
                description: "Flexible online courses that learners can complete at their own pace",
                features: ["24/7 access", "Progress tracking", "Mobile learning", "Offline content"],
                color: "from-purple-50 to-purple-100",
                iconBg: "bg-purple-100"
              },
              {
                icon: <Settings className="h-8 w-8 text-[#003728]" />,
                title: "Blended Learning",
                description: "Combination of online and offline learning for maximum effectiveness",
                features: ["Mixed delivery", "Flexible scheduling", "Personalized paths", "Continuous support"],
                color: "from-orange-50 to-orange-100",
                iconBg: "bg-orange-100"
              }
            ].map((method, idx) => (
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
                  <div className={`flex items-center justify-center w-16 h-16 ${method.iconBg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-[#003728]/70 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="space-y-3">
                    {method.features.map((feature, featureIdx) => (
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

      {/* --- */}

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
                    <h3 className="text-2xl font-bold text-[#003728] mb-2">Training Impact</h3>
                    <p className="text-[#003728]/70">Measurable results from our programs</p>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#003728]">Skill Development</span>
                        <span className="text-sm font-semibold text-emerald-600">+87%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#003728]">Employee Engagement</span>
                        <span className="text-sm font-semibold text-blue-600">+92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#003728]">Productivity Increase</span>
                        <span className="text-sm font-semibold text-purple-600">+75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#003728]">Retention Rate</span>
                        <span className="text-sm font-semibold text-orange-600">+68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '68%'}}></div>
                      </div>
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
              {/* HEADING SIZE REDUCED from text-4xl md:text-5xl to text-3xl md:text-4xl */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
                Our Training Process
              </h2>
              <p className="text-lg text-[#003728]/80 mb-7 leading-relaxed">
                A systematic approach ensuring maximum learning impact and measurable results.
              </p>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Needs Assessment",
                    description: "Understanding your organization's specific training requirements",
                    icon: <Search className="h-6 w-6" />
                  },
                  {
                    step: "02", 
                    title: "Program Design",
                    description: "Creating customized training programs tailored to your needs",
                    icon: <Settings className="h-6 w-6" />
                  },
                  {
                    step: "03",
                    title: "Delivery & Facilitation",
                    description: "Expert-led training sessions with interactive learning",
                    icon: <Users className="h-6 w-6" />
                  },
                  {
                    step: "04",
                    title: "Evaluation & Support",
                    description: "Measuring impact and providing ongoing support",
                    icon: <BarChart3 className="h-6 w-6" />
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

      {/* --- */}

      {/* Expert Trainers Section */}
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
            {/* HEADING SIZE REDUCED from text-4xl md:text-5xl to text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#003728] mb-4">
              Our Expert Network
            </h2>
            <p className="text-lg text-[#003728]/80 max-w-2xl mx-auto">
              Over 100+ serving corporate professionals in our network as trainers, bringing real-world expertise to your learning programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-[#003728]" />,
                title: "Industry Experts",
                description: "Certified professionals with years of industry experience"
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-[#003728]" />,
                title: "Academic Excellence",
                description: "PhD holders and university professors in specialized fields"
              },
              {
                icon: <Briefcase className="h-8 w-8 text-[#003728]" />,
                title: "Corporate Leaders",
                description: "C-suite executives and senior management professionals"
              },
              {
                icon: <Trophy className="h-8 w-8 text-[#003728]" />,
                title: "Award Winners",
                description: "Recognized experts with industry awards and certifications"
              }
            ].map((expert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#003728]/10 to-emerald-400/10 rounded-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {expert.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-emerald-600 transition-colors">
                  {expert.title}
                </h3>
                <p className="text-[#003728]/70 leading-relaxed">
                  {expert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

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
            {/* HEADING SIZE REDUCED from text-4xl md:text-5xl to text-3xl md:text-4xl */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Invest in your team's future with our comprehensive learning and development programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#003728] hover:bg-gray-100 rounded-full px-6 py-3 font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <BookOpen className="h-5 w-5" />
                Start Training Program
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