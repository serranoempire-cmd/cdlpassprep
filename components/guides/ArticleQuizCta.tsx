export default function ArticleQuizCta() {
  return (
    <div className="not-prose my-8 rounded-2xl bg-navy p-6 text-center">
      <p className="font-heading font-bold text-white text-lg">
        Curious where you actually stand?
      </p>
      <p className="mt-1 text-slate-300 text-sm">
        Free 20-question practice test. No signup to start, instant results.
      </p>
      <a href="/quiz" className="cta-button mt-4 inline-block">
        Take the Free Practice Test →
      </a>
    </div>
  );
}
