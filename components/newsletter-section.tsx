"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, CheckCircle, Users, TrendingUp, Award } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    {
      icon: Users,
      title: "Exclusive Job Alerts",
      description: "Get first access to premium job opportunities"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Weekly reports on salary trends and market conditions"
    },
    {
      icon: Award,
      title: "Career Tips",
      description: "Expert advice on resume building and interview preparation"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#003728] via-[#002A1F] to-[#003728] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHA+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIiLz48L2c+PC9nPjwvcD48L3N2Zz4=')]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Stay Ahead of the Curve
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join our exclusive community and get insider access to the latest job opportunities, 
                market insights, and career development resources.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-white/80 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-white/80 text-sm">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Weekly</div>
                <div className="text-white/80 text-sm">Updates</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-white/80">
                Get weekly insights delivered to your inbox
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Successfully Subscribed!</h4>
                <p className="text-white/80">
                  Thank you for joining our community. Check your email for confirmation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-[#003728] px-6 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Subscribe Now
                </motion.button>

                <p className="text-white/60 text-sm text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}

            {/* Social Proof */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/60 text-sm text-center mb-4">
                Trusted by professionals from
              </p>
              <div className="flex justify-center items-center gap-6 opacity-60">
                <div className="text-sm font-semibold">Google</div>
                <div className="text-sm font-semibold">Microsoft</div>
                <div className="text-sm font-semibold">Amazon</div>
                <div className="text-sm font-semibold">Apple</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
