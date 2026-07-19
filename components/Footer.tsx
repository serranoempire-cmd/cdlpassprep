import Link from "next/link";
import CPBadge from "./CPBadge";

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-12 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <CPBadge size={36} />
            <span className="font-heading font-extrabold text-white text-lg">CDLPassPrep</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <Link href="/quiz" className="hover:text-amber">Free Practice Test</Link>
            <Link href="/free" className="hover:text-amber">Free Cheat Sheet</Link>
            <Link href="/guides" className="hover:text-amber">Guides</Link>
            <Link href="/terms" className="hover:text-amber">Terms</Link>
            <Link href="/privacy" className="hover:text-amber">Privacy</Link>
            <Link href="/refunds" className="hover:text-amber">Refunds</Link>
            <a href="mailto:Cdlpassprep@gmail.com" className="hover:text-amber">Contact</a>
          </nav>
        </div>

        <p className="mt-8 text-xs text-slate-400 text-center sm:text-left leading-relaxed">
          © 2026 CDLPassPrep. CDLPassPrep is an independent study product and is not
          affiliated with, endorsed by, or sponsored by AAMVA, the FMCSA, or any state
          licensing agency. Purchase does not guarantee exam passage.
        </p>
      </div>
    </footer>
  );
}
