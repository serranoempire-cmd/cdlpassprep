"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { track } from "@/lib/track";

const SESSION_KEY = "cdlpp_exit_intent_shown";

export default function ExitIntentModal() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Desktop only — skip entirely on small/touch viewports.
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY > 20) return;
      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(true);
      document.removeEventListener("mouseleave", handleMouseLeave);
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit-intent" }),
      });
      if (res.ok) {
        track("email_submitted", { source: "exit-intent" });
        setDone(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 px-6">
      <div className="relative bg-white rounded-2xl shadow-card max-w-md w-full p-8 text-center">
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute right-4 top-4 text-slate-400 hover:text-navy"
        >
          <X size={20} />
        </button>

        {done ? (
          <>
            <h3 className="font-heading font-extrabold text-navy text-xl">You&apos;re in!</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Check your email for the free Air Brakes cheat sheet.
            </p>
          </>
        ) : (
          <>
            <h3 className="font-heading font-extrabold text-navy text-xl">
              Before you go —
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              See if you&apos;d pass today. Free 20-question practice test, instant results.
            </p>
            <a href="/quiz" className="cta-button mt-5 inline-block w-full">
              Take the Free Practice Test
            </a>

            <p className="mt-5 text-slate-400 text-xs">
              or get the free Air Brakes cheat sheet
            </p>
            <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-lg border border-navy/15 px-3 py-2 text-sm text-navy"
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white whitespace-nowrap"
              >
                {submitting ? "…" : "Send it"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
