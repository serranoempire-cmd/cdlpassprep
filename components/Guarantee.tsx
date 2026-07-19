import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-soft pb-16 md:pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border-2 border-green/30 bg-green/5 p-8 md:p-10 text-center">
          <ShieldCheck className="mx-auto text-green" size={40} />
          <h3 className="mt-4 font-heading font-extrabold text-navy text-2xl">
            The 30-Day Pass-Prep Guarantee
          </h3>
          <p className="mt-4 text-slate-700 text-[17px] leading-relaxed max-w-xl mx-auto">
            If you study the guides and don&apos;t feel more prepared, email us within 30
            days of purchase for a full refund. No forms, no hassle.
          </p>
          <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto">
            See our{" "}
            <a href="/refunds" className="text-teal underline">
              Refund Policy
            </a>{" "}
            for details. This isn&apos;t a guarantee that you will pass your CDL exams —
            results depend on your own study and testing performance.
          </p>
        </div>
      </div>
    </section>
  );
}
