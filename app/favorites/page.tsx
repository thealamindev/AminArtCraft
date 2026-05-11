import { FavoritesPageClient } from "./FavoritesPageClient";

const container = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8";
const eyebrow = "mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#c95f4f]";

export const metadata = {
  title: "Favorites | Atelier Craft Co.",
  description: "Saved favorite products for the Atelier Craft Co. demo store.",
};

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2624]">
      <section className="py-[clamp(42px,7vw,92px)]">
        <div className={container}>
          <p className={eyebrow}>Favorites</p>
          <h1 className="mb-8 text-[clamp(2.5rem,6vw,5.6rem)] leading-none tracking-normal">
            Your saved craft picks.
          </h1>
          <FavoritesPageClient />
        </div>
      </section>
    </main>
  );
}
