# ExpoGenix Website

A static, responsive marketing site for the **ExpoGenix exhibition portal**, built with
React (Vite) and Tailwind CSS.

Sections: Hero · Highlights · About · Features · How it works · Benefits ·
Who it's for · FAQ · Contact form · Footer.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build      # outputs static files to /dist
npm run preview    # preview the build locally
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages,
cPanel, Nginx, etc.).

## Things to edit

| What | Where |
| --- | --- |
| Email, phone, address, portal link | `src/config.js` |
| Feature / benefit / FAQ text | the matching file in `src/components/` |
| Brand colors | `tailwind.config.js` (`ink` and `brand` palettes) |

## Making the contact form send enquiries

The site is static, so the form needs somewhere to send data:

1. **Formspree (recommended):** create a free form at https://formspree.io, then create
   a `.env` file in the project root:

   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/your_form_id
   ```

   Enquiries then arrive in your inbox. Rebuild after changing `.env`.

2. **No setup fallback:** if `VITE_FORM_ENDPOINT` is empty, submitting the form opens the
   visitor's email app with the enquiry pre-filled, addressed to `SITE.email`.

## Content note

The copy describes ExpoGenix as an exhibition portal for organizers, exhibitors and
visitors. Please review it against the real product and adjust features, steps and
FAQ wording where needed.
