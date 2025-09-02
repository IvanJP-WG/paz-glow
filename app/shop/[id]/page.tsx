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

interface PDPProps {
  params: Promise<{
    id: string;
  }>;
}

export default function PDP({ params }: PDPProps) {
  const { id } = use(params);
  const idNum = Number(id);
  const productId = parseInt (id);
  const product = products.find((p) => p.id === idNum);
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-heading mb-4">Product not found</h2>
        <Button onClick={() => router.push("/shop")} className="bg-clay text-white hover:bg-gold hover:text-soil">
          Back to Shop
        </Button>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-8">
        <ProductGallery images={product.images} />
        <ProductReviews productId={product.id} reviews={product.reviews} />
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-6 relative">
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
                className={
                  i < Math.round(product.rating)
                    ? "text-gold fill-gold"
                    : "text-sand"
                }
              />
            ))}
          </span>
          <span className="text-soil text-sm">
            ({product.reviewsCount} reviews)
          </span>
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
          onClick={() =>
            alert(`Added ${quantity} × ${product.title} to cart`)
          }
        >
          Add to Cart
        </Button>

        {/* Ritual instructions */}
        <RitualAccordion steps={product.ritual} />

        {/* Ingredients tabs */}
        <IngredientsTabs ingredients={product.ingredients} />

        {/* Related products */}
        <RelatedProducts ids={product.related} />
      </div>
    </main>
  );
}
