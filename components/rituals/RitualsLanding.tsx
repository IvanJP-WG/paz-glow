"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import * as motion from "framer-motion/client";
import { products } from "@/lib/products"; // reuse your existing product data

export default function RitualsLanding() {
  // Example: group rituals by concern from products
  const rituals = [
    {
      slug: "hydration",
      title: "Hydration Ritual",
      desc: "Quench thirsty skin with lightweight, deeply hydrating steps.",
      image: "/images/ritual-hydration.jpg",
    },
    {
      slug: "calming",
      title: "Calming Ritual",
      desc: "Soothe and balance skin prone to sensitivity or redness.",
      image: "/images/ritual-calming.jpg",
    },
    {
      slug: "radiance",
      title: "Radiance Ritual",
      desc: "Awaken dull skin with energizing, glow-boosting care.",
      image: "/images/ritual-radiance.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-heading mb-4">Your Skincare Rituals</h1>
        <p className="text-soil/80 max-w-2xl mx-auto">
          Every skin tells a story. Explore curated rituals designed for your
          skin’s needs, rooted in mindfulness and balance.
        </p>
      </motion.div>

      {/* Ritual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rituals.map((ritual, i) => (
          <motion.div
            key={ritual.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Link href={`/rituals/${ritual.slug}`}>
              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={ritual.image}
                  alt={ritual.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg mb-2">{ritual.title}</h3>
                  <p className="text-sm text-soil/80">{ritual.desc}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
