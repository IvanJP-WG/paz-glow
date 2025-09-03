"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Review {
  _id?: string;
  user: string;
  comment: string;
  stars: number;
  createdAt?: string;
}

interface ProductReviewsProps {
  productId: string; // Sanity _id, stored as string
}

export default function ProductReviews({ productId }: ProductReviewsProps) {
  const [visibleCount, setVisibleCount] = useState(5);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(5);
  const [loading, setLoading] = useState(false);

  // Fetch reviews from API
  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch(`/api/reviews?productId=${String(productId)}`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    }
    fetchReviews();
  }, [productId]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: String(productId), // ✅ always send as string
          user: userName || "Anonymous",
          comment,
          stars,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit review");

      const newReview = await res.json();
      setReviews((prev) => [newReview, ...prev]); // update UI instantly
      setUserName("");
      setComment("");
      setStars(5);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-xl font-heading mb-4">Customer Reviews</h2>

      {/* Reviews List */}
      {reviews.length === 0 ? (
        <p className="text-sm text-soil/70 italic">
          No reviews yet. Be the first to review!
        </p>
      ) : (
        <div className="space-y-6">
          {reviews.slice(0, visibleCount).map((review) => (
            <div
              key={review._id || review.user + review.comment}
              className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">{review.user}</p>
                <span className="text-xs text-gray-500">
                  {review.createdAt
                    ? new Date(review.createdAt).toLocaleDateString()
                    : "Recently"}
                </span>
              </div>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.stars
                        ? "fill-clay text-clay"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-soil/80">{review.comment}</p>
            </div>
          ))}
        </div>
      )}

      {/* View More */}
      {visibleCount < reviews.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleViewMore}
            className="px-4 py-2 bg-clay text-white rounded-full text-sm hover:bg-soil transition"
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
              disabled={loading}
              className="px-6 py-2 bg-clay text-white rounded-full hover:bg-soil transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
