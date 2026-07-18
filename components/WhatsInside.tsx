import Image from "next/image";
import GuideCover from "./GuideCover";
import CTAButton from "./CTAButton";

type Guide = { number: number; title: string; benefit: string; pages: string };

const GROUPS: { heading: string; guides: Guide[] }[] = [
  {
    heading: "Pass the Tests (Guides 1–8)",
    guides: [
      { number: 1, title: "General Knowledge", benefit: "The core exam, explained plainly.", pages: "49 pages" },
      { number: 2, title: "Pre-Trip Inspection", benefit: "Full spoken script included.", pages: "full spoken script included" },
      { number: 3, title: "Air Brakes", benefit: "The PSI numbers the test asks for.", pages: "38 pages" },
      { number: 4, title: "Combination Vehicles", benefit: "Coupling, hitching, and handling.", pages: "34 pages" },
      { number: 5, title: "Road & Driving Test", benefit: "What examiners actually watch for.", pages: "31 pages" },
      { number: 6, title: "Hazmat", benefit: "Endorsement rules made simple.", pages: "42 pages" },
      { number: 7, title: "Tanker + Doubles/Triples", benefit: "Both endorsements in one guide.", pages: "36 pages" },
      { number: 8, title: "Passenger + School Bus", benefit: "Both endorsements in one guide.", pages: "33 pages" },
    ],
  },
  {
    heading: "Land the Job (9–11)",
    guides: [
      { number: 9, title: "Resume Templates", benefit: "Ready-to-use CDL resume formats.", pages: "12 pages" },
      { number: 10, title: "Companies That Hire New Drivers", benefit: "Where to apply first.", pages: "18 pages" },
      { number: 11, title: "First Week Survival", benefit: "What nobody tells new drivers.", pages: "22 pages" },
    ],
  },
  {
    heading: "Extra Edge (12–17)",
    guides: [
      { number: 12, title: "Test-Day Confidence", benefit: "Calm nerves, walk in ready.", pages: "14 pages" },
      { number: 13, title: "Trucking Glossary", benefit: "Every term you'll hear on the job.", pages: "16 pages" },
      { number: 14, title: "State-by-State Differences", benefit: "What changes where you test.", pages: "20 pages" },
      { number: 15, title: "Common Test Failures", benefit: "The mistakes that fail people most.", pages: "15 pages" },
      { number: 16, title: "English Proficiency Prep", benefit: "Built for ESL drivers.", pages: "19 pages" },
      { number: 17, title: "Printable Checklists", benefit: "Pocket cards for test day.", pages: "24 pages" },
    ],
  },
];

export default function WhatsInside() {
  return (
    <section className="bg-soft py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="kicker">What&apos;s Inside</span>
          <h2 className="mt-4 font-heading font-extrabold text-navy text-3xl md:text-[40px] leading-tight">
            17 guides. Every test. Every step of the journey.
          </h2>
        </div>

        <div className="relative mt-10 w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-card">
          <Image
            src="/bundle-showcase.jpg"
            alt="All 17 CDLPassPrep study guide covers fanned out: General Knowledge, Pre-Trip Inspection, Air Brakes, Combination Vehicles, Road & Driving Test, Hazmat, Tanker & Doubles/Triples, Passenger & School Bus, Trucking Resumes, Who's Hiring New Drivers, First Week Survival, Test-Day Confidence, Trucking Terms & Glossary, State-by-State Differences, Why People Fail & How You Won't, English for the Road, and Printable Checklists"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-contain"
          />
        </div>

        {GROUPS.map((group) => (
          <div key={group.heading} className="mt-14">
            <h3 className="font-heading font-bold text-navy text-xl mb-6">{group.heading}</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.guides.map((guide) => (
                <div key={guide.number} className="bg-white rounded-xl shadow-card overflow-hidden">
                  <div className="p-3">
                    <GuideCover number={guide.number} title={guide.title} />
                  </div>
                  <div className="px-4 pb-4">
                    <p className="text-slate-700 text-sm leading-snug">{guide.benefit}</p>
                    <span className="mt-2 inline-block text-xs font-heading font-bold text-teal">
                      {guide.pages}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quiz game callout band */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-navy p-8 md:p-12">
          <div className="road-texture absolute inset-0" />
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden border border-amber/20 relative">
              <Image
                src="/quiz-game-screenshot.jpg"
                alt="CDLPassPrep offline practice quiz game"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-heading font-extrabold text-amber uppercase tracking-wide text-sm">Plus</p>
              <p className="mt-2 font-heading font-bold text-white text-xl md:text-2xl leading-snug">
                The Offline Practice Quiz Game — 300 exam-style questions, works without
                internet, drills you until the answers are automatic.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
