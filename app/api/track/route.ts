import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  let body: { event?: string; path?: string; meta?: Record<string, unknown> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!body.event) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Analytics is best-effort — no-op quietly if Supabase isn't configured.
    return NextResponse.json({ ok: true, configured: false });
  }

  const { error } = await supabase.from("events").insert({
    event: body.event,
    path: body.path ?? null,
    meta: body.meta ?? null,
  });

  if (error) {
    console.error("[/api/track] Supabase insert failed:", error.message);
  }

  return NextResponse.json({ ok: true, configured: true });
}
