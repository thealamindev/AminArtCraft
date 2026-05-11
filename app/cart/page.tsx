import { CartPageClient } from "./CartPageClient";

const container = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8";
const eyebrow = "mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#c95f4f]";

export const metadata = {
  title: "Cart | Atelier Craft Co.",
  description: "Review products added to your cart.",
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2624]">
      <section className="py-[clamp(42px,7vw,92px)]">
        <div className={container}>
          <p className={eyebrow}>Shopping cart</p>
          <h1 className="mb-8 text-[clamp(2.5rem,6vw,5.6rem)] leading-none tracking-normal">
            Review your selected products.
          </h1>
          <CartPageClient />
        </div>
      </section>
    </main>
  );
}
