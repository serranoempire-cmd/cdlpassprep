import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy min-h-[820px] md:min-h-[760px] flex items-center">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-right-bottom"
      />
      <div className="absolute inset-0 bg-navy/70 md:bg-gradient-to-r md:from-navy md:via-navy/60 md:to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-16 w-full">
        <div className="animate-fadeUp max-w-xl">
          <span className="kicker">The Complete CDL Study System</span>
          <h1 className="mt-4 font-heading font-black text-white leading-[1.05] text-[44px] md:text-[56px]">
            Pass Your CDL Test. Land the Job. Drive With Confidence.
          </h1>
          <p className="mt-6 text-slate-300 text-[17px] md:text-lg leading-relaxed max-w-xl">
            17 premium study guides + a practice quiz game that turn the overwhelming DMV
            manual into plain English — everything you need from your first page of studying
            to your first week on the job.
          </p>
          <div className="mt-8">
            <CTAButton />
          </div>
          <ul className="mt-5 flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-slate-300">
            <li className="flex items-center gap-1.5">
              <span className="text-green">✓</span> Instant download
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-green">✓</span> One-time payment
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-green">✓</span> Lifetime access + free updates
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
