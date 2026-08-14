"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./reveal";

const ITEMS = [
  {
    q: "Do I need a gym?",
    a: "No. Tell it what you have — a full rack, a pair of dumbbells, or nothing but floor space — and the plan is built around that. Change your equipment later and it rewrites itself.",
  },
  {
    q: "How is this different from a plan I'd find online?",
    a: "A written plan is a snapshot. BeFit reads every session you log and adjusts the next one: loads that go up when you're progressing, volume that backs off when you've missed a week, substitutes when a machine is taken.",
  },
  {
    q: "I'm a complete beginner. Is it going to be too much?",
    a: "It scales to where you are. Beginners get fewer movements, longer rest and form guidance on every lift, and you can ask the coach why anything is programmed the way it is.",
  },
  {
    q: "What happens to my data?",
    a: "Your training history is yours. It is used to personalise your plan and nothing else — not sold, not shared with advertisers. You can delete your account and everything in it from inside the app.",
  },
  {
    q: "Can I cancel?",
    a: "Any time, from your App Store subscription settings. You keep access until the end of the period you've already paid for.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-shell px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="label mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-10 bg-acid" />
              Questions
            </p>
            <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)]">
              Before you
              <br />
              <span className="text-acid">start</span>
            </h2>
          </Reveal>

          <div className="md:col-span-8">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 0.05}>
                  <div className="border-t border-ink-line last:border-b">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start justify-between gap-6 py-7 text-left"
                    >
                      <span
                        className={`display text-2xl transition-colors duration-300 md:text-3xl ${
                          isOpen ? "text-acid" : "group-hover:text-acid"
                        }`}
                      >
                        {item.q}
                      </span>
                      <Plus
                        className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-500 ${
                          isOpen ? "rotate-45 text-acid" : "text-bone-dim"
                        }`}
                        strokeWidth={1.5}
                      />
                    </button>

                    {/* Grid-rows trick: animates height without measuring. */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-8 pr-10 text-sm leading-relaxed text-bone-dim md:text-base">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
