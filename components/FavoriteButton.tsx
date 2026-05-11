"use client";

import { useFavorites } from "@/components/FavoritesProvider";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
    >
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

export function FavoriteButton({ slug }: { slug: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(slug);

  return (
    <button
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      className={`grid size-11 place-items-center rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5 ${
        active ? "text-[#c95f4f]" : "text-[#1e2624]"
      }`}
      onClick={() => toggleFavorite(slug)}
      type="button"
    >
      <HeartIcon filled={active} />
    </button>
  );
}
