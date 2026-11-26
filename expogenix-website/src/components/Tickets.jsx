import { useState } from "react";
import { Minus, Plus, QrCode, Award, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { SITE } from "../config.js";
import Reveal from "./Reveal.jsx";

const DAYS = [
  ["Thu", "26"],
  ["Fri", "27"],
  ["Sat", "28"],
  ["Sun", "29"],
];

const TYPES = [
  { key: "adult", label: "Per person", price: 100 },
  { key: "child", label: "Child", price: 30 },
];

const TIERS = [
  { name: "Title sponsor", perks: "Main stage branding · Logo on every ticket", left: 1, total: 1 },
  { name: "Gold", perks: "Entrance branding · Premium stall location", left: 2, total: 4 },
  { name: "Silver", perks: "Logo on floor plan & website", left: 5, total: 8 },
];

function TicketDemo() {
  const [day, setDay] = useState(1);
  const [qty, setQty] = useState({ adult: 2, child: 1 });
  const total = TYPES.reduce((sum, t) => sum + qty[t.key] * t.price, 0);
  const change = (key, d) => setQty((q) => ({ ...q, [key]: Math.max(0, Math.min(10, q[key] + d)) }));

  return (
    <div className="mt-8 rounded-2xl border border-forest-900/[0.08] bg-cream p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">1. Day of visit</p>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {DAYS.map(([d, n], i) => (
          <button
            key={n}
            type="button"
            onClick={() => setDay(i)}
            aria-pressed={day === i}
            className={`rounded-xl border px-2 py-2.5 text-center transition ${
              day === i
                ? "border-citrus-500 bg-citrus-500 text-white"
                : "border-forest-200 bg-white text-forest-800 hover:border-citrus-300"
            }`}
          >
            <span className="block text-xs opacity-70">{d}</span>
            <span className="block font-display text-lg font-bold">{n} Nov</span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">2. Tickets</p>
      <div className="mt-3 space-y-2">
        {TYPES.map((t) => (
          <div key={t.key} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
            <div>
              <p className="font-medium text-forest-900">{t.label}</p>
              <p className="text-sm text-ink-500">₹{t.price}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => change(t.key, -1)}
                aria-label={`Remove one ${t.label} ticket`}
                className="grid h-8 w-8 place-items-center rounded-full border border-forest-900/15 text-forest-900 transition hover:bg-forest-50"
              >
                <Minus size={14} />
              </button>
              <span className="w-5 text-center font-display font-bold text-forest-900">{qty[t.key]}</span>
              <button
                type="button"
                onClick={() => change(t.key, 1)}
                aria-label={`Add one ${t.label} ticket`}
                className="grid h-8 w-8 place-items-center rounded-full bg-citrus-500 text-white transition hover:bg-citrus-400"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-forest-900/[0.08] pt-4">
        <span className="text-sm text-ink-500">Total</span>
        <span className="font-display text-2xl font-bold text-forest-900">₹{total.toLocaleString("en-IN")}</span>
      </div>
    </div>
  );
}

export default function Tickets() {
  return (
    <section id="tickets" className="section-y bg-white">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Tickets & sponsorship</span>
          <h2 className="section-title">More revenue, less queueing</h2>
          <p className="section-sub">
            Sell visitor entry tickets and sponsorship packages online, right next to
            your stall bookings.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal className="card p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest-100 text-citrus-700">
                <QrCode size={26} />
              </span>
              <div>
                <h3 className="text-2xl font-bold">Visitor e-tickets</h3>
                <p className="text-ink-500">Day-wise tickets with one group QR code</p>
              </div>
            </div>

            <TicketDemo />

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-forest-50 p-4 text-sm text-forest-800">
              <MessageCircle size={18} className="mt-0.5 shrink-0 text-forest-600" />
              One QR ticket admits everyone in the order on the chosen day. Save it to your
              phone or share it on WhatsApp.
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="glow-citrus relative flex flex-col overflow-hidden rounded-3xl border border-citrus-200 bg-white p-8 shadow-lift sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-citrus-200/40 blur-3xl"
              aria-hidden
            />
            <div className="relative flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-citrus-500 text-white">
                <Award size={26} />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-forest-800">Sponsorship packages</h3>
                <p className="text-ink-500">Limited slots per tier, availability updates live</p>
              </div>
            </div>

            <ul className="relative mt-8 flex-1 space-y-3">
              {TIERS.map((t, i) => (
                <li
                  key={t.name}
                  className={`rounded-2xl border p-5 ${
                    i === 0 ? "border-citrus-300 bg-citrus-50" : "border-forest-200 bg-mint/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="flex items-center gap-2 font-display text-lg font-bold text-forest-800">
                      {i === 0 && <Sparkles size={16} className="text-citrus-600" />}
                      {t.name}
                    </p>
                    <span className="text-xs font-semibold text-citrus-700">
                      {t.left} of {t.total} slots left
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-500">{t.perks}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-forest-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-citrus-500 to-apricot"
                      style={{ width: `${((t.total - t.left) / t.total) * 100 || 6}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <p className="relative mt-5 text-xs text-ink-500">
              Example tiers — each organizer sets their own packages and pricing.
            </p>

            <a
              href={SITE.portalUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary relative mt-6"
            >
              Become a sponsor <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
