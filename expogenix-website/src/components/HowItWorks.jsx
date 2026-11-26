import { MousePointerClick, Lock, CreditCard, BadgeCheck } from "lucide-react";
import { SITE } from "../config.js";
import Reveal from "./Reveal.jsx";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "Pick your stall",
    text: "Live map · filter by hall, size & price.",
  },
  {
    icon: Lock,
    title: "Held while you pay",
    text: "Stall locked during checkout.",
  },
  {
    icon: CreditCard,
    title: "Pay securely",
    text: "UPI, cards · Razorpay.",
  },
  {
    icon: BadgeCheck,
    title: "Get confirmed",
    text: "GST invoice & dashboard access.",
  },
];

function StepCard({ icon: Icon, title, text, index }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal
      as="li"
      delay={index * 70}
      className="flex h-full flex-col rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 text-center transition hover:border-citrus-500/35 hover:bg-cream/[0.07]"
    >
      <div className="flex flex-col items-center">
        <span
          className="flex h-9 min-w-[2.5rem] items-center justify-center rounded-full border border-citrus-500/50 bg-forest-950 px-3 font-display text-sm font-bold text-citrus-400"
          aria-hidden
        >
          {num}
        </span>
        <span className="mt-4 grid h-12 w-12 place-items-center rounded-xl bg-citrus-500 text-forest-950 shadow-cta">
          <Icon size={22} />
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold !text-cream sm:text-xl">{title}</h3>
      <p className="mt-2 flex-1 text-base leading-relaxed text-cream/65">{text}</p>
    </Reveal>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y relative bg-forest-900 text-cream">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-citrus-500/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-dark">How it works</span>
          <h2 className="section-title !text-cream">Book in four simple steps</h2>
          <p className="section-sub !text-cream/65">
            From floor plan to confirmed stall — no calls, no paperwork.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <StepCard key={step.title} {...step} index={i} />
          ))}
        </ol>

        <Reveal className="mt-10 text-center">
          <a href={SITE.portalUrl} target="_blank" rel="noreferrer" className="btn-primary">
            Open the portal
          </a>
        </Reveal>
      </div>
    </section>
  );
}