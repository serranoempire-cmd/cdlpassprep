"use client";

import { useState } from "react";
import { PRICE_DISPLAY } from "@/lib/pricing";
import { track } from "@/lib/track";

type CTAButtonProps = {
  label?: string;
  className?: string;
  fullWidthMobile?: boolean;
  location?: string;
};

export default function CTAButton({
  label,
  className = "",
  fullWidthMobile = true,
  location = "unknown",
}: CTAButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const displayLabel = label ?? `Get Instant Access — $${PRICE_DISPLAY}`;

  async function handleClick() {
    setLoading(true);
    setError(null);
    track("checkout_click", { location });

    // Analytics event hook — wire up Meta Pixel / TikTok pixel here once ad accounts exist.
    // Example: window.fbq?.('track', 'InitiateCheckout');

    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className={fullWidthMobile ? "w-full sm:w-auto" : ""}>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`cta-button ${fullWidthMobile ? "w-full sm:w-auto" : ""} disabled:opacity-70 disabled:cursor-wait ${className}`}
      >
        {loading ? "Redirecting to checkout…" : displayLabel}
      </button>
      {error && <p className="mt-2 text-sm text-red">{error}</p>}
    </div>
  );
}
