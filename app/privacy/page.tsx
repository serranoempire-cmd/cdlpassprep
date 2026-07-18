import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Privacy Policy | CDLPassPrep" };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 18, 2026">
      <p>
        This policy explains what information CDLPassPrep collects when you visit this
        site or make a purchase, and how it&apos;s used.
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">1. Information we collect</h2>
      <p>
        When you buy CDLPassPrep, payment is processed by Stripe. We receive your name,
        email address, and confirmation that payment succeeded — we do not see or store
        your full card details; Stripe handles that securely.
      </p>
      <p>
        We use basic site analytics (Vercel Analytics) to understand traffic and which
        sections of the page lead to purchases. This data is aggregated and not tied to
        your identity.
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">2. How we use your information</h2>
      <p>
        We use your email to send your receipt and download link, and to respond if you
        contact support. We don&apos;t sell your information to third parties.
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">3. Download links</h2>
      <p>
        After a verified purchase, we generate a temporary, expiring link to your files.
        These links are private and not publicly accessible.
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">4. Your choices</h2>
      <p>
        To request deletion of your purchase records, email{" "}
        <a href="mailto:support@cdlpassprep.com" className="text-teal underline">
          support@cdlpassprep.com
        </a>
        .
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">5. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;last updated&rdquo; date
        above reflects the most recent revision.
      </p>
    </LegalLayout>
  );
}
