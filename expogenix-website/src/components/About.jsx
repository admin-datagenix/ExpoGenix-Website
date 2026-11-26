import { Check, X } from "lucide-react";
import { SITE } from "../config.js";
import Reveal from "./Reveal.jsx";

const BEFORE = [
  "Spreadsheet stall chaos",
  "Double bookings & call backs",
  "Manual payments & invoices",
  "Paper passes, long queues",
];

const AFTER = [
  "Live floor plan for every hall",
  "Stall held while you pay",
  "Pay online · instant GST bill",
  "QR tickets on WhatsApp",
];

export default function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why {SITE.name}</span>
          <h2 className="section-title">
            Exhibitions run better when everything is{" "}
            <span className="text-citrus-600">in one place</span>
          </h2>
          <p className="section-sub">
            One portal for organizers, exhibitors and visitors — no spreadsheets, no
            phone tag.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal className="glow-soft rounded-3xl border border-forest-900/[0.08] bg-white p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
              The old way
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-forest-900">
              Without a portal
            </p>
            <ul className="mt-7 space-y-4">
              {BEFORE.map((t) => (
                <li key={t} className="flex gap-3.5 text-base font-medium text-ink-700 sm:text-lg">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest-900/5 text-ink-500">
                    <X size={15} strokeWidth={2.5} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={120}
            className="glow-forest relative overflow-hidden rounded-3xl bg-forest-900 p-8 sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-citrus-500/25 blur-3xl"
              aria-hidden
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-citrus-300">
              The {SITE.name} way
            </p>
            <p className="relative mt-2 font-display text-2xl font-bold text-cream">
              With {SITE.name}
            </p>
            <ul className="relative mt-7 space-y-4">
              {AFTER.map((t) => (
                <li key={t} className="flex gap-3.5 text-base font-medium text-cream/90 sm:text-lg">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-citrus-500 text-forest-950">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}