"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Natural Ritual Scene",
    subtitle:
      "Woman practicing morning skincare ritual with natural light streaming in, featuring Rosewater Mist and Elixir Oils on wooden surface.",
    cta: "Shop Ritual Cleansers & Toners",
    href: "/shop",
    image: "/images/hero-1.jpg",
  },
  {
    id: 2,
    title: "Ingredient Sourcing Story",
    subtitle:
      "Landscape shot of olive groves representing sourcing practices, with inset product shots featuring key ingredients.",
    cta: "Explore Hydration & Nourishment",
    href: "/shop",
    image: "/images/hero-2.jpg",
  },
  {
    id: 3,
    title: "Diversity Celebration",
    subtitle:
      "Grid collage of diverse skin tones (all ages, ethnicities) glowing with health, showcasing our 'Glow for All' philosophy.",
    cta: "Find Your Glow",
    href: "#ritual-by-concern",
    image: "/images/hero-3.jpg",
  },
  {
    id: 4,
    title: "Transformation Journey",
    subtitle:
      "Split image showing before (dull skin) and after (radiant glow) with key products featured in between.",
    cta: "Shop Radiance Enhancers",
    href: "/shop",
    image: "/images/hero-4.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <motion.h1
              className="text-4xl md:text-6xl font-heading mb-4"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6 max-w-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slide.subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href={slide.href}
                className="bg-clay text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gold transition"
              >
                {slide.cta}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-gold" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
