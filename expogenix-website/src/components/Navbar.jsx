import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE } from "../config.js";
import { ExpoGenixLogo } from "./BrandName.jsx";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#solutions", label: "Solutions" },
  { href: "#tickets", label: "Tickets & sponsors" },
  { href: "#faq", label: "FAQ" },
  { href: "#help", label: "Help" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-forest-900/[0.08] bg-white transition-shadow duration-300 ${
        scrolled || open ? "shadow-soft" : ""
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-[4.75rem] lg:gap-6">
        <a href="#top" className="flex items-center py-1" aria-label={`${SITE.name} home`}>
          <ExpoGenixLogo size="md" />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[1.05rem] font-semibold text-ink-700 transition hover:bg-forest-900/5 hover:text-forest-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={SITE.loginUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-4 py-2 text-[1.05rem] font-semibold text-forest-900 transition hover:bg-forest-900/5"
          >
            Log in
          </a>
          <a
            href={SITE.registerUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !px-5 !py-2.5 !text-base !shadow-none"
          >
            Register <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full text-forest-900 hover:bg-forest-900/5 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-forest-900/[0.08] bg-white lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-forest-900 hover:bg-forest-900/5"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href={SITE.loginUrl} target="_blank" rel="noreferrer" className="btn-outline">
                Log in
              </a>
              <a href={SITE.registerUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Register
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}