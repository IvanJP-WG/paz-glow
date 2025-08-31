"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StoryStrip() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/images/story-strip.jpg"
            alt="Paz Glow ritual skincare"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-heading mb-4">Our Ritual, Your Glow</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            At Paz Glow, we believe skincare is more than routine — it is ritual. 
            Grounded in nature’s elements and refined with mindful science, our products 
            honor the clay, the earth, and the glow within every skin tone. 
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full shadow-md hover:bg-primary/90 transition"
          >
            Discover Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
