"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ProductGalleryProps = {
  images: string[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-x-visible">
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`border rounded-lg overflow-hidden ${
              selected === idx ? "border-clay" : "border-sand"
            }`}
          >
            <Image src={src} alt={`Thumbnail ${idx}`} width={80} height={80} className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <motion.div
        key={selected}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 relative w-full h-96 sm:h-[500px] rounded-2xl overflow-hidden"
      >
        <Image
          src={images[selected]}
          alt={`Product image ${selected}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
