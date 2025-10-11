"use client";

import React from "react";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#003728] text-white relative overflow-hidden">
      {/* Solid Background */}
      <div className="absolute inset-0 bg-[#003728] opacity-95"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">ScaleUp Connect</h3>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Empowering careers and enabling growth through innovative talent
              solutions. Building teams, fueling futures across the globe.
            </p>

            <div className="flex space-x-4">
              {[
                { Icon: Linkedin, link: "https://lnkd.in/dukQJiEh" },
                {
                  Icon: Instagram,
                  link: "https://www.instagram.com/scaleupconnect/",
                },
                {
                  Icon: Facebook,
                  link: "https://www.facebook.com/profile.php?id=61579688127730",
                },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-white/80">
              {[
                "Aitemad
Screening Service",
                "Executive Search",
                "Learning & Development",
                "Contract
Staffing",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-white hover:pl-1 transition-all"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/60 mt-1" />
                <span>
                  Office 01, Ground Floor,
                  <br />
                  Sunrio Residency, Nazimabad No.3,
                  <br />
                  Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/60" />
                <span>+92 21-34333333</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/60" />
                <span>info@scaleupconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} ScaleUp Connect. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Empowering Careers | Enabling Growth
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
