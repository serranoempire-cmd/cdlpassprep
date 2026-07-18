const STEPS = [
  "Study the guides",
  "Drill the quiz game",
  "Pass all 3 tests",
  "Start your driving career",
];

export default function Transformation() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-24">
      <div className="road-texture absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-heading font-extrabold text-white text-3xl md:text-[40px] leading-tight max-w-3xl mx-auto">
          From first-time reader to licensed driver — one system, every step.
        </h2>

        <div className="mt-14 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4">
          {STEPS.map((step, i) => (
            <div key={step} className="flex-1 flex md:flex-col items-center gap-4 md:gap-0">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber font-heading font-black text-navy text-xl shadow-cta">
                  {i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block w-full h-0.5 bg-amber/30 mt-7 -mb-7" />
                )}
              </div>
              <p className="text-left md:text-center md:mt-4 font-heading font-bold text-white text-base md:text-lg">
                {step}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-slate-300 text-lg max-w-2xl mx-auto">
          Average first-year truck driver pay in the U.S. is <span className="text-amber font-heading font-bold">$50,000+</span> —
          your $99 investment pays for itself on day one of the job.
        </p>
      </div>
    </section>
  );
}
