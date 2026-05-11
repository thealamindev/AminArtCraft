"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/components/CartProvider";
import { ProductVisual } from "@/components/ProductVisual";
import { formatPrice } from "@/lib/products";

export function CartPageClient() {
  const { items, getProduct, removeItem, updateQuantity, clearCart } = useCart();
  const cartProducts = items
    .map((item) => ({ item, product: getProduct(item.slug) }))
    .filter((entry) => entry.product);

  const subtotal = useMemo(() => {
    return cartProducts.reduce((total, entry) => total + (entry.product?.price ?? 0) * entry.item.quantity, 0);
  }, [cartProducts]);

  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 7;
  const total = subtotal + shipping;

  if (cartProducts.length === 0) {
    return (
      <div className="rounded-lg border border-[#1e2624]/10 bg-white p-8 text-center shadow-[0_14px_44px_rgba(30,38,36,0.06)]">
        <h2 className="text-3xl font-extrabold">Your cart is empty.</h2>
        <p className="mx-auto mt-3 max-w-xl text-[#65706c]">
          Add craft kits, tools, or paper goods from the shop and they will appear here.
        </p>
        <Link
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#c95f4f] px-6 font-extrabold text-white shadow-[0_14px_32px_rgba(201,95,79,0.3)] transition duration-200 hover:-translate-y-0.5"
          href="/shop"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[1fr_380px] gap-8 max-lg:grid-cols-1">
      <div className="grid gap-4">
        {cartProducts.map(({ item, product }) =>
          product ? (
            <article className="grid grid-cols-[160px_1fr_auto] gap-5 rounded-lg border border-[#1e2624]/10 bg-white p-4 shadow-[0_14px_44px_rgba(30,38,36,0.06)] max-md:grid-cols-1" key={product.slug}>
              <div className="overflow-hidden rounded-lg">
                <ProductVisual product={product} />
              </div>
              <div>
                <p className="mb-2 text-sm font-bold text-[#65706c]">{product.category}</p>
                <Link href={`/products/${product.slug}`}>
                  <h2 className="text-2xl font-extrabold hover:text-[#c95f4f]">{product.name}</h2>
                </Link>
                <p className="mt-2 max-w-xl text-[#65706c]">{product.shortDescription}</p>
                <button
                  className="mt-4 font-extrabold text-[#c95f4f]"
                  onClick={() => removeItem(product.slug)}
                  type="button"
                >
                  Remove
                </button>
              </div>
              <div className="flex min-w-32 flex-col items-end justify-between gap-4 max-md:items-start">
                <strong className="text-xl">{formatPrice(product.price * item.quantity)}</strong>
                <div className="flex items-center rounded-full bg-[#fbf8f1] p-1 shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)]">
                  <button
                    className="grid size-9 place-items-center rounded-full bg-white font-extrabold text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.08)]"
                    onClick={() => updateQuantity(product.slug, item.quantity - 1)}
                    type="button"
                  >
                    -
                  </button>
                  <span className="grid w-10 place-items-center font-extrabold">{item.quantity}</span>
                  <button
                    className="grid size-9 place-items-center rounded-full bg-white font-extrabold text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.08)]"
                    onClick={() => updateQuantity(product.slug, item.quantity + 1)}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          ) : null,
        )}
      </div>

      <aside className="h-fit rounded-lg border border-[#1e2624]/10 bg-white p-6 shadow-[0_14px_44px_rgba(30,38,36,0.06)]">
        <p className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#c95f4f]">Cart summary</p>
        <div className="grid gap-3 border-b border-[#1e2624]/10 pb-5 text-[#65706c]">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <strong className="text-[#1e2624]">{formatPrice(subtotal)}</strong>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <strong className="text-[#1e2624]">{shipping === 0 ? "Free" : formatPrice(shipping)}</strong>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-extrabold">Total</span>
          <strong className="text-3xl">{formatPrice(total)}</strong>
        </div>
        <Link
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#c95f4f] px-6 font-extrabold text-white shadow-[0_14px_32px_rgba(201,95,79,0.3)] transition duration-200 hover:-translate-y-0.5"
          href={`/checkout/${cartProducts[0].product?.slug}`}
        >
          Checkout
        </Link>
        <button className="mt-3 min-h-12 w-full rounded-full bg-white px-6 font-extrabold text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)]" onClick={clearCart} type="button">
          Clear cart
        </button>
      </aside>
    </div>
  );
}
