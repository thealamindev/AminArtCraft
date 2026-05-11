"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/products";

export function ProductShowcase({ items }: { items: Product[] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 6);
  const hasMore = items.length > 6;

  return (
    <>
      <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {visibleItems.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <button
            className="min-h-12 rounded-full bg-[#1e2624] px-6 font-extrabold text-[#fbf8f1] transition duration-200 hover:-translate-y-0.5"
            onClick={() => setExpanded((current) => !current)}
            type="button"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      ) : null}
    </>
  );
}
