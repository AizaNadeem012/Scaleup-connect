"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OfficeCarousel() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", 
      title: "Team Collaboration",
      desc: "Empowering teams to work together and grow stronger.",
    },
    {
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      title: "Human Resource Excellence",
      desc: "Building careers with trust, support, and opportunity.",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      title: "Career Development",
      desc: "Helping professionals achieve consistent career growth.",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Corporate Solutions",
      desc: "Delivering HR solutions to global businesses.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[550px] overflow-hidden rounded-2xl shadow-xl">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((item, i) => (
          <div key={i} className="min-w-full h-full relative">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text content */}
            <div className="absolute bottom-20 left-10 text-left text-white max-w-lg">
              <h3 className="text-3xl font-extrabold mb-2 drop-shadow-lg">
                {item.title}
              </h3>
              <p className="text-lg text-gray-200 drop-shadow-md">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Left / Right buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3.5 h-3.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
