import { Zap, Clock, TrendingUp, Smile, ShieldCheck, Layers } from "lucide-react";
import Reveal from "./Reveal.jsx";

const BENEFITS = [
  {
    icon: Clock,
    title: "Sell stalls faster",
    text: "Exhibitors book and pay on their own, any time, without waiting for a call back.",
  },
  {
    icon: Layers,
    title: "No double bookings",
    text: "Live availability and checkout holds mean every stall is sold exactly once.",
  },
  {
    icon: Zap,
    title: "Faster collections",
    text: "Online payments land directly, with receipts and GST invoices generated automatically.",
  },
  {
    icon: Smile,
    title: "Better experience",
    text: "A clean, mobile-friendly portal for exhibitors and quick QR entry for visitors.",
  },
  {
    icon: TrendingUp,
    title: "Smarter decisions",
    text: "Live reports on stall sales, sponsorships and footfall help plan the next edition.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    text: "Role-based logins and Razorpay-secured payments keep data and money safe.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-y">
      <div className="container-x grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:sticky lg:top-28 lg:col-span-2">
          <span className="eyebrow">Benefits</span>
          <h2 className="section-title">
            Why organizers choose <span className="text-citrus-600">ExpoGenix</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Moving your exhibition online isn't just about going paperless. It means more
            stalls sold, less stress for your team and a better event for everyone.
          </p>
          <a href="#contact" className="btn-dark mt-9">
            Talk to our team
          </a>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {BENEFITS.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={(i % 2) * 90}
              className="card p-7 transition duration-300 hover:-translate-y-1 hover:border-citrus-300 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-50 text-forest-700">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
