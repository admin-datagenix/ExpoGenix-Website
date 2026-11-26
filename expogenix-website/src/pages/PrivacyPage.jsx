import { ArrowLeft, Shield } from "lucide-react";
import { SITE } from "../config.js";
import { ExpoGenixLogo } from "../components/BrandName.jsx";

const SECTIONS = [
  {
    title: "Overview",
    body: `${SITE.name} is operated by ${SITE.company}. This page explains how we handle information when you use this marketing website and when you are directed to the live exhibition portal.`,
  },
  {
    title: "Information we collect",
    body:
      "On this site we may receive details you send through the contact form (name, email, phone, organisation and message). On the portal, organisers and users provide account, booking, billing and payment-related data as required to run exhibitions.",
  },
  {
    title: "How we use it",
    body:
      "We use contact enquiries to respond to you and improve our services. Portal data is used to process stall bookings, payments, invoices, sponsorships, visitor tickets and event administration.",
  },
  {
    title: "Sharing & processors",
    body:
      "We do not sell personal data. Payment processing may be handled by third parties such as Razorpay under their own privacy terms. Organisers may receive exhibitor and visitor data needed to run their event.",
  },
  {
    title: "Security & retention",
    body:
      "We apply reasonable technical and organisational measures to protect data. We keep information only as long as needed for operations, legal obligations and dispute resolution.",
  },
  {
    title: "Your choices",
    body: `You may request access, correction or deletion of your data where applicable law allows. Contact us at ${SITE.email} or ${SITE.phone}.`,
  },
  {
    title: "Updates",
    body:
      "We may update this policy from time to time. The current version is always available on this page.",
  },
];

function goHome(e) {
  e.preventDefault();
  window.location.hash = "";
  window.scrollTo(0, 0);
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-forest-900/[0.08] bg-white shadow-soft">
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
          <a
            href="#"
            onClick={goHome}
            className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-forest-900 transition hover:text-citrus-600"
          >
            <ArrowLeft size={18} />
            Back to home
          </a>
          <a href="#top" onClick={goHome} className="flex items-center" aria-label={`${SITE.name} home`}>
            <ExpoGenixLogo size="sm" />
          </a>
          <span className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-500 sm:inline-flex">
            <Shield size={16} className="text-citrus-600" />
            Privacy
          </span>
        </div>
      </header>

      <div className="container-x py-10 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-forest-900 sm:text-4xl">Privacy policy</h1>
          <p className="mt-3 text-ink-500">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-10 space-y-8">
            {SECTIONS.map(({ title, body }) => (
              <section key={title} className="rounded-2xl border border-forest-900/[0.08] bg-white p-6 shadow-soft sm:p-8">
                <h2 className="text-xl font-bold text-forest-900">{title}</h2>
                <p className="mt-3 leading-relaxed text-ink-700">{body}</p>
              </section>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-500">
            Questions?{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-citrus-600 hover:underline">
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}