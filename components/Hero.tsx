import CTAButton from "./CTAButton";
import GuideCover from "./GuideCover";

const FAN_COVERS = [
  { number: 1, title: "General Knowledge" },
  { number: 3, title: "Air Brakes" },
  { number: 6, title: "Hazmat" },
  { number: 2, title: "Pre-Trip Inspection" },
  { number: 5, title: "Road & Driving Test" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="road-texture absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeUp">
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
              <span className="text-green">✓</span> 30-day money-back guarantee
            </li>
          </ul>
        </div>

        <div className="relative h-[380px] md:h-[440px]">
          {FAN_COVERS.map((cover, i) => {
            const offset = i - (FAN_COVERS.length - 1) / 2;
            return (
              <div
                key={cover.number}
                className="absolute w-[160px] md:w-[190px] left-1/2 top-1/2 transition-transform duration-300 hover:-translate-y-2"
                style={{
                  transform: `translate(-50%, -50%) translateX(${offset * 55}px) rotate(${offset * 7}deg)`,
                  zIndex: 10 - Math.abs(offset),
                }}
              >
                <GuideCover number={cover.number} title={cover.title} priority={offset === 0} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
