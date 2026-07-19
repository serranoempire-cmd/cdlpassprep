import { NextResponse } from "next/server";
import { getStripe, PRODUCT_NAME, PRICE_USD_CENTS } from "@/lib/stripe";

export async function POST() {
  try {
    const stripe = getStripe();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    // If STRIPE_PRICE_ID is set (a fixed Price created in the Stripe dashboard), use it —
    // this is what lets the owner A/B or change price via env vars alone. Otherwise fall
    // back to building the line item inline from PRICE_USD_CENTS.
    const lineItems = process.env.STRIPE_PRICE_ID
      ? [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }]
      : [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: PRODUCT_NAME,
                description:
                  "17 premium CDL study guides (PDF) + offline practice quiz game + bonuses. Instant download.",
              },
              unit_amount: PRICE_USD_CENTS,
            },
            quantity: 1,
          },
        ];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout session creation failed:", err);
    const message =
      err instanceof Error && err.message.includes("STRIPE_SECRET_KEY")
        ? "Checkout isn't configured yet. Add STRIPE_SECRET_KEY to your environment."
        : "We couldn't start checkout. Please try again in a moment.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
