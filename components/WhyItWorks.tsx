import { Languages, ShieldCheck, ClipboardCheck, Mic, Briefcase, Infinity as InfinityIcon } from "lucide-react";

const FEATURES = [
  {
    icon: Languages,
    title: "Plain English",
    body: "Written at a level anyone can read, including ESL drivers.",
  },
  {
    icon: ShieldCheck,
    title: "National standard",
    body: "Built on the AAMVA model manual + FMCSA regs your state's test comes from.",
  },
  {
    icon: ClipboardCheck,
    title: "Memorize-This boxes",
    body: "The exact numbers the test asks, impossible to miss.",
  },
  {
    icon: Mic,
    title: "Complete spoken scripts",
    body: "Word-for-word pre-trip script you can rehearse tonight.",
  },
  {
    icon: Briefcase,
    title: "Beyond the test",
    body: "Resumes, hiring companies, first-week survival. Nobody else includes this.",
  },
  {
    icon: InfinityIcon,
    title: "Yours forever",
    body: "Download once, keep forever, free updates.",
  },
];

export default function WhyItWorks() {
  return (
    <section className="bg-soft py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[40px] leading-tight">
            Built the way people actually learn.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-white rounded-xl p-6 shadow-card">
              <Icon className="text-teal" size={28} />
              <h3 className="mt-4 font-heading font-bold text-navy text-lg">{title}</h3>
              <p className="mt-2 text-slate-700 text-[15px] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
