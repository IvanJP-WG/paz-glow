"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Clay Rituals: The Ancient Secret to Radiant Skin",
    category: "Skincare Rituals",
    image: "/images/journal-1.jpg",
    href: "/journal/clay-rituals",
  },
  {
    id: 2,
    title: "5-Minute Morning Rituals for a Glowing Start",
    category: "Lifestyle",
    image: "/images/journal-2.jpg",
    href: "/journal/morning-rituals",
  },
  {
    id: 3,
    title: "Why Nature is the Future of Skincare",
    category: "Insights",
    image: "/images/journal-3.jpg",
    href: "/journal/nature-future",
  },
];

export default function JournalPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-heading">From the Journal</h2>
          <Link
            href="/journal"
            className="text-primary font-medium hover:underline"
          >
            View all →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">
                {post.category}
              </p>
              <h3 className="text-xl font-semibold mt-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <Link
                href={post.href}
                className="mt-2 inline-block text-primary text-sm font-medium hover:underline"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
