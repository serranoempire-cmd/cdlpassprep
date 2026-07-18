export default function SocialProof() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading font-extrabold text-white text-3xl md:text-[40px] leading-tight">
          Drivers are passing with this.
        </h2>

        {/*
          v1 honest approach: no fabricated reviews. Founder's note stands in
          until real testimonials are available — see TestimonialGrid below,
          built and ready, commented out until then.
        */}
        <div className="mt-12 bg-navy-deep rounded-2xl p-8 md:p-10 text-left border border-amber/20">
          <p className="text-slate-300 text-lg leading-relaxed italic">
            &ldquo;I built CDLPassPrep after watching too many good people fail a test they
            could&apos;ve passed with the right materials. The DMV manual isn&apos;t written for
            real people — it&apos;s written by a committee. I rewrote all of it in plain English,
            added the scripts and cheat sheets I wish someone had handed me, and put it
            together into one system. This is that system.&rdquo;
          </p>
          <p className="mt-6 font-heading font-bold text-white">— Tito, Founder</p>
        </div>

        {/*
        <TestimonialGrid testimonials={realTestimonials} />
        // Activate once 2–3 real reviews are collected. Component intentionally
        // not built until copy is real — do not fabricate placeholder quotes here.
        */}
      </div>
    </section>
  );
}
