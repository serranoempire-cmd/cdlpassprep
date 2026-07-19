export type Testimonial = {
  name: string;
  location?: string;
  text: string;
  result?: string;
  verified?: boolean;
};

// Owner fills this in as real reviews arrive. Never add fabricated entries —
// see components/SocialProof.tsx for the honest empty-state fallback.
export const testimonials: Testimonial[] = [];
