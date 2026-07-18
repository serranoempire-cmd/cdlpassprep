import Link from "next/link";
import CPBadge from "./CPBadge";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="bg-navy py-10">
        <div className="mx-auto max-w-3xl px-6 flex items-center gap-3">
          <Link href="/" aria-label="CDLPassPrep home">
            <CPBadge size={36} />
          </Link>
          <span className="font-heading font-extrabold text-white text-lg">CDLPassPrep</span>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-6 py-12 prose-none">
        <h1 className="font-heading font-extrabold text-navy text-3xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">Last updated: {updated}</p>
        <div className="mt-8 space-y-6 text-slate-700 leading-relaxed text-[17px]">
          {children}
        </div>
        <p className="mt-10">
          <Link href="/" className="text-teal underline">
            ← Back to CDLPassPrep
          </Link>
        </p>
      </article>
      <Footer />
    </main>
  );
}
