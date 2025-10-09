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
    desc: "Where trust meets technology. Our AI-powered screening ensures every hire brings integrity — not uncertainty.",
    image:
      "https://media.istockphoto.com/id/625736338/photo/stack-of-hands-showing-unity.jpg?s=612x612&w=0&k=20&c=20mAQjGRQ5XVKqHe2qFguqGZ4dwto6lxxinciCfnVI0=",
  },
  {
    icon: Brain,
    title: "Organizational Psychology Services",
    desc: "We decode human behavior and rebuild culture with empathy and data-driven insights.",
    image:
      "https://humanresourcesmba.net/wp-content/uploads/2014/10/influential-industrial-and-organizational-psychologists-e1412335545372.jpg",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    desc: "Empowering employees with soft & technical skills to thrive in an AI-driven world.",
    image:
      "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/learning-and-development-anyone-can-right-e1462966719675.jpeg",
  },
  {
    icon: Scale,
    title: "Corporate Legal Services",
    desc: "We simplify legal complexities — offering clarity, compliance, and confidence for every step.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=60",
  },
  {
    icon: Users,
    title: "Contract Staffing",
    desc: "Flexible, skill-focused staffing solutions that align perfectly with your business goals.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=60",
  },
  {
    icon: Crown,
    title: "Executive Talent Acquisition",
    desc: "We identify leaders who drive innovation and shape the future of your organization.",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F185241489%2F191926285987%2F1%2Foriginal.20211113-012853?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C205%2C3890%2C1945&s=e492424ca91054cc117d6063739ba3f0",
  },
];

export default function HRServicesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#F8FCFA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-[#003728] mb-14"
        >
          Empowering Organizations with Human-Centric HR Solutions
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#003728]/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <service.icon className="absolute top-4 left-4 w-8 h-8 text-white drop-shadow-lg" />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-[#003728] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A676] to-[#004D3A]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
