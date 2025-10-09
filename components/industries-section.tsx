"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  BookOpen,
  Scale,
  Users,
  Crown,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Aitemad Screening Services",
    desc: "Where trust meets innovation — we ensure each hire strengthens your organization’s integrity.",
    image:
      "https://media.istockphoto.com/id/625736338/photo/stack-of-hands-showing-unity.jpg?s=612x612&w=0&k=20&c=20mAQjGRQ5XVKqHe2qFguqGZ4dwto6lxxinciCfnVI0=",
  },
  {
    icon: Brain,
    title: "Organizational Psychology Services",
    desc: "Rebuilding cultures with empathy, data, and behavioral intelligence — where people truly thrive.",
    image:
      "https://humanresourcesmba.net/wp-content/uploads/2014/10/influential-industrial-and-organizational-psychologists-e1412335545372.jpg",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    desc: "Turning talent into tomorrow’s leaders — through continuous learning and adaptive skills training.",
    image:
      "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/learning-and-development-anyone-can-right-e1462966719675.jpeg",
  },
  {
    icon: Scale,
    title: "Corporate Legal Services",
    desc: "We simplify legal frameworks — providing clarity, compliance, and peace of mind for every HR process.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=60",
  },
  {
    icon: Users,
    title: "Contract Staffing",
    desc: "Scalable staffing models tailored to business agility — empowering you to grow with confidence.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=60",
  },
  {
    icon: Crown,
    title: "Executive Talent Acquisition",
    desc: "We connect visionary leaders with opportunities that redefine industries and inspire transformation.",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F185241489%2F191926285987%2F1%2Foriginal.20211113-012853?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C205%2C3890%2C1945&s=e492424ca91054cc117d6063739ba3f0",
  },
];

export default function HRServicesSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#F8FFFB] via-[#F2FAF7] to-white overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase text-sm font-semibold tracking-[4px] text-[#00A676] mb-3"
        >
          Trusted by Leading Organizations
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold font-serif text-[#003728] mb-6 leading-tight"
        >
          Empowering Workforces That Empower the World
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[#003728]/80 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          We combine psychology, technology, and human insight to design HR solutions that elevate teams and transform organizations.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image with Overlay */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003728]/80 via-[#003728]/20 to-transparent group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-9 h-9 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Text Content */}
              <div className="p-7 text-left">
                <h3 className="text-xl font-bold text-[#003728] mb-3 group-hover:text-[#002A1F] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A676] to-[#004D3A]"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-28 bg-white/70 backdrop-blur-md border border-[#003728]/10 rounded-3xl shadow-xl p-12"
        >
          <h3 className="text-3xl font-bold text-[#003728] mb-4">
            Let’s Shape the Future of Work — Together
          </h3>
          <p className="text-[#003728]/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you're hiring, training, or transforming your workforce — our experts are here to bring precision, purpose, and performance to your organization.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#003728] text-white rounded-xl font-semibold shadow-lg hover:bg-[#002A1F] transition"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
