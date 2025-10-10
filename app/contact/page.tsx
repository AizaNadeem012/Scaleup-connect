"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      Name: form.Name.value,
      Email: form.Email.value,
      Phone: form.Phone.value,
      Company: form.Company.value,
      Message: form.Message.value,
    };

    // Create a plain text message body
    const messageBody = `
Name: ${data.Name}
Email: ${data.Email}
Phone: ${data.Phone}
Company: ${data.Company}
Message: ${data.Message}
`;

    // Send using FormSubmit (auto-email to your inbox)
    fetch("https://formsubmit.co/ajax/info@scaleupconnect.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "New Contact Form Submission",
        message: messageBody,
      }),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert("Error sending message. Please try again later."));
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F2FAF7] via-white to-[#F9FFFC] text-center p-8">
        <CheckCircle className="w-20 h-20 text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-[#003728] mb-3">Thank You!</h1>
        <p className="text-lg text-[#003728]/80 max-w-lg">
          Your message has been sent successfully. We’ll get back to you soon.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F2FAF7] via-white to-[#F9FFFC] text-center">
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

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#003728] font-semibold block mb-2">Name *</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter your full name"
                    className="w-full border border-[#003728]/20 rounded-md p-3 focus:outline-none focus:border-[#003728]"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#003728] font-semibold block mb-2">Email *</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email address"
                    className="w-full border border-[#003728]/20 rounded-md p-3 focus:outline-none focus:border-[#003728]"
                    required
                  />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#003728] font-semibold block mb-2">Phone</label>
                  <input
                    type="tel"
                    name="Phone"
                    placeholder="Enter your phone number"
                    className="w-full border border-[#003728]/20 rounded-md p-3 focus:outline-none focus:border-[#003728]"
                  />
                </div>
                <div>
                  <label className="text-[#003728] font-semibold block mb-2">Company Name</label>
                  <input
                    type="text"
                    name="Company"
                    placeholder="Enter your company name"
                    className="w-full border border-[#003728]/20 rounded-md p-3 focus:outline-none focus:border-[#003728]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[#003728] font-semibold block mb-2">Message *</label>
                <textarea
                  name="Message"
                  placeholder="Write your message here"
                  className="w-full border border-[#003728]/20 rounded-md p-3 focus:outline-none focus:border-[#003728] min-h-[120px]"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#003728] hover:bg-[#002A1F] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
