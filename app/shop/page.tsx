"use client";

import { useState } from "react";
import Filters from "@/components/shop/Filters";
import SortDropdown from "@/components/shop/SortDropdown";
import ProductCard from "@/components/shop/ProductCard";

type ShopFilters = {
  concern: string[];
  category: string[];
  vegan: string[];
  fragranceFree: string[];
};


const sampleProducts = [
  {
    id: 1,
    title: "Rosewater Illuminating Mist",
    category: "Cleansers",
    concern: ["Dullness", "Sensitivity"],
    vegan: "Yes",
    fragranceFree: "Yes",
    price: "$28",
    image: "/images/product-rosewater.jpg",
  },
  {
    id: 2,
    title: "Olive Oil Infinity Elixir",
    category: "Moisturizers",
    concern: ["Dryness"],
    vegan: "Yes",
    fragranceFree: "No",
    price: "$45",
    image: "/images/product-olive-oil.jpg",
  },
  // Add more sample products
];

export default function ShopPage() {
  const [filters, setFilters] = useState<ShopFilters>({
  concern: [],
  category: [],
  vegan: [],
  fragranceFree: [],
    });
  const [sortMethod, setSortMethod] = useState("best-selling");

const handleFilterChange = (updatedFilters: ShopFilters) => {
  setFilters(updatedFilters);
};

const handleSortChange = (method: string) => {
    setSortMethod(method);
  };

  // Filter logic
  const filteredProducts = sampleProducts.filter((p) => {
    const concernMatch =
      filters.concern.length === 0 || p.concern.some((c: string) => filters.concern.includes(c));
    const categoryMatch =
      filters.category.length === 0 || filters.category.includes(p.category);
    const veganMatch =
      filters.vegan.length === 0 || filters.vegan.includes(p.vegan);
    const fragranceMatch =
      filters.fragranceFree.length === 0 || filters.fragranceFree.includes(p.fragranceFree);

    return concernMatch && categoryMatch && veganMatch && fragranceMatch;
  });

const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortMethod) {
      case "price-low":
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      case "price-high":
        return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
      case "newest":
        return b.id - a.id; // assuming higher ID = newer
      case "best-selling":
      default:
        return 0; // placeholder, integrate with sales data later
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
      <Filters onChange={handleFilterChange} />
      <div>
        <SortDropdown onChange={handleSortChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((p) => (
                <ProductCard
                key={p.id}
                id={p.id}
                title={p.title}
                price={p.price}
                image={p.image}
                badge={p.concern[0]} // optional: show first concern as badge
                href={`/shop/${p.id}`}
                />
            ))}
            {sortedProducts.length === 0 && (
                <p className="text-soil col-span-full">No products match these filters.</p>
            )}
        </div>
    </div>
    </div>
  );
}
