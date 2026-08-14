import Image from "next/image";

const YEAR = new Date().getFullYear();

/// The legal entity that owns the app. This must be the same string used in
/// the App Store Connect "Copyright" field, which names the account holder —
/// replace with your registered name or company before launch.
const COPYRIGHT_HOLDER = "BeFit AI";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-raised">
      <div className="mx-auto max-w-shell px-5 py-14 md:px-10 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="relative h-8 w-28">
              <Image
                src="/image/befit_logo.png"
                alt="BeFit AI"
                fill
                className="object-contain object-left"
                sizes="112px"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bone-dim">
              An AI personal trainer that rebuilds your plan around the sessions
              you actually complete.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="label mb-4">Product</p>
              <ul className="flex flex-col gap-3">
                {[
                  ["Method", "#method"],
                  ["Features", "#features"],
                  ["Pricing", "#pricing"],
                  ["FAQ", "#faq"],
                ].map(([l, h]) => (
                  <li key={h}>
                    <a
                      href={h}
                      className="text-sm text-bone-dim transition-colors hover:text-acid"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label mb-4">Legal</p>
              <ul className="flex flex-col gap-3">
                {[
                  ["Terms of Use", "/terms"],
                  ["Privacy Policy", "/privacy"],
                ].map(([l, h]) => (
                  <li key={h}>
                    <a
                      href={h}
                      className="text-sm text-bone-dim transition-colors hover:text-acid"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label mb-4">Help</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="/support"
                    className="text-sm text-bone-dim transition-colors hover:text-acid"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@befit.ai"
                    className="text-sm text-bone-dim transition-colors hover:text-acid"
                  >
                    support@befit.ai
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          {/* Keep this matching the Copyright field in App Store Connect,
              which must name the entity that holds the developer account. */}
          <p className="label">© {YEAR} {COPYRIGHT_HOLDER}. All rights reserved.</p>
          <p className="label">Built for people who show up</p>
        </div>
      </div>
    </footer>
  );
}
