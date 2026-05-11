"use client";

import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { useFavorites } from "@/components/FavoritesProvider";
import { products } from "@/lib/products";

export function FavoritesPageClient() {
  const { favorites, clearFavorites } = useFavorites();
  const favoriteProducts = products.filter((product) => favorites.includes(product.slug));

  if (favoriteProducts.length === 0) {
    return (
      <div className="rounded-lg border border-[#1e2624]/10 bg-white p-8 text-center shadow-[0_14px_44px_rgba(30,38,36,0.06)]">
        <h2 className="text-3xl font-extrabold">No favorites yet.</h2>
        <p className="mx-auto mt-3 max-w-xl text-[#65706c]">
          Tap the heart icon on product cards to save items you want to revisit later.
        </p>
        <Link
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#c95f4f] px-6 font-extrabold text-white shadow-[0_14px_32px_rgba(201,95,79,0.3)] transition duration-200 hover:-translate-y-0.5"
          href="/shop"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 flex justify-end">
        <button
          className="min-h-11 rounded-full bg-white px-5 font-extrabold text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5"
          onClick={clearFavorites}
          type="button"
        >
          Clear favorites
        </button>
      </div>
      <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {favoriteProducts.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
    </>
  );
}
