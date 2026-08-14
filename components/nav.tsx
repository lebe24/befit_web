"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Method", href: "#method" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-ink-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-shell items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" className="relative h-7 w-24 md:h-8 md:w-28">
          <Image
            src="/image/befit_logo.png"
            alt="BeFit AI"
            fill
            priority
            className="object-contain object-left"
            sizes="112px"
          />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-bone"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-acid transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#download"
          className="group relative overflow-hidden border border-acid px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-acid transition-colors duration-300 hover:text-black md:px-6 md:py-2.5 md:text-[11px]"
        >
          <span className="absolute inset-0 -translate-x-full bg-acid transition-transform duration-300 ease-out group-hover:translate-x-0" />
          <span className="relative">Get the app</span>
        </a>
      </nav>
    </header>
  );
}
