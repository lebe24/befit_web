import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  /* One paragraph per entry. Kept as an array rather than one long string so
     the spacing between paragraphs is the layout's job, not a \n\n. */
  body: ReactNode[];
};

/*
  The body of a legal page.

  Both documents are long, and someone arriving from the App Store description
  or a paywall footer is usually looking for one clause — how to cancel, what
  happens to their photos. Numbering the sections and giving each a rule makes
  the page skimmable and lets support point at "section 5" and be understood.
*/
export default function LegalSections({
  sections,
}: {
  sections: LegalSection[];
}) {
  return (
    <div className="mt-2">
      {sections.map((s, i) => (
        <section
          key={s.heading}
          className="border-t border-ink-line py-8 last:border-b"
        >
          <div className="flex gap-5">
            <span
              aria-hidden="true"
              className="label mt-[0.35rem] shrink-0 tabular-nums"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="display text-xl text-bone md:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-3 flex max-w-2xl flex-col gap-3 text-[15px] leading-relaxed text-bone-dim">
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

/** A link in the site's accent, for use inside section bodies. */
export function L({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-acid underline underline-offset-4">
      {children}
    </a>
  );
}
