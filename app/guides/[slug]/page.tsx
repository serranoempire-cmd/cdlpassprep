import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug } from "@/content/articles";
import ArticleQuizCta from "@/components/guides/ArticleQuizCta";
import ArticleBundleCta from "@/components/guides/ArticleBundleCta";
import ArticleViewTracker from "@/components/guides/ArticleViewTracker";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cdlpassprep.com";
const QUIZ_CTA_MARKER = "<!--QUIZ_CTA-->";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | CDLPassPrep`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      images: ["/og-image.jpg"],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const [beforeCta, afterCta] = article.bodyHtml.includes(QUIZ_CTA_MARKER)
    ? article.bodyHtml.split(QUIZ_CTA_MARKER)
    : [article.bodyHtml, ""];

  const related = article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: { "@type": "Organization", name: "CDLPassPrep" },
    publisher: { "@type": "Organization", name: "CDLPassPrep" },
    mainEntityOfPage: `${SITE_URL}/guides/${article.slug}`,
  };

  const faqJsonLd = article.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/guides/${article.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-soft">
      <ArticleViewTracker slug={article.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="py-12 md:py-16 px-6">
        <div className="mx-auto max-w-2xl">
          <nav className="text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/guides" className="hover:text-amber">Guides</Link>
            <span className="mx-1.5">/</span>
            <span className="text-slate-500">{article.title}</span>
          </nav>

          <h1 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight">
            {article.title}
          </h1>
          <p className="mt-3 text-slate-400 text-sm">{article.readTimeMinutes} min read</p>

          <div
            className="prose prose-slate mt-8 max-w-none text-[16px] leading-relaxed text-slate-700 [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-navy [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mt-4 [&_li]:mt-1 [&_blockquote]:border-l-4 [&_blockquote]:border-amber [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-600"
            dangerouslySetInnerHTML={{ __html: beforeCta }}
          />

          {afterCta && (
            <>
              <ArticleQuizCta />
              <div
                className="prose prose-slate max-w-none text-[16px] leading-relaxed text-slate-700 [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-navy [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mt-4 [&_li]:mt-1"
                dangerouslySetInnerHTML={{ __html: afterCta }}
              />
            </>
          )}

          <ArticleBundleCta />

          {related.length > 0 && (
            <div className="mt-12 border-t border-navy/10 pt-8">
              <p className="font-heading font-bold text-navy text-sm uppercase tracking-wide mb-4">
                Related Guides
              </p>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/guides/${r.slug}`} className="text-teal underline text-sm">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
