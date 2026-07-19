import Image from "next/image";

const SCREENSHOTS = [
  {
    caption: "Stopping-distance infographic",
    src: "/inside-stopping-distance.jpg",
    alt: "General Knowledge guide page showing a stopping distance bar chart at 30, 55, and 65 mph",
  },
  {
    caption: "Spoken-script dark cards",
    src: "/inside-spoken-script.jpg",
    alt: "Pre-Trip Inspection guide page showing the word-for-word spoken script for the engine compartment check",
  },
  {
    caption: "Air-brake PSI chart",
    src: "/inside-airbrake-psi.jpg",
    alt: "Air Brakes guide page showing governor cut-out/cut-in, low-air warning, and spring-brake apply PSI numbers",
  },
  {
    caption: "One-page cheat sheet",
    src: "/inside-cheat-sheet.jpg",
    alt: "General Knowledge guide quick-reference cheat sheet covering stopping distance, ABS, following distance, and more",
  },
];

export default function ShowDontTell() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-heading font-extrabold text-white text-3xl md:text-[40px] leading-tight max-w-2xl mx-auto">
            This isn&apos;t a photocopied manual. See for yourself.
          </h2>
        </div>

        <div className="mt-12 flex gap-5 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible pb-4 -mx-6 px-6 md:mx-0 md:px-0">
          {SCREENSHOTS.map(({ caption, src, alt }) => (
            <div
              key={caption}
              className="relative shrink-0 w-[75%] sm:w-[45%] md:w-auto aspect-[4/5] rounded-xl overflow-hidden bg-navy-deep border border-amber/20"
            >
              {src ? (
                <>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 75vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent p-4 pt-10">
                    <span className="text-slate-100 text-sm font-semibold">{caption}</span>
                  </div>
                </>
              ) : (
                <div className="h-full flex items-end p-4">
                  <span className="text-slate-300 text-sm">{caption}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-300 max-w-2xl mx-auto">
          Every guide: plain-English teaching, memorize-this boxes, real diagrams, and a
          one-page cheat sheet.
        </p>
      </div>
    </section>
  );
}
