import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
// import Mask from "@/components/mask"
import ServicesSection from "@/components/services-section"
import PartnersSection from "@/components/partners-section"
import TestimonialsSection from "@/components/testimonials-section"

import { ContactSection } from "@/components/contact-section"
import FounderSection from "@/components/founder"
import Testinomial1 from "@/components/testinomial1"
import Carosel from "@/components/carosel"
import { Footer } from "@/components/footer"

import Navigation from "@/components/navigation"
import StatsSection from "@/components/stats-section"
import ProcessSection from "@/components/process-section"
import IndustriesSection from "@/components/industries-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import CaseStudiesSection from "@/components/case-studies-section"
import TeamSection from "@/components/team-section"
import AwardsSection from "@/components/awards-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import NewsletterSection from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <HeroSection />
    
      <ServicesSection />
      <FounderSection />
     
      <ProcessSection />
      <IndustriesSection />
      <AboutSection />
      <Carosel />
      <FAQSection />
      <NewsletterSection />
      
      <Footer />
    </main>
  )
}
