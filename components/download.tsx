import Reveal from "./reveal";

/*
  Closing CTA. The headline is set as large as the hero's so the page ends on
  the same note it opened with, with the acid rule sweeping full-bleed above it.
*/
export default function Download() {
  return (
    <section
      id="download"
      className="relative overflow-hidden border-t border-ink-line py-24 md:py-40"
    >
      {/* Acid glow bleeding up from the bottom edge. */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(204,255,0,0.14),transparent_68%)]" />

      <div className="relative mx-auto max-w-shell px-5 text-center md:px-10">
        <Reveal>
          <p className="label mb-8 flex items-center justify-center gap-3">
            <span className="inline-block h-px w-10 bg-acid" />
            Free to start
            <span className="inline-block h-px w-10 bg-acid" />
          </p>

          <h2 className="display mx-auto max-w-5xl text-[clamp(3rem,11vw,9rem)]">
            Stop guessing.
            <br />
            <span className="text-acid">Start training.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-bone-dim">
            Build your first plan in under two minutes. No card required to get
            started.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://apps.apple.com/app/befit-ai"
              className="group relative overflow-hidden bg-acid px-10 py-5 font-mono text-[11px] uppercase tracking-[0.2em] text-black"
            >
              <span className="absolute inset-0 -translate-y-full bg-bone transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative">Download on iPhone</span>
            </a>
          </div>

          <p className="label mt-8">Android — in development</p>
        </Reveal>
      </div>
    </section>
  );
}
