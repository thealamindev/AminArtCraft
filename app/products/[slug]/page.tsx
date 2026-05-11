import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { formatPrice, getProduct, products } from "@/lib/products";

const container = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8";
const eyebrow = "mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#c95f4f]";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product not found | Atelier Craft Co." };
  }

  return {
    title: `${product.name} | Atelier Craft Co.`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .concat(products.filter((item) => item.slug !== product.slug && item.category !== product.category))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2624]">
      <section className="py-[clamp(42px,7vw,92px)]">
        <div className={`${container} grid grid-cols-[1fr_0.86fr] gap-10 max-lg:grid-cols-1`}>
          <ProductGallery product={product} />

          <div className="self-center">
            <p className={eyebrow}>{product.category}</p>
            <h1 className="text-[clamp(2.4rem,5vw,5.2rem)] leading-none tracking-normal">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-[#65706c]">{product.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-4 py-2 font-extrabold text-[#b9892e] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)]">
                * {product.rating}
              </span>
              <span className="rounded-full bg-white px-4 py-2 font-extrabold text-[#426a5a] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)]">
                {product.stock}
              </span>
            </div>

            <div className="mt-7 flex items-baseline gap-3">
              <strong className="text-4xl">{formatPrice(product.price)}</strong>
              {product.compareAt ? (
                <span className="text-lg text-[#65706c] line-through">{formatPrice(product.compareAt)}</span>
              ) : null}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <AddToCartButton
                className="min-h-12 min-w-36 bg-[#1e2624] px-6"
                label="Add to cart"
                slug={product.slug}
              />
              <Link
                className="inline-flex min-h-12 min-w-40 items-center justify-center rounded-full bg-[#c95f4f] px-6 font-extrabold text-white shadow-[0_14px_32px_rgba(201,95,79,0.3)] transition duration-200 hover:-translate-y-0.5"
                href={`/checkout/${product.slug}`}
              >
                Checkout now
              </Link>
              <Link
                className="inline-flex min-h-12 min-w-36 items-center justify-center rounded-full bg-white px-6 font-extrabold text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5"
                href="/shop"
              >
                Back to shop
              </Link>
            </div>

            <div className="mt-8 rounded-lg border border-[#1e2624]/10 bg-white p-5">
              <h2 className="mb-4 text-xl font-extrabold">What is included</h2>
              <ul className="grid gap-3 text-[#65706c]">
                {product.details.map((detail) => (
                  <li className="flex gap-3" key={detail}>
                    <span className="mt-2 size-2 rounded-full bg-[#c95f4f]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[clamp(62px,8vw,112px)]">
        <div className={container}>
          <div className="mb-[34px]">
            <p className={eyebrow}>More to explore</p>
            <h2 className="text-[clamp(2rem,4vw,4rem)] leading-none">Related products</h2>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
            {related.map((item) => (
              <ProductCard product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
