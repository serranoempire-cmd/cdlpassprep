import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 md:py-28">
      <div className="road-texture absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading font-extrabold text-white text-3xl md:text-[40px] leading-tight">
          Your CDL is the last exam standing between you and a $50K+ career.
        </h2>
        <p className="mt-4 text-slate-300 text-lg">
          Study tonight. Test with confidence. Drive for a living.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton label="Get CDLPassPrep — $99" />
        </div>
        <ul className="mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm text-slate-300">
          <li className="flex items-center justify-center gap-1.5">
            <span className="text-green">✓</span> Instant download
          </li>
          <li className="flex items-center justify-center gap-1.5">
            <span className="text-green">✓</span> One-time payment
          </li>
          <li className="flex items-center justify-center gap-1.5">
            <span className="text-green">✓</span> Lifetime access + free updates
          </li>
        </ul>
      </div>
    </section>
  );
}
