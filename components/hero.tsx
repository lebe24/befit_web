import Image from "next/image";

/*
  Hero: full-bleed photograph, headline set in condensed display type that
  overruns the grid, and a data strip pinned to the bottom edge. The word
  "adapts" is knocked out in acid so the eye lands on the differentiator
  rather than the verb.
*/
export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Photograph */}
      <div className="absolute inset-0">
        <Image
          src="/image/model.jpg"
          alt=""
          fill
          priority
          quality={88}
          sizes="100vw"
          className="scale-105 object-cover object-[72%_center] md:object-[68%_center]"
        />
        {/*
          Scrims are tuned to keep the photograph visible while the headline
          stays legible over it. The vertical pass only darkens the extreme
          top and bottom edges; the horizontal pass weights the left, where
          the type sits, and releases entirely by the midpoint.
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-transparent to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent md:via-ink/35 md:to-40%" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-shell flex-col justify-end px-5 pb-0 pt-28 md:px-10">
        <div className="pb-14 md:pb-20">
          <p className="label rise mb-6 flex items-center gap-3" style={{ animationDelay: "80ms" }}>
            <span className="inline-block h-px w-10 bg-acid" />
            Now on iPhone
          </p>

          <h1 className="display text-[clamp(3.4rem,13vw,11.5rem)]">
            <span className="rise block" style={{ animationDelay: "160ms" }}>
              Training that
            </span>
            <span
              className="rise block text-acid"
              style={{ animationDelay: "260ms" }}
            >
              adapts
            </span>
            <span className="rise block" style={{ animationDelay: "360ms" }}>
              to you
            </span>
          </h1>

          <div
            className="rise mt-9 flex max-w-xl flex-col gap-7 md:mt-12"
            style={{ animationDelay: "480ms" }}
          >
            <p className="text-base leading-relaxed text-bone-dim md:text-lg">
              Most plans are written once and never look at you again. BeFit
              rebuilds yours from the sessions you actually complete — the lifts
              you skip, the weight you add, the days you miss.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="group relative overflow-hidden bg-acid px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-black"
              >
                <span className="absolute inset-0 -translate-y-full bg-bone transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative">Download free</span>
              </a>
              <a
                href="#method"
                className="border border-ink-line px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim transition-colors duration-300 hover:border-bone hover:text-bone"
              >
                How it works
              </a>
            </div>
          </div>
        </div>

        {/* Bottom data strip — grounds the hero and previews the proof. */}
        <div
          className="rise grid grid-cols-2 border-t border-ink-line md:grid-cols-4"
          style={{ animationDelay: "620ms" }}
        >
          {[
            ["01", "Plans rebuilt", "every session"],
            ["02", "Setup time", "under 2 min"],
            ["03", "Exercise library", "1,300+ moves"],
            ["04", "Coach access", "24 / 7"],
          ].map(([n, k, v], i) => (
            <div
              key={n}
              className={`border-ink-line px-1 py-6 md:px-5 ${
                i < 3 ? "md:border-r" : ""
              } ${i % 2 === 0 ? "md:border-l-0" : "border-l md:border-l"} ${
                i > 1 ? "border-t md:border-t-0" : ""
              }`}
            >
              <span className="label block">{n}</span>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim">
                {k}
              </p>
              <p className="display mt-1.5 text-2xl md:text-3xl">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
