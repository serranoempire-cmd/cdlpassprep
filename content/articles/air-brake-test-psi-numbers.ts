import type { Article } from "./types";

const article: Article = {
  slug: "air-brake-test-psi-numbers",
  title: "Every PSI Number on the CDL Air Brakes Test (Memorize These)",
  metaDescription:
    "Governor cut-out, cut-in, low-air warning, spring brake apply, safety valve — every PSI number the CDL air brakes test actually asks about, explained plainly.",
  readTimeMinutes: 6,
  publishedDate: "2026-07-19",
  relatedSlugs: ["cdl-general-knowledge-practice-test", "why-people-fail-the-cdl-test", "cdl-test-questions-and-answers"],
  faqs: [
    {
      q: "Do I need to memorize exact PSI numbers, or just the ranges?",
      a: "Ranges are usually enough since real-world systems vary by manufacturer, but knowing the commonly cited approximate figures (like 100–125 psi for governor cut-in/cut-out) will cover almost every version of how these questions get asked.",
    },
    {
      q: "Are these numbers the same for every truck?",
      a: "They're close, but not identical — exact figures can vary slightly by manufacturer and system design. The numbers here reflect the commonly cited approximate ranges from the AAMVA model manual; always check your specific vehicle's documentation for exact specs.",
    },
  ],
  bodyHtml: `
    <p>The Air Brakes section trips up more people than almost any other part of the CDL knowledge test — not because the concepts are hard, but because it's genuinely just a list of numbers you either know cold or you don't. Here's every PSI figure that actually shows up, in plain English, with the reasoning behind each one so it sticks.</p>

    <h2>Governor cut-out and cut-in</h2>
    <p>The governor is the component that controls your air compressor. When tank pressure reaches the <strong>cut-out</strong> point — commonly cited as around <strong>125 psi</strong> — the governor tells the compressor to stop pumping air. As pressure drops from use, once it falls to the <strong>cut-in</strong> point — commonly cited as around <strong>100 psi</strong> — the governor kicks the compressor back on.</p>
    <p>Think of it like a thermostat for air pressure: it keeps your tanks topped up in a healthy range without constantly running the compressor.</p>

    <h2>Low-air pressure warning</h2>
    <p>Your dashboard has a warning light and buzzer specifically for low air pressure. Federal rules require this warning to activate before pressure drops below <strong>55 psi</strong>. This isn't a suggestion — it's a hard safety requirement, because below a certain pressure, your brakes stop working reliably.</p>
    <p>If you ever see or hear this warning while driving, you're expected to safely stop as soon as possible. Continuing to drive on dangerously low air pressure is exactly the kind of thing the test wants to make sure you'd never do.</p>

    <!--QUIZ_CTA-->

    <h2>Spring brake (parking brake) apply range</h2>
    <p>If your air pressure keeps dropping — say, from a leak — spring brakes are designed to apply automatically before you lose all air pressure and all braking ability. This automatic application commonly happens somewhere in the <strong>20–45 psi</strong> range. It's a built-in fail-safe: even if you lost every bit of air, the truck won't just roll away with no brakes at all.</p>

    <h2>Leakage rate limits</h2>
    <p>During your pre-trip air brake check, you test how much pressure you lose per minute with the engine off and brakes released, then again with the brakes applied. The commonly cited limits are:</p>
    <ul>
      <li><strong>Brakes released:</strong> under about 2 psi/minute for a single vehicle, under about 3 psi/minute for a combination vehicle.</li>
      <li><strong>Brakes applied:</strong> under about 3 psi/minute for a single vehicle, under about 4 psi/minute for a combination vehicle.</li>
    </ul>
    <p>Combination vehicles are allowed slightly more leakage since there's more total air line and more connections where small leaks can occur.</p>

    <h2>Air pressure buildup rate</h2>
    <p>With the engine running at operating RPM, a typical dual air system should build pressure from 85 to 100 psi within about <strong>45 seconds</strong>. If it takes noticeably longer, that's a sign the compressor or air system may not keep up under hard, repeated braking — worth flagging before you drive, not after.</p>

    <h2>Safety (relief) valve</h2>
    <p>As a backup in case the governor fails to cut out the compressor, a safety valve is set to open and release excess pressure — commonly cited around <strong>150 psi</strong>. You should never see this valve actually activate during normal operation; if you do, something upstream has already gone wrong.</p>

    <h2>Putting it together</h2>
    <p>Here's the full sequence in order, low to high: spring brakes start applying around 20–45 psi → low-air warning must trigger before 55 psi → governor cuts in around 100 psi → governor cuts out around 125 psi → safety valve opens as a last resort around 150 psi. If you can recite that chain in order and explain why each threshold exists, you've got this section handled.</p>
    <p>Want to see how these numbers show up in actual test-style questions? The free practice test includes a dedicated Air Brakes category, sampled fresh every time you take it.</p>
  `,
};

export default article;
