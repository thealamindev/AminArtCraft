"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

function CartIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M7 8h13l-1.4 7.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.7L5.8 5H3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M9 21h.1M17 21h.1" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

export function CartHeaderButton() {
  const { totalItems } = useCart();

  return (
    <Link
      aria-label={`Open cart with ${totalItems} items`}
      className="relative grid size-11 place-items-center rounded-full bg-white text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5 hover:text-[#c95f4f]"
      href="/cart"
    >
      <CartIcon />
      {totalItems > 0 ? (
        <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#c95f4f] text-[11px] font-extrabold text-white">
          {totalItems}
        </span>
      ) : null}
    </Link>
  );
}
