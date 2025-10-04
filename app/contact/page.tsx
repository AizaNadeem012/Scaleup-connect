"use client";

import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F2FAF7] via-white to-[#F9FFFC] overflow-hidden text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-[#003728] mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl text-[#003728]/80 max-w-3xl mx-auto leading-relaxed"
        >
          Let’s Connect – Whether you’re ready to transform your workforce or have a 
          question about our services, we’re here to help. Reach out today and let’s 
          shape a stronger future for your business.
        </motion.p>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#003728]">Get in Touch</h2>
            <p className="text-lg text-[#003728]/80 leading-relaxed">
              Reach out through any of the following channels:
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#003728]/10 rounded-full">
                  <Mail className="h-6 w-6 text-[#003728]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#003728]">Email</h4>
                  <p className="text-[#003728]/80">info@scaleupconnect.com</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#003728]/10 rounded-full">
                  <Phone className="h-6 w-6 text-[#003728]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#003728]">Phone</h4>
                  <p className="text-[#003728]/80">+92 21-34333333</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#003728]/10 rounded-full">
                  <MapPin className="h-6 w-6 text-[#003728]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#003728]">Office Address</h4>
                  <p className="text-[#003728]/80">
                    Office 01, Ground Floor, Sunrio Residency, 
                    Nazimabad No.3, Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#F9FFFC] to-white rounded-2xl p-8 shadow-lg border border-[#003728]/10"
          >
            <h3 className="text-2xl font-bold text-[#003728] mb-6">Send us a Message</h3>

            <form className="space-y-6">
              {/* Full Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-[#003728] font-semibold">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="mt-2 border-[#003728]/20 focus:border-[#003728]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#003728] font-semibold">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="mt-2 border-[#003728]/20 focus:border-[#003728]"
                    required
                  />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-[#003728] font-semibold">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-2 border-[#003728]/20 focus:border-[#003728]"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-[#003728] font-semibold">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter your company name"
                    className="mt-2 border-[#003728]/20 focus:border-[#003728]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-[#003728] font-semibold">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here"
                  className="mt-2 border-[#003728]/20 focus:border-[#003728] min-h-[120px]"
                  required
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-[#003728] hover:bg-[#002A1F] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}