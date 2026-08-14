import Link from "next/link";
import Footer from "@/components/footer";

/*
  Shared chrome for the legal routes.

  These pages intentionally contain NO legal copy. Publishing a generated
  Terms or Privacy document would be worse than publishing nothing — it needs
  to describe what the app actually collects and be reviewed. The routes exist
  so the footer links resolve; drop the real text into `children`.
*/
export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-ink-line">
        <div className="mx-auto flex h-20 max-w-shell items-center px-5 md:px-10">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-acid"
          >
            ← BeFit AI
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-20 md:px-10 md:py-28">
        <p className="label mb-6 flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-acid" />
          Legal
        </p>
        <h1 className="display text-[clamp(2.6rem,8vw,5rem)]">{title}</h1>
        {updated ? <p className="label mt-4">Last updated {updated}</p> : null}

        <div className="mt-12 flex flex-col gap-5 text-base leading-relaxed text-bone-dim">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}
