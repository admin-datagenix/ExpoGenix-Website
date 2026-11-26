import {
  Map as MapIcon,
  Timer,
  CreditCard,
  FileText,
  Award,
  QrCode,
  LayoutDashboard,
  BarChart3,
} from "lucide-react";
import Reveal from "./Reveal.jsx";

const FEATURES = [
  {
    icon: MapIcon,
    title: "Live floor plan",
    text: "Pick a stall on the map — green means open.",
  },
  {
    icon: Timer,
    title: "Checkout stall hold",
    text: "15-minute lock so no one grabs your stall.",
  },
  {
    icon: CreditCard,
    title: "Secure online payment",
    text: "UPI, cards & net banking via Razorpay.",
  },
  {
    icon: FileText,
    title: "Instant GST invoice",
    text: "Confirmation + GST bill right after payment.",
  },
  {
    icon: Award,
    title: "Sponsorship packages",
    text: "Tiered sponsors — slots update live.",
  },
  {
    icon: QrCode,
    title: "Visitor e-tickets",
    text: "Day tickets · one QR for your group.",
  },
  {
    icon: LayoutDashboard,
    title: "Exhibitor dashboard",
    text: "Bookings, invoices & guest passes in one place.",
  },
  {
    icon: BarChart3,
    title: "Organizer admin & reports",
    text: "Stall sales, collections & tickets live.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-y relative bg-white">
      <div className="mx-auto w-full max-w-[90rem] px-3 sm:px-4 lg:px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Features</span>
          <h2 className="section-title">Everything an exhibition needs, built in</h2>
          <p className="section-sub">Stalls, payments, sponsors and tickets — one platform.</p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="article"
              key={title}
              delay={(i % 4) * 80}
              className="group relative overflow-hidden rounded-3xl border border-forest-900/[0.08] bg-cream p-6 transition duration-300 hover:-translate-y-1 hover:border-citrus-300 hover:bg-white hover:shadow-lift sm:p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-900 text-citrus-400 transition duration-300 group-hover:bg-citrus-500 group-hover:text-forest-950">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-bold leading-snug">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-700 sm:text-[1.05rem]">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}