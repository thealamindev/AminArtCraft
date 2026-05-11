import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckoutForm } from "./CheckoutForm";
import { getProduct, products } from "@/lib/products";

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
    return { title: "Checkout | Atelier Craft Co." };
  }

  return {
    title: `Checkout ${product.name} | Atelier Craft Co.`,
    description: `Checkout page for ${product.name}.`,
  };
}

export default async function CheckoutPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2624]">
      <section className="py-[clamp(42px,7vw,92px)]">
        <div className={container}>
          <Link className="mb-8 inline-flex font-extrabold text-[#426a5a] hover:text-[#c95f4f]" href={`/products/${product.slug}`}>
            Back to product
          </Link>
          <p className={eyebrow}>Secure checkout</p>
          <h1 className="mb-8 max-w-3xl text-[clamp(2.4rem,5vw,5rem)] leading-none tracking-normal">
            Complete your order.
          </h1>
          <CheckoutForm product={product} />
        </div>
      </section>
    </main>
  );
}
