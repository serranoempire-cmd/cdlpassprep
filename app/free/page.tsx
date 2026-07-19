import type { Metadata } from "next";
import Image from "next/image";
import CheatSheetForm from "@/components/CheatSheetForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free Download: The Air Brakes PSI Cheat Sheet | CDLPassPrep",
  description:
    "The exact PSI numbers the CDL test asks about — governor cut-out, low-air warning, spring brakes — on one printable page. Free.",
  openGraph: {
    title: "Free Download: The Air Brakes PSI Cheat Sheet",
    description:
      "The exact PSI numbers the CDL test asks about, on one printable page. Free.",
    images: ["/inside-airbrake-psi.jpg"],
    type: "website",
  },
};

export default function FreePage() {
  return (
    <main className="min-h-screen bg-soft">
      <section className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="kicker">Free Download</span>
          <h1 className="mt-4 font-heading font-black text-navy leading-[1.1] text-[32px] md:text-[42px]">
            The Air Brakes PSI Cheat Sheet
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            The exact PSI numbers the CDL test asks about — governor cut-out, low-air
            warning, spring brakes — on one printable page. Free.
          </p>

          <div className="mt-8 relative aspect-[4/5] max-w-xs mx-auto rounded-xl overflow-hidden shadow-card border border-navy/10">
            <Image
              src="/inside-airbrake-psi.jpg"
              alt="Preview of the Air Brakes PSI cheat sheet"
              fill
              sizes="320px"
              className="object-cover object-top"
            />
          </div>

          <div className="mt-8">
            <CheatSheetForm />
            <p className="mt-3 text-xs text-slate-400">Unsubscribe anytime. No spam.</p>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Want to see if you&apos;d pass today?{" "}
            <a href="/quiz" className="text-teal underline">
              Take the free 20-question practice test
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
