import { Building2, Store, Users, Check, ArrowUpRight } from "lucide-react";
import { SITE } from "../config.js";
import Reveal from "./Reveal.jsx";

const ROLES = [
  {
    icon: Building2,
    name: "Organizers",
    tag: "Full control",
    points: [
      "Create exhibitions, halls and stall pricing",
      "Upload floor plans and manage availability",
      "Offer sponsorship tiers and visitor tickets",
      "Track bookings, collections and reports live",
    ],
    cta: { label: "Talk to us", href: "#contact" },
  },
  {
    icon: Store,
    name: "Exhibitors",
    tag: "Book & grow",
    featured: true,
    points: [
      "Pick a stall on the live floor plan",
      "Pay online — full or advance where allowed",
      "Download GST invoices and confirmations",
      "Manage bookings and guest passes in your dashboard",
    ],
    cta: { label: "Create exhibitor account", href: SITE.registerUrl, external: true },
  },
  {
    icon: Users,
    name: "Visitors",
    tag: "Skip the queue",
    points: [
      "Choose the day of your visit",
      "Buy adult and child tickets online",
      "One QR ticket admits the whole group",
      "Save it to your phone or share on WhatsApp",
    ],
    cta: { label: "Buy visitor tickets", href: SITE.portalUrl, external: true },
  },
];

export default function Audience() {
  return (
    <section id="solutions" className="section-y">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Solutions</span>
          <h2 className="section-title">Built for everyone at the exhibition</h2>
          <p className="section-sub">One portal, three tailored experiences.</p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {ROLES.map(({ icon: Icon, name, tag, points, featured, cta }, i) => (
            <Reveal
              key={name}
              delay={i * 100}
              className={`relative flex flex-col overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-1 sm:p-9 ${
                featured
                  ? "border-2 border-citrus-300 bg-gradient-to-br from-citrus-50 via-white to-mint/80 shadow-lift"
                  : "border border-forest-900/[0.08] bg-white shadow-soft hover:shadow-lift"
              }`}
            >
              {featured && (
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-citrus-500/25 blur-3xl"
                  aria-hidden
                />
              )}
              <div className="relative flex items-center justify-between">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${
                    featured ? "bg-citrus-500 text-white" : "bg-peach/70 text-citrus-700"
                  }`}
                >
                  <Icon size={24} />
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    featured ? "bg-citrus-100 text-citrus-800" : "bg-forest-50 text-forest-700"
                  }`}
                >
                  {tag}
                </span>
              </div>
              <h3 className="relative mt-7 text-2xl font-bold text-forest-800">
                {name}
              </h3>
              <ul className="relative mt-6 flex-1 space-y-3.5">
                {points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-[0.95rem] text-ink-700"
                  >
                    <Check
                      size={18}
                      strokeWidth={2.5}
                      className={`mt-0.5 shrink-0 ${featured ? "text-citrus-400" : "text-forest-600"}`}
                    />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={cta.href}
                {...(cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className={`relative mt-9 ${featured ? "btn-primary" : "btn-outline"}`}
              >
                {cta.label} <ArrowUpRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
