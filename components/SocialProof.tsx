import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function SocialProof() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div
        className={`mx-auto px-6 text-center ${
          testimonials.length === 0 ? "max-w-3xl" : "max-w-6xl"
        }`}
      >
        <h2 className="font-heading font-extrabold text-white text-3xl md:text-[40px] leading-tight">
          Drivers are passing with this.
        </h2>

        {testimonials.length === 0 ? (
          <div className="mt-12 bg-navy-deep rounded-2xl p-8 md:p-10 text-left border border-amber/20">
            <p className="text-slate-300 text-lg leading-relaxed italic">
              &ldquo;I built CDLPassPrep after watching too many good people fail a test they
              could&apos;ve passed with the right materials. The DMV manual isn&apos;t written for
              real people — it&apos;s written by a committee. I rewrote all of it in plain English,
              added the scripts and cheat sheets I wish someone had handed me, and put it
              together into one system. This is that system.&rdquo;
            </p>
            <p className="mt-6 font-heading font-bold text-white">— Founder</p>
            <p className="mt-4 text-slate-400 text-sm">
              CDLPassPrep launched in 2026. Early-driver reviews are coming in — check back,
              or be one of the first and tell us how it went.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-3 text-left">
            {testimonials.map((t) => (
              <div
                key={t.name + t.text.slice(0, 10)}
                className="bg-navy-deep rounded-2xl p-6 border border-amber/20"
              >
                <Quote className="text-amber" size={24} />
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">{t.text}</p>
                <p className="mt-4 font-heading font-bold text-white text-sm">
                  {t.name}
                  {t.location ? (
                    <span className="text-slate-400 font-normal"> · {t.location}</span>
                  ) : null}
                </p>
                {t.result && <p className="text-teal text-xs mt-1">{t.result}</p>}
                {t.verified && <p className="text-green text-xs mt-1">✓ Verified buyer</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
