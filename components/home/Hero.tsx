"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Natural Ritual Scene",
    subtitle: "Gentle cleansers and toners inspired by earth’s purity.",
    cta: "Shop Ritual Cleansers & Toners",
    href: "/shop",
    image: "/images/hero-1.png",
  },
  {
    id: 2,
    title: "Ingredient Sourcing Story",
    subtitle: "Every ritual starts with responsibly sourced botanicals.",
    cta: "Explore Hydration & Nourishment",
    href: "/shop",
    image: "/images/hero-2.jpg",
  },
  {
    id: 3,
    title: "Diversity Celebration",
    subtitle: "Skincare that honors every shade, tone, and glow.",
    cta: "Find Your Glow",
    href: "#ritual-by-concern",
    image: "/images/hero-3.png",
  },
  {
    id: 4,
    title: "Transformation Journey",
    subtitle: "From ritual to radiance, elevate your skin’s natural story.",
    cta: "Shop Radiance Enhancers",
    href: "/shop",
    image: "/images/hero-4.png",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slide every 10s
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
              className="text-4xl md:text-6xl font-heading mb-4 text-sand"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-6 max-w-xl text-cream"
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
