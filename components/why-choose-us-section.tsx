"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Globe,
  Users2,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation at the Core",
      desc: "We leverage AI-driven insights and modern strategies to help you hire smarter, faster, and better than the competition.",
    },
    {
      icon: Handshake,
      title: "Partnership, Not Transactions",
      desc: "Think of us as an embedded partner — aligning deeply with your goals and culture to deliver the perfect fit.",
    },
    {
      icon: TrendingUp,
      title: "Fuel for Growth",
      desc: "We design scalable talent solutions that directly impact your bottom line and accelerate expansion.",
    },
  ];

  const secondary = [
    {
      icon: ShieldCheck,
      title: "Trusted Process",
      desc: "Every candidate goes through a transparent, rigorous vetting process.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Access talent from every corner of the world, ready to join your mission.",
    },
    {
      icon: Users2,
      title: "People First",
      desc: "We care about human connections, not just placements.",
    },
  ];

  return (
    <section className="why-choose-us-section">
      {/* Background layers */}
      <div className="background">
        <div className="gradient-layer"></div>
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="content-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="main-heading"
        >
          Why <span className="highlight-green">Choose Us?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="subheading"
        >
          ScaleUp Connect is more than recruitment — we build lasting
          partnerships, unlock global opportunities, and create meaningful
          connections that drive results.
        </motion.p>

        {/* Primary features */}
        <div className="features-primary">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className={`feature-card ${idx % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="feature-icon">
                <feature.icon />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary grid */}
        <div className="features-secondary">
          {secondary.map((s, idx) => (
            <div key={idx} className="feature-small">
              <div className="icon-small">
                <s.icon />
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="cta-container"
        >
          <button className="cta-button">Let’s Work Together</button>
        </motion.div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .why-choose-us-section {
          position: relative;
          overflow: hidden;
          color: white;
          padding: 6rem 2rem;
          font-family: sans-serif;
        }

        /* Background */
        .background {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .gradient-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, #003728, #00251a, #001f16);
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.2;
          animation: blob 20s infinite ease-in-out;
        }

        .blob1 {
          top: -150px;
          left: -150px;
          width: 500px;
          height: 500px;
          background-color: #00a06b;
        }

        .blob2 {
          top: 25%;
          right: -200px;
          width: 600px;
          height: 600px;
          background-color: #00c785;
        }

        .blob3 {
          bottom: 0;
          left: 33%;
          width: 700px;
          height: 700px;
          background-color: #00a06b;
        }

        @keyframes blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }

        /* Content */
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .main-heading {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .highlight-green {
          color: #00c785;
        }

        .subheading {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 700px;
          margin: 0 auto 4rem auto;
          line-height: 1.6;
        }

        /* Primary features */
        .features-primary {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .feature-card {
          display: flex;
          align-items: center;
          gap: 2rem;
          text-align: left;
        }

        .feature-card.reverse {
          flex-direction: row-reverse;
        }

        .feature-icon {
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          background: rgba(0, 160, 107, 0.2);
          border: 1px solid rgba(0, 160, 107, 0.4);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #00c785;
        }

        .feature-content h3 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .feature-content p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          line-height: 1.5;
        }

        /* Secondary grid */
        .features-secondary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .feature-small {
          background: rgba(0, 40, 30, 0.7);
          border: 1px solid rgba(0, 160, 107, 0.2);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
        }

        .icon-small {
          width: 48px;
          height: 48px;
          background: rgba(0, 160, 107, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
          color: #00c785;
          font-size: 1.25rem;
        }

        .feature-small h4 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .feature-small p {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        /* CTA */
        .cta-container {
          margin-top: 4rem;
        }

        .cta-button {
          padding: 1rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          background: linear-gradient(to right, #00a06b, #00c785);
          border-radius: 12px;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          box-shadow: 0 0 20px rgba(0, 199, 133, 0.6);
          transform: scale(1.05);
        }

        /* Responsive */
        @media screen and (max-width: 768px) {
          .feature-card,
          .feature-card.reverse {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
