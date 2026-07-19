export type QuizQuestion = {
  id: string;
  category: "general" | "air-brakes" | "combination" | "pre-trip" | "road-signs-safety";
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ---------- general (24) ----------
  {
    id: "gen-01",
    category: "general",
    question: "Total stopping distance is made up of which three parts?",
    options: [
      "Perception, reaction, and braking distance",
      "Speed, weight, and weather",
      "Braking, steering, and signaling distance",
      "Reaction, following, and parking distance",
    ],
    correctIndex: 0,
    explanation:
      "Stopping distance = perception distance (spotting the hazard) + reaction distance (moving your foot to the brake) + braking distance (the truck actually slowing down).",
  },
  {
    id: "gen-02",
    category: "general",
    question: "If you double your speed, what happens to your braking distance?",
    options: [
      "It stays the same",
      "It roughly doubles",
      "It roughly quadruples",
      "It roughly triples",
    ],
    correctIndex: 2,
    explanation:
      "Braking distance grows with the square of speed, so doubling your speed roughly quadruples the distance it takes to stop.",
  },
  {
    id: "gen-03",
    category: "general",
    question: "Under 40 mph, the recommended following distance is:",
    options: [
      "1 second for every 10 feet of vehicle length",
      "A fixed 4 seconds no matter the length",
      "2 car lengths",
      "1 second total, regardless of length",
    ],
    correctIndex: 0,
    explanation:
      "The rule of thumb is 1 second per 10 feet of your vehicle's length at speeds under 40 mph, with an extra second added above 40 mph.",
  },
  {
    id: "gen-04",
    category: "general",
    question: "A heavier, fully loaded truck stops:",
    options: [
      "Always shorter than an empty truck",
      "Never shorter than an empty truck — weight does not shorten stopping distance",
      "Instantly, regardless of speed",
      "Only shorter on wet roads",
    ],
    correctIndex: 1,
    explanation:
      "Weight does not shorten stopping distance. In fact, an empty truck can have less traction and may take longer to stop in some conditions.",
  },
  {
    id: "gen-05",
    category: "general",
    question: "Hydroplaning on a wet road can start happening at speeds as low as:",
    options: ["10 mph", "30 mph", "60 mph", "It can't happen under 70 mph"],
    correctIndex: 1,
    explanation:
      "Hydroplaning can begin at speeds as low as around 30 mph when there's enough water on the road, so slowing down in rain matters even at moderate speeds.",
  },
  {
    id: "gen-06",
    category: "general",
    question: "The CDL blood alcohol concentration (BAC) limit is:",
    options: ["0.08", "0.04", "0.02", "There is no limit for CDL holders"],
    correctIndex: 1,
    explanation:
      "The CDL limit is 0.04 BAC — half the standard 0.08 limit for regular drivers.",
  },
  {
    id: "gen-07",
    category: "general",
    question: "If your BAC tests between 0.02 and 0.039, what happens?",
    options: [
      "Nothing — you're still under the CDL limit",
      "You're placed out of service for 24 hours",
      "Your CDL is permanently revoked",
      "You get a warning only",
    ],
    correctIndex: 1,
    explanation:
      "Testing between 0.02 and 0.039 BAC results in a mandatory 24-hour out-of-service order, even though it's under the 0.04 CDL limit.",
  },
  {
    id: "gen-08",
    category: "general",
    question: "What does 'implied consent' mean for a CDL driver during a traffic stop?",
    options: [
      "You can refuse any test with no consequences",
      "By holding a CDL, you've already agreed to alcohol/drug testing when lawfully requested",
      "It only applies to out-of-state drivers",
      "It means the officer needs a warrant first",
    ],
    correctIndex: 1,
    explanation:
      "Implied consent means that by holding a CDL, you've agreed to submit to testing when lawfully requested — refusing carries its own penalties.",
  },
  {
    id: "gen-09",
    category: "general",
    question: "Under the standard Hours-of-Service rule, how many hours can you drive after 10 consecutive hours off duty?",
    options: ["8 hours", "10 hours", "11 hours", "14 hours"],
    correctIndex: 2,
    explanation:
      "After 10 consecutive hours off duty, a driver may drive up to 11 hours, within a 14-hour on-duty window.",
  },
  {
    id: "gen-10",
    category: "general",
    question: "The 14-hour driving window refers to:",
    options: [
      "The maximum time you can be behind the wheel",
      "The total on-duty window in which your 11 hours of driving must fit",
      "How long you must rest between shifts",
      "A hazmat-only rule",
    ],
    correctIndex: 1,
    explanation:
      "The 14-hour window is the total span of on-duty time (driving and non-driving work) in which your 11 hours of driving must occur.",
  },
  {
    id: "gen-11",
    category: "general",
    question: "What's the correct first move if an object suddenly appears in your lane and you can't stop in time?",
    options: [
      "Slam the brakes and stay in your lane",
      "Consider steering around it if there's room — swerving often takes less distance than stopping",
      "Close your eyes and hope for the best",
      "Always swerve left, no matter what",
    ],
    correctIndex: 1,
    explanation:
      "Steering around an obstacle often requires less distance than stopping. Check your surroundings and countersteer smoothly once clear.",
  },
  {
    id: "gen-12",
    category: "general",
    question: "If your truck starts to skid, what should you do first?",
    options: [
      "Stomp the brake hard",
      "Stop braking/accelerating and steer in the direction you want to go",
      "Turn the wheel opposite the skid direction",
      "Shift into a lower gear immediately",
    ],
    correctIndex: 1,
    explanation:
      "The first move in a skid is to stop braking or accelerating and steer toward where you want the vehicle to go.",
  },
  {
    id: "gen-13",
    category: "general",
    question: "What should you do if a fuel or electrical fire breaks out?",
    options: [
      "Throw water on it",
      "Use a B:C or A:B:C rated fire extinguisher — never water",
      "Cover it with a blanket only",
      "Drive faster to blow it out",
    ],
    correctIndex: 1,
    explanation:
      "Water spreads liquid fires and conducts electricity, making both far more dangerous. Use a B:C or A:B:C extinguisher instead.",
  },
  {
    id: "gen-14",
    category: "general",
    question: "ABS (anti-lock braking system) mainly helps you:",
    options: [
      "Stop in a shorter distance every time",
      "Keep your wheels from locking up so you can maintain steering control",
      "Skip your pre-trip air-brake check",
      "Brake safely without ever touching the pedal",
    ],
    correctIndex: 1,
    explanation:
      "ABS keeps your wheels from locking during hard braking so you can still steer — it may not actually shorten your stopping distance.",
  },
  {
    id: "gen-15",
    category: "general",
    question: "When approaching a railroad crossing with your CDL vehicle, you should:",
    options: [
      "Speed up to clear it quickly",
      "Never shift gears while crossing the tracks",
      "Always come to a complete stop, even with no warning signals",
      "Cross diagonally to save time",
    ],
    correctIndex: 1,
    explanation:
      "Never shift gears while crossing railroad tracks — you want uninterrupted power the whole way across, and you should only start crossing if you can fully clear it.",
  },
  {
    id: "gen-16",
    category: "general",
    question: "Bridges and overpasses tend to freeze:",
    options: [
      "Later than regular roads",
      "Before the rest of the road, since cold air circulates both above and below them",
      "Only in the summer",
      "At the exact same rate as the road",
    ],
    correctIndex: 1,
    explanation:
      "Bridges lose heat from both the top and bottom, so they freeze before the rest of the road does — treat them with extra caution in cold weather.",
  },
  {
    id: "gen-17",
    category: "general",
    question: "The general knowledge exam is typically how many questions?",
    options: ["25", "50", "75", "100"],
    correctIndex: 1,
    explanation:
      "Most states administer a 50-question General Knowledge exam, and you generally need about 80% correct to pass.",
  },
  {
    id: "gen-18",
    category: "general",
    question: "What's the passing score most states require on the CDL knowledge test?",
    options: ["50%", "65%", "80%", "95%"],
    correctIndex: 2,
    explanation:
      "Most states require around 80% correct to pass the CDL knowledge tests, though you should always confirm your specific state's requirement.",
  },
  {
    id: "gen-19",
    category: "general",
    question: "Downgrades (long hills) should be driven by:",
    options: [
      "Selecting a low gear before starting down, not partway through",
      "Riding the brakes continuously the whole way down",
      "Coasting in neutral to save fuel",
      "Whatever gear you happen to be in at the top",
    ],
    correctIndex: 0,
    explanation:
      "Pick your low gear before you start the downgrade. Shifting partway down is risky, and riding the brakes can cause them to overheat and fade.",
  },
  {
    id: "gen-20",
    category: "general",
    question: "'Don't overdrive your headlights' means:",
    options: [
      "Never use high beams",
      "Don't go so fast that your stopping distance is longer than what your headlights let you see",
      "Always use fog lights at night",
      "Drive with headlights off in town",
    ],
    correctIndex: 1,
    explanation:
      "If your stopping distance is longer than the distance your headlights illuminate, you're overdriving them — you won't be able to stop for what you can't yet see.",
  },
  {
    id: "gen-21",
    category: "general",
    question: "When backing a straight truck, you should generally back toward:",
    options: [
      "The passenger's side, since you can't see that side at all",
      "The driver's side, so you can see down the side of the vehicle",
      "It doesn't matter which side",
      "Only with a spotter, never alone under any circumstance",
    ],
    correctIndex: 1,
    explanation:
      "Backing toward the driver's side lets you see more of what's happening along that side of the vehicle as you back up.",
  },
  {
    id: "gen-22",
    category: "general",
    question: "The 'GOAL' rule when backing up stands for:",
    options: [
      "Get Out And Look",
      "Go Only At Low speed",
      "Guide Others As Leader",
      "Gear Off, Apply Lock",
    ],
    correctIndex: 0,
    explanation:
      "GOAL means Get Out And Look — physically exit the cab and check your surroundings before and during a backing maneuver whenever possible.",
  },
  {
    id: "gen-23",
    category: "general",
    question: "The correct order of steps in an accident scene is generally:",
    options: [
      "Notify, care for the injured, protect the area",
      "Protect the area, notify authorities, care for the injured",
      "Care for the injured first, then everything else",
      "There is no set order",
    ],
    correctIndex: 1,
    explanation:
      "Protect the scene first (warning devices, hazards), notify authorities, then provide care for the injured within your ability and training.",
  },
  {
    id: "gen-24",
    category: "general",
    question: "Only two things can fully counteract fatigue and alcohol impairment behind the wheel:",
    options: [
      "Coffee and fresh air",
      "Sleep (for fatigue) and time (for alcohol) — nothing else truly works",
      "Loud music and cold water on your face",
      "A short walk around the truck",
    ],
    correctIndex: 1,
    explanation:
      "Only sleep actually fixes fatigue, and only time actually clears alcohol from your system — no shortcut substitutes for either.",
  },

  // ---------- air-brakes (12) ----------
  {
    id: "air-01",
    category: "air-brakes",
    question: "In a typical air brake system, the governor's cut-out pressure is around:",
    options: ["55 psi", "100 psi", "125 psi", "150 psi"],
    correctIndex: 2,
    explanation:
      "The governor typically stops the compressor (cuts out) at around 125 psi, then lets it restart (cuts in) around 100 psi.",
  },
  {
    id: "air-02",
    category: "air-brakes",
    question: "The governor's cut-in pressure (when the compressor restarts) is around:",
    options: ["40 psi", "70 psi", "100 psi", "140 psi"],
    correctIndex: 2,
    explanation:
      "The governor typically restarts the compressor around 100 psi after it cut out around 125 psi.",
  },
  {
    id: "air-03",
    category: "air-brakes",
    question: "The low-air pressure warning light and buzzer must activate before pressure drops below:",
    options: ["25 psi", "55 psi", "80 psi", "100 psi"],
    correctIndex: 1,
    explanation:
      "The low-air warning must come on before the pressure in the tanks drops below 55 psi, giving you an early alert to stop safely.",
  },
  {
    id: "air-04",
    category: "air-brakes",
    question: "Spring (parking) brakes typically begin to apply automatically somewhere in the range of:",
    options: ["0–10 psi", "20–45 psi", "60–80 psi", "100–120 psi"],
    correctIndex: 1,
    explanation:
      "As air pressure continues to drop, spring brakes apply automatically somewhere in the 20–45 psi range to prevent the vehicle from moving with no air.",
  },
  {
    id: "air-05",
    category: "air-brakes",
    question: "For a single vehicle, the maximum air pressure leakage rate with the engine off and brakes released is about:",
    options: ["Under 2 psi per minute", "Under 10 psi per minute", "Under 20 psi per minute", "Leakage doesn't matter if air tanks are full"],
    correctIndex: 0,
    explanation:
      "For a single vehicle with engine off and brakes released, leakage should be under about 2 psi per minute; combination vehicles allow slightly more.",
  },
  {
    id: "air-06",
    category: "air-brakes",
    question: "In a typical dual air system, pressure should build from 85 to 100 psi within about:",
    options: ["10 seconds", "45 seconds", "3 minutes", "10 minutes"],
    correctIndex: 1,
    explanation:
      "Pressure should build from 85 to 100 psi within roughly 45 seconds with the engine at operating rpm — slower buildup can mean trouble keeping up with heavy braking.",
  },
  {
    id: "air-07",
    category: "air-brakes",
    question: "During a slack adjuster check, more than about how much movement means it likely needs service?",
    options: ["1/4 inch", "1 inch", "3 inches", "6 inches"],
    correctIndex: 1,
    explanation:
      "If you can move a slack adjuster more than about one inch by hand, it likely needs adjustment or service.",
  },
  {
    id: "air-08",
    category: "air-brakes",
    question: "Air brakes take longer to engage than hydraulic brakes because of:",
    options: [
      "Brake-lag distance, as air has to travel through the lines before brakes engage",
      "A software delay in modern trucks",
      "The parking brake being applied first",
      "There is no delay difference between air and hydraulic brakes",
    ],
    correctIndex: 0,
    explanation:
      "Air brakes have a brief brake-lag distance because air has to travel through the lines to the brake chambers before the brakes actually engage — adding real distance at highway speed.",
  },
  {
    id: "air-09",
    category: "air-brakes",
    question: "The three main air brake systems on a combination vehicle are:",
    options: [
      "Service, parking, and emergency",
      "Primary, secondary, and backup",
      "Front, middle, and rear",
      "Manual, automatic, and hybrid",
    ],
    correctIndex: 0,
    explanation:
      "The three systems are: service brakes (normal driving, via the foot pedal), parking brakes (spring brakes held off by air), and emergency brakes (activate automatically if air is lost).",
  },
  {
    id: "air-10",
    category: "air-brakes",
    question: "The path air pressure travels through the system is roughly:",
    options: [
      "Compressor → governor → air tanks → foot valve → brake chambers",
      "Brake chambers → tanks → compressor",
      "Foot valve → compressor → chambers",
      "Governor → chambers → tanks → compressor",
    ],
    correctIndex: 0,
    explanation:
      "Air flows from the compressor, regulated by the governor, into the air tanks, then to the foot valve when you brake, which sends it to the brake chambers.",
  },
  {
    id: "air-11",
    category: "air-brakes",
    question: "The parking-brake test during a pre-trip generally involves:",
    options: [
      "Setting the parking brake and gently pulling against it in low gear to confirm it holds",
      "Driving at highway speed and slamming the brakes",
      "Only checking the dashboard warning light",
      "Removing the parking brake knob entirely",
    ],
    correctIndex: 0,
    explanation:
      "With the parking brake set, gently pull against it in low gear — the vehicle should not move if the parking brake is holding properly.",
  },
  {
    id: "air-12",
    category: "air-brakes",
    question: "A safety (relief) valve on an air system typically opens around:",
    options: ["100 psi", "125 psi", "150 psi", "200 psi"],
    correctIndex: 2,
    explanation:
      "The safety valve is a backup that opens around 150 psi to relieve excess pressure if the governor fails to cut out the compressor.",
  },

  // ---------- combination (8) ----------
  {
    id: "comb-01",
    category: "combination",
    question: "When a combination vehicle turns, the rear wheels of the trailer:",
    options: [
      "Follow the exact same path as the front wheels",
      "Track inside the path of the front wheels — this is called off-tracking",
      "Always track wider than the front wheels",
      "Lift off the ground briefly",
    ],
    correctIndex: 1,
    explanation:
      "Off-tracking means the rear wheels cut a shorter, tighter path than the front wheels during a turn — important to account for around curbs and corners.",
  },
  {
    id: "comb-02",
    category: "combination",
    question: "Coupling a tractor to a semitrailer requires backing under the trailer until:",
    options: [
      "The fifth wheel jaws lock around the kingpin, confirmed with a tug test",
      "The trailer wheels touch the tractor tires",
      "The landing gear folds up automatically",
      "The air lines connect on their own",
    ],
    correctIndex: 0,
    explanation:
      "After backing under, the fifth wheel jaws should lock around the kingpin — always confirmed with a visual check and a firm tug test before driving away.",
  },
  {
    id: "comb-03",
    category: "combination",
    question: "Before uncoupling a trailer, you should always:",
    options: [
      "Lower the landing gear before disconnecting air and electrical lines",
      "Disconnect air lines before lowering the landing gear",
      "Release the trailer brakes first",
      "Pull away slowly while still connected to test it",
    ],
    correctIndex: 0,
    explanation:
      "Lower the landing gear to support the trailer's weight before disconnecting the air and electrical lines and pulling away from the fifth wheel.",
  },
  {
    id: "comb-04",
    category: "combination",
    question: "'Crack-the-whip' effect refers to:",
    options: [
      "A trailer swaying more violently than the tractor during sudden steering",
      "The sound air brakes make when releasing",
      "A technique for tight parking",
      "The normal deceleration pattern in stop-and-go traffic",
    ],
    correctIndex: 0,
    explanation:
      "Sudden steering movements can cause a trailer to swing out more violently than the tractor, similar to cracking a whip — smooth steering inputs help avoid this.",
  },
  {
    id: "comb-05",
    category: "combination",
    question: "Doubles and triples require special attention to:",
    options: [
      "Increased rearward amplification, especially in the last trailer",
      "Nothing different than driving a single trailer",
      "Only the front trailer's brakes",
      "Cargo weight, but not trailer sway",
    ],
    correctIndex: 0,
    explanation:
      "Rearward amplification means the last trailer in a doubles/triples combination can swing significantly more than the lead unit during evasive maneuvers.",
  },
  {
    id: "comb-06",
    category: "combination",
    question: "When checking coupling on a combination vehicle, you should visually confirm:",
    options: [
      "No gap between the upper and lower fifth wheel plates",
      "The trailer brake light is off",
      "The kingpin is visible from underneath only",
      "The mud flaps are clean",
    ],
    correctIndex: 0,
    explanation:
      "There should be no visible gap between the upper and lower fifth wheel plates — a gap can mean the coupling isn't fully locked.",
  },
  {
    id: "comb-07",
    category: "combination",
    question: "A converter dolly is used to:",
    options: [
      "Connect a second or third trailer in a doubles/triples combination",
      "Lift the trailer for maintenance",
      "Replace the fifth wheel entirely",
      "Measure trailer weight at a scale",
    ],
    correctIndex: 0,
    explanation:
      "A converter dolly provides the coupling connection (its own fifth wheel and axle) used to attach an additional trailer behind the first one.",
  },
  {
    id: "comb-08",
    category: "combination",
    question: "Combination vehicles generally need more space than straight trucks because:",
    options: [
      "They have more mirrors",
      "Longer length and off-tracking mean wider turns and longer stopping/passing distances",
      "They're always driven slower automatically",
      "State law requires extra following distance only for combos",
    ],
    correctIndex: 1,
    explanation:
      "The added length, weight, and off-tracking behavior of a combination vehicle mean wider turns, longer stopping distances, and more room needed for passing and lane changes.",
  },

  // ---------- pre-trip (8) ----------
  {
    id: "pretrip-01",
    category: "pre-trip",
    question: "During a pre-trip inspection, examiners primarily want to hear you say:",
    options: [
      "Nothing — the inspection is silent",
      "\"Checking for [specific thing]\" as you point to and touch each item",
      "Only pass/fail for each item",
      "A memorized poem about truck safety",
    ],
    correctIndex: 1,
    explanation:
      "The spoken script format — pointing at an item and saying what you're checking it for — is what examiners are trained to listen for during the pre-trip.",
  },
  {
    id: "pretrip-02",
    category: "pre-trip",
    question: "When checking engine oil during a pre-trip, you should confirm:",
    options: [
      "The oil level is in the safe range on the dipstick",
      "The oil is a specific brand",
      "The oil has been changed that morning",
      "The dipstick is fully removed and set aside",
    ],
    correctIndex: 0,
    explanation:
      "You're checking that the oil level shown on the dipstick falls within the safe operating range — not the brand or exact change date.",
  },
  {
    id: "pretrip-03",
    category: "pre-trip",
    question: "Before opening the hood on a pre-trip, you should first say you're:",
    options: [
      "Checking the tire pressure",
      "Confirming parking brake is on and/or wheels are chocked",
      "Starting the engine",
      "Checking the mirrors",
    ],
    correctIndex: 1,
    explanation:
      "Before working near the engine compartment, confirm the parking brake is set and/or wheels are chocked so the vehicle can't move.",
  },
  {
    id: "pretrip-04",
    category: "pre-trip",
    question: "When inspecting belts (alternator, water pump, air compressor), you're checking for:",
    options: [
      "Correct color only",
      "Proper tightness and no excessive wear",
      "Brand name visibility",
      "Belts are optional to check",
    ],
    correctIndex: 1,
    explanation:
      "You're checking belts for proper tightness and no signs of excessive wear, cracking, or fraying.",
  },
  {
    id: "pretrip-05",
    category: "pre-trip",
    question: "What should you check regarding the last driver vehicle inspection report?",
    options: [
      "Nothing — old reports don't matter",
      "That any noted defects were repaired or certified as not needing repair",
      "Only the date it was filed",
      "That it's signed in blue ink",
    ],
    correctIndex: 1,
    explanation:
      "You should review the last inspection report to confirm any defects that were noted have since been repaired or certified as not requiring repair.",
  },
  {
    id: "pretrip-06",
    category: "pre-trip",
    question: "Before walking around the vehicle, part of the general condition check includes:",
    options: [
      "Looking underneath for fresh oil, coolant, grease, or fuel leaks",
      "Checking your phone for messages",
      "Only inspecting the cab interior",
      "Testing the horn from outside the vehicle",
    ],
    correctIndex: 0,
    explanation:
      "As you approach, part of the general condition check is confirming the vehicle isn't leaning and looking underneath for fresh fluid leaks.",
  },
  {
    id: "pretrip-07",
    category: "pre-trip",
    question: "For the service-brake test near the end of a pre-trip, you typically:",
    options: [
      "Roll at about 5 mph and apply the brakes firmly, checking for pulling or delay",
      "Slam the brakes at 60 mph",
      "Only check the brake pedal doesn't stick when the vehicle is off",
      "Skip this test if the parking brake passed",
    ],
    correctIndex: 0,
    explanation:
      "The service-brake test involves rolling forward at a low speed (around 5 mph) and applying the brakes firmly, checking for any pulling to one side, delay, or odd feel.",
  },
  {
    id: "pretrip-08",
    category: "pre-trip",
    question: "Checking hoses in the engine compartment, you're primarily looking for:",
    options: [
      "Cracks, wear, or leaks",
      "The correct hose color",
      "Whether they're the original factory hoses",
      "That they're all the same length",
    ],
    correctIndex: 0,
    explanation:
      "You're inspecting hoses for cracking, excessive wear, or signs of leaks that could fail during operation.",
  },

  // ---------- road-signs-safety (8) ----------
  {
    id: "road-01",
    category: "road-signs-safety",
    question: "A diamond-shaped road sign generally warns of:",
    options: [
      "A regulatory speed limit",
      "A general warning about upcoming road conditions or hazards",
      "A stop ahead only",
      "A rest area",
    ],
    correctIndex: 1,
    explanation:
      "Diamond-shaped signs are warning signs, alerting drivers to upcoming conditions like curves, merges, or other hazards.",
  },
  {
    id: "road-02",
    category: "road-signs-safety",
    question: "An octagon-shaped sign always means:",
    options: ["Yield", "Stop", "No entry", "Construction zone"],
    correctIndex: 1,
    explanation:
      "The eight-sided octagon shape is reserved exclusively for STOP signs in the U.S., recognizable by shape alone even without the text.",
  },
  {
    id: "road-03",
    category: "road-signs-safety",
    question: "At a railroad crossing with no gates or lights, a CDL driver must:",
    options: [
      "Never stop, just proceed through if it looks clear",
      "Slow down, look and listen both ways, and only cross if fully clear",
      "Only stop if hauling hazmat",
      "Cross at double the posted speed to clear it faster",
    ],
    correctIndex: 1,
    explanation:
      "Even without gates or lights, drivers must slow, check both directions, and only cross once certain the way is clear and they can fully clear the tracks.",
  },
  {
    id: "road-04",
    category: "road-signs-safety",
    question: "Buses and vehicles placarded for hazardous materials at railroad crossings must:",
    options: [
      "Speed up to clear the tracks quickly",
      "Come to a complete stop before crossing, per regulation",
      "Only stop if a train is visible",
      "Are exempt from stopping",
    ],
    correctIndex: 1,
    explanation:
      "Buses and hazmat-placarded vehicles are required to make a complete stop at railroad crossings, regardless of whether a train is visible.",
  },
  {
    id: "road-05",
    category: "road-signs-safety",
    question: "Fines in a marked work/construction zone are typically:",
    options: [
      "The same as anywhere else",
      "Reduced compared to normal fines",
      "Doubled compared to normal fines",
      "Not enforced at all",
    ],
    correctIndex: 2,
    explanation:
      "Many states double fines for traffic violations inside marked work zones as an added deterrent to protect workers.",
  },
  {
    id: "road-06",
    category: "road-signs-safety",
    question: "A yellow pennant-shaped sign typically indicates:",
    options: [
      "No passing zone",
      "Speed limit increase ahead",
      "Rest stop",
      "Weigh station",
    ],
    correctIndex: 0,
    explanation:
      "The yellow pennant (flag) shaped sign is used specifically to mark the beginning of a no-passing zone.",
  },
  {
    id: "road-07",
    category: "road-signs-safety",
    question: "Round-shaped signs are reserved for:",
    options: ["Stop warnings", "Railroad crossing advance warning", "Speed limits", "Hospital directions"],
    correctIndex: 1,
    explanation:
      "The round (circular) sign shape is specifically reserved for the railroad crossing advance warning sign in the U.S. sign system.",
  },
  {
    id: "road-08",
    category: "road-signs-safety",
    question: "Handheld device use (like texting) while driving a CMV is:",
    options: [
      "Allowed at speeds under 15 mph",
      "Prohibited by federal regulation for CMV drivers",
      "Only prohibited in some states",
      "Allowed if using a hands-free stand",
    ],
    correctIndex: 1,
    explanation:
      "Federal regulations prohibit handheld device use, including texting, while operating a commercial motor vehicle — it takes your hands, eyes, and attention off the driving task.",
  },
];

export type QuizCategory = QuizQuestion["category"];

export const CATEGORY_LABELS: Record<QuizCategory, string> = {
  general: "General Knowledge",
  "air-brakes": "Air Brakes",
  combination: "Combination Vehicles",
  "pre-trip": "Pre-Trip Inspection",
  "road-signs-safety": "Road Signs & Safety",
};

// Guide mapping used to key the post-quiz bundle pitch to the weakest category.
export const CATEGORY_GUIDE: Record<QuizCategory, string> = {
  general: "Guide 1 — General Knowledge",
  "air-brakes": "Guide 3 — Air Brakes",
  combination: "Guide 4 — Combination Vehicles",
  "pre-trip": "Guide 2 — Pre-Trip Inspection",
  "road-signs-safety": "Guides 1 & 5 — General Knowledge and Road & Driving Test",
};

const SAMPLE_COUNTS: Record<QuizCategory, number> = {
  general: 8,
  "air-brakes": 4,
  combination: 3,
  "pre-trip": 3,
  "road-signs-safety": 2,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export type SampledQuizQuestion = Omit<QuizQuestion, "options" | "correctIndex"> & {
  options: string[];
  correctIndex: number;
};

/** Samples 20 questions per the spec's per-category counts, shuffles question order and option order. */
export function sampleQuizQuestions(): SampledQuizQuestion[] {
  const byCategory = (cat: QuizCategory) =>
    shuffle(QUIZ_QUESTIONS.filter((q) => q.category === cat)).slice(0, SAMPLE_COUNTS[cat]);

  const picked = [
    ...byCategory("general"),
    ...byCategory("air-brakes"),
    ...byCategory("combination"),
    ...byCategory("pre-trip"),
    ...byCategory("road-signs-safety"),
  ];

  const withShuffledOptions: SampledQuizQuestion[] = picked.map((q) => {
    const correctText = q.options[q.correctIndex];
    const shuffledOptions = shuffle(q.options);
    return {
      ...q,
      options: shuffledOptions,
      correctIndex: shuffledOptions.indexOf(correctText),
    };
  });

  return shuffle(withShuffledOptions);
}
