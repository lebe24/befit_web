"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Reveal from "./reveal";

/*
  ⚠️ PLACEHOLDER PRICING — replace with the real App Store tiers before launch.
  These must match the products configured in App Store Connect and mapped to
  the RevenueCat offering ("monthly" / "yearly"), or the page will advertise a
  price the purchase sheet does not charge.
*/
const PRICE = {
  monthly: { amount: "9.99", cadence: "month", note: "Billed monthly" },
  yearly: {
    amount: "59.99",
    cadence: "year",
    note: "Billed annually — 2 months free",
  },
};

const INCLUDED = [
  "Adaptive training plans, rebuilt every session",
  "Unlimited workout logging and history",
  "AI coach chat, 24/7",
  "Photo nutrition tracking",
  "Progress analytics and streaks",
  "Personalised motivation notifications",
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const plan = annual ? PRICE.yearly : PRICE.monthly;

  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-40">
      {/* Diagonal hairline field, faded out so it never fights the card. */}
      <div className="hatch pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      <div className="relative mx-auto max-w-shell px-5 md:px-10">
        <Reveal>
          <p className="label mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-acid" />
            Pricing
          </p>
          <h2 className="display max-w-3xl text-[clamp(2.4rem,7vw,6rem)]">
            One plan. <span className="text-acid">Everything in it.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="flex flex-col gap-8">
              {/* Cadence switch */}
              <div
                className="inline-flex w-fit border border-ink-line"
                role="group"
                aria-label="Billing period"
              >
                {[
                  { k: false, label: "Monthly" },
                  { k: true, label: "Yearly" },
                ].map((o) => (
                  <button
                    key={o.label}
                    type="button"
                    onClick={() => setAnnual(o.k)}
                    aria-pressed={annual === o.k}
                    className={`px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                      annual === o.k
                        ? "bg-acid text-black"
                        : "text-bone-dim hover:text-bone"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>

              <div>
                <div className="flex items-start gap-2">
                  <span className="display mt-2 text-3xl text-bone-dim">$</span>
                  <span className="display text-[clamp(4.5rem,15vw,9rem)] tabular-nums">
                    {plan.amount}
                  </span>
                  <span className="display mt-3 text-2xl text-bone-dim md:mt-5">
                    /{plan.cadence}
                  </span>
                </div>
                <p className="label mt-2">{plan.note}</p>
              </div>

              <a
                href="#download"
                className="group relative w-full overflow-hidden bg-acid px-8 py-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-black md:w-auto"
              >
                <span className="absolute inset-0 -translate-y-full bg-bone transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative">Start training</span>
              </a>

              <p className="text-xs leading-relaxed text-bone-dim">
                Subscriptions renew automatically unless cancelled at least 24
                hours before the end of the current period. Manage or cancel
                anytime in your App Store account settings.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <div className="border border-ink-line bg-ink-raised">
              <div className="border-b border-ink-line px-8 py-5">
                <span className="label">What you get</span>
              </div>
              <ul>
                {INCLUDED.map((f) => (
                  <li
                    key={f}
                    className="group flex items-start gap-4 border-b border-ink-line px-8 py-5 last:border-b-0 transition-colors duration-300 hover:bg-ink"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-acid"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm leading-relaxed text-bone-dim transition-colors duration-300 group-hover:text-bone">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
