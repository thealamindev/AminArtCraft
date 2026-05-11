"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export function AddToCartButton({
  slug,
  label = "Buy",
  className = "",
}: {
  slug: string;
  label?: string;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(slug);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-full bg-[#1e2624] px-5 font-extrabold text-[#fbf8f1] transition duration-200 hover:-translate-y-0.5 ${className}`}
      onClick={handleClick}
      type="button"
    >
      {added ? "Added" : label}
    </button>
  );
}
