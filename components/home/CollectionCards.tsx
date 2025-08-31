"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ingredients = [
  {
    id: "rosewater",
    name: "Rosewater",
    benefit: "Soothes & hydrates skin naturally.",
    image: "/images/ingredient-rosewater.jpg",
    href: "/ingredients/rosewater",
  },
  {
    id: "olive-oil",
    name: "Olive Oil",
    benefit: "Deep nourishment & skin elasticity.",
    image: "/images/ingredient-olive-oil.jpg",
    href: "/ingredients/olive-oil",
  },
  {
    id: "hyaluronic",
    name: "Hyaluronic Acid",
    benefit: "Retains moisture for plump, radiant skin.",
    image: "/images/ingredient-hyaluronic.jpg",
    href: "/ingredients/hyaluronic-acid",
  },
  {
    id: "mica",
    name: "Mica",
    benefit: "Natural shimmer for a luminous glow.",
    image: "/images/ingredient-mica.jpg",
    href: "/ingredients/mica",
  },
];

export default function Ingredients() {
  return (
    <section className="py-20 bg-sand/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-heading mb-12">Key Ingredients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {ingredients.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-card overflow-hidden cursor-pointer"
            >
              <Link href={item.href}>
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-soil/70 text-sm">{item.benefit}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See All Ingredients Button */}
        <Link
          href="/ingredients"
          className="inline-block mt-4 bg-clay text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gold transition"
        >
          See All Ingredients
        </Link>
      </div>
    </section>
  );
}
