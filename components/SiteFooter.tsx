const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 8.4V6.8c0-.8.6-1.1 1.2-1.1h1.9V2.3L14.5 2C11.8 2 10 3.7 10 6.5v1.9H7v3.7h3V22h4v-9.9h2.8l.6-3.7H14Z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.2 5.1A5.8 5.8 0 0 1 14.8 1h-3.4v13.4a2.8 2.8 0 1 1-2.1-2.7V8.2a6.2 6.2 0 1 0 5.5 6.2V7.8a9.1 9.1 0 0 0 5.2 1.7V6.1a5.8 5.8 0 0 1-2.8-1Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
        <rect height="16" rx="4" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4" />
        <path d="M15.5 11.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z" stroke="currentColor" strokeWidth="2" />
        <path d="M17.5 6.8h.1" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.6 4.5 12 4.5 12 4.5S6.4 4.5 4.5 5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1e2624]/10 bg-[#fbf8f1]">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-[18px] px-4 py-7 text-[#65706c] max-md:flex-col max-md:items-start sm:px-6 lg:px-8">
        <div>
          <span className="font-extrabold text-[#1e2624]">Atelier Craft Co.</span>
          <p className="mt-1 text-sm">Demo ecommerce experience built with Next.js and Tailwind CSS</p>
        </div>
        <nav className="flex items-center gap-2.5" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              aria-label={link.name}
              className="grid size-11 place-items-center rounded-full bg-white text-[#1e2624] shadow-[inset_0_0_0_1px_rgba(30,38,36,0.12)] transition duration-200 hover:-translate-y-0.5 hover:text-[#c95f4f]"
              href={link.href}
              key={link.name}
              rel="noreferrer"
              target="_blank"
            >
              {link.icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
