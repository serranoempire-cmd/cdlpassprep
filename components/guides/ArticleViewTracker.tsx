"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

export default function ArticleViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    track("article_view", { slug });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  return null;
}
