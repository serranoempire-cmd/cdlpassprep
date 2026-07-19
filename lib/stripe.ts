import Stripe from "stripe";
import { PRICE_DISPLAY } from "./pricing";

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
// Derived from NEXT_PUBLIC_PRICE_DISPLAY so the checkout amount always matches
// what's shown on the page. Falls back to $99 if the env var is missing/invalid.
export const PRICE_USD_CENTS = Math.round((parseFloat(PRICE_DISPLAY) || 99) * 100);
