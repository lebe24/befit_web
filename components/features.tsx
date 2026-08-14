import Image from "next/image";
import Reveal from "./reveal";
import {
  Activity,
  Apple,
  BarChart3,
  MessagesSquare,
  Timer,
  Sparkles,
} from "lucide-react";

/*
  Asymmetric bento rather than an even 3×2 grid — the phone panel spans two
  rows on desktop so the block reads as a composition instead of a card dump.
*/
const CELLS = [
  {
    icon: Activity,
    title: "Adaptive splits",
    body: "Push/pull/legs, upper/lower or full-body — rebuilt around the days you actually show up.",
    span: "md:col-span-2",
  },
  {
    icon: Timer,
    title: "Two-tap logging",
    body: "Sets, reps and load in seconds. Drafts survive a force-quit, so a dropped session is never lost.",
    span: "",
  },
  {
    icon: BarChart3,
    title: "Progress that means something",
    body: "Volume, streaks and per-lift trends — not a wall of numbers you have to interpret yourself.",
    span: "",
  },
  {
    icon: MessagesSquare,
    title: "A coach that answers",
    body: "Ask why a lift is programmed, how to fix your form, or what to swap when the rack is taken.",
    span: "md:col-span-2",
  },
  {
    icon: Apple,
    title: "Nutrition, photographed",
    body: "Point the camera at a plate. Macros and calories come back without a database search.",
    span: "",
  },
  {
    icon: Sparkles,
    title: "Motivation, in your voice",
    body: "Pick a tone and your coach writes from your own stats — your goal, your streak, your last session.",
    span: "",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-shell px-5 md:px-10">
        <Reveal>
          <p className="label mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-acid" />
            In the app
          </p>
          <h2 className="display max-w-4xl text-[clamp(2.4rem,7vw,6rem)]">
            Everything, <span className="text-acid">nothing extra</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px border border-ink-line bg-ink-line md:mt-20 md:grid-cols-4">
          {/* Phone panel — spans two rows, anchors the left edge. */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden bg-ink-raised p-8 md:min-h-[34rem] md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-10 h-[24rem] w-[24rem] rotate-12 md:-right-10 md:h-[32rem] md:w-[32rem]">
                <Image
                  src="/image/phone.png"
                  alt="BeFit AI running on iPhone"
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 24rem, 32rem"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-raised via-ink-raised/70 to-transparent" />

              <div className="relative">
                <span className="label">Built for one thumb</span>
                <h3 className="display mt-3 text-4xl md:text-6xl">
                  Log it
                  <br />
                  mid-set
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-dim">
                  The whole session lives on one screen. No menus between you
                  and the next rep.
                </p>
              </div>
            </div>
          </Reveal>

          {CELLS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.05} className={c.span}>
                <div className="group h-full bg-ink p-8 transition-colors duration-500 hover:bg-ink-raised md:p-9">
                  <Icon
                    className="h-5 w-5 text-acid transition-transform duration-500 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                  <h3 className="display mt-6 text-2xl md:text-3xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
