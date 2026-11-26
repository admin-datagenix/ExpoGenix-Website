import { ArrowRight, Ticket, CheckCircle2, Timer } from "lucide-react";
import { SITE } from "../config.js";

// a = available, h = held at checkout, b = booked, s = selected
const MAP = [
  "bbabhb",
  "abbsab",
  "hbabba",
];

const STALL_STYLE = {
  a: "border-forest-400/60 bg-forest-100 text-forest-800",
  h: "border-apricot bg-peach text-citrus-700",
  b: "border-forest-300 bg-forest-200 text-forest-700",
  s: "border-citrus-500 bg-citrus-400 text-white ring-4 ring-citrus-400/30",
};

export default function Hero() {
  return (
    <section
      id="top"
      className="section-warm relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-citrus-200/50 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-forest-200/60 blur-[100px]"
        aria-hidden
      />

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="animate-fade-up">
          <span className="eyebrow-dark">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-citrus-500" />
            Live stall availability · Secure online payment
          </span>

          <h1 className="mt-5 text-[2.25rem] font-bold leading-[1.08] text-forest-800 sm:text-5xl lg:text-[3.25rem]">
            Book your exhibition stall{" "}
            <span className="bg-gradient-to-r from-citrus-600 via-citrus-500 to-citrus-400 bg-clip-text text-transparent">
              in minutes.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
            {SITE.name} is the all-in-one exhibition portal: pick a stall on the live
            floor plan, add a sponsorship package, pay online and get your
            confirmation and GST invoice instantly.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.portalUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Book a stall now <ArrowRight size={18} />
            </a>
            <a href={SITE.portalUrl} target="_blank" rel="noreferrer" className="btn-ghost-light">
              <Ticket size={18} /> Buy visitor tickets
            </a>
          </div>

          <ul className="mt-8 grid max-w-lg grid-cols-1 gap-2.5 text-sm text-ink-700 sm:grid-cols-2">
            {[
              "Live floor plan, real-time status",
              "UPI, cards & net banking",
              "Instant GST invoice",
              "QR e-tickets on WhatsApp",
              "Online & offline",
              "Web & mobile app",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="shrink-0 text-citrus-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-citrus-500/30 to-forest-400/10 blur-2xl" aria-hidden />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white text-ink-700 shadow-lift">
            <div className="flex items-center gap-2 border-b border-forest-900/[0.08] bg-white px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-citrus-300" />
              <span className="h-3 w-3 rounded-full bg-peach" />
              <span className="h-3 w-3 rounded-full bg-forest-200" />
              <span className="ml-3 truncate rounded-full bg-forest-50 px-3 py-1 text-xs text-ink-500">
                expogenix.datagenix.in/floor-plan
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                    Hall A · Live floor plan
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-forest-900">
                    Choose your stall
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-forest-500" />
                  Live
                </span>
              </div>

              <div className="mt-5 rounded-2xl border border-forest-900/[0.06] bg-white p-4">
                <div className="grid grid-cols-6 gap-2">
                  {MAP.join("").split("").map((s, i) => (
                    <div
                      key={i}
                      className={`grid aspect-square place-items-center rounded-lg border text-[0.65rem] font-semibold ${STALL_STYLE[s]}`}
                    >
                      {String.fromCharCode(65 + Math.floor(i / 6))}
                      {(i % 6) + 1}
                    </div>
                  ))}
                </div>
                <div className="mt-2 h-6 rounded-md bg-forest-50 text-center text-[0.65rem] font-semibold uppercase leading-6 tracking-[0.2em] text-ink-500">
                  Main entrance
                </div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[0.7rem] text-ink-500">
                  {[
                    ["bg-forest-100 border-forest-400/60", "Available"],
                    ["bg-peach border-apricot", "On hold"],
                    ["bg-forest-200 border-forest-300", "Booked"],
                    ["bg-citrus-500 border-citrus-600", "Your pick"],
                  ].map(([c, l]) => (
                    <span key={l} className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-sm border ${c}`} />
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-forest-200 bg-forest-50 p-4">
                <div>
                  <p className="text-xs text-ink-500">Stall B4 · 3 × 3 m · Corner</p>
                  <p className="mt-0.5 font-display text-lg font-bold text-forest-800">
                    ₹ 24,000 <span className="text-xs font-medium text-ink-500">+ GST</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-citrus-500 px-4 py-2 text-xs font-bold text-white">
                  <Timer size={14} /> Held 14:52
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
