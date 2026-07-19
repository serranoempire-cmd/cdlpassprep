import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Terms of Service | CDLPassPrep" };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="July 19, 2026">
      <p>
        These terms govern your purchase and use of CDLPassPrep (&ldquo;the product&rdquo;),
        a digital bundle of study guides and a practice quiz game sold by CDLPassPrep
        (&ldquo;we,&rdquo; &ldquo;us&rdquo;).
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">1. What you&apos;re buying</h2>
      <p>
        CDLPassPrep is a one-time purchase of 17 digital study guides (PDF) plus an
        offline practice quiz game and bonus materials. There is no subscription — you
        pay once and keep access, including free future updates to the guides.
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">2. Personal-use license</h2>
      <p>
        Your purchase grants a personal, non-transferable license to download and use
        the materials for your own CDL study. Reselling, redistributing, or sharing the
        files with others is not permitted. Each PDF is marked &ldquo;for personal use
        only — not for resale.&rdquo;
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">3. No guarantee of exam results</h2>
      <p>
        CDLPassPrep is an independent study aid. We do not control, and cannot
        guarantee, the outcome of any CDL knowledge or skills test administered by your
        state&apos;s licensing agency. Purchase does not guarantee exam passage.
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">4. Refunds</h2>
      <p>
        All sales are final. See our{" "}
        <a href="/refunds" className="text-teal underline">Refund Policy</a> for details.
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">5. Changes to these terms</h2>
      <p>
        We may update these terms as the product evolves. Continued use of the product
        after an update means you accept the revised terms.
      </p>

      <h2 className="font-heading font-bold text-navy text-xl">6. Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:Cdlpassprep@gmail.com" className="text-teal underline">
          Cdlpassprep@gmail.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}
