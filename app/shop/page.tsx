import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

const container = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8";
const eyebrow = "mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#c95f4f]";

export const metadata = {
  title: "Shop | Atelier Craft Co.",
  description: "Shop handmade craft kits, paper goods, tools, and gift wrap.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2624]">
      <section className="border-b border-[#1e2624]/10 py-16">
        <div className={container}>
          <p className={eyebrow}>Shop all</p>
          <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <div>
              <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,5.8rem)] leading-none tracking-normal">
                Premium art and craft essentials.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#65706c]">
                Browse demo products across DIY kits, handmade paper, studio tools, and gifting supplies.
              </p>
            </div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#426a5a] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)]">
              {products.length} products
            </span>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className={`${container} flex flex-wrap gap-3`}>
          {categories.map((category) => (
            <span
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#65706c] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)]"
              key={category.name}
            >
              {category.name}
            </span>
          ))}
        </div>
      </section>

      <section className="pb-[clamp(62px,8vw,112px)]">
        <div className={`${container} grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1`}>
          {products.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
