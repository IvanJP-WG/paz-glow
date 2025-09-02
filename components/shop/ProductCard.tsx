// components/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  rating?: number;
  reviewsCount?: number;
  className?: string; // optional className
}

export default function ProductCard({
  id,
  title,
  price,
  image,
  rating,
  reviewsCount,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={`/shop/${id}`}
      className={`block rounded-2xl border p-4 shadow-sm hover:shadow-md transition ${className ?? ""}`}
    >
      <div className="relative aspect-square mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <h3 className="font-medium text-sm md:text-base">{title}</h3>
      <p className="text-sm text-muted-foreground mb-1">${price}</p>

      {rating !== undefined && reviewsCount !== undefined && (
        <p className="text-xs text-gray-500">
          ⭐ {rating} ({reviewsCount})
        </p>
      )}
    </Link>
  );
}
