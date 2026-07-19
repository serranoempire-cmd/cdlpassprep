import type { Article } from "./types";

const article: Article = {
  slug: "cdl-general-knowledge-practice-test",
  title: "CDL General Knowledge Practice Test: What's On It & How to Pass",
  metaDescription:
    "What's actually on the CDL General Knowledge test, how many questions, the passing score, and how to prepare — plus a free 20-question practice test.",
  readTimeMinutes: 7,
  publishedDate: "2026-07-19",
  relatedSlugs: ["how-hard-is-the-cdl-test", "why-people-fail-the-cdl-test", "cdl-test-questions-and-answers"],
  faqs: [
    {
      q: "How many questions are on the CDL General Knowledge test?",
      a: "Most states use a 50-question exam. A handful of states vary slightly, so always confirm the exact count with your state's licensing agency before test day.",
    },
    {
      q: "What score do I need to pass?",
      a: "The typical passing threshold is around 80% correct — roughly 40 out of 50 questions on a standard exam. Confirm your state's exact requirement, since it can differ slightly.",
    },
    {
      q: "Can I retake the test if I fail?",
      a: "Yes, in every state, though rules on how soon you can retake it (and whether there's a fee) vary. Check with your local DMV or licensing office for the specifics.",
    },
  ],
  bodyHtml: `
    <p>If you're getting a Commercial Driver's License, the General Knowledge test is the one everyone takes — it's the foundation exam every CDL applicant sits for, regardless of what class of license or endorsements you're after. Here's exactly what's on it, how it's scored, and how to actually prepare instead of just hoping you remember enough from the manual.</p>

    <h2>Where the test comes from</h2>
    <p>Every state's CDL knowledge tests are built from the same source: the AAMVA (American Association of Motor Vehicle Administrators) CDL Model Commercial Driver's License Manual, which itself reflects FMCSA (Federal Motor Carrier Safety Administration) regulations. That's why a driver who studies for a Texas CDL and a driver studying for an Ohio CDL are learning almost identical material — the underlying content is federally standardized, even though each state administers its own version of the test.</p>
    <p>This matters because it means you can't game the system by looking for "easier" state tests. The content is the same everywhere. What differs is mostly administrative — number of questions, exact passing percentage, and a handful of state-specific rules (weight limits on certain highways, specific state forms, and similar details). Always verify those specifics with your own state's licensing agency.</p>

    <h2>What's actually covered</h2>
    <p>The General Knowledge exam focuses on the material every commercial driver needs regardless of what they haul or drive. The core topics include:</p>
    <ul>
      <li><strong>Safe driving practices</strong> — stopping distance (perception, reaction, and braking distance), following distance, speed management in different conditions, and hazard perception.</li>
      <li><strong>Vehicle inspections</strong> — the purpose and basic process of a pre-trip inspection, what you're checking for and why.</li>
      <li><strong>Basic control of the vehicle</strong> — starting, stopping, backing, and turning a commercial vehicle safely.</li>
      <li><strong>Shifting</strong> — general principles of operating a manual transmission commercial vehicle, if applicable in your state's test.</li>
      <li><strong>Air brakes</strong> — if you're testing for a vehicle equipped with air brakes (most commercial trucks are), a dedicated air brakes section or endorsement test applies. Even the General Knowledge section touches on basic air brake awareness.</li>
      <li><strong>Combination vehicles basics</strong> — general awareness of how combination vehicles (tractor-trailers) behave differently than straight trucks.</li>
      <li><strong>Hours of service and driver fitness</strong> — alcohol and drug rules, fatigue management, and the basic hours-of-service framework.</li>
      <li><strong>Accident procedures and emergencies</strong> — what to do if something goes wrong, from a skid to a fire to an accident scene.</li>
    </ul>
    <p>Depending on the license class you're pursuing, you may also need to pass separate, dedicated tests — Air Brakes, Combination Vehicles, and any endorsements like Hazmat, Tanker, or Passenger/School Bus. General Knowledge is the one everyone needs; the others depend on your specific goals.</p>

    <!--QUIZ_CTA-->

    <h2>How many questions, and what's the passing score</h2>
    <p>Most states administer a 50-question General Knowledge exam, and the typical passing threshold is around 80% correct — that's roughly 40 questions right out of 50. Some states use a different total question count or slightly different threshold, so this is one detail worth double-checking with your specific state's DMV or licensing website before test day.</p>
    <p>The questions are almost always multiple choice, and most states let you retake the test if you don't pass on the first attempt — though there may be a waiting period or a small fee for retesting, which again varies by state.</p>

    <h2>How to actually prepare</h2>
    <p>The single biggest mistake people make is trying to read the official manual cover to cover the way you'd read a novel. It's not written that way — it's a reference document, written by committee, for legal precision rather than readability. Reading it straight through without a plan is a slow way to prepare and a fast way to feel overwhelmed.</p>
    <p>A better approach: study by category, not page order. Focus on stopping distance and following distance first (they show up constantly), then move to vehicle inspection basics, then hours-of-service and driver fitness rules, then whatever's specific to your state. Use practice questions to find out what you actually don't know yet — that's a far more efficient way to spend your remaining study time than re-reading sections you've already got down cold.</p>
    <p>Explanations matter more than answers. If you get a practice question wrong, the value isn't in memorizing that one question — it's in understanding why the correct answer is correct, so you can handle any version of that concept the real test throws at you, worded differently.</p>

    <h2>Try it yourself</h2>
    <p>The fastest way to find out where you actually stand is to take a practice test built from the same source material — General Knowledge, Air Brakes, Combination Vehicles, and Pre-Trip Inspection all included. It's free, takes about ten minutes, and tells you exactly which category needs the most work before you sit for the real thing.</p>
  `,
};

export default article;
