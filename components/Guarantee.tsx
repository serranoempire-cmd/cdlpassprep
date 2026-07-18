import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-soft pb-16 md:pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border-2 border-green/30 bg-green/5 p-8 md:p-10 text-center">
          <ShieldCheck className="mx-auto text-green" size={40} />
          <h3 className="mt-4 font-heading font-extrabold text-navy text-2xl">
            The 30-Day Money-Back Guarantee
          </h3>
          <p className="mt-4 text-slate-700 text-[17px] leading-relaxed max-w-xl mx-auto">
            Try the guides for 30 days. If you&apos;re unhappy with your purchase for any
            reason, email us and we&apos;ll refund every penny — no forms, no hassle, you keep
            the downloads.
          </p>
          <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto">
            This is a satisfaction guarantee on the study materials, not a guarantee that you
            will pass your CDL exams — results depend on your own study and testing performance.
          </p>
        </div>
      </div>
    </section>
  );
}
