import PageShell from "@/components/page-shell";
import { CONTACT } from "@/lib/legal";

export const metadata = {
  title: "Support",
  description:
    "Get help with BeFit AI — subscriptions, account deletion, restoring purchases, and how to reach a human.",
};


/*
  Apple checks the Support URL in App Store Connect actually loads and is
  relevant to the app, so this answers the questions people genuinely write in
  about — billing, restoring a purchase, deleting an account — rather than
  being a bare mailto.
*/
const TOPICS = [
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions are billed by Apple, so they are cancelled in your Apple Account rather than in BeFit. Open Settings on your iPhone, tap your name, then Subscriptions, choose BeFit AI and tap Cancel. You keep full access until the end of the period you have already paid for.",
  },
  {
    q: "I paid already — how do I get my plan back?",
    a: "Open BeFit, go to Profile then Billing, and tap Restore Purchases. This also works on a new phone, as long as you are signed in to the same Apple Account that made the original purchase. Restore is on the paywall too.",
  },
  {
    q: "How do I delete my account and my data?",
    a: "In the app: Profile, then Delete Account. This removes your profile, training history and any progress photos. It cannot be undone. If you cannot get into the app to do it, email us and we will delete it for you.",
  },
  {
    q: "My workout plan looks wrong for me.",
    a: "The plan rebuilds from what you log, so a few completed sessions will pull it back towards you. If it is still off, tell the coach in the chat what is wrong — too much volume, a movement you cannot do, an injury to work around — and it will adjust.",
  },
  {
    q: "The app will not build my plan.",
    a: "This is almost always a connection problem. Check your signal and try again — your answers are saved, so nothing is lost. If it keeps failing, email us with roughly when it happened and we will find it in our logs.",
  },
  {
    q: "Is my data sold or shared?",
    a: "No. Your training history is used to personalise your plan and your coaching, and nothing else. It is not sold, and it is not shared with advertisers.",
  },
];

export default function SupportPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Need a hand?"
      intro="Most answers are below. If yours is not, email us — a person reads every message and we aim to reply within one working day."
    >
      <a
        href={`mailto:${CONTACT}`}
        className="group flex items-center justify-between gap-6 border border-ink-line bg-ink-raised px-7 py-6 transition-colors duration-300 hover:border-acid"
      >
        <span>
          <span className="label block">Email us</span>
          <span className="display mt-2 block text-2xl text-bone md:text-3xl">
            {CONTACT}
          </span>
        </span>
        <span className="font-mono text-xl text-acid transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>

      <div className="mt-6">
        {TOPICS.map((t) => (
          <div key={t.q} className="border-t border-ink-line py-7 last:border-b">
            <h2 className="display text-2xl text-bone md:text-3xl">{t.q}</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-bone-dim">
              {t.a}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm leading-relaxed text-bone-dim">
        See also our{" "}
        <a href="/terms" className="text-acid underline underline-offset-4">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-acid underline underline-offset-4">
          Privacy Policy
        </a>
        .
      </p>
    </PageShell>
  );
}
