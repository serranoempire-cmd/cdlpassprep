import { createClient } from "@supabase/supabase-js";

// This client uses the service role key and must ONLY ever be imported from
// server-side code (API routes / server components) — never from client components.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return null;
  }
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

// Private bucket name holding the 17 guides + bonuses.
export const DOWNLOADS_BUCKET = "cdlpassprep-downloads";

// The files buyers get access to after a verified purchase.
export const DOWNLOAD_FILES: { label: string; path: string }[] = [
  { label: "Full Bundle (All 17 Guides + Bonuses, ZIP)", path: "bundle:cdlpassprep-complete-bundle.zip" },
];

const SIGNED_URL_EXPIRY_SECONDS = 60 * 60 * 24; // 24h, per spec §2.1

export async function createSignedDownloadUrls() {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const results = [];
  for (const file of DOWNLOAD_FILES) {
    const { data, error } = await supabase.storage
      .from(DOWNLOADS_BUCKET)
      .createSignedUrl(file.path, SIGNED_URL_EXPIRY_SECONDS);
    if (error || !data) {
      results.push({ label: file.label, url: null, error: error?.message });
    } else {
      results.push({ label: file.label, url: data.signedUrl, error: null });
    }
  }
  return results;
}
