"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightTech",
    quote:
      "Working with this team was transformative. They understood our vision and delivered beyond expectations.",
    img: "/user1.jpg",
  },
  {
    name: "James Parker",
    role: "Product Designer, Flowly",
    quote:
      "Their creativity and professionalism stand out. Every interaction was seamless and inspiring.",
    img: "/user2.jpg",
  },
  {
    name: "Alicia Green",
    role: "CTO, NovaWorks",
    quote:
      "The designs not only look elegant but are functional. A perfect blend of aesthetics and usability.",
    img: "/user3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 relative">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
      </div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Hear it from our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">partners</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1.2 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3 rounded-full"
        />
      </div>

      {/* Testimonials Carousel */}
      <motion.div
        className="flex gap-6 overflow-x-auto px-6 scrollbar-hide"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="min-w-[320px] bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-gray-200 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.img}
                alt={t.name}
                width={50}
                height={50}
                className="rounded-full object-cover border"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="italic text-gray-700">“{t.quote}”</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
