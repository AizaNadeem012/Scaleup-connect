// components/AboutHeroSection.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Mask from "@/components/mask";
import Nav from "@/components/navigation";
import {Footer} from "@/components/footer"
import { Users, Target, Lightbulb, ChevronRight, Award, Mail, Phone, MapPin } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/her.jpg"
            alt="About ScaleUp Connect"
            fill
            className="object-cover brightness-85"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-[#003728]/50 to-transparent -z-10"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 lg:px-12"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-snug drop-shadow-2xl">
            <span className="block text-white/70 text-lg md:text-xl tracking-widest mb-3">
              About
            </span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#00D49A] to-[#00B386] font-extrabold animate-text-shimmer">
              ScaleUp Connect
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
            Empowering people, connecting businesses, and creating sustainable
            opportunities through{" "}
            <span className="font-semibold">innovation-driven HR solutions.</span>
          </p>
        </motion.div>

        {/* Background Text */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-6xl md:text-9xl font-extrabold text-white/10 tracking-wider select-none">
          ScaleUp
        </div>
      </section>

      {/* ✨ Refined Section */}
      <section className="relative w-full py-24 md:py-32 bg-gray-50 overflow-hidden">
        {/* Dynamic Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00D49A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00B386] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-delay"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#003728] mb-4">
              Beyond Boundaries
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              We go beyond traditional HR to build bridges between talent and
              opportunity, shaping workforces that thrive globally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left/Middle: Image + Who We Are */}
            <div className="lg:col-span-2 space-y-12">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full h-[450px] overflow-hidden shadow-2xl rounded-3xl border-4 border-white"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00B386]/40 to-transparent z-10"></div>
                <Image
                  src="https://fifthchrome.com/wp-content/uploads/2018/07/achievement-adult-african-1059116-3000x1500.jpg"
                  alt="Our Dedicated Team"
                  fill
                  className="object-cover scale-105"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white font-semibold flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-lg">
                  <Users className="w-5 h-5 text-[#00D49A]" /> Dedicated Teams
                </div>
              </motion.div>

              {/* Who We Are */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden"
              >
                <h3 className="text-3xl font-bold text-[#003728] mb-4">
                  Who We Are
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At{" "}
                  <span className="font-bold text-[#00D49A]">
                    ScaleUp Connect
                  </span>
                  , we are more than an HR partner; we are{" "}
                  <em>architects of potential</em>. Our strength lies in
                  transforming innovative strategies into real results, building
                  high-performing, engaged, and future-ready workforces.
                </p>
              </motion.div>
            </div>

            {/* Right: Mission, Vision, Values */}
            <div className="lg:col-span-1 space-y-8 mt-10 lg:mt-0">
              <ElegantCard
                Icon={Target}
                title="Our Mission"
                description="Connecting people with opportunities to fuel sustainable growth."
                accentColor="#00B386"
                delay={0.1}
              />

              <ElegantCard
                Icon={Users}
                title="Our Vision"
                description="A world where organizations thrive with engaged, skilled, and inspired teams."
                accentColor="#00D49A"
                delay={0.2}
              />

              <ElegantCard
                Icon={Lightbulb}
                title="Our Values"
                description="Integrity, innovation, and inclusivity guide everything we do."
                accentColor="#003728"
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✨ New Clean & Elegant Section */}
      <section className="relative w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481"
              alt="Team Collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white font-semibold text-lg flex items-center gap-2">
              <Award className="w-6 h-6 text-[#00D49A]" /> Excellence in Action
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-extrabold text-[#003728] mb-6">
              Building the Future of Work
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We focus on innovation, diversity, and sustainability to create
              workforces that aren’t just skilled—but future-ready. Our
              strategies empower individuals and transform organizations for the
              long term.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm">
                <h3 className="text-3xl font-bold text-[#00B386]">500+</h3>
                <p className="text-gray-600 text-sm">Global Clients</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm">
                <h3 className="text-3xl font-bold text-[#003728]">1200+</h3>
                <p className="text-gray-600 text-sm">Talents Connected</p>
              </div>
            </div>

            <button className="px-6 py-3 bg-gradient-to-r from-[#00D49A] to-[#00B386] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
      <Mask />
       
       <Footer/>

      
      {/* Animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 15s infinite ease-in-out;
        }
        .animate-blob-delay {
          animation: blob 15s infinite ease-in-out 7.5s;
        }
      `}</style>
    </>
  );
}

// Elegant Card Component
const ElegantCard = ({ Icon, title, description, accentColor, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{
      scale: 1.04,
      boxShadow: "0 20px 40px -12px rgba(0,0,0,0.2)",
    }}
    className="relative p-6 bg-white shadow-xl rounded-2xl border border-gray-100 group overflow-hidden cursor-pointer"
  >
    {/* Icon + Title */}
    <div className="flex items-start gap-4 mb-3">
      <div
        className="flex-shrink-0 p-3 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110"
        style={{
          backgroundColor: accentColor + "20",
          border: `1px solid ${accentColor}`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color: accentColor }} />
      </div>
      <h3 className="text-xl font-extrabold text-[#003728] leading-tight mt-1">
        {title}
      </h3>
    </div>

    <p className="text-gray-600 text-base">{description}</p>

    {/* Arrow */}
    <motion.div
      className="absolute bottom-4 right-4 text-gray-400 group-hover:text-gray-800 transition-colors duration-300"
      initial={{ opacity: 0, x: -10 }}
      whileHover={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ChevronRight className="w-5 h-5" />
    </motion.div>
  </motion.div>
);
