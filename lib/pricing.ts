// Single source of truth for the on-page display price. Change
// NEXT_PUBLIC_PRICE_DISPLAY in your environment (e.g. to test a $59 launch
// price) without touching code — see README for the matching Stripe price setup.
export const PRICE_DISPLAY = process.env.NEXT_PUBLIC_PRICE_DISPLAY || "99";
