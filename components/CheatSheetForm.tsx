"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { track } from "@/lib/track";

export default function CheatSheetForm({ align = "center" }: { align?: "center" | "left" }) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "cheatsheet" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      track("email_submitted", { source: "cheatsheet" });
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <a
        href="/downloads/airbrakes-cheat-sheet.pdf"
        download
        className="cta-button inline-flex items-center gap-2"
      >
        <Download size={20} />
        Download the Cheat Sheet
      </a>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-sm ${align === "center" ? "mx-auto" : ""}`}
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="flex-1 rounded-lg border border-navy/15 px-4 py-3 text-navy"
        />
        <button type="submit" disabled={submitting} className="cta-button whitespace-nowrap">
          {submitting ? "Sending…" : "Get It Free"}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red">{error}</p>}
    </form>
  );
}
