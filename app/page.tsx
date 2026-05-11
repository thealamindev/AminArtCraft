import Image from "next/image";
import Link from "next/link";
import { ProductShowcase } from "@/components/ProductShowcase";
import { categories, products } from "@/lib/products";

const journal = [
  "How to build a calm watercolor habit",
  "Choosing the right paper texture",
  "Five handmade packaging details that feel premium",
];

const sectionPadding = "px-4 py-[clamp(62px,8vw,112px)] sm:px-6 lg:px-8";
const container = "mx-auto max-w-[1320px]";
const eyebrow = "mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#c95f4f]";
const heading = "text-[clamp(2rem,4vw,4rem)] leading-none tracking-normal";
const buttonMotion = "transition duration-200 hover:-translate-y-0.5";

function ProductSection({
  eyebrowText,
  title,
  items,
}: {
  eyebrowText: string;
  title: string;
  items: typeof products;
}) {
  return (
    <section className={sectionPadding}>
      <div className={container}>
        <div className="mb-[34px] flex justify-between gap-6 max-md:flex-col">
          <div>
            <p className={eyebrow}>{eyebrowText}</p>
            <h2 className={heading}>{title}</h2>
          </div>
          <Link className="self-end font-extrabold text-[#426a5a] hover:text-[#c95f4f] max-md:self-start" href="/shop">
            View all
          </Link>
        </div>
        <ProductShowcase items={items} />
      </div>
    </section>
  );
}

export default function Home() {
  const specialOffer = products
    .filter((product) => product.compareAt || product.tag === "special")
    .concat(products.filter((product) => !product.compareAt && product.tag !== "special"))
    .slice(0, 9);
  const bestSelling = [...products]
    .sort((first, second) => Number(second.rating) - Number(first.rating))
    .slice(0, 9);
  const newArrival = products.slice().reverse().slice(0, 9);

  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2624]">
      <section className="relative min-h-[calc(100vh-76px)] overflow-hidden max-md:min-h-[780px]">
        <Image
          src="/craft-hero.png"
          alt="Arranged handmade craft supplies on a studio tabletop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,241,0.96)_0%,rgba(251,248,241,0.84)_37%,rgba(251,248,241,0.1)_72%),linear-gradient(0deg,rgba(30,38,36,0.06),rgba(30,38,36,0.06))] max-md:bg-[linear-gradient(180deg,rgba(251,248,241,0.98)_0%,rgba(251,248,241,0.86)_48%,rgba(251,248,241,0.2)_100%),linear-gradient(0deg,rgba(30,38,36,0.06),rgba(30,38,36,0.06))]" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`${container} relative grid min-h-[calc(100vh-76px)] items-center py-[clamp(48px,8vw,96px)] max-md:min-h-[780px] max-md:items-start`}>
            <div className="max-w-[720px]">
              <p className={eyebrow}>Modern handmade supplies</p>
              <h1 className="mb-5 max-w-[760px] text-[clamp(3.25rem,8vw,7.4rem)] leading-[0.94] tracking-normal max-[480px]:text-5xl">
                Craft materials that make every project feel considered.
              </h1>
              <p className="max-w-[610px] text-[clamp(1rem,2vw,1.2rem)] leading-7 text-[#3e4b47]">
                Shop refined DIY kits, artisan tools, gift packaging, and textured paper goods
                selected for makers, stylists, and thoughtful gift givers.
              </p>
              <div className="mt-[30px] flex flex-wrap items-center gap-3 max-[480px]:flex-col max-[480px]:items-stretch">
                <Link
                  className={`inline-flex min-h-11 min-w-[168px] items-center justify-center rounded-full bg-[#c95f4f] px-5 font-extrabold text-white shadow-[0_14px_32px_rgba(201,95,79,0.3)] ${buttonMotion} max-[480px]:w-full`}
                  href="/shop"
                >
                  Shop new arrivals
                </Link>
                <Link
                  className={`inline-flex min-h-11 min-w-[168px] items-center justify-center rounded-full bg-white/80 px-5 font-extrabold shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] ${buttonMotion} max-[480px]:w-full`}
                  href="#collections"
                >
                  Explore collections
                </Link>
              </div>
            </div>
            <aside
              className="absolute bottom-8 right-0 z-10 w-[min(280px,calc(100%-36px))] rounded-lg border border-white/60 bg-white/70 p-5 shadow-[0_24px_70px_rgba(30,38,36,0.14)] backdrop-blur-xl max-lg:right-4 max-md:bottom-6 max-md:left-0 max-md:right-auto"
              aria-label="Store highlights"
            >
              <strong className="block text-[2.15rem]">2,400+</strong>
              <span className="leading-6 text-[#65706c]">orders shipped to home studios this season</span>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1e2624]/10 bg-[#1e2624] text-[#fbf8f1]" aria-label="Shopping benefits">
        <div className={`${container} grid grid-cols-4 max-md:grid-cols-1`}>
          {["Free shipping over $75", "Plastic-light packaging", "Small-batch artisan goods", "30-day easy returns"].map((benefit) => (
            <span className="border-r border-[#fbf8f1]/15 p-[18px] text-center text-[0.92rem] max-md:border-b max-md:border-r-0" key={benefit}>
              {benefit}
            </span>
          ))}
        </div>
      </section>

      <section className={sectionPadding} id="collections">
        <div className={container}>
          <div className="mb-[34px] max-w-[860px]">
            <p className={eyebrow}>Collections</p>
            <h2 className={heading}>Shop by creative ritual</h2>
          </div>
          <div className="grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
            {categories.map((category) => (
              <Link className="min-h-[180px] rounded-lg border border-[#1e2624]/10 bg-white p-6" href="/shop" key={category.name}>
                <span className="mb-[38px] block size-[18px] rounded-full" style={{ backgroundColor: category.color }} />
                <strong className="mb-2.5 block text-[1.15rem]">{category.name}</strong>
                <span className="text-[#65706c]">{category.detail}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductSection eyebrowText="Special offer" title="Limited deals for your next project" items={specialOffer} />
      <ProductSection eyebrowText="Best selling" title="Most-loved tools and kits" items={bestSelling} />
      <ProductSection eyebrowText="New arrival" title="Fresh drops from the studio" items={newArrival} />

      <section className={`bg-[#e7eee9] ${sectionPadding}`}>
        <div className={`${container} grid grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] items-center gap-[clamp(28px,6vw,80px)] max-lg:grid-cols-1`}>
          <div>
            <p className={eyebrow}>Maker boxes</p>
            <h2 className={heading}>Monthly craft boxes with premium materials and zero decision fatigue.</h2>
            <p className="mt-6 max-w-[620px] text-[1.05rem] leading-7 text-[#65706c]">
              Each box pairs a finished-object brief with artist-grade supplies, a printed
              guide, and packaging refined enough to gift.
            </p>
          </div>
          <div className="rounded-lg border border-[#1e2624]/15 bg-white/60">
            {[
              ["01", "Botanical ink cards", "45 min project"],
              ["02", "Clay charm garland", "Weekend kit"],
              ["03", "Wax seal stationery", "Gift ready"],
            ].map(([number, title, meta]) => (
              <div className="grid grid-cols-[48px_1fr_auto] items-center gap-[18px] border-b border-[#1e2624]/10 p-5 last:border-b-0 max-md:grid-cols-[36px_1fr]" key={title}>
                <span className="font-extrabold text-[#c95f4f]">{number}</span>
                <strong>{title}</strong>
                <p className="text-[#65706c] max-md:col-start-2">{meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionPadding} id="journal">
        <div className={container}>
          <div className="mb-[34px] max-w-[860px]">
            <p className={eyebrow}>Journal</p>
            <h2 className={heading}>Guides from the studio</h2>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-md:grid-cols-1">
            {journal.map((item, index) => (
              <article className="min-h-[210px] border-t-2 border-[#1e2624] bg-white/45 p-6" key={item}>
                <span className="font-extrabold text-[#c95f4f]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="my-[42px] text-[1.45rem] leading-tight">{item}</h3>
                <Link className="font-extrabold text-[#65706c] hover:text-[#c95f4f]" href="/shop">
                  Read guide
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
