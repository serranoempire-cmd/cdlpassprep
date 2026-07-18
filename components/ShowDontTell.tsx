const SCREENSHOTS = [
  "Stopping-distance infographic",
  "Spoken-script dark cards",
  "Air-brake PSI chart",
  "One-page cheat sheet",
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
          {SCREENSHOTS.map((caption) => (
            <div
              key={caption}
              className="shrink-0 w-[75%] sm:w-[45%] md:w-auto aspect-[4/5] rounded-xl bg-navy-deep border border-amber/20 flex items-end p-4"
            >
              {/* TODO: replace asset — render from the actual PDF page */}
              <span className="text-slate-300 text-sm">{caption}</span>
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
