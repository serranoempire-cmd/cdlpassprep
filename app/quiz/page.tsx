import type { Metadata } from "next";
import QuizApp from "@/components/quiz/QuizApp";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free CDL Practice Test — 20 Questions, Instant Results | CDLPassPrep",
  description:
    "Take a free 20-question CDL practice test covering General Knowledge, Air Brakes, Combination Vehicles, and Pre-Trip Inspection. No signup needed to start — instant results.",
  openGraph: {
    title: "Free CDL Practice Test — 20 Questions, Instant Results",
    description:
      "Real exam-style questions covering General Knowledge, Air Brakes, Combination Vehicles, and Pre-Trip. No signup needed to start.",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

const FAQS = [
  {
    q: "How many questions are on the real CDL General Knowledge test?",
    a: "Most states administer 50 questions on the General Knowledge exam, and you typically need around 80% correct to pass. This practice test samples 20 questions across the core topics to give you a quick read on where you stand.",
  },
  {
    q: "Is this free practice test the same as the real DMV test?",
    a: "No — nobody outside your state's licensing agency can legally reproduce the actual DMV test questions. This practice test uses original questions written from the same public AAMVA model manual and FMCSA regulations the real test is based on.",
  },
  {
    q: "Do I need to give my email to take the test?",
    a: "No. You can take the full 20-question test with zero signup. An email is only requested afterward if you want your detailed weak-area breakdown and a custom study plan — and even then, you can skip it and still see every answer.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="kicker">100% Free — No Signup to Start</span>
          <h1 className="mt-4 font-heading font-black text-white leading-[1.05] text-[36px] md:text-[48px]">
            Free CDL Practice Test — 20 Questions, Instant Results
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Real exam-style questions covering General Knowledge, Air Brakes, Combination
            Vehicles, and Pre-Trip. No signup needed to start.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <QuizApp />
      </section>

      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading font-bold text-navy text-2xl mb-4">
            What&apos;s on the CDL Knowledge Test?
          </h2>
          <div className="prose text-slate-700 space-y-4 text-[15px] leading-relaxed">
            <p>
              Every state administers a General Knowledge test as part of getting a
              Commercial Driver&apos;s License, built from the same national AAMVA model
              manual and FMCSA regulations. Most states use a 50-question exam, and you
              typically need around 80% correct — about 40 questions — to pass. The exact
              format can vary slightly by state, so always confirm the specifics with your
              own state&apos;s licensing agency.
            </p>
            <p>
              The core topics tested are consistent nationwide: safe driving practices
              (stopping distance, following distance, speed management), vehicle
              inspection basics, air brake systems if your vehicle has them, and — if
              you&apos;re pursuing a Class A license — combination vehicle handling like
              coupling, uncoupling, and off-tracking through turns.
            </p>
            <p>
              This free practice test samples 20 questions across those same categories:
              General Knowledge, Air Brakes, Combination Vehicles, Pre-Trip Inspection, and
              Road Signs & Safety. It won&apos;t match the real test question-for-question
              — nobody outside your state&apos;s licensing agency can legally reproduce
              those — but it&apos;s built from the same underlying material, so a strong
              score here is a genuine signal you&apos;re on the right track.
            </p>
            <p>
              Take it as many times as you want. Each attempt pulls a fresh, shuffled set
              of questions, and every question comes with a plain-English explanation so
              you&apos;re learning while you test, not just guessing.
            </p>
          </div>

          <h2 className="font-heading font-bold text-navy text-2xl mt-10 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q}>
                <p className="font-semibold text-navy">{f.q}</p>
                <p className="text-slate-600 text-sm mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
