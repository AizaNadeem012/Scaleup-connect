"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What HR services do you provide?",
    answer:
      "We provide end-to-end HR services including recruitment, payroll management, employee onboarding, compliance support, and training & development.",
  },
  {
    question: "Do you handle employee recruitment?",
    answer:
      "Yes, we manage the entire recruitment process from sourcing and screening candidates to final onboarding, saving you time and effort.",
  },
  {
    question: "Can you manage payroll and compliance?",
    answer:
      "Absolutely! We offer accurate payroll processing, tax management, and ensure compliance with all local labor laws and regulations.",
  },
  {
    question: "Do you offer HR consulting for small businesses?",
    answer:
      "Yes, we provide customized HR solutions for startups and small businesses to help them build efficient and compliant HR systems.",
  },
  {
    question: "How can I get started with your HR services?",
    answer:
      "You can contact us through our website or email. Our HR experts will connect with you, understand your requirements, and propose the right solution.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#F9FFFC] to-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#003728] mb-6"
        >
          HR Services – Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Find answers to common questions about our HR solutions, recruitment,
          payroll, and compliance services.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="bg-white rounded-2xl border border-[#003728]/10 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#F9FFFC] transition-colors duration-200 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-[#003728] pr-4">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-6 w-6 text-[#003728]" />
              </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-8 pb-6 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
