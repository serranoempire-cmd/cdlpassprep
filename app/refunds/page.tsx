import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Refund Policy | CDLPassPrep" };

export default function RefundsPage() {
  return (
    <LegalLayout title="Refund Policy" updated="July 19, 2026">
      <h2 className="font-heading font-bold text-navy text-xl">
        The 30-Day Pass-Prep Guarantee
      </h2>
      <p>
        Study the guides for 30 days. If you don&apos;t feel more prepared for your CDL
        exams — or you&apos;re unhappy for any reason — email{" "}
        <a href="mailto:Cdlpassprep@gmail.com" className="text-teal underline">
          Cdlpassprep@gmail.com
        </a>{" "}
        within 30 days of purchase and we&apos;ll refund every penny.
      </p>
      <p>
        No forms, no hassle, and you keep the downloads. We just ask that you let us know
        what didn&apos;t work — it helps us make the guides better.
      </p>
      <p>
        Refunds are issued to the original payment method and typically appear within
        5–10 business days, depending on your bank or card issuer.
      </p>
    </LegalLayout>
  );
}
