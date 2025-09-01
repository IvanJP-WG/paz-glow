"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  title: string;
  price: string;
  image: string;
  badge?: string;
  href?: string;
};

export default function ProductCard({ id, title, price, image, badge, href }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative group rounded-2xl overflow-hidden shadow-md"
    >
      <Link href={href || `/shop/${id}`}>
        {/* Image */}
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-sand text-soil text-xs font-medium px-2 py-1 rounded-full shadow">
            {badge}
          </span>
        )}

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-soil mt-1">{price}</p>
          <span className="mt-2 inline-block text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Quick View →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
