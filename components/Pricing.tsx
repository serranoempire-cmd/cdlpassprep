import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

const INCLUDED = [
  "All 17 premium guides (500+ pages)",
  "Offline practice quiz game (300 questions)",
  "Printable checklists & pocket cards",
  "Resume templates + hiring company list",
  "Free lifetime updates",
  "Instant download — study in 2 minutes",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-soft py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] leading-tight">
          Everything. One payment. $99.
        </h2>

        <div className="mt-10 rounded-2xl bg-navy p-8 md:p-10 shadow-cta border-2 border-amber/40 text-left">
          <p className="font-heading font-bold text-white text-lg text-center">
            CDLPassPrep Complete Bundle
          </p>

          <div className="mt-4 flex items-baseline justify-center gap-3">
            <span className="text-slate-400 line-through text-xl">$297 value</span>
            <span className="font-heading font-black text-amber text-5xl md:text-6xl">$99</span>
          </div>

          <ul className="mt-8 space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <Check className="text-green shrink-0 mt-0.5" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAButton className="w-full" fullWidthMobile={false} />
            <p className="text-sm text-slate-400 text-center">
              One-time payment. No subscription. All sales are final.
            </p>
          </div>
        </div>

        <p className="mt-6 text-slate-700">
          Less than one hour of a CDL school&apos;s tuition.
        </p>
      </div>
    </section>
  );
}
