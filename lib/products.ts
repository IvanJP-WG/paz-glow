// /lib/products.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviewsCount: number;
  keyMessaging: string;
  images: string[]; // gallery
  ritual: string[]; // ritual steps
  ingredients: { category: string; items: string[] }[]; // tabbed ingredients
  reviews: { user: string; comment: string; stars: number }[];
  related: number[]; // ids of related products
  concern: string[];
  category: string;
  vegan: boolean;
  fragranceFree: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Radiance Clay Mask",
    price: 29,
    rating: 4.5,
    reviewsCount: 42,
    keyMessaging: "Detox and brighten your skin with natural clay minerals.",
    images: ["/products/mask1a.jpg", "/products/mask1b.jpg"],
    ritual: [
      "Apply evenly to clean skin.",
      "Leave on for 10 minutes.",
      "Rinse with warm water."
    ],
    ingredients: [
      { category: "Key Ingredients", items: ["Kaolin Clay", "Aloe Vera", "Chamomile"] },
      { category: "Full List", items: ["Water", "Kaolin", "Glycerin", "Chamomile Extract", "Aloe Leaf Juice"] }
    ],
    reviews: [
      { user: "Anna", comment: "Love how fresh it feels!", stars: 5 },
      { user: "Mark", comment: "Great but dries quickly.", stars: 4 }
    ],
    related: [2, 3],
    concern: ["Dullness", "Texture"],
    category: "Masks",
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 2,
    title: "Hydra Glow Serum",
    price: 39,
    rating: 4.8,
    reviewsCount: 58,
    keyMessaging: "Intensely hydrates and plumps skin for a radiant glow.",
    images: ["/products/serum1a.jpg", "/products/serum1b.jpg"],
    ritual: [
      "Apply 2-3 drops to cleansed face.",
      "Massage gently until fully absorbed.",
      "Use morning and night."
    ],
    ingredients: [
      { category: "Key Ingredients", items: ["Hyaluronic Acid", "Vitamin C", "Green Tea Extract"] },
      { category: "Full List", items: ["Water", "Sodium Hyaluronate", "Ascorbic Acid", "Camellia Sinensis Extract"] }
    ],
    reviews: [
      { user: "Sophia", comment: "My skin has never looked this hydrated!", stars: 5 },
      { user: "Leo", comment: "Absorbs quickly and feels great.", stars: 4 }
    ],
    related: [1, 4],
    concern: ["Dryness", "Fine Lines"],
    category: "Serums",
    vegan: true,
    fragranceFree: false,
  },
  {
    id: 3,
    title: "Soothing Aloe Toner",
    price: 22,
    rating: 4.3,
    reviewsCount: 31,
    keyMessaging: "Calms redness and balances skin after cleansing.",
    images: ["/products/toner1a.jpg", "/products/toner1b.jpg"],
    ritual: [
      "After cleansing, apply to face with cotton pad.",
      "Pat gently for better absorption.",
      "Follow with serum or moisturizer."
    ],
    ingredients: [
      { category: "Key Ingredients", items: ["Aloe Vera", "Witch Hazel", "Rose Water"] },
      { category: "Full List", items: ["Aqua", "Aloe Barbadensis Leaf Juice", "Hamamelis Virginiana", "Rosa Damascena Water"] }
    ],
    reviews: [
      { user: "Claire", comment: "Perfect for sensitive skin.", stars: 5 },
      { user: "James", comment: "Good but has a light scent.", stars: 4 }
    ],
    related: [1, 2],
    concern: ["Redness", "Sensitivity"],
    category: "Toners",
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 4,
    title: "Nourishing Night Cream",
    price: 45,
    rating: 4.7,
    reviewsCount: 67,
    keyMessaging: "Deeply nourishes and repairs skin overnight.",
    images: ["/products/nightcream1a.jpg", "/products/nightcream1b.jpg"],
    ritual: [
      "Apply generously to face and neck before bed.",
      "Massage in upward motions.",
      "Leave overnight and wake up to refreshed skin."
    ],
    ingredients: [
      { category: "Key Ingredients", items: ["Shea Butter", "Jojoba Oil", "Peptides"] },
      { category: "Full List", items: ["Water", "Butyrospermum Parkii Butter", "Simmondsia Chinensis Oil", "Palmitoyl Tripeptide-1"] }
    ],
    reviews: [
      { user: "Maya", comment: "My skin feels so soft in the morning!", stars: 5 },
      { user: "Chris", comment: "A bit heavy but very effective.", stars: 4 }
    ],
    related: [2, 3],
    concern: ["Dryness", "Aging"],
    category: "Moisturizers",
    vegan: false,
    fragranceFree: false,
  },
];
