export type ArticleFaq = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  metaDescription: string;
  readTimeMinutes: number;
  publishedDate: string; // ISO date, for JSON-LD
  /** Full HTML body. Insert the literal string "<!--QUIZ_CTA-->" once, roughly mid-article,
   * to mark where the in-article quiz CTA banner should render. */
  bodyHtml: string;
  faqs?: ArticleFaq[];
  relatedSlugs: string[];
};
