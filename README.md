# CDLPassPrep

One-page sales site for the CDLPassPrep digital bundle (17 CDL study guides + offline
quiz game), built with Next.js 14 (App Router) + Tailwind, deployed on Vercel, with
Stripe Checkout for payment and Supabase Storage for signed, expiring downloads.

## Getting started

```bash
npm install
npm run dev
```

The site runs and looks correct with **no environment variables set** — the "Get
Instant Access" buttons will show a friendly error ("Checkout isn't configured yet")
instead of crashing, and the success page will explain that downloads aren't wired up
yet. Fill in the env vars below to make checkout and delivery fully live.

## Environment variables

Create a `.env.local` file (never commit this) with:

```
# Stripe — from https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_live_or_test_...

# Optional: if you create a fixed $99 Price in the Stripe dashboard instead of
# letting the API route build one inline, set this and swap the line_items in
# app/api/checkout/route.ts to use it.
STRIPE_PRICE_ID=price_...

# Supabase — private bucket holding the guide PDFs + quiz game
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...   # service role key — server-side only, never expose to the client

# The deployed site URL (used to build Stripe success/cancel redirect URLs)
NEXT_PUBLIC_SITE_URL=https://cdlpassprep.com
```

On Vercel, add these under Project Settings → Environment Variables.

## Payment flow

1. Visitor clicks any "Get Instant Access — $99" button → `CTAButton` component posts
   to `/api/checkout`.
2. `/api/checkout` (`app/api/checkout/route.ts`) creates a Stripe Checkout Session for
   a single $99 line item and returns the hosted checkout URL.
3. On success, Stripe redirects to `/success?session_id={CHECKOUT_SESSION_ID}`.
4. `/success` (`app/success/page.tsx`) verifies the session server-side via the Stripe
   API (`payment_status === "paid"`) before showing anything — the page is never
   trusted purely from the URL.
5. Once verified, `lib/supabase.ts` generates signed, 24-hour-expiring URLs from a
   **private** Supabase Storage bucket (`cdlpassprep-downloads` by default) and the
   page renders download buttons.
6. Stripe's built-in email receipt goes out automatically. The success page URL
   (containing the session ID) is safe to reuse — Stripe session IDs remain
   retrievable, so the receipt effectively works as a "re-open my downloads" link. Set
   up a Resend-based delivery email instead/in addition if you want a nicer branded
   email — that integration point is intentionally left as a TODO since it needs your
   Resend account and a template decision.

## Uploading the actual files

1. In Supabase, create a **private** Storage bucket named `cdlpassprep-downloads` (or
   update `DOWNLOADS_BUCKET` in `lib/supabase.ts` if you name it differently).
2. Upload the bundle ZIP(s) and update the `path` values in `DOWNLOAD_FILES` in
   `lib/supabase.ts` to match.
3. Never make the bucket public — signed URLs are how buyers get access.

## Assets

Done — real assets, already wired in:
- All 17 guide covers live in `public/covers/guide-01.jpg` … `guide-17.jpg` and render
  via `components/GuideCover.tsx` (`next/image`, used in the Hero fan and the
  What's Inside grid).
- `public/bundle-showcase.jpg` — a composited fan of all 17 real covers, shown in
  `components/WhatsInside.tsx` above the guide grid as visual proof.
- `public/og-image.jpg` (1200×630, cropped from the bundle showcase) — social share
  preview, referenced in `app/layout.tsx`.
- `app/favicon.ico` and `public/apple-touch-icon.png` — generated from the CP badge
  mark (navy circle, amber ring, "CP").

Still marked `/* TODO: replace asset */` in code, since no source material exists yet:
- Inside-page screenshots (4) → `components/ShowDontTell.tsx` (needs real PDF page
  renders, e.g. a stopping-distance infographic, a spoken-script card, an air-brake
  PSI chart, a cheat sheet)
- Quiz game screenshot → `components/WhatsInside.tsx` quiz-game callout band

## Analytics / pixels

Vercel Analytics is not yet wired in — add `@vercel/analytics` and drop `<Analytics />`
into `app/layout.tsx` when ready. Meta Pixel and TikTok Pixel hooks are stubbed as a
comment inside `components/CTAButton.tsx`'s `handleClick` — uncomment and fill in once
ad accounts exist, per the spec.

## Structure

```
app/
  page.tsx              — assembles all sections in order
  layout.tsx             — fonts (Montserrat/Inter via next/font), metadata
  api/checkout/route.ts  — Stripe Checkout Session creation
  success/page.tsx       — server-verified download page
  terms|privacy|refunds/page.tsx — legal pages (LegalLayout shared shell)
components/              — one file per landing-page section, plus shared bits
  (AnnouncementBar, Hero, Pain, Transformation, WhatsInside, ShowDontTell,
   WhyItWorks, SocialProof, Pricing, Guarantee, FAQ, FinalCTA, Footer,
   StickyCTA, CTAButton, CPBadge, GuideCover, LegalLayout)
lib/
  stripe.ts    — Stripe client + product/price constants
  supabase.ts  — Supabase admin client + signed URL generation
```

## Notes

- No blog, no account system, no nav menu — single scrolling sales page by design.
- Sticky mobile CTA bar appears after 50% scroll (`components/StickyCTA.tsx`), hidden
  on desktop (`md:hidden`).
- FAQ accordion is keyboard-navigable with proper `aria-expanded`/`aria-controls`.
- No fabricated reviews, stats, or countdown timers anywhere — per spec, trust is the
  conversion strategy. The social-proof section uses a founder's note in v1, with a
  commented-out testimonial grid ready to activate once real reviews exist.
