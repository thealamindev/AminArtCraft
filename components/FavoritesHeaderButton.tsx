"use client";

import Link from "next/link";
import { useFavorites } from "@/components/FavoritesProvider";

function HeartIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M20.4 5.6a5.1 5.1 0 0 0-7.2 0L12 6.8l-1.2-1.2a5.1 5.1 0 0 0-7.2 7.2L12 21l8.4-8.2a5.1 5.1 0 0 0 0-7.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function FavoritesHeaderButton() {
  const { totalFavorites } = useFavorites();

  return (
    <Link
      aria-label={`Open favorites with ${totalFavorites} products`}
      className="relative grid size-11 place-items-center rounded-full bg-white text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5 hover:text-[#c95f4f]"
      href="/favorites"
    >
      <HeartIcon />
      {totalFavorites > 0 ? (
        <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#c95f4f] text-[11px] font-extrabold text-white">
          {totalFavorites}
        </span>
      ) : null}
    </Link>
  );
}
