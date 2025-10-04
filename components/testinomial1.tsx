"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Software Engineer",
      feedback:
        "ScaleUp Connect transformed my career. I went from job hunting for months to landing my dream role within weeks!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Ali Khan",
      role: "Business Analyst",
      feedback:
        "The mentorship and career guidance I received was outstanding. It gave me confidence and direction.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Roberts",
      role: "Product Designer",
      feedback:
        "Global opportunities and connections helped me scale my skills beyond borders. Highly recommend!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-[#F9FFFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-serif font-bold text-[#003728] mb-4 tracking-tight"
        >
          Voices of Trust
        </motion.h2>
        <p className="text-center text-[#003728]/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16">
          Real professionals. Real journeys. Real success stories with ScaleUp Connect.
        </p>

        {/* Alternating Testimonials */}
        <div className="space-y-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image + Name */}
              <div className="flex flex-col items-center text-center md:text-left">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-[#003728]/30 shadow-md"
                />
                <h4 className="mt-4 text-xl font-semibold text-[#003728]">{t.name}</h4>
                <span className="text-sm text-[#003728]/60">{t.role}</span>
              </div>

              {/* Feedback Bubble */}
              <div className="relative bg-white border border-[#003728]/10 rounded-2xl shadow-md p-8 max-w-2xl">
                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-[#003728]/20" />
                <p className="text-[#003728]/80 leading-relaxed italic text-lg">
                  “{t.feedback}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
