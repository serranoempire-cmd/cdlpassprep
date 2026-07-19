"use client";

import { useReducer, useMemo, useState } from "react";
import { Lock, ChevronDown } from "lucide-react";
import {
  sampleQuizQuestions,
  CATEGORY_LABELS,
  CATEGORY_GUIDE,
  type SampledQuizQuestion,
  type QuizCategory,
} from "@/data/quiz-questions";
import CTAButton from "@/components/CTAButton";
import { track } from "@/lib/track";

type Screen = "intro" | "quiz" | "score" | "results";

type State = {
  screen: Screen;
  questions: SampledQuizQuestion[];
  currentIndex: number;
  answers: (number | null)[];
  selected: number | null;
  optedIn: boolean;
};

type Action =
  | { type: "START" }
  | { type: "SELECT"; index: number }
  | { type: "NEXT" }
  | { type: "OPT_IN" }
  | { type: "SKIP" }
  | { type: "RESTART" };

function initState(): State {
  return { screen: "intro", questions: [], currentIndex: 0, answers: [], selected: null, optedIn: false };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return {
        ...initState(),
        screen: "quiz",
        questions: sampleQuizQuestions(),
      };
    case "SELECT":
      if (state.selected !== null) return state; // lock after first tap
      return { ...state, selected: action.index };
    case "NEXT": {
      const answers = [...state.answers, state.selected];
      const atEnd = state.currentIndex + 1 >= state.questions.length;
      return {
        ...state,
        answers,
        selected: null,
        currentIndex: atEnd ? state.currentIndex : state.currentIndex + 1,
        screen: atEnd ? "score" : "quiz",
      };
    }
    case "OPT_IN":
      return { ...state, screen: "results", optedIn: true };
    case "SKIP":
      return { ...state, screen: "results", optedIn: false };
    case "RESTART":
      return initState();
    default:
      return state;
  }
}

function computeCategoryStats(questions: SampledQuizQuestion[], answers: (number | null)[]) {
  const stats: Record<string, { correct: number; total: number }> = {};
  questions.forEach((q, i) => {
    stats[q.category] = stats[q.category] || { correct: 0, total: 0 };
    stats[q.category].total += 1;
    if (answers[i] === q.correctIndex) stats[q.category].correct += 1;
  });
  return stats as Record<QuizCategory, { correct: number; total: number }>;
}

export default function QuizApp() {
  const [state, dispatch] = useReducer(reducer, undefined, initState);

  const score = useMemo(
    () => state.answers.filter((a, i) => a === state.questions[i]?.correctIndex).length,
    [state.answers, state.questions]
  );

  const categoryStats = useMemo(
    () => computeCategoryStats(state.questions, state.answers),
    [state.questions, state.answers]
  );

  const weakestCategory = useMemo<QuizCategory | null>(() => {
    let worst: QuizCategory | null = null;
    let worstRatio = Infinity;
    (Object.keys(categoryStats) as QuizCategory[]).forEach((cat) => {
      const { correct, total } = categoryStats[cat];
      const ratio = total > 0 ? correct / total : 1;
      if (ratio < worstRatio) {
        worstRatio = ratio;
        worst = cat;
      }
    });
    return worst;
  }, [categoryStats]);

  function handleStart() {
    dispatch({ type: "START" });
    track("quiz_start");
  }

  function handleNext() {
    const atEnd = state.currentIndex + 1 >= state.questions.length;
    dispatch({ type: "NEXT" });
    if (atEnd) {
      const finalScore = [...state.answers, state.selected].filter(
        (a, i) => a === state.questions[i]?.correctIndex
      ).length;
      track("quiz_complete", { score: finalScore });
    }
  }

  if (state.screen === "intro") {
    return (
      <div className="text-center">
        <button onClick={handleStart} className="cta-button">
          Start the Free Test →
        </button>
      </div>
    );
  }

  if (state.screen === "quiz") {
    const q = state.questions[state.currentIndex];
    return (
      <QuizScreen
        question={q}
        index={state.currentIndex}
        total={state.questions.length}
        selected={state.selected}
        onSelect={(i) => dispatch({ type: "SELECT", index: i })}
        onNext={handleNext}
      />
    );
  }

  if (state.screen === "score") {
    return (
      <ScoreScreen
        score={score}
        total={state.questions.length}
        weakestCategory={weakestCategory}
        onOptIn={() => dispatch({ type: "OPT_IN" })}
        onSkip={() => dispatch({ type: "SKIP" })}
      />
    );
  }

  return (
    <ResultsScreen
      questions={state.questions}
      answers={state.answers}
      categoryStats={categoryStats}
      weakestCategory={weakestCategory}
      optedIn={state.optedIn}
      onRestart={() => dispatch({ type: "RESTART" })}
    />
  );
}

function QuizScreen({
  question,
  index,
  total,
  selected,
  onSelect,
  onNext,
}: {
  question: SampledQuizQuestion;
  index: number;
  total: number;
  selected: number | null;
  onSelect: (i: number) => void;
  onNext: () => void;
}) {
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
        <span>
          Question {index + 1} of {total}
        </span>
        <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
          {CATEGORY_LABELS[question.category]}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-navy/10 overflow-hidden mb-6">
        <div
          className="h-full bg-amber transition-all"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
        <h2 className="font-heading font-bold text-navy text-xl md:text-2xl leading-snug">
          {question.question}
        </h2>

        <div className="mt-6 space-y-3">
          {question.options.map((opt, i) => {
            const isCorrect = i === question.correctIndex;
            const isSelected = i === selected;
            const showFeedback = selected !== null;

            let cls =
              "w-full text-left rounded-xl border p-4 transition flex items-center gap-3 ";
            if (!showFeedback) {
              cls += "border-navy/10 hover:border-amber hover:bg-amber/5";
            } else if (isCorrect) {
              cls += "border-green bg-green/10";
            } else if (isSelected) {
              cls += "border-red bg-red/10";
            } else {
              cls += "border-navy/10 opacity-60";
            }

            return (
              <button key={i} onClick={() => onSelect(i)} disabled={showFeedback} className={cls}>
                <span className="text-slate-700">{opt}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="mt-6 rounded-xl bg-navy/5 p-4 text-sm text-slate-700">
            <p className="font-semibold text-navy mb-1">
              {selected === question.correctIndex ? "Correct!" : "Not quite."}
            </p>
            <p>{question.explanation}</p>
          </div>
        )}

        {selected !== null && (
          <button onClick={onNext} className="cta-button mt-6 w-full">
            {index + 1 >= total ? "See My Results →" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}

function ScoreScreen({
  score,
  total,
  weakestCategory,
  onOptIn,
  onSkip,
}: {
  score: number;
  total: number;
  weakestCategory: QuizCategory | null;
  onOptIn: () => void;
  onSkip: () => void;
}) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pct = total > 0 ? score / total : 0;
  const band =
    pct >= 0.8
      ? { label: "You'd PASS today.", emoji: "🟢" }
      : pct >= 0.6
      ? { label: "Close — you'd fail by a few questions.", emoji: "🟡" }
      : { label: "Not ready yet — but that's why you're here.", emoji: "🔴" };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "quiz",
          quizScore: score,
          weakestCategory: weakestCategory ? CATEGORY_LABELS[weakestCategory] : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      track("email_submitted", { source: "quiz" });
      onOptIn();
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto text-center">
      <p className="text-slate-500 text-sm uppercase tracking-wide font-semibold">Your Score</p>
      <p className="font-heading font-black text-navy text-6xl mt-2">
        {score}/{total}
      </p>
      <p className="mt-3 text-xl font-semibold text-navy">
        {band.emoji} {band.label}
      </p>

      <div className="mt-8 relative rounded-2xl border-2 border-dashed border-amber/40 bg-amber/5 p-6 text-left">
        <div className="absolute inset-0 backdrop-blur-[2px] rounded-2xl flex items-center justify-center">
          <Lock className="text-amber" size={28} />
        </div>
        <p className="font-heading font-bold text-navy opacity-40">Your weak-area breakdown</p>
        <p className="text-slate-500 text-sm mt-1 opacity-40">+ a custom study plan just for you</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 rounded-lg border border-navy/15 px-4 py-3 text-navy"
          />
          <button type="submit" disabled={submitting} className="cta-button whitespace-nowrap">
            {submitting ? "Unlocking…" : "Unlock My Full Results — Free"}
          </button>
        </div>
        {error && <p className="mt-2 text-sm text-red">{error}</p>}
        <p className="mt-2 text-xs text-slate-400">
          We&apos;ll also send you the free Air Brakes cheat sheet. Unsubscribe anytime.
        </p>
      </form>

      <button onClick={onSkip} className="mt-4 text-sm text-slate-400 underline">
        No thanks, just show my answers
      </button>
    </div>
  );
}

function ResultsScreen({
  questions,
  answers,
  categoryStats,
  weakestCategory,
  optedIn,
  onRestart,
}: {
  questions: SampledQuizQuestion[];
  answers: (number | null)[];
  categoryStats: Record<QuizCategory, { correct: number; total: number }>;
  weakestCategory: QuizCategory | null;
  optedIn: boolean;
  onRestart: () => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-heading font-extrabold text-navy text-2xl text-center">
        Your Results by Category
      </h2>

      <div className="mt-6 space-y-3">
        {(Object.keys(categoryStats) as QuizCategory[]).map((cat) => {
          const { correct, total } = categoryStats[cat];
          const isWeak = cat === weakestCategory;
          return (
            <div key={cat}>
              <div className="flex justify-between text-sm mb-1">
                <span className={isWeak ? "font-semibold text-red" : "text-navy"}>
                  {CATEGORY_LABELS[cat]}
                </span>
                <span className="text-slate-500">
                  {correct}/{total}
                </span>
              </div>
              <div className="h-2 rounded-full bg-navy/10 overflow-hidden">
                <div
                  className={`h-full ${isWeak ? "bg-red" : "bg-teal"}`}
                  style={{ width: total > 0 ? `${(correct / total) * 100}%` : "0%" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {optedIn && weakestCategory && (
        <div className="mt-8 rounded-2xl bg-navy p-6 text-white">
          <p className="font-heading font-bold text-amber uppercase text-sm tracking-wide">
            Your Study Plan
          </p>
          <ol className="mt-3 space-y-2 text-slate-200 text-sm list-decimal list-inside">
            <li>Start with {CATEGORY_GUIDE[weakestCategory]} — your weakest area right now.</li>
            <li>Drill the cheat sheet at the end of that guide until the numbers are automatic.</li>
            <li>Retake this practice test to confirm it stuck before moving to the next section.</li>
          </ol>
        </div>
      )}

      <div className="mt-10">
        <h3 className="font-heading font-bold text-navy text-lg mb-4">Review Your Answers</h3>
        <div className="space-y-2">
          {questions.map((q, i) => {
            const isOpen = openIndex === i;
            const userAnswer = answers[i];
            const wasCorrect = userAnswer === q.correctIndex;
            return (
              <div key={q.id} className="rounded-lg border border-navy/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 p-4 text-left"
                >
                  <span className="flex items-center gap-2 text-sm">
                    <span className={wasCorrect ? "text-green" : "text-red"}>
                      {wasCorrect ? "✓" : "✗"}
                    </span>
                    <span className="text-navy">{q.question}</span>
                  </span>
                  <ChevronDown
                    className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-slate-600 space-y-1">
                    <p>
                      Your answer:{" "}
                      <span className={wasCorrect ? "text-green" : "text-red"}>
                        {userAnswer !== null && userAnswer !== undefined
                          ? q.options[userAnswer]
                          : "(skipped)"}
                      </span>
                    </p>
                    {!wasCorrect && (
                      <p>
                        Correct answer: <span className="text-green">{q.options[q.correctIndex]}</span>
                      </p>
                    )}
                    <p className="text-slate-500">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-navy p-8 text-center">
        <p className="font-heading font-bold text-white text-xl">
          {weakestCategory
            ? `${CATEGORY_LABELS[weakestCategory]} is what's holding you back. ${CATEGORY_GUIDE[weakestCategory]} fixes it — and 16 more guides come with it.`
            : "17 complete guides. One payment. Everything you need to pass."}
        </p>
        <div className="mt-6 flex justify-center">
          <CTAButton label="Get the Full Bundle — $99" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <button onClick={onRestart} className="text-sm text-teal underline">
          Retake the test
        </button>
      </div>
    </div>
  );
}
