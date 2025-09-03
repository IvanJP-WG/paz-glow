"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import { use } from "react";
import { products } from "@/lib/products";
import ProductGallery from "@/components/shop/ProductGallery";
import RitualAccordion from "@/components/shop/RitualAccordion";
import IngredientsTabs from "@/components/shop/IngredientsTabs";
import ProductReviews from "@/components/shop/ProductReviews";
import RelatedProducts from "@/components/shop/RelatedProducts";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // 👈 Import motion

interface PDPProps {
  params: Promise<{
    id: string;
  }>;
}

export default function PDP({ params }: PDPProps) {
  const { id } = use(params);
  const idNum = Number(id);
  const product = products.find((p) => p.id === idNum);
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-heading mb-4">Product not found</h2>
        <Button
          onClick={() => router.push("/shop")}
          className="bg-clay text-white hover:bg-gold hover:text-soil"
        >
          Back to Shop
        </Button>
      </main>
    );
  }

  return (
    <motion.main
      className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ROW 1: Gallery + Product Info */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <ProductGallery images={product.images} />
        </motion.section>

        {/* Product Info */}
        <motion.section
          className="flex flex-col gap-6 relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <button
            className="absolute top-0 right-0 text-clay hover:text-gold font-medium"
            onClick={() => router.push("/shop")}
          >
            ← Back to Shop
          </button>

          <h1 className="text-3xl font-heading">{product.title}</h1>
          <p className="text-xl text-soil font-semibold">${product.price}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="flex items-center text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(product.rating) ? "text-gold fill-gold" : "text-sand"}
                />
              ))}
            </span>
            <span className="text-soil text-sm">({product.reviewsCount} reviews)</span>
          </div>

          <p className="text-soil">{product.keyMessaging}</p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <label className="text-soil font-medium">Quantity:</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 border rounded-lg px-2 py-1 focus:ring-2 focus:ring-gold focus:outline-none"
            />
          </div>

          {/* Add to cart */}
          <Button
            className="bg-clay text-white hover:bg-gold hover:text-soil w-full transition-colors"
            onClick={() => alert(`Added ${quantity} × ${product.title} to cart`)}
          >
            Add to Cart
          </Button>
        </motion.section>
      </motion.div>

      {/* ROW 2: Rituals → Ingredients → Related → Reviews */}
      <motion.div
        className="flex flex-col gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <RitualAccordion steps={product.ritual} />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <IngredientsTabs ingredients={product.ingredients} />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <RelatedProducts ids={product.related} />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <ProductReviews productId={String(product.id)} />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
