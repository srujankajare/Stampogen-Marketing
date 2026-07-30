# Stampogen

QR-based digital stamp loyalty landing page. Next.js 15 (App Router) + Tailwind + shadcn-style primitives + Framer Motion + GSAP + Lucide + React Hook Form.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/` — root layout (fonts) and the single home page
- `components/` — one file per section (hero, two-sides, journey, owner-dashboard, founder-note, testimonials, pricing, cta-waitlist, footer, nav)
- `components/ui/` — small shadcn-style primitives (button, input, card)
- `lib/utils.js` — `cn()` class-merge helper

## Notes

- The stamp-card animation combines Framer Motion (card tilt on hover) with GSAP (the actual "ink thump" on each stamp) — swap either out if you'd rather standardize on one library.
- The waitlist form (`components/cta-waitlist.jsx`) currently just logs to console — wire `onSubmit` up to your backend, a spreadsheet, or a service like Formspree.
- Fonts are loaded via `next/font/google`: Big Shoulders Display (headings), Inter (body), IBM Plex Mono (labels/data), Kalam (handwritten accents/margin notes).
- Copy throughout (founder note, testimonials, margin notes) is placeholder — written in a specific, first-person voice on purpose. Replace with your real story once you have pilot shops; don't round it back to marketing-speak.
