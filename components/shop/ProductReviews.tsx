"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { products } from "@/lib/products";

interface ProductReviewsProps {
  productId: number;
  reviews: Product["reviews"];
}

export default function ProductReviews({ productId, reviews }: ProductReviewsProps) {
  const [visibleCount, setVisibleCount] = useState(5);
  const [currentReviews, setCurrentReviews] = useState(reviews);
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(5);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = { user: userName || "Anonymous", comment, stars };
    // Update local state
    setCurrentReviews((prev) => [newReview, ...prev]);
    // Optionally update lib/products.ts array (for demo)
    const product = products.find((p) => p.id === productId);
    if (product) {
      product.reviews.unshift(newReview);
      product.reviewsCount = product.reviews.length;
    }
    // Reset form
    setUserName("");
    setComment("");
    setStars(5);
  };

  return (
    <div className="mt-12">
      <h2 className="text-xl font-heading mb-4">Customer Reviews</h2>

      {/* Reviews List */}
      <div className="space-y-6">
        {currentReviews.slice(0, visibleCount).map((review, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">{review.user}</p>
              <span className="text-xs text-gray-500">Recently</span>
            </div>
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.stars ? "fill-clay text-clay" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-soil/80">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* View More */}
      {visibleCount < currentReviews.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleViewMore}
            className="px-4 py-2 bg-clay text-white rounded-full text-sm hover:bg-soil hover:text-white transition"
          >
            View More
          </button>
        </div>
      )}

      {/* Write Review Form */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-heading mb-4">Write a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-gold focus:outline-none"
          />
          <textarea
            placeholder="Your Review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-gold focus:outline-none"
          />
          <div className="flex items-center gap-2">
            <label className="text-soil font-medium">Rating:</label>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 cursor-pointer ${
                  i < stars ? "fill-clay text-clay" : "text-gray-300"
                }`}
                onClick={() => setStars(i + 1)}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-clay text-white rounded-full hover:bg-soil hover:text-white transition"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
