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
      className="card flex h-full flex-col p-6 text-center transition hover:-translate-y-0.5 hover:border-citrus-300 hover:shadow-lift"
    >
      <div className="flex flex-col items-center">
        <span
          className="flex h-9 min-w-[2.5rem] items-center justify-center rounded-full border border-citrus-300 bg-citrus-50 px-3 font-display text-sm font-bold text-citrus-700"
          aria-hidden
        >
          {num}
        </span>
        <span className="mt-4 grid h-12 w-12 place-items-center rounded-xl bg-citrus-500 text-white shadow-cta">
          <Icon size={22} />
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-forest-800 sm:text-xl">{title}</h3>
      <p className="mt-2 flex-1 text-base leading-relaxed text-ink-500">{text}</p>
    </Reveal>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y section-soft relative">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">Book in four simple steps</h2>
          <p className="section-sub">From floor plan to confirmed stall — no calls, no paperwork.</p>
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