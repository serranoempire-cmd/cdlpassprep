import Stripe from "stripe";

// Throws only when a checkout is actually attempted without STRIPE_SECRET_KEY set —
// it's safe to build/deploy without one, so the rest of the site still works.
let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to your environment to enable checkout."
    );
  }
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-06-24.dahlia",
    });
  }
  return stripeClient;
}

export const PRODUCT_NAME = "CDLPassPrep Complete Bundle";
export const PRICE_USD_CENTS = 9900; // $99.00
