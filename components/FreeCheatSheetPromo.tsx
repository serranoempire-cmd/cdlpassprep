import Image from "next/image";
import CheatSheetForm from "./CheatSheetForm";

export default function FreeCheatSheetPromo() {
  return (
    <section className="bg-soft py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl bg-navy overflow-hidden border border-amber/20 md:flex md:items-center">
          <div className="relative w-full h-48 md:h-auto md:w-64 md:self-stretch shrink-0">
            <Image
              src="/inside-airbrake-psi.jpg"
              alt="Preview of the Air Brakes PSI cheat sheet"
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover object-top"
            />
          </div>
          <div className="p-8 md:p-10 text-left">
            <span className="kicker">Free Download</span>
            <h2 className="mt-3 font-heading font-extrabold text-white text-2xl md:text-3xl leading-tight">
              The Air Brakes PSI Cheat Sheet
            </h2>
            <p className="mt-3 text-slate-300 text-sm md:text-base leading-relaxed">
              The exact PSI numbers the CDL test asks about — governor cut-out, low-air
              warning, spring brakes — on one printable page. Free, no purchase needed.
            </p>
            <div className="mt-6">
              <CheatSheetForm align="left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
