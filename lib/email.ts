import { Resend } from "resend";
import crypto from "crypto";

const FROM = process.env.EMAIL_FROM || "CDLPassPrep <hello@cdlpassprep.com>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cdlpassprep.com";

const MAILING_ADDRESS = "CDLPassPrep, 23 W Lagrande St, Avon Park, FL 33825";

function getResendClient(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

/** Deterministic, unsigned-secret-free unsubscribe token: sha256(email + CRON_SECRET). */
export function unsubscribeToken(email: string): string {
  const secret = process.env.CRON_SECRET || "dev-secret-change-me";
  return crypto.createHash("sha256").update(`${email.toLowerCase()}:${secret}`).digest("hex");
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  return unsubscribeToken(email) === token;
}

function unsubscribeUrl(email: string): string {
  const token = unsubscribeToken(email);
  return `${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(email)}&token=${token}`;
}

function wrapEmail(bodyHtml: string, email: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#F8F9FB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8F9FB;padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="100%" style="max-width:520px;background-color:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background-color:#16233A;padding:24px 32px;">
                <span style="color:#F59E0B;font-weight:800;font-size:20px;">CDL</span><span style="color:#ffffff;font-weight:700;font-size:20px;">PassPrep</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;color:#334155;font-size:16px;line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px;background-color:#F8F9FB;color:#94A3B8;font-size:12px;line-height:1.6;">
                ${MAILING_ADDRESS}<br/>
                You're receiving this because you signed up at CDLPassPrep.com.
                <a href="${unsubscribeUrl(email)}" style="color:#0EA5E9;">Unsubscribe</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function ctaButton(label: string, href: string): string {
  return `<div style="margin:24px 0;"><a href="${href}" style="display:inline-block;background-color:#F59E0B;color:#16233A;font-weight:700;padding:14px 28px;border-radius:10px;text-decoration:none;">${label}</a></div>`;
}

type WelcomeParams = {
  email: string;
  source: "quiz" | "cheatsheet" | "exit-intent";
  quizScore?: number;
  weakestCategory?: string;
};

export async function sendWelcomeEmail(params: WelcomeParams) {
  const resend = getResendClient();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping welcome email.", params);
    return;
  }

  const { email, source, quizScore, weakestCategory } = params;

  let subject: string;
  let body: string;

  if (source === "quiz") {
    const scoreLine =
      typeof quizScore === "number"
        ? `<p>You scored <strong>${quizScore}/20</strong> on the free practice test.${
            weakestCategory ? ` Your weakest area right now: <strong>${weakestCategory}</strong>.` : ""
          }</p>`
        : "";
    subject = "Your CDL practice test results (+ your free cheat sheet)";
    body = `
      <h2 style="color:#16233A;">Nice work taking the test.</h2>
      ${scoreLine}
      <p>Your full results and study plan are on the results page you just came from — bookmark it or come back to CDLPassPrep.com anytime.</p>
      <p>As promised, here's your free Air Brakes PSI cheat sheet:</p>
      ${ctaButton("Get the Free Cheat Sheet", `${SITE_URL}/free`)}
      <p>If you want the complete 17-guide system (including the full study plan for every category), it's one payment, no subscription:</p>
      ${ctaButton("See the Full Bundle", `${SITE_URL}/#pricing`)}
    `;
  } else {
    subject = "Your free Air Brakes cheat sheet is inside";
    body = `
      <h2 style="color:#16233A;">Here's your cheat sheet.</h2>
      <p>The exact PSI numbers the CDL test asks about — one printable page.</p>
      ${ctaButton("Download the Cheat Sheet", `${SITE_URL}/free`)}
      <p>Curious how you'd do on the real thing? Try the free 20-question practice test — no signup needed to start.</p>
      ${ctaButton("Take the Free Practice Test", `${SITE_URL}/quiz`)}
    `;
  }

  await resend.emails.send({
    from: FROM,
    to: email,
    subject,
    html: wrapEmail(body, email),
  });
}

export type DripEmailKey = "day1" | "day2" | "day4" | "day6" | "day8";

export const DRIP_SCHEDULE: { key: DripEmailKey; dayOffset: number }[] = [
  { key: "day1", dayOffset: 1 },
  { key: "day2", dayOffset: 2 },
  { key: "day4", dayOffset: 4 },
  { key: "day6", dayOffset: 6 },
  { key: "day8", dayOffset: 8 },
];

export function buildDripEmail(key: DripEmailKey, email: string): { subject: string; html: string } {
  const bundleLink = `${SITE_URL}/#pricing`;

  const templates: Record<DripEmailKey, { subject: string; body: string }> = {
    day1: {
      subject: "The 3 numbers that fail people on the Air Brakes test",
      body: `
        <h2 style="color:#16233A;">3 numbers. That's it.</h2>
        <p>Most people fail the air brakes section because of three numbers they never actually memorized:</p>
        <ul>
          <li><strong>~125 psi</strong> — governor cut-out (compressor stops)</li>
          <li><strong>~100 psi</strong> — governor cut-in (compressor restarts)</li>
          <li><strong>55 psi</strong> — low-air warning light and buzzer must activate before you drop below this</li>
        </ul>
        <p>Say them out loud a few times. That's genuinely most of the battle on this section.</p>
        <p>This is one page of Guide 3 (Air Brakes). There are 16 more guides just like it, covering every other section of the test.</p>
        ${ctaButton("See the Full Bundle", bundleLink)}
      `,
    },
    day2: {
      subject: "Why the DMV manual makes you feel stupid (it's not you)",
      body: `
        <h2 style="color:#16233A;">It's not you. It's the manual.</h2>
        <p>The official CDL manual is written by a committee, for legal accuracy, not for a human trying to learn it the night before a test. Dense paragraphs, no examples, zero plain English.</p>
        <p>That's the entire reason CDLPassPrep exists — the same information, rewritten so it actually sticks.</p>
        ${ctaButton("See How It's Different", `${SITE_URL}/#show-dont-tell`)}
      `,
    },
    day4: {
      subject: "The word-for-word pre-trip script",
      body: `
        <h2 style="color:#16233A;">Say it exactly like this.</h2>
        <p>Here's a real excerpt from the engine compartment walk-around:</p>
        <p style="background:#16233A;color:#fff;padding:16px;border-radius:8px;">"I'm checking engine oil level — should be in the safe range."<br/>"I'm checking coolant level and that hoses aren't cracked, worn, or leaking."</p>
        <p>Examiners are trained to listen for the pattern — "checking for ___" — every single item. Guide 2 has the complete word-for-word script for the entire pre-trip.</p>
        ${ctaButton("Get the Complete Script", bundleLink)}
      `,
    },
    day6: {
      subject: "What $99 actually buys you (the math)",
      body: `
        <h2 style="color:#16233A;">The math, plainly.</h2>
        <p>CDL jobs routinely start at $50,000+ in the first year. The bundle is a one-time $99 payment.</p>
        <p>What's inside:</p>
        <ul>
          <li>17 complete study guides (General Knowledge, Air Brakes, Combination, Hazmat, and more)</li>
          <li>Offline practice quiz trainer</li>
          <li>Printable checklists, resume templates, and a hiring-company list</li>
          <li>Free lifetime updates</li>
        </ul>
        <p>Covered by the 30-day guarantee — if it doesn't help, you get every penny back.</p>
        ${ctaButton("Get the Bundle — $99", bundleLink)}
      `,
    },
    day8: {
      subject: "Last one from me (+ a question)",
      body: `
        <h2 style="color:#16233A;">Last one from me.</h2>
        <p>If the bundle isn't for you, no hard feelings — the free stuff (the practice test and cheat sheet) is yours to keep.</p>
        <p>If you're on the fence, just reply to this email and tell me what's holding you back. I read every reply.</p>
        ${ctaButton("Take Another Look", bundleLink)}
      `,
    },
  };

  const t = templates[key];
  return { subject: t.subject, html: wrapEmail(t.body, email) };
}

export async function sendDripEmail(email: string, key: DripEmailKey) {
  const resend = getResendClient();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping drip email.", { email, key });
    return;
  }
  const { subject, html } = buildDripEmail(key, email);
  await resend.emails.send({ from: FROM, to: email, subject, html });
}
