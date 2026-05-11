import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { FavoriteButton } from "@/components/FavoriteButton";
import { formatPrice, type Product } from "@/lib/products";
import { ProductVisual } from "./ProductVisual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#1e2624]/10 bg-white shadow-[0_14px_44px_rgba(30,38,36,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(30,38,36,0.12)]">
      <div className="relative">
        <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <ProductVisual product={product} />
        </Link>
        <div className="absolute right-3.5 top-3.5 z-10">
          <FavoriteButton slug={product.slug} />
        </div>
      </div>
      <div className="flex justify-between gap-3 p-[18px]">
        <div>
          <p className="mb-1.5 text-[0.84rem] text-[#65706c]">{product.category}</p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-[1.08rem] leading-tight hover:text-[#c95f4f]">{product.name}</h3>
          </Link>
        </div>
        <span className="whitespace-nowrap font-extrabold text-[#b9892e]">* {product.rating}</span>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-[#1e2624]/10 p-[18px] max-[420px]:flex-col max-[420px]:items-stretch">
        <div className="flex items-baseline gap-2">
          <strong className="text-xl">{formatPrice(product.price)}</strong>
          {product.compareAt ? (
            <span className="text-sm text-[#65706c] line-through">{formatPrice(product.compareAt)}</span>
          ) : null}
        </div>
        <div className="flex gap-2 max-[420px]:w-full">
          <AddToCartButton className="min-w-[124px] max-[420px]:flex-1" label="Add to cart" slug={product.slug} />
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 font-extrabold text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5 max-[420px]:flex-1"
            href={`/products/${product.slug}`}
          >
            Buy
          </Link>
        </div>
      </div>
    </article>
  );
}
