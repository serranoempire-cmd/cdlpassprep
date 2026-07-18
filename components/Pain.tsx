import { BookX, HelpCircle, Zap } from "lucide-react";

const PAINS = [
  { icon: BookX, text: "You read the manual and remember none of it." },
  { icon: HelpCircle, text: "Practice tests ask questions the manual never explained." },
  { icon: Zap, text: "Test day nerves erase everything you studied." },
];

export default function Pain() {
  return (
    <section className="bg-soft py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="kicker">Sound Familiar?</span>
        <h2 className="mt-4 font-heading font-extrabold text-navy text-3xl md:text-[40px] leading-tight max-w-3xl mx-auto">
          The CDL manual is 180 pages of government writing. No wonder people fail.
        </h2>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {PAINS.map(({ icon: Icon, text }) => (
            <div key={text} className="bg-white rounded-xl p-6 shadow-card text-left">
              <Icon className="text-red" size={28} />
              <p className="mt-4 text-slate-700 text-[17px] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg font-heading font-bold text-navy max-w-2xl mx-auto">
          CDLPassPrep was built to fix exactly this — the whole test, explained like a friend
          who&apos;s already passed.
        </p>
      </div>
    </section>
  );
}
