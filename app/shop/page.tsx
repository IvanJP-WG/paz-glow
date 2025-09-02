// /app/shop/page.tsx

"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";
import Filters from "@/components/shop/Filters";

export default function ShopPage() {
  // filters
  const [filters, setFilters] = useState<{
    concern: string[];
    category: string[];
    vegan: string[];
    fragranceFree: string[];
  }>({
    concern: [],
    category: [],
    vegan: [],
    fragranceFree: [],
  });

  // sorting
  const [sortMethod, setSortMethod] = useState("best-selling");

  // filtering logic
  const filteredProducts = products.filter((p) => {
    // concern: product.concern must match one of selected concerns
    const concernMatch =
      filters.concern.length === 0 ||
      filters.concern.some((c) => p.concern.includes(c));

    // category: must match product.category
    const categoryMatch =
      filters.category.length === 0 || filters.category.includes(p.category);

    // vegan: map "Yes"/"No" to boolean check
    const veganMatch =
      filters.vegan.length === 0 ||
      (filters.vegan.includes("Yes") && p.vegan) ||
      (filters.vegan.includes("No") && !p.vegan);

    // fragrance free: same logic as vegan
    const fragranceMatch =
      filters.fragranceFree.length === 0 ||
      (filters.fragranceFree.includes("Yes") && p.fragranceFree) ||
      (filters.fragranceFree.includes("No") && !p.fragranceFree);

    return concernMatch && categoryMatch && veganMatch && fragranceMatch;
  });

  // sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortMethod) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return b.id - a.id; // higher id = newer
      case "best-selling":
      default:
        return 0; // placeholder, you can add sales data later
    }
  });

  return (
    <main className="px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop Rituals</h1>
        <select
          value={sortMethod}
          onChange={(e) => setSortMethod(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="best-selling">Best Selling</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="flex gap-8">
        {/* sidebar filters */}
        <Filters onChange={setFilters} />

        {/* products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1 auto-rows-fr">
          {sortedProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              price={`${p.price}`}
              rating={p.rating}
              reviewsCount={p.reviewsCount}
              image={p.images[0]}
              className="h-[400px]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
