"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Info, Briefcase, Star, Phone, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // 🔹 Navbar Links
  const navItems = [
    { href: "/", label: "Home", icon: <Home className="h-4 w-4 mr-1" /> },
    { href: "/about", label: "About", icon: <Info className="h-4 w-4 mr-1" /> },
    { href: "/services", label: "Services", icon: <Briefcase className="h-4 w-4 mr-1" /> },
    { href: "/blogs", label: "Blogs", icon: <Star className="h-4 w-4 mr-1" /> },
    { href: "/contact", label: "Contact Us", icon: <Phone className="h-4 w-4 mr-1" /> },
  ];

  // ✅ Services Submenu (Exact folder paths)
  const serviceItems = [
    { href: "/services/background-verification", label: "Aitemad Screening Services" },
    { href: "/services/contract-staffing", label: "Contract Staffing" },
    { href: "/services/executive-talent-acquisition", label: "Executive Talent Acquisition" },
    { href: "/services/learning-development", label: "Learning & Development" },
    { href: "/services/mass-hiring", label: "Corporate Legal
Affairs" },
    { href: "/services/organizational-psychology", label: "Organizational Psychology" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* 🔹 Top Bar */}
      <div style={{ backgroundColor: "#003728" }} className="text-white text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1">
          {/* Left */}
          <div className="flex items-center gap-3">
            <a href="mailto:info@scaleupconnect.com" className="flex items-center gap-1 hover:underline">
              <Mail className="h-3.5 w-3.5" /> info@scaleupconnect.com
            </a>
            <a href="tel:+922134333333" className="flex items-center gap-1 hover:underline">
              <Phone className="h-3.5 w-3.5" /> +92 21-34333333
            </a>
          </div>
          {/* Right */}
          <div className="flex items-center gap-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className="bg-gradient-to-r from-white to-emerald-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={120}
                className="h-10 w-auto md:h-14 lg:h-16"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item) =>
                item.label !== "Services" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative flex items-center text-gray-700 text-sm hover:text-emerald-700 font-medium group"
                  >
                    {item.icon}
                    {item.label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  // 🔽 Services Dropdown
                  <div
                    key="services"
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-emerald-700 transition-colors"
                    >
                      <Briefcase className="h-4 w-4" /> Services
                    </button>

                    <div
                      className={`absolute left-0 mt-2 w-72 bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 origin-top ${
                        isServicesOpen
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-emerald-600 text-white px-4 py-2 text-sm font-semibold">
                        Explore Services
                      </div>
                      <ul className="divide-y divide-gray-100">
                        {serviceItems.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all"
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex md:items-center">
              <Link href="/contact">
                <Button className="ml-4 rounded-full px-5 py-2 bg-[#003728] hover:bg-[#002A1F] text-white text-sm font-medium shadow-md flex items-center gap-2 transition-colors">
                  <Phone className="h-4 w-4" /> Get in Touch
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="text-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-md px-5 py-3 space-y-2">
            {navItems.map((item) =>
              item.label !== "Services" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ) : (
                <div key="services" className="mt-2 space-y-1">
                  <div className="px-3 pt-2 text-xs font-semibold text-gray-500">Services</div>
                  {serviceItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-5 py-2 text-sm text-gray-700 rounded-md hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )
            )}

            <div className="pt-3">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-full px-4 py-2 bg-[#003728] hover:bg-[#002A1F] text-white text-sm font-medium shadow-md flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" /> Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
