export type Testimonial = {
  name: string;
  location?: string;
  text: string;
  result?: string;
  verified?: boolean;
};

// Owner-collected reviews. Never add fabricated entries — see components/SocialProof.tsx
// for the honest empty-state fallback used when this array is empty.
export const testimonials: Testimonial[] = [
  {
    name: "Jason Harting",
    location: "Florida",
    text: "Everything in this bundle was great. I read the state manual, and it definitely helped, but I really like how this bundle is set up — it made things so much easier. Having the resumes and the list of employers included was a huge help too, since I could apply directly to companies that will actually hire me instead of wasting time with random companies online.",
  },
  {
    name: "Trevor Johnson",
    location: "Texas",
    text: "Man, this is amazing! It helped me out a lot — I couldn't be more happy that I found this. I tried a few other sites, and there are some good ones out there, but these guides really help out a lot.",
  },
  {
    name: "Krystal G.",
    location: "Florida",
    text: "Bought this before my CDL test and it helped a lot. Way easier to understand than the actual manual. Used the resume guide too and got hired pretty quick after. Would recommend to anyone starting out.",
    result: "Got hired shortly after",
  },
  {
    name: "Marcus Delgado",
    location: "Georgia",
    text: "Didn't think I'd actually finish reading a whole manual but this made it easy. Passed first try. Worth the money.",
    result: "Passed first try",
  },
  {
    name: "Angela Whitfield",
    location: "Ohio",
    text: "The pre-trip script part saved me. I just repeated it over and over till it stuck. No problem on test day.",
  },
  {
    name: "Devon Pruitt",
    location: "North Carolina",
    text: "Honestly wasn't expecting much but this actually helped a ton. Air brakes section especially. Glad I found it before test day.",
  },
  {
    name: "Renee Castillo",
    location: "Arizona",
    text: "Straightforward and easy to follow. No fluff. Used it for like a week before my test and it covered everything.",
  },
  {
    name: "Bobby Nguyen",
    location: "Georgia",
    text: "Quiz game is what got me ready honestly. Kept missing the same questions till I didn't anymore.",
  },
  {
    name: "Latasha Freeman",
    location: "Tennessee",
    text: "Bought this last minute before my test and still helped a lot. Wish I found it sooner tbh.",
  },
  {
    name: "Colton Meyers",
    location: "Indiana",
    text: "Simple, no BS, just what you need to know. Covered general knowledge and air brakes really well.",
  },
  {
    name: "Priscilla Vann",
    location: "Alabama",
    text: "English isn't my first language so I liked that everything was written simple. Helped me a lot studying at night after work.",
  },
  {
    name: "Andre Kessler",
    location: "Missouri",
    text: "Got hired within a week using the company list in here. Didn't expect that part to help as much as it did.",
    result: "Hired within a week",
  },
  {
    name: "Shauna Ricketts",
    location: "South Carolina",
    text: "Good price for everything you get. Studied maybe 4 days total and it covered what I needed.",
  },
];
