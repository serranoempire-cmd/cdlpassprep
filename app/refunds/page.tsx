import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Refund Policy | CDLPassPrep" };

export default function RefundsPage() {
  return (
    <LegalLayout title="Refund Policy" updated="July 19, 2026">
      <h2 className="font-heading font-bold text-navy text-xl">All Sales Are Final</h2>
      <p>
        CDLPassPrep guides and the practice quiz trainer are digital products delivered
        instantly upon purchase. Because of this instant, irrevocable access, we do not
        offer refunds once an order is complete.
      </p>
      <p>
        Before buying, please review the guide list and What&apos;s Inside section on the
        homepage so you know exactly what you&apos;re getting.
      </p>
      <p>
        Having trouble with a download or a technical issue? Email{" "}
        <a href="mailto:Cdlpassprep@gmail.com" className="text-teal underline">
          Cdlpassprep@gmail.com
        </a>{" "}
        and we&apos;ll help sort it out.
      </p>
      <p>
        If a charge was made in error or without authorization, contact us first — we&apos;d
        rather resolve it directly with you than through a card dispute. Refunds required by
        applicable law will of course be honored.
      </p>
    </LegalLayout>
  );
}
