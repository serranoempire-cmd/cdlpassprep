import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendWelcomeEmail } from "@/lib/email";

type SubscribeSource = "quiz" | "cheatsheet" | "exit-intent";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limit: 5 requests per IP per 10 minutes. Resets on cold start,
// which is fine for this scale — swap for a real store (Upstash, etc.) if volume grows.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again shortly." }, { status: 429 });
  }

  let body: {
    email?: string;
    source?: SubscribeSource;
    quizScore?: number;
    weakestCategory?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const source = body.source;

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!source || !["quiz", "cheatsheet", "exit-intent"].includes(source)) {
    return NextResponse.json({ error: "Invalid source." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.warn("[/api/subscribe] Supabase not configured — no-op.", { email, source });
    return NextResponse.json({ ok: true, configured: false });
  }

  const { error } = await supabase.from("leads").upsert(
    {
      email,
      source,
      quiz_score: body.quizScore ?? null,
      weakest_category: body.weakestCategory ?? null,
    },
    { onConflict: "email", ignoreDuplicates: false }
  );

  if (error) {
    console.error("[/api/subscribe] Supabase insert failed:", error.message);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  try {
    await sendWelcomeEmail({
      email,
      source,
      quizScore: body.quizScore,
      weakestCategory: body.weakestCategory,
    });
  } catch (err) {
    // Never fail the subscribe request because the welcome email had trouble sending.
    console.error("[/api/subscribe] Welcome email failed:", err);
  }

  return NextResponse.json({ ok: true, configured: true });
}
