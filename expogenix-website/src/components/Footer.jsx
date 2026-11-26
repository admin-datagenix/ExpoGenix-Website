import { ArrowUpRight } from "lucide-react";
import { SITE } from "../config.js";
import { ExpoGenixLogo } from "./BrandName.jsx";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Tickets & sponsors", href: "#tickets" },
      { label: "Benefits", href: "#benefits" },
    ],
  },
  {
    title: "Portal",
    links: [
      { label: "Exhibitions", href: SITE.portalUrl, external: true },
      { label: "Exhibitor log in", href: SITE.loginUrl, external: true },
      { label: "Create account", href: SITE.registerUrl, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
      { label: "Help", href: "#help" },
      { label: SITE.company, href: SITE.companyUrl, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream/60">
      <div className="container-x py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="inline-flex items-center rounded-lg bg-white/95 px-2.5 py-2">
              <ExpoGenixLogo size="md" />
            </a>
            <p className="mt-5 max-w-sm leading-relaxed">
              The smart exhibition portal for live stall booking, online payments, GST
              invoicing, sponsorships and visitor e-tickets.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-citrus-400">
              {SITE.tagline}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-cream">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="inline-flex items-center gap-1 transition hover:text-citrus-400"
                    >
                      {l.label}
                      {l.external && <ArrowUpRight size={14} className="opacity-60" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Legal">
            <a href="#privacy" className="transition hover:text-citrus-400">
              Privacy policy
            </a>
          </nav>
          <p>
            Designed &amp; Developed By{" "}
            <a
              href={SITE.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-cream underline decoration-citrus-400/80 underline-offset-4 transition hover:text-citrus-400"
            >
              DatagenixAi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
