"use client";

import { useState } from "react";
import { ProductVisual } from "@/components/ProductVisual";
import type { Product } from "@/lib/products";

const galleryLabels = ["Main view", "Material detail", "Color set", "Packaging view"];

export function ProductGallery({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-lg border border-[#1e2624]/10 bg-white">
        <ProductVisual product={product} large variant={activeIndex} />
      </div>
      <div className="grid grid-cols-4 gap-3 max-[520px]:grid-cols-2">
        {galleryLabels.map((label, index) => (
          <button
            aria-label={`Show ${label}`}
            className={`overflow-hidden rounded-lg border bg-white transition duration-200 hover:-translate-y-0.5 ${
              activeIndex === index
                ? "border-[#c95f4f] shadow-[0_12px_30px_rgba(201,95,79,0.2)]"
                : "border-[#1e2624]/10"
            }`}
            key={label}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <ProductVisual product={product} variant={index} />
            <span className="block border-t border-[#1e2624]/10 px-3 py-2 text-left text-xs font-extrabold text-[#65706c]">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
