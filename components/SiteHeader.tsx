import Link from "next/link";
import { CartHeaderButton } from "@/components/CartHeaderButton";
import { FavoritesHeaderButton } from "@/components/FavoritesHeaderButton";

function AccountIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M20 21a8 8 0 0 0-16 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#1e2624]/10 bg-[#fbf8f1]/90 backdrop-blur-xl">
      <div className="mx-auto grid min-h-[76px] max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-4 py-4 max-md:grid-cols-[1fr_auto] sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3 font-extrabold" href="/">
          <span className="grid size-[38px] place-items-center rounded-full bg-[#1e2624] text-[#fbf8f1]">
            A
          </span>
          <span className="max-[480px]:max-w-28 max-[480px]:leading-tight">Atelier Craft Co.</span>
        </Link>
        <nav className="flex items-center gap-[30px] text-[0.94rem] text-[#65706c] max-md:hidden" aria-label="Primary navigation">
          <Link className="hover:text-[#c95f4f]" href="/shop">
            Shop
          </Link>
          <Link className="hover:text-[#c95f4f]" href="/#collections">
            Collections
          </Link>
          <Link className="hover:text-[#c95f4f]" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-2.5">
          <FavoritesHeaderButton />
          <Link
            aria-label="Customer account"
            className="grid size-11 place-items-center rounded-full bg-white text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5"
            href="/account"
          >
            <AccountIcon />
          </Link>
          <CartHeaderButton />
        </div>
      </div>
    </header>
  );
}
