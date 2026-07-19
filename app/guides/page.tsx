import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/content/articles";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CDL Guides & Articles | CDLPassPrep",
  description:
    "Free CDL guides covering the knowledge test, air brakes, pre-trip inspection, endorsements, and getting hired — plain English, no fluff.",
};

export default function GuidesIndexPage() {
  return (
    <main className="min-h-screen bg-soft">
      <section className="bg-navy py-14 md:py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="kicker">Free Guides</span>
          <h1 className="mt-4 font-heading font-black text-white leading-[1.1] text-[32px] md:text-[44px]">
            CDL Guides & Articles
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Plain-English answers to the questions every future CDL driver actually has.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="mx-auto max-w-4xl grid gap-5 sm:grid-cols-2">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`/guides/${a.slug}`}
              className="block bg-white rounded-xl shadow-card p-6 hover:border-amber border border-transparent transition"
            >
              <h2 className="font-heading font-bold text-navy text-lg leading-snug">{a.title}</h2>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{a.metaDescription}</p>
              <p className="mt-3 text-xs text-slate-400">{a.readTimeMinutes} min read</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
