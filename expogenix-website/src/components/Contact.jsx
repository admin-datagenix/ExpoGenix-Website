import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { SITE, FORM_ENDPOINT } from "../config.js";
import Reveal from "./Reveal.jsx";

const EMPTY = { name: "", email: "", phone: "", organization: "", interest: "Organizing an exhibition", message: "" };

const INTERESTS = [
  "Organizing an exhibition",
  "Booking a stall",
  "Sponsorship",
  "Visitor tickets",
  "Something else",
];

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Please enter a valid email";
  if (v.phone && !/^[0-9+()\-\s]{7,16}$/.test(v.phone))
    e.phone = "Please enter a valid phone number";
  if (v.message.trim().length < 10)
    e.message = "Please tell us a little more (min. 10 characters)";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    // No endpoint configured → open the visitor's email app
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`ExpoGenix enquiry from ${values.name}`);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || "-"}\nOrganization: ${
          values.organization || "-"
        }\nInterested in: ${values.interest}\n\n${values.message}`
      );
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      setValues(EMPTY);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const field =
    "mt-2 w-full rounded-xl border bg-cream px-4 py-3 text-[0.95rem] text-forest-900 outline-none transition placeholder:text-ink-500/60 focus:border-citrus-500 focus:bg-white focus:ring-4 focus:ring-citrus-500/15";
  const border = (k) => (errors[k] ? "border-red-400" : "border-forest-900/10");
  const label = "text-sm font-medium text-forest-900";
  const err = "mt-1.5 text-xs text-red-600";

  return (
    <section id="contact" className="section-y relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-citrus-100/80 blur-[100px]"
        aria-hidden
      />

      <div className="container-x relative grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <span className="eyebrow">Contact us</span>
          <h2 className="section-title">Let's power your next exhibition</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Want to run your exhibition on {SITE.name}, or need help with a booking? Send
            us an enquiry and we'll get back to you shortly.
          </p>

          <ul className="mt-12 space-y-4">
            {[
              { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: SITE.address },
            ].map(({ icon: Icon, label: l, value, href }) => (
              <li
                key={l}
                className="flex items-center gap-4 rounded-2xl border border-forest-200/80 bg-mint/50 p-4"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-citrus-500 text-white">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink-500">{l}</p>
                  {href ? (
                    <a href={href} className="font-medium text-forest-800 transition hover:text-citrus-600">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-forest-800">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="rounded-[1.75rem] bg-white p-6 shadow-lift sm:p-10 lg:col-span-3">
          {status === "success" ? (
            <div className="grid min-h-[26rem] place-items-center text-center">
              <div>
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest-100 text-forest-700">
                  <CheckCircle2 size={34} />
                </span>
                <h3 className="mt-6 text-2xl font-bold">Thank you!</h3>
                <p className="mx-auto mt-2 max-w-sm text-ink-500">
                  Your enquiry is on its way. Our team will reach out to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-citrus-600 hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold">Send an enquiry</h3>
                <p className="mt-1 text-sm text-ink-500">We usually reply within one business day.</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={label}>Full name *</label>
                  <input id="name" name="name" value={values.name} onChange={onChange} placeholder="Your name" className={`${field} ${border("name")}`} />
                  {errors.name && <p className={err}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={label}>Email *</label>
                  <input id="email" name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" className={`${field} ${border("email")}`} />
                  {errors.email && <p className={err}>{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className={label}>Mobile number</label>
                  <input id="phone" name="phone" value={values.phone} onChange={onChange} placeholder="+91 …" className={`${field} ${border("phone")}`} />
                  {errors.phone && <p className={err}>{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="organization" className={label}>Company / event</label>
                  <input id="organization" name="organization" value={values.organization} onChange={onChange} placeholder="Company or exhibition name" className={`${field} ${border("organization")}`} />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className={label}>I'm interested in</label>
                <select id="interest" name="interest" value={values.interest} onChange={onChange} className={`${field} ${border("interest")} cursor-pointer`}>
                  {INTERESTS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={label}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  placeholder="Tell us about your exhibition and what you need…"
                  className={`${field} resize-none ${border("message")}`}
                />
                {errors.message && <p className={err}>{errors.message}</p>}
              </div>

              {status === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  Something went wrong while sending. Please try again or email us directly at {SITE.email}.
                </p>
              )}

              <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send enquiry <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
