// ─────────────────────────────────────────────────────────────
// Edit this file to change contact details and the link to the live portal.
// ─────────────────────────────────────────────────────────────

const PORTAL = "http://expogenix.datagenix.in";

export const SITE = {
  name: "ExpoGenix",
  tagline: "Smart events. Seamless experiences.",
  portalUrl: PORTAL,
  loginUrl: `${PORTAL}/login`,
  registerUrl: `${PORTAL}/register`,
  company: "Datagenix",
  companyUrl: "https://www.datagenix.in",

  email: "info@datagenix.in",
  phone: "+91 73852 56569",
  address: "Maharashtra, India",

  helpReply: "Reply within 24 hours (Mon – Sat, 9 AM – 7 PM IST).",
  helpHours: "Mon – Sat, 9 AM – 7 PM IST",
  companyWebLabel: "www.datagenix.in",
};

// Where enquiries are sent.
// Option A (recommended): create a free form at https://formspree.io and put
//   the endpoint in a .env file:  VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
// Option B: leave it empty and the form will open the visitor's email app
//   addressed to SITE.email (works with no backend).
export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || "";