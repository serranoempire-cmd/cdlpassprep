import type { Article } from "./types";
import { QUIZ_QUESTIONS, type QuizQuestion } from "@/data/quiz-questions";

const SELECTED_IDS = [
  "gen-01",
  "gen-02",
  "gen-03",
  "gen-06",
  "gen-09",
  "gen-14",
  "air-01",
  "air-03",
  "air-04",
  "air-06",
  "comb-01",
  "comb-03",
  "pretrip-01",
  "road-02",
  "road-08",
];

function renderQuestion(q: QuizQuestion): string {
  const optionsHtml = q.options
    .map((opt, i) => {
      const isCorrect = i === q.correctIndex;
      return `<li${isCorrect ? ' style="font-weight:600;color:#16A34A;"' : ""}>${opt}${
        isCorrect ? " ✓" : ""
      }</li>`;
    })
    .join("");
  return `<div style="margin-bottom:24px;padding:16px;border:1px solid rgba(22,35,58,0.1);border-radius:12px;">
    <p style="font-weight:700;color:#16233A;">${q.question}</p>
    <ul style="margin-top:8px;">${optionsHtml}</ul>
    <p style="margin-top:8px;color:#64748B;font-size:14px;"><strong>Why:</strong> ${q.explanation}</p>
  </div>`;
}

function renderQuestionsByIds(ids: string[]): string {
  return ids
    .map((id) => QUIZ_QUESTIONS.find((q) => q.id === id))
    .filter((q): q is QuizQuestion => Boolean(q))
    .map(renderQuestion)
    .join("");
}

const article: Article = {
  slug: "cdl-test-questions-and-answers",
  title: "CDL Test Questions & Answers: 15 Practice Questions Explained",
  metaDescription:
    "15 real CDL practice questions across General Knowledge, Air Brakes, Combination Vehicles, and Pre-Trip Inspection — with the correct answer and the reasoning behind each one.",
  readTimeMinutes: 8,
  publishedDate: "2026-07-19",
  relatedSlugs: ["cdl-general-knowledge-practice-test", "air-brake-test-psi-numbers", "why-people-fail-the-cdl-test"],
  bodyHtml: `
    <p>The best way to know if you're ready for the CDL knowledge test isn't re-reading the manual — it's answering real, exam-style questions and checking not just whether you got them right, but <em>why</em>. Below are 15 practice questions spanning General Knowledge, Air Brakes, Combination Vehicles, Pre-Trip Inspection, and Road Signs & Safety, each with the correct answer and the reasoning behind it.</p>

    <h2>General Knowledge & safe driving</h2>
    ${renderQuestionsByIds(SELECTED_IDS.slice(0, 6))}

    <!--QUIZ_CTA-->

    <h2>Air Brakes</h2>
    ${renderQuestionsByIds(SELECTED_IDS.slice(6, 10))}

    <h2>Combination Vehicles, Pre-Trip, and Road Signs</h2>
    ${renderQuestionsByIds(SELECTED_IDS.slice(10))}

    <h2>Want more like this?</h2>
    <p>These 15 are a sample. The free practice test pulls a fresh, shuffled set of 20 questions from a much larger bank every time you take it, covering the same five categories — with instant explanations for every answer, right or wrong.</p>
  `,
};

export default article;
