"use client";

import ProductGallery from "@/components/shop/ProductGallery";
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

interface PDPProps {
  params: {
    id: string;
  };
}

const products = [
  {
    id: 1,
    title: "Rosewater Illuminating Mist",
    price: 28,
    rating: 4.8,
    reviewsCount: 12,
    keyMessaging: "Gentle purification that respects skin’s natural balance.",
    images: [
      "/images/product-rosewater.jpg",
      "/images/product-rosewater-2.jpg",
      "/images/product-rosewater-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Olive Oil Infinity Elixir",
    price: 45,
    rating: 4.6,
    reviewsCount: 8,
    keyMessaging: "Deep nourishment from nature’s most potent ingredients.",
    images: [
      "/images/product-olive-oil.jpg",
      "/images/product-olive-oil-2.jpg",
      "/images/product-olive-oil-3.jpg",
    ],
  },
];

export default function PDP() {
  const pathname = usePathname(); // e.g., /shop/1
  const idStr = pathname.split("/").pop() || "0";
  const idNum = Number(idStr);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const product = products.find((p) => p.id === idNum);

  if (!product) return <p className="text-center py-20">Product not found.</p>;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProductGallery images={product.images} />
      <div className="flex flex-col gap-6 relative">
      <button
        className="absolute top-0 right-0 text-clay hover:text-gold font-medium"
        onClick={() => router.push("/shop")}
      >
        ← Back to Shop
      </button>
        <h1 className="text-3xl font-heading">{product.title}</h1>
        <p className="text-xl text-soil font-semibold">${product.price}</p>
        <div className="flex items-center gap-2">
          <span className="flex items-center text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-sand"}
              />
            ))}
          </span>
          <span className="text-soil text-sm">({product.reviewsCount} reviews)</span>
        </div>
        <p className="text-soil">{product.keyMessaging}</p>
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
        <Button
          className="bg-clay text-white hover:bg-gold hover:text-soil w-full transition-colors"
          onClick={() => alert(`Added ${quantity} item(s) to cart`)}
        >
          Add to Cart
        </Button>
      </div>
    </main>
  );
}
