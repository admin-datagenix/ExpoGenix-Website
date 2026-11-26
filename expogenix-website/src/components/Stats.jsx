import { Timer, CreditCard, FileText, QrCode } from "lucide-react";
import Reveal from "./Reveal.jsx";

const ITEMS = [
  { icon: Timer, value: "15 min", label: "Stall hold during checkout" },
  { icon: CreditCard, value: "UPI · Cards", label: "Net banking via Razorpay" },
  { icon: FileText, value: "Instant", label: "GST invoice & confirmation" },
  { icon: QrCode, value: "QR tickets", label: "Delivered on WhatsApp" },
];

export default function Stats() {
  return (
    <section aria-label="Highlights" className="relative z-10 -mt-10 pb-2">
      <div className="container-x">
        <Reveal className="grid gap-px overflow-hidden rounded-3xl border border-forest-900/[0.08] bg-forest-100 shadow-lift sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 bg-white p-6 sm:p-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach/70 text-citrus-700">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-display text-xl font-bold text-forest-900">{value}</p>
                <p className="text-sm text-ink-500">{label}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
