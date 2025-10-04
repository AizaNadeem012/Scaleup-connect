// components/ScaleUpConnectSection.tsx
"use client";

import React from "react";
import Image from "next/image";

const ScaleUpConnectSection = () => {
  const style = `
    /* --- Keyframe for image zoom on hover --- */
    @keyframes imageZoom {
        from { transform: scale(1); }
        to { transform: scale(1.05); }
    }

    /* Section container */
    .scaleup-section {
      width: 100%;
      padding: 60px 20px; /* Made slightly smaller for compactness */
      text-align: center;
      background: #fcfcfc; /* Added light background for better card visibility */
      overflow: hidden;
    }

    /* Heading */
    .scaleup-heading {
      font-size: clamp(2rem, 5vw, 3.5rem); /* Made slightly smaller */
      font-weight: 800;
      text-transform: uppercase;
      margin-bottom: 50px; /* Reduced margin */
      background: linear-gradient(90deg, #00B386, #00695c);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      display: inline-block;
    }

    .scaleup-heading::after {
      content: "";
      display: block;
      margin: 8px auto 0; /* Reduced margin */
      width: 60px; /* Reduced width */
      height: 4px; /* Reduced height */
      border-radius: 2px;
      background: #00B386;
    }

    /* Grid layout: FIXED 4 COLUMNS */
    .about-section {
      max-width: 1200px; /* Controlled width */
      margin: 0 auto;
      display: grid;
      /* Main fix: Exactly 4 equal columns */
      grid-template-columns: repeat(4, 1fr); 
      gap: 20px; /* Reduced gap for compactness */
      align-items: stretch;
    }

    /* Tablet breakpoint: 2 columns */
    @media (max-width: 1024px) { 
      .about-section {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Mobile breakpoint: 1 column */
    @media (max-width: 640px) { 
      .about-section {
        grid-template-columns: 1fr;
      }
    }

    /* Card design */
    .about-card {
      position: relative;
      border-radius: 18px; /* Slightly smaller radius */
      overflow: hidden;
      background: #fff;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08); /* Lighter shadow */
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      height: 100%; /* Ensures equal height in grid */
      display: flex;
      flex-direction: column;
      border: 1px solid #f0f0f0; /* Subtle default border */
    }

    /* Hover effect */
    .about-card:hover {
      transform: translateY(-8px); /* Reduced lift */
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
      border-color: #00B386; /* Accent border */
    }

    /* Top angled shape */
    .card-top {
      position: relative;
      width: 100%;
      height: 180px; /* Reduced height for compactness */
      overflow: hidden;
    }

    .card-top::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 50px; /* Reduced curve height */
      background: white;
      clip-path: polygon(0 100%, 100% 0, 100% 100%);
      z-index: 1;
    }

    .card-image {
      position: absolute;
      inset: 0;
      transition: transform 0.4s ease;
    }
    
    .about-card:hover .card-image {
        transform: scale(1.05); /* Image zoom on hover */
    }

    .about-content {
      padding: 20px; /* Reduced padding */
      text-align: left;
      flex-grow: 1;
    }

    .about-heading {
      font-size: 1.35rem; /* Reduced heading size */
      font-weight: 700;
      color: #003728;
      margin-bottom: 10px; /* Reduced margin */
    }

    .about-text {
      font-size: 0.95rem; /* Reduced text size */
      line-height: 1.5;
      color: #444;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />

      <section className="scaleup-section">
        <h1 className="scaleup-heading">Our Core Story</h1>

        <div className="about-section">
          {/* 1. Founder */}
          <div className="about-card">
            <div className="card-top">
              <Image
                src="/Founder.jpg"
                alt="Founder"
                fill
                className="card-image object-cover"
              />
            </div>
            <div className="about-content">
              <h2 className="about-heading">The Visionary Founder</h2>
              <p className="about-text">
                **Muhammad Hassaan Rasheed** leads with a decade of HR experience
                at multinational giants. His vision is built on transforming HR
                from a support function to a **strategic business partner**.
              </p>
            </div>
          </div>

          {/* 2. Who We Are */}
          <div className="about-card">
            <div className="card-top">
              <Image
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80"
                alt="Team"
                fill
                className="card-image object-cover"
              />
            </div>
            <div className="about-content">
              <h2 className="about-heading">Who We Are</h2>
              <p className="about-text">
                **ScaleUp Connect** is an innovative agency connecting companies
                with the right **talent** and empowering professionals to build
                **sustainable careers** globally.
              </p>
            </div>
          </div>

          {/* 3. Vision */}
          <div className="about-card">
            <div className="card-top">
              <Image
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
                alt="Vision"
                fill
                className="card-image object-cover"
              />
            </div>
            <div className="about-content">
              <h2 className="about-heading">Our Global Vision</h2>
              <p className="about-text">
                To become the **global leader** in shaping the future of human
                capital, bridging top talent with opportunity, and empowering
                organizations to **thrive together**.
              </p>
            </div>
          </div>

          {/* 4. Mission */}
          <div className="about-card">
            <div className="card-top">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                alt="Mission"
                fill
                className="card-image object-cover"
              />
            </div>
            <div className="about-content">
              <h2 className="about-heading">Our Daily Mission</h2>
              <p className="about-text">
                To build **lasting connections** through innovative,
                **ethical, and sustainable** HR solutions, fostering inclusivity
                and driving growth for the **workforce of tomorrow**.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScaleUpConnectSection;