"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/products";

const productsPerPage = 6;

export function ShopPagination({ products }: { products: Product[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const visibleProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return products.slice(start, start + productsPerPage);
  }, [currentPage, products]);

  function goToPage(page: number) {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {visibleProducts.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button
            className="min-h-11 rounded-full bg-white px-5 font-extrabold text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
            type="button"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              aria-current={currentPage === page ? "page" : undefined}
              className={`grid size-11 place-items-center rounded-full font-extrabold transition duration-200 hover:-translate-y-0.5 ${
                currentPage === page
                  ? "bg-[#c95f4f] text-white shadow-[0_14px_32px_rgba(201,95,79,0.3)]"
                  : "bg-white text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)]"
              }`}
              key={page}
              onClick={() => goToPage(page)}
              type="button"
            >
              {page}
            </button>
          ))}

          <button
            className="min-h-11 rounded-full bg-white px-5 font-extrabold text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
            type="button"
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
}
