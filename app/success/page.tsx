import Link from "next/link";
import { CheckCircle2, Download, AlertTriangle } from "lucide-react";
import { getStripe } from "@/lib/stripe";
import { createSignedDownloadUrls } from "@/lib/supabase";
import CPBadge from "@/components/CPBadge";

export const dynamic = "force-dynamic";

type SearchParams = { session_id?: string };

async function getVerifiedSession(sessionId: string | undefined) {
  if (!sessionId) return { verified: false, reason: "missing" as const };

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      return { verified: true as const, session };
    }
    return { verified: false as const, reason: "unpaid" as const };
  } catch (err) {
    console.error("Session verification failed:", err);
    return { verified: false as const, reason: "error" as const };
  }
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const result = await getVerifiedSession(searchParams.session_id);

  return (
    <main className="min-h-screen bg-soft flex items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <CPBadge size={48} />
        </div>

        {result.verified ? (
          <VerifiedContent />
        ) : (
          <UnverifiedContent reason={result.reason} />
        )}
      </div>
    </main>
  );
}

async function VerifiedContent() {
  const downloads = await createSignedDownloadUrls();

  return (
    <div className="bg-white rounded-2xl shadow-card p-8">
      <CheckCircle2 className="mx-auto text-green" size={48} />
      <h1 className="mt-4 font-heading font-extrabold text-navy text-2xl">
        You&apos;re in! Here&apos;s your download.
      </h1>
      <p className="mt-2 text-slate-700">
        Check your email for a receipt with a re-openable link to this page too.
      </p>

      <div className="mt-8 space-y-3">
        {downloads === null ? (
          <div className="rounded-lg border border-amber/30 bg-amber/5 p-4 text-left text-sm text-slate-700">
            {/* TODO: configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to enable real downloads */}
            Downloads aren&apos;t configured yet on this environment. Once
            <code className="mx-1 rounded bg-navy/5 px-1">SUPABASE_URL</code>
            and
            <code className="mx-1 rounded bg-navy/5 px-1">SUPABASE_SERVICE_ROLE_KEY</code>
            are set, your files will appear here as secure, expiring links.
          </div>
        ) : (
          downloads.map((file) => (
            <a
              key={file.label}
              href={file.url ?? undefined}
              aria-disabled={!file.url}
              className={`flex items-center justify-between gap-3 rounded-lg border border-navy/10 p-4 text-left transition ${
                file.url ? "hover:border-amber hover:bg-amber/5" : "opacity-50 pointer-events-none"
              }`}
            >
              <span className="font-heading font-bold text-navy">{file.label}</span>
              <Download className="text-amber shrink-0" size={20} />
            </a>
          ))
        )}
      </div>

      <p className="mt-6 text-xs text-slate-400">
        Download links expire after 24 hours for security — revisit this page any time
        via the link in your receipt email to generate fresh ones.
      </p>
    </div>
  );
}

function UnverifiedContent({ reason }: { reason: "missing" | "unpaid" | "error" }) {
  const message =
    reason === "unpaid"
      ? "We couldn't confirm payment for this order yet."
      : reason === "missing"
      ? "We couldn't find a checkout session for this page."
      : "Something went wrong verifying your purchase.";

  return (
    <div className="bg-white rounded-2xl shadow-card p-8">
      <AlertTriangle className="mx-auto text-amber" size={48} />
      <h1 className="mt-4 font-heading font-extrabold text-navy text-2xl">
        We couldn&apos;t verify your purchase
      </h1>
      <p className="mt-2 text-slate-700">{message}</p>
      <p className="mt-2 text-sm text-slate-500">
        If you just paid, check your email for a receipt with a direct link back to this
        page. If the problem continues, email{" "}
        <a href="mailto:support@cdlpassprep.com" className="text-teal underline">
          support@cdlpassprep.com
        </a>{" "}
        and we&apos;ll sort it out.
      </p>
      <Link href="/" className="mt-6 inline-block cta-button">
        Back to CDLPassPrep
      </Link>
    </div>
  );
}
