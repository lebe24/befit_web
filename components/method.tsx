import Reveal from "./reveal";

/*
  The differentiator, told as a three-beat loop rather than a feature list.
  Each step is indexed by a huge outlined numeral that bleeds behind the copy —
  the grid deliberately breaks on the left column.
*/
const STEPS = [
  {
    n: "01",
    title: "It reads you",
    body: "Two minutes of setup: your goal, your experience, the days you can train, the equipment you actually have. No 40-question intake form.",
  },
  {
    n: "02",
    title: "It writes the plan",
    body: "A full split built around your week — sets, reps, loads and progression, with substitutes for anything your gym is missing.",
  },
  {
    n: "03",
    title: "It rewrites itself",
    body: "Every logged session feeds back in. Add weight and it pushes harder. Miss a week and it rebuilds instead of pretending you didn't.",
  },
];

export default function Method() {
  return (
    <section id="method" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-shell px-5 md:px-10">
        <Reveal>
          <p className="label mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-acid" />
            The method
          </p>
          <h2 className="display max-w-4xl text-[clamp(2.4rem,7vw,6rem)]">
            A plan is only useful if it{" "}
            <span className="text-acid">keeps up</span>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="group relative grid grid-cols-1 items-start gap-6 border-t border-ink-line py-10 transition-colors duration-500 hover:border-acid md:grid-cols-12 md:gap-10 md:py-14">
                <div className="md:col-span-2">
                  <span className="numeral text-6xl transition-colors duration-500 group-hover:[-webkit-text-stroke-color:var(--acid)] md:text-8xl">
                    {s.n}
                  </span>
                </div>

                <h3 className="display text-4xl md:col-span-4 md:text-5xl">
                  {s.title}
                </h3>

                <p className="max-w-xl text-base leading-relaxed text-bone-dim md:col-span-6">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
