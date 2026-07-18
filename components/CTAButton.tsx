"use client";

import { useState } from "react";

type CTAButtonProps = {
  label?: string;
  className?: string;
  fullWidthMobile?: boolean;
};

export default function CTAButton({
  label = "Get Instant Access — $99",
  className = "",
  fullWidthMobile = true,
}: CTAButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);

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
        {loading ? "Redirecting to checkout…" : label}
      </button>
      {error && <p className="mt-2 text-sm text-red">{error}</p>}
    </div>
  );
}
