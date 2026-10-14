/*
  The FAQ lives here, not inside faq.tsx, because two things read it: the
  accordion on the page, and the FAQPage structured data. faq.tsx is a client
  component, and a server component importing a plain value from a client
  module gets a client reference instead of the data.

  The questions are written the way people phrase them in a search box.
*/
export const FAQ_ITEMS = [
  {
    q: "Is BeFit AI free?",
    a: "BeFit AI is free to download and your first training plan is free to build. Full access — adaptive plans, unlimited logging, coach chat, nutrition scanning, body composition and analytics — comes with BeFit AI Pro, which starts with a one-week free trial. Prices are in the Pricing section above, and you can cancel any time.",
  },
  {
    q: "Do I need a gym?",
    a: "No. Tell it what you have — a full rack, a pair of dumbbells, or nothing but floor space — and the plan is built around that. Change your equipment later and it rewrites itself.",
  },
  {
    q: "How is this different from a workout plan I'd find online?",
    a: "A written plan is a snapshot. BeFit reads every session you log and adjusts the next one: loads that go up when you're progressing, volume that backs off when you've missed a week, substitutes when a machine is taken.",
  },
  {
    q: "How does the AI workout planner work?",
    a: "You answer a few questions — your goal, your experience, the days you can train and the equipment you have. BeFit builds a full split with sets, reps and progression, then rebuilds it from the sessions you log. You can also ask the AI coach why anything is programmed the way it is.",
  },
  {
    q: "Can it track my workouts and show which muscles I've trained?",
    a: "Yes. Log sets, reps and weight in a couple of taps and your history builds automatically. The muscle map shades your body by how much each muscle has actually been trained, and training volume shows where you're doing too much or too little.",
  },
  {
    q: "Can I scan my meals for calories?",
    a: "Yes. Point the camera at a plate and BeFit estimates calories, protein, carbs and fat — no database search. There's also a body composition scan for body fat and muscle mass. Both are estimates, not medical measurements.",
  },
  {
    q: "I'm a complete beginner. Is it going to be too much?",
    a: "It scales to where you are. Beginners get fewer movements, longer rest and form guidance on every lift, and you can ask the coach why anything is programmed the way it is.",
  },
  {
    q: "Is BeFit AI available on Android?",
    a: "Not yet. BeFit AI is on the iPhone App Store today, and an Android version is in development.",
  },
  {
    q: "What happens to my data?",
    a: "Your training history is yours. It is used to personalise your plan and nothing else — not sold, not shared with advertisers. You can delete your account and everything in it from inside the app.",
  },
  {
    q: "Can I cancel?",
    a: "Any time, from your App Store subscription settings. You keep access until the end of the period you've already paid for.",
  },
] as const;
