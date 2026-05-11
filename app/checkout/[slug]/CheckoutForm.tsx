"use client";

import { useMemo, useState } from "react";
import { formatPrice, type Product } from "@/lib/products";

const coupons = {
  CRAFT10: 0.1,
  STUDIO20: 0.2,
};

export function CheckoutForm({ product }: { product: Product }) {
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<keyof typeof coupons | "">("");
  const [message, setMessage] = useState("Use CRAFT10 or STUDIO20 for demo discount.");

  const totals = useMemo(() => {
    const subtotal = product.price;
    const shipping = subtotal >= 75 ? 0 : 7;
    const discountRate = appliedCoupon ? coupons[appliedCoupon] : 0;
    const discount = subtotal * discountRate;
    const total = subtotal + shipping - discount;

    return { subtotal, shipping, discount, total };
  }, [appliedCoupon, product.price]);

  function applyCoupon() {
    const code = coupon.trim().toUpperCase() as keyof typeof coupons;

    if (code in coupons) {
      setAppliedCoupon(code);
      setMessage(`${code} applied successfully.`);
      return;
    }

    setAppliedCoupon("");
    setMessage("Invalid coupon. Try CRAFT10 or STUDIO20.");
  }

  return (
    <div className="grid grid-cols-[1fr_420px] gap-8 max-lg:grid-cols-1">
      <form className="rounded-lg border border-[#1e2624]/10 bg-white p-6 shadow-[0_14px_44px_rgba(30,38,36,0.06)]">
        <h2 className="mb-6 text-2xl font-extrabold">Shipping details</h2>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <label className="grid gap-2 text-sm font-bold text-[#65706c]">
            First name
            <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="Amina" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#65706c]">
            Last name
            <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="Rahman" />
          </label>
        </div>
        <label className="mt-4 grid gap-2 text-sm font-bold text-[#65706c]">
          Email
          <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" type="email" placeholder="you@example.com" />
        </label>
        <label className="mt-4 grid gap-2 text-sm font-bold text-[#65706c]">
          Address
          <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="Street address" />
        </label>
        <div className="mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <label className="grid gap-2 text-sm font-bold text-[#65706c]">
            City
            <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="Dhaka" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#65706c]">
            Country
            <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="Bangladesh" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#65706c]">
            ZIP
            <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="1207" />
          </label>
        </div>

        <h2 className="mb-6 mt-8 text-2xl font-extrabold">Payment</h2>
        <label className="grid gap-2 text-sm font-bold text-[#65706c]">
          Card number
          <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="4242 4242 4242 4242" />
        </label>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <label className="grid gap-2 text-sm font-bold text-[#65706c]">
            Expiry
            <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="12/30" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#65706c]">
            CVC
            <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="123" />
          </label>
        </div>
      </form>

      <aside className="h-fit rounded-lg border border-[#1e2624]/10 bg-white p-6 shadow-[0_14px_44px_rgba(30,38,36,0.06)]">
        <p className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#c95f4f]">Order summary</p>
        <h2 className="text-2xl font-extrabold">{product.name}</h2>
        <p className="mt-2 text-[#65706c]">{product.shortDescription}</p>

        <div className="my-6 grid gap-3 border-y border-[#1e2624]/10 py-5 text-[#65706c]">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <strong className="text-[#1e2624]">{formatPrice(totals.subtotal)}</strong>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <strong className="text-[#1e2624]">{totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}</strong>
          </div>
          <div className="flex justify-between">
            <span>Coupon discount</span>
            <strong className="text-[#426a5a]">-{formatPrice(totals.discount)}</strong>
          </div>
        </div>

        <label className="grid gap-2 text-sm font-bold text-[#65706c]">
          Coupon code
          <div className="flex gap-2 max-[480px]:flex-col">
            <input
              className="min-h-12 w-full rounded-lg border border-[#1e2624]/10 px-4 uppercase text-[#1e2624] outline-none focus:border-[#c95f4f]"
              onChange={(event) => setCoupon(event.target.value)}
              placeholder="CRAFT10"
              value={coupon}
            />
            <button
              className="min-h-12 rounded-full bg-[#1e2624] px-5 font-extrabold text-[#fbf8f1] transition duration-200 hover:-translate-y-0.5"
              onClick={applyCoupon}
              type="button"
            >
              Apply
            </button>
          </div>
        </label>
        <p className={`mt-2 text-sm ${appliedCoupon ? "text-[#426a5a]" : "text-[#65706c]"}`}>{message}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-extrabold">Total</span>
          <strong className="text-3xl">{formatPrice(totals.total)}</strong>
        </div>

        <button className="mt-6 min-h-12 w-full rounded-full bg-[#c95f4f] px-6 font-extrabold text-white shadow-[0_14px_32px_rgba(201,95,79,0.3)] transition duration-200 hover:-translate-y-0.5">
          Place order
        </button>
      </aside>
    </div>
  );
}
