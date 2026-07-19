"use client";

export type TrackEvent =
  | "quiz_start"
  | "quiz_complete"
  | "email_submitted"
  | "checkout_click"
  | "article_view";

/**
 * Fires a lightweight, no-PII funnel event to /api/track. No-ops silently on failure —
 * analytics should never break the actual user flow.
 */
export function track(event: TrackEvent, meta?: Record<string, unknown>) {
  try {
    const path = typeof window !== "undefined" ? window.location.pathname : undefined;
    const body = JSON.stringify({ event, path, meta });
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/track", blob);
      return;
    }
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Swallow — analytics must never break the app.
  }
}
