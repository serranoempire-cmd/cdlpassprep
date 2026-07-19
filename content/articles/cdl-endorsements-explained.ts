import type { Article } from "./types";

const article: Article = {
  slug: "cdl-endorsements-explained",
  title: "CDL Endorsements Explained: Hazmat, Tanker, Doubles/Triples, Passenger",
  metaDescription:
    "What each major CDL endorsement actually requires, what jobs it opens up, and whether you need it for your first trucking job — explained plainly.",
  readTimeMinutes: 7,
  publishedDate: "2026-07-19",
  relatedSlugs: ["how-hard-is-the-cdl-test", "cdl-jobs-no-experience", "cdl-general-knowledge-practice-test"],
  faqs: [
    {
      q: "Do I need any endorsements for my first trucking job?",
      a: "Not necessarily. Many entry-level dry van and reefer (refrigerated) trucking jobs require no endorsements at all beyond a standard Class A CDL. Endorsements become relevant once you're targeting specific freight types.",
    },
    {
      q: "Can I add endorsements later, after I already have my CDL?",
      a: "Yes. Endorsements can generally be added at any point by passing the relevant additional test (and, for Hazmat, a background check) — you don't have to get everything at once.",
    },
  ],
  bodyHtml: `
    <p>A base CDL lets you drive the vehicle class you're licensed for, but certain types of freight or vehicles require an additional endorsement — an extra test (and sometimes background check) layered on top of your standard license. Here's what each major endorsement actually involves, and whether you need it starting out.</p>

    <h2>Hazmat (H)</h2>
    <p>Required to transport hazardous materials in quantities that require placarding. This is the most involved endorsement to obtain: beyond a written knowledge test covering hazmat regulations, handling, and emergency response, applicants must also pass a TSA background check (Transportation Security Administration), since hazmat transport is treated as a security-sensitive activity.</p>
    <p>Hazmat-endorsed drivers are often in demand and can command higher pay, but the endorsement takes longer to obtain because of the background check timeline, and it's generally not something first-time CDL holders pursue before their first job — it's more common to add later once you know you want to move into that type of freight.</p>

    <h2>Tanker (N)</h2>
    <p>Required to drive a vehicle designed to transport liquid or gaseous materials in a tank. Tanker driving has its own handling challenges — primarily "surge," where liquid cargo shifts inside a partially full tank during acceleration, braking, and turns, affecting vehicle control in ways a dry van load doesn't. The tanker endorsement test covers these handling considerations specifically.</p>
    <p>Combined with Hazmat, a "Tanker + Hazmat" combination (sometimes referred to as X) is common for drivers hauling liquid hazardous materials like fuel.</p>

    <!--QUIZ_CTA-->

    <h2>Doubles/Triples (T)</h2>
    <p>Required to pull more than one trailer at once — a common setup for certain long-haul freight operations. This endorsement covers the specific handling differences of multi-trailer combinations, including rearward amplification (the tendency for the last trailer in a combination to swing more dramatically than the lead unit during sudden steering) and the use of converter dollies to connect additional trailers.</p>
    <p>Not every trucking job involves doubles or triples — many companies run single-trailer setups exclusively — so this endorsement is typically pursued once you know a specific job or route requires it.</p>

    <h2>Passenger (P) and School Bus (S)</h2>
    <p>Required to drive a vehicle designed to carry passengers (Passenger endorsement) or specifically a school bus (School Bus endorsement, which is added on top of the Passenger endorsement). These involve their own knowledge and skills testing focused on passenger safety, loading/unloading procedures, and — for school bus specifically — additional rules around railroad crossings, student management, and emergency evacuation.</p>
    <p>These endorsements are relevant if you're pursuing bus driving, transit, or student transportation rather than freight trucking, and typically involve background checks appropriate to working around passengers or minors.</p>

    <h2>Do you need any of these for your first job?</h2>
    <p>Honestly, often not. A large share of entry-level trucking jobs — dry van freight, refrigerated (reefer) freight, plenty of regional and OTR (over-the-road) positions — require nothing beyond a standard Class A CDL with no endorsements. Companies that hire new drivers with no experience frequently start people on straightforward freight precisely because it doesn't require additional testing or background checks before they can start working.</p>
    <p>A reasonable approach: get your base CDL first, take a job that doesn't require an endorsement, and add specific endorsements later once you know which type of freight or route you actually want to move into. Piling on every endorsement before your first job spreads your study time thin for credentials you may not use right away.</p>

    <h2>Studying for endorsement tests</h2>
    <p>Each endorsement has its own knowledge test, built from the same public AAMVA/FMCSA source material as the core CDL tests — so the same study approach applies: learn by category, use practice questions to find your gaps, and confirm any state-specific requirements (like background check processing times for Hazmat) directly with your state's licensing agency, since those details can change and vary by state.</p>
  `,
};

export default article;
