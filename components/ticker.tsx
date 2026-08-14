/*
  Edge-to-edge marquee. The list is rendered twice and the track translates
  -50%, so the loop is seamless. Pauses on hover (see globals.css) so the
  words are readable if someone stops on them.
*/
const WORDS = [
  "Push",
  "Pull",
  "Legs",
  "Hypertrophy",
  "Zone 2",
  "Progressive overload",
  "Deload",
  "Tempo",
  "Supersets",
  "Recovery",
  "PRs",
];

export default function Ticker() {
  const strip = [...WORDS, ...WORDS];

  return (
    <div className="relative flex overflow-hidden border-y border-ink-line bg-ink-raised py-5">
      {/* Fade the ends into the page rather than cutting words dead. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-raised to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-raised to-transparent" />

      <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
        {strip.map((w, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="display whitespace-nowrap text-2xl text-bone-dim md:text-3xl">
              {w}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-acid" />
          </span>
        ))}
      </div>
    </div>
  );
}
