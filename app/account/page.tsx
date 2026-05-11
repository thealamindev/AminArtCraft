import Link from "next/link";

const container = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8";
const eyebrow = "mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#c95f4f]";

const stats = [
  ["Total orders", "12"],
  ["Reward points", "840"],
  ["Wishlist items", "7"],
];

const orders = [
  ["#AC-1048", "Botanical Watercolor Kit", "Delivered", "$42.00"],
  ["#AC-1031", "Studio Brush Roll", "Processing", "$54.00"],
  ["#AC-1022", "Natural Gift Wrap Bundle", "Delivered", "$24.00"],
];

export const metadata = {
  title: "Customer Dashboard | Atelier Craft Co.",
  description: "Customer dashboard page for the Atelier Craft Co. demo store.",
};

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2624]">
      <section className="py-[clamp(42px,7vw,92px)]">
        <div className={container}>
          <div className="mb-8 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <div>
              <p className={eyebrow}>Customer dashboard</p>
              <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,5.6rem)] leading-none tracking-normal">
                Welcome back, Amina.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#65706c]">
                Track orders, manage account details, save favorite products, and review your maker rewards.
              </p>
            </div>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1e2624] px-6 font-extrabold text-[#fbf8f1] transition duration-200 hover:-translate-y-0.5"
              href="/shop"
            >
              Continue shopping
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-[18px] max-md:grid-cols-1">
            {stats.map(([label, value]) => (
              <article className="rounded-lg border border-[#1e2624]/10 bg-white p-6 shadow-[0_14px_44px_rgba(30,38,36,0.06)]" key={label}>
                <p className="text-sm font-bold text-[#65706c]">{label}</p>
                <strong className="mt-3 block text-4xl">{value}</strong>
              </article>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-[1fr_380px] gap-8 max-lg:grid-cols-1">
            <section className="rounded-lg border border-[#1e2624]/10 bg-white p-6 shadow-[0_14px_44px_rgba(30,38,36,0.06)]">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-extrabold">Recent orders</h2>
                <Link className="font-extrabold text-[#426a5a] hover:text-[#c95f4f]" href="/cart">
                  View cart
                </Link>
              </div>
              <div className="grid gap-3">
                {orders.map(([id, item, status, total]) => (
                  <article className="grid grid-cols-[110px_1fr_110px_90px] items-center gap-4 rounded-lg bg-[#fbf8f1] p-4 max-md:grid-cols-1" key={id}>
                    <strong>{id}</strong>
                    <span className="text-[#65706c]">{item}</span>
                    <span className={`w-fit rounded-full px-3 py-1 text-sm font-extrabold ${status === "Delivered" ? "bg-[#e7eee9] text-[#426a5a]" : "bg-[#f6ead8] text-[#a57c32]"}`}>
                      {status}
                    </span>
                    <strong>{total}</strong>
                  </article>
                ))}
              </div>
            </section>

            <aside className="grid gap-4">
              <section className="rounded-lg border border-[#1e2624]/10 bg-white p-6 shadow-[0_14px_44px_rgba(30,38,36,0.06)]">
                <h2 className="text-2xl font-extrabold">Profile</h2>
                <div className="mt-5 grid gap-3 text-[#65706c]">
                  <p><strong className="text-[#1e2624]">Name:</strong> Amina Rahman</p>
                  <p><strong className="text-[#1e2624]">Email:</strong> amina@example.com</p>
                  <p><strong className="text-[#1e2624]">Member:</strong> Studio Circle</p>
                </div>
              </section>

              <section className="rounded-lg border border-[#1e2624]/10 bg-white p-6 shadow-[0_14px_44px_rgba(30,38,36,0.06)]">
                <h2 className="text-2xl font-extrabold">Saved address</h2>
                <p className="mt-4 leading-7 text-[#65706c]">
                  42 Maker Lane<br />
                  Dhaka 1207<br />
                  Bangladesh
                </p>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
