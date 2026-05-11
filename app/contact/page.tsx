const container = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8";
const eyebrow = "mb-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#c95f4f]";

export const metadata = {
  title: "Contact | Atelier Craft Co.",
  description: "Contact the Atelier Craft Co. demo ecommerce store.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2624]">
      <section className="py-[clamp(62px,8vw,112px)]">
        <div className={`${container} grid grid-cols-[0.8fr_1fr] gap-10 max-lg:grid-cols-1`}>
          <div>
            <p className={eyebrow}>Contact</p>
            <h1 className="text-[clamp(2.5rem,6vw,5.6rem)] leading-none tracking-normal">
              Let us help with your next creative order.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#65706c]">
              Have a question about a kit, custom packaging, or a bulk craft order? Send a message and our studio team will reply within one business day.
            </p>
            <div className="mt-8 grid gap-4 text-[#65706c]">
              <p><strong className="text-[#1e2624]">Email:</strong> hello@ateliercraft.demo</p>
              <p><strong className="text-[#1e2624]">Phone:</strong> +1 555 014 2278</p>
              <p><strong className="text-[#1e2624]">Studio:</strong> 42 Maker Lane, Portland, OR</p>
            </div>
          </div>

          <form className="rounded-lg border border-[#1e2624]/10 bg-white p-6 shadow-[0_14px_44px_rgba(30,38,36,0.06)]">
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <label className="grid gap-2 text-sm font-bold text-[#65706c]">
                First name
                <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="Amina" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#65706c]">
                Last name
                <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="Rahman" />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold text-[#65706c]">
              Email
              <input className="min-h-12 rounded-lg border border-[#1e2624]/10 px-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" type="email" placeholder="you@example.com" />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-bold text-[#65706c]">
              Message
              <textarea className="min-h-36 rounded-lg border border-[#1e2624]/10 p-4 text-[#1e2624] outline-none focus:border-[#c95f4f]" placeholder="Tell us what you are looking for." />
            </label>
            <button className="mt-5 min-h-12 rounded-full bg-[#1e2624] px-6 font-extrabold text-[#fbf8f1] transition duration-200 hover:-translate-y-0.5" type="submit">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
