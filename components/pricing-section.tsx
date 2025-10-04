"use client";

import { motion } from "framer-motion";
import { Check, Star, Users, Building, Zap } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "15%",
      period: "of first year salary",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 positions per month",
        "Standard screening process",
        "30-day replacement guarantee",
        "Email support",
        "Basic reporting",
        "Access to candidate database"
      ],
      popular: false,
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      price: "20%",
      period: "of first year salary",
      description: "Ideal for growing companies with regular hiring needs",
      features: [
        "Up to 15 positions per month",
        "Advanced AI screening",
        "60-day replacement guarantee",
        "Priority support",
        "Advanced analytics",
        "Dedicated account manager",
        "Custom job postings",
        "Interview scheduling"
      ],
      popular: true,
      icon: Building,
      color: "from-[#003728] to-[#002A1F]"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex hiring requirements",
      features: [
        "Unlimited positions",
        "AI-powered matching",
        "90-day replacement guarantee",
        "24/7 dedicated support",
        "Custom reporting & analytics",
        "Dedicated recruitment team",
        "White-label solutions",
        "API integration",
        "Global talent sourcing",
        "Executive search included"
      ],
      popular: false,
      icon: Zap,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const addOns = [
    {
      name: "Background Verification",
      price: "$50",
      description: "Comprehensive background checks for all candidates"
    },
    {
      name: "Skills Assessment",
      price: "$75",
      description: "Technical and soft skills evaluation"
    },
    {
      name: "Cultural Fit Analysis",
      price: "$100",
      description: "Advanced cultural compatibility assessment"
    },
    {
      name: "Onboarding Support",
      price: "$200",
      description: "Complete onboarding assistance for new hires"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMzcyOCIgZmlsbC1vcGFjaXR5PSIwLjEiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMiLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003728] mb-6">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-[#003728]/80 max-w-3xl mx-auto">
            Choose the perfect plan for your hiring needs. All plans include our core recruitment services with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-[#003728] scale-105' 
                  : 'border-gray-100 hover:border-[#003728]/20'
              } overflow-hidden`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-[#003728] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003728] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#003728]/70 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#003728]">
                      {plan.price}
                    </span>
                    <span className="text-[#003728]/70 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#003728] flex-shrink-0" />
                      <span className="text-[#003728]/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors ${
                    plan.popular
                      ? 'bg-[#003728] text-white hover:bg-[#002A1F]'
                      : 'bg-[#003728]/10 text-[#003728] hover:bg-[#003728]/20'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-[#F9FFFC] rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#003728] mb-4">
              Additional Services
            </h3>
            <p className="text-[#003728]/80 max-w-2xl mx-auto">
              Enhance your recruitment process with our premium add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#003728]/10"
              >
                <h4 className="font-semibold text-[#003728] mb-2">
                  {addon.name}
                </h4>
                <div className="text-2xl font-bold text-[#003728] mb-2">
                  {addon.price}
                </div>
                <p className="text-sm text-[#003728]/70">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#003728] to-[#002A1F] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us for a personalized quote tailored to your specific hiring requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#003728] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                Get Custom Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
