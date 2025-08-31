"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const concerns = [
  {
    id: "cleansers-toners",
    title: "Ritual Cleansers & Toners",
    featured: "Rosewater Illuminating Mist",
    message: "Gentle purification that respects skin's natural balance",
    image: "/images/concern-cleansers.jpg",
    href: "/rituals/cleansers-toners",
  },
  {
    id: "hydration-nourishment",
    title: "Hydration & Nourishment",
    featured: "Olive Oil Infinity Elixir",
    message: "Deep nourishment from nature's most potent ingredients",
    image: "/images/concern-hydration.jpg",
    href: "/rituals/hydration-nourishment",
  },
  {
    id: "radiance-enhancers",
    title: "Radiance Enhancers",
    featured: "Luminosity Drops",
    message: "Awaken your natural glow without artificial ingredients",
    image: "/images/concern-radiance.jpg",
    href: "/rituals/radiance-enhancers",
  },
  {
    id: "kits-collections",
    title: "Ritual Kits & Collections",
    featured: "Full Body Glow Set",
    message: "Curated experiences for transformative beauty rituals",
    image: "/images/concern-kits.jpg",
    href: "/rituals/kits-collections",
  },
];

export default function RitualRails() {
  return (
    <section className="py-20 bg-sand/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-heading text-center mb-12">
          Rituals by Concern
        </h2>

        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {concerns.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="snap-center shrink-0 w-72 rounded-2xl shadow-lg overflow-hidden bg-white"
            >
              <Link href={item.href}>
                {/* Top image area with tinted overlay for concern title */}
                <div className="relative h-32">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-lg font-heading text-gold px-2 text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom content area */}
                <div className="p-4 bg-white flex flex-col space-y-2">
                  <p className="text-soil/80 text-sm">
                    Featured: <span className="font-medium">{item.featured}</span>
                  </p>
                  <p className="text-soil/70 text-sm">{item.message}</p>
                  <span className="text-gold font-medium hover:underline">
                    Explore →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
