import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendDripEmail, DRIP_SCHEDULE, type DripEmailKey } from "@/lib/email";

export const dynamic = "force-dynamic";

/**
 * Runs daily via Vercel Cron. For each lead, finds the drip email matching how many
 * days since signup, skips leads that are unsubscribed or already got that email
 * (tracked in lead_emails), and sends the rest.
 */
export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const expected = process.env.CRON_SECRET ? `Bearer ${process.env.CRON_SECRET}` : null;
  if (!expected || auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.warn("[/api/cron/drip] Supabase not configured — no-op.");
    return NextResponse.json({ ok: true, sent: 0, configured: false });
  }

  const { data: leads, error } = await supabase
    .from("leads")
    .select("id, email, created_at, unsubscribed")
    .eq("unsubscribed", false);

  if (error) {
    console.error("[/api/cron/drip] Failed to load leads:", error.message);
    return NextResponse.json({ error: "Failed to load leads." }, { status: 500 });
  }

  let sentCount = 0;
  const now = Date.now();

  for (const lead of leads || []) {
    const ageDays = Math.floor((now - new Date(lead.created_at).getTime()) / (1000 * 60 * 60 * 24));
    const due = DRIP_SCHEDULE.find((d) => d.dayOffset === ageDays);
    if (!due) continue;

    const { data: already } = await supabase
      .from("lead_emails")
      .select("id")
      .eq("lead_id", lead.id)
      .eq("email_key", due.key)
      .maybeSingle();

    if (already) continue;

    try {
      await sendDripEmail(lead.email, due.key as DripEmailKey);
      await supabase.from("lead_emails").insert({ lead_id: lead.id, email_key: due.key });
      sentCount++;
    } catch (err) {
      console.error(`[/api/cron/drip] Failed to send ${due.key} to ${lead.email}:`, err);
    }
  }

  return NextResponse.json({ ok: true, sent: sentCount, configured: true });
}
