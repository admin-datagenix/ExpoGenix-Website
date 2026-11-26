import {
  ArrowLeft,
  MessageCircle,
  Mail,
  Phone,
  Globe,
  Clock,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { SITE } from "../config.js";
import { ExpoGenixLogo } from "../components/BrandName.jsx";

const TILES = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Globe,
    label: "Website",
    value: SITE.companyWebLabel,
    href: SITE.companyUrl,
    external: true,
  },
  {
    icon: Clock,
    label: "Hours",
    value: SITE.helpHours,
  },
];

function goHome(e) {
  e.preventDefault();
  window.location.hash = "";
  window.scrollTo(0, 0);
}

function goContact(e) {
  e.preventDefault();
  window.location.hash = "";
  window.location.hash = "contact";
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-forest-900/[0.08] bg-white shadow-soft">
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
          <a
            href="#"
            onClick={goHome}
            className="inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-forest-900 transition hover:text-citrus-600"
          >
            <ArrowLeft size={18} />
            Back to home
          </a>
          <a href="#top" onClick={goHome} className="flex items-center" aria-label={`${SITE.name} home`}>
            <ExpoGenixLogo size="sm" />
          </a>
          <span className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-500 sm:inline-flex">
            <MessageCircle size={16} className="text-citrus-600" />
            Help &amp; support
          </span>
        </div>
      </header>

      <div className="container-x py-10 sm:py-12">
        <div className="glow-soft overflow-hidden rounded-[1.75rem] border border-forest-200/80 bg-white p-6 shadow-lift sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 border-b border-forest-200/80 pb-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href={SITE.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-4 py-3 shadow-soft"
              >
                <img
                  src="/datagenix-logo.png"
                  alt={`${SITE.company} logo`}
                  className="h-10 w-auto object-contain sm:h-11"
                  width={160}
                  height={44}
                />
              </a>
              <div>
                <h1 className="text-3xl font-bold text-forest-800 sm:text-4xl">Help</h1>
                <p className="mt-1 text-base text-ink-500">
                  {SITE.name} by {SITE.company}
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-500 lg:text-right">{SITE.helpReply}</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {TILES.map(({ icon: Icon, label, value, href, external }) => (
              <div
                key={label}
                className="rounded-2xl border border-forest-200/80 bg-mint/40 p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-citrus-100 text-citrus-700">
                    <Icon size={18} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink-500">{label}</span>
                </div>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="text-lg font-semibold text-forest-800 transition hover:text-citrus-600"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold leading-snug text-forest-800">{value}</p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-ink-500 sm:text-left">
            For exhibition booking issues, include your event name and exhibitor email when you write to us.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
          <a href="#" onClick={goContact} className="btn-dark sm:min-w-[12rem]">
            Contact us
          </a>
          <a
            href={SITE.portalUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary sm:min-w-[12rem]"
          >
            Open exhibition portal <ArrowUpRight size={18} />
          </a>
          <a
            href={SITE.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline sm:min-w-[12rem]"
          >
            {SITE.companyWebLabel} <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}