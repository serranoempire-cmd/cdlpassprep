"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Is this for my state?",
    a: "Yes. Every state's CDL test is built from the same national AAMVA model manual and FMCSA regulations — that's exactly what these guides teach. Guide 14 (State-by-State Differences) covers the handful of things that vary by state.",
  },
  {
    q: "I've never driven a truck. Is this beginner-friendly?",
    a: "Yes. It's written for absolute beginners and for ESL readers — plain English, short sentences, no assumed trucking knowledge.",
  },
  {
    q: "How do I get the files?",
    a: "Instant download right after checkout, plus a download link sent to your email. Everything works on your phone, tablet, or computer, and is printable.",
  },
  {
    q: "Does the quiz game need internet?",
    a: "It runs right in your browser — you'll need a connection to load it initially, then it's yours to keep coming back to.",
  },
  {
    q: "Is this the actual DMV test questions?",
    a: "No — nobody can legally sell the real DMV test questions. Instead, this teaches you the underlying knowledge so any version of the question, worded any way, is easy.",
  },
  {
    q: "What if I fail anyway?",
    a: "You're covered by the 30-day guarantee. Guide 15 (Common Test Failures) also exists specifically to help you prep for a retake.",
  },
  {
    q: "One payment or subscription?",
    a: "One payment. Lifetime access. Free updates whenever the guides are revised.",
  },
  {
    q: "Can I share it?",
    a: "The bundle is licensed for personal use by the original buyer only.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="kicker">Questions</span>
          <h2 className="mt-4 font-heading font-extrabold text-white text-3xl md:text-[40px] leading-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-white/10 border-t border-b border-white/10">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="font-heading font-bold text-white text-base md:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`shrink-0 text-amber transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      size={22}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
                >
                  <p className="text-slate-300 leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
