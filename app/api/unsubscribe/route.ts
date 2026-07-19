import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { verifyUnsubscribeToken } from "@/lib/email";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  const token = req.nextUrl.searchParams.get("token");

  if (!email || !token || !verifyUnsubscribeToken(email, token)) {
    return new NextResponse(renderPage("This unsubscribe link is invalid or expired."), {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase
      .from("leads")
      .update({ unsubscribed: true })
      .eq("email", email.toLowerCase());
    if (error) {
      console.error("[/api/unsubscribe] Supabase update failed:", error.message);
    }
  }

  return new NextResponse(renderPage("You're unsubscribed. You won't get any more emails from us."), {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
}

function renderPage(message: string): string {
  return `<!doctype html>
<html>
  <head><meta charset="utf-8" /><title>Unsubscribed | CDLPassPrep</title></head>
  <body style="font-family:-apple-system,sans-serif;background:#F8F9FB;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;">
    <div style="max-width:420px;text-align:center;background:#fff;padding:40px;border-radius:16px;">
      <h1 style="color:#16233A;font-size:20px;">${message}</h1>
      <p><a href="https://cdlpassprep.com" style="color:#0EA5E9;">Back to CDLPassPrep.com</a></p>
    </div>
  </body>
</html>`;
}
