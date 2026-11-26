import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal.jsx";

const FAQS = [
  {
    q: "What is ExpoGenix?",
    a: "An exhibition portal for stall booking, sponsorships, visitor tickets and organizer admin — all in one place.",
  },
  {
    q: "How does stall booking work?",
    a: "Pick a green stall on the live floor plan; it's held 15 minutes while you pay, then you get instant confirmation.",
  },
  {
    q: "Which payment methods are supported?",
    a: "UPI, cards and net banking via Razorpay. Advance payment where the organizer allows it.",
  },
  {
    q: "Will I get a GST invoice?",
    a: "Yes — auto-generated after payment with CGST + SGST or IGST from your billing state.",
  },
  {
    q: "How do visitor tickets work?",
    a: "Choose visit day and ticket count, pay online; one QR admits your group and can go to WhatsApp.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. ExpoGenix runs in the browser on laptop, tablet and phone.",
  },
  {
    q: "Can ExpoGenix be set up for my exhibition?",
    a: "Yes. Contact us with your requirements — we'll help set up halls, pricing, sponsors and tickets.",
  },
  {
    q: "Who can use the portal?",
    a: "Organizers, exhibitors and visitors. Each role gets its own login and only the tools they need.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" className="section-y bg-white">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-sub">
            Can't find what you're looking for?{" "}
            <a href="#contact" className="font-semibold text-citrus-600 underline-offset-4 hover:underline">
              Contact our team
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10 grid gap-4 sm:grid-cols-2">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-cream transition duration-300 ${
                  isOpen
                    ? "border-citrus-400/60 shadow-soft"
                    : "border-forest-900/[0.08] hover:border-forest-900/15"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold leading-snug text-forest-900 sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300 ${
                      isOpen
                        ? "rotate-180 bg-citrus-500 text-white"
                        : "bg-forest-50 text-forest-900"
                    }`}
                  >
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </span>
                </button>
                <div
                  className={`grid px-5 transition-all duration-300 ease-out sm:px-6 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-[0.95rem] leading-relaxed text-ink-500 sm:text-base">
                    <span className="block border-t border-forest-900/[0.06] pb-5 pt-3">{f.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}