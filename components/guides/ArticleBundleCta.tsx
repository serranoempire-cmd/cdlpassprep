import CTAButton from "@/components/CTAButton";
import { PRICE_DISPLAY } from "@/lib/pricing";

export default function ArticleBundleCta() {
  return (
    <div className="not-prose mt-12 rounded-2xl bg-navy-deep p-8 text-center">
      <p className="font-heading font-bold text-white text-xl">
        17 complete guides. One payment. Everything you need to pass.
      </p>
      <p className="mt-2 text-slate-300 text-sm">
        General Knowledge, Air Brakes, Combination Vehicles, and 14 more — plus the
        practice quiz trainer, checklists, and job-search extras.
      </p>
      <div className="mt-5 flex justify-center">
        <CTAButton label={`Get the Full Bundle — $${PRICE_DISPLAY}`} location="article" />
      </div>
    </div>
  );
}
