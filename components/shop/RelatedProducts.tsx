// /components/shop/RelatedProducts.tsx

"use client";

import ProductCard from "./ProductCard"; // reuse PLP card
import { products } from "@/lib/products";

interface RelatedProductsProps {
  ids: number[];
}

export default function RelatedProducts({ ids }: RelatedProductsProps) {
  if (!ids || ids.length === 0) {
    return null; // don't render if no related products
  }

  // Find related products by ID
  const related = products.filter((p) => ids.includes(p.id));

  return (
    <div className="mt-16">
      <h2 className="text-xl font-heading mb-4">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {related.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            price={`${p.price}`} // format price
            image={p.images[0]}   // ✅ use first image from array
          />
        ))}
      </div>
    </div>
  );
}
