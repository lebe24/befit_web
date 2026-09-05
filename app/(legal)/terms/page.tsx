import PageShell from "@/components/page-shell";
import LegalSections, { L, type LegalSection } from "@/components/legal-sections";
import {
  CONTACT,
  ENTITY,
  JURISDICTION,
  LAST_UPDATED,
  SUBSCRIPTIONS,
  TRIAL_LENGTH,
} from "@/lib/legal";

export const metadata = {
  title: "Terms of Use",
  description:
    "The agreement between you and BeFit AI — subscriptions, auto-renewal, cancellation, and what the app does and does not claim to be.",
};

/*
  App Store guideline 3.1.2(c) requires a working link to these terms from the
  App Store description or the EULA field, and reviewers follow it. Sections 5
  to 7 carry the clauses they check for: what is being sold, how long it runs,
  that it renews by itself, and how to stop it.

  Written to be read. A user who cannot understand when they will be charged is
  a refund request and a one-star review, whatever the document technically
  permits.
*/
const SECTIONS: LegalSection[] = [
  {
    heading: "Who you are agreeing with",
    body: [
      `These terms are an agreement between you and ${ENTITY}, who provides the BeFit AI app. "We" and "us" mean ${ENTITY}; "you" means the person using the app.`,
      <>
        If anything here is unclear, email us at <L href={`mailto:${CONTACT}`}>{CONTACT}</L> before you subscribe rather than after.
      </>,
    ],
  },
  {
    heading: "Accepting these terms",
    body: [
      "Creating an account or using the app means you accept these terms. If you do not accept them, do not use BeFit AI.",
      "We may update them — see section 13 for how you will find out.",
    ],
  },
  {
    heading: "Who can use BeFit AI",
    body: [
      "You must be at least 16 years old. The app gives training and nutrition guidance, which is not appropriate for children.",
      "You also need to be capable of exercising safely. If you have a health condition, are pregnant, are recovering from injury, or have been told by a doctor to limit physical activity, speak to a qualified professional before following any plan the app produces.",
    ],
  },
  {
    heading: "Your account",
    body: [
      "You are responsible for keeping your sign-in details secure and for what happens under your account. Tell us straight away if you think someone else has access to it.",
      "One account is for one person. Sharing an account, or sharing a subscription across several people, is not permitted.",
    ],
  },
  {
    heading: "Subscriptions",
    body: [
      "BeFit AI is free to download, and building your first plan is free. Full access — adaptive plans, unlimited logging, coach chat, nutrition scanning, body composition and analytics — requires a paid subscription.",
      <>
        Two subscriptions are offered:{" "}
        {SUBSCRIPTIONS.map((s, i) => (
          <span key={s.name}>
            {i > 0 ? " and " : ""}
            <strong className="text-bone">{s.name}</strong> ({s.length})
          </span>
        ))}
        . The price of each is shown in the app, in your local currency, before
        you confirm anything. We do not take payment ourselves — purchases are
        processed by Apple and charged to your Apple Account.
      </>,
      "Payment is taken when you confirm the purchase. Your subscription then renews automatically for the same length at the same price until you cancel.",
    ],
  },
  {
    heading: "Free trial",
    body: [
      `New subscribers are offered a ${TRIAL_LENGTH} free trial before the first payment. You get full access during it and are charged nothing until it ends.`,
      "The trial converts into a paid subscription automatically when it ends, unless you cancel at least 24 hours before that point. If you buy a subscription while a trial is still running, any unused part of the trial is forfeited.",
      "One trial per person. Switching between the monthly and yearly plans does not start a new one.",
    ],
  },
  {
    heading: "Cancelling, renewing and refunds",
    body: [
      "Your subscription renews automatically unless auto-renew is turned off at least 24 hours before the end of the current period. Your Apple Account is charged for the renewal within the 24 hours before the period ends.",
      "Cancel at any time in your Apple Account settings: Settings on your iPhone, then your name, then Subscriptions, then BeFit AI. Deleting the app does not cancel a subscription, and neither does deleting your BeFit account.",
      "Cancelling stops the next payment. It does not end the period you have already paid for — you keep full access until that period runs out, and we do not pro-rate or refund part-used periods.",
      <>
        Refunds are handled by Apple, not by us, and are requested through{" "}
        <L href="https://reportaproblem.apple.com">reportaproblem.apple.com</L>.
        If Apple asks us to confirm something about your account, we will.
      </>,
    ],
  },
  {
    heading: "What BeFit AI is, and is not",
    body: [
      "Your plans, coaching replies and motivational messages are generated by an AI model from the information you give us and the sessions you log. They are general fitness and nutrition guidance.",
      "They are not medical advice, a diagnosis, or a treatment plan, and no part of the app is a substitute for a doctor, physiotherapist or registered dietitian. AI output can be wrong. Use your judgement, and stop if something hurts.",
      "You take part in physical exercise at your own risk.",
    ],
  },
  {
    heading: "Using the app properly",
    body: [
      "Do not attempt to reverse-engineer the app or the models behind it, scrape or bulk-export data, resell access, interfere with the service, or use it for anything unlawful.",
      "Do not submit photographs of anyone other than yourself, and do not submit content that is illegal or that you have no right to share.",
    ],
  },
  {
    heading: "Content and ownership",
    body: [
      "The app, its design, and the systems that generate your plans remain ours. Nothing here transfers ownership of them to you.",
      "What you put in stays yours — your photos, your logged sessions, your notes. You give us permission to process them for the purpose of running the app for you, as described in our Privacy Policy, and for nothing else.",
    ],
  },
  {
    heading: "Ending your access",
    body: [
      "You can stop at any time by cancelling your subscription and deleting your account from Profile, then Delete Account.",
      "We may suspend or close an account that breaks these terms, or where we are required to by law. If we close your account and you have paid for a period you have not used, we will refund the unused part unless the closure was for a serious breach.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "The app is provided as it is. We do not promise it will be uninterrupted or error-free, and we do not guarantee any particular fitness result — outcomes depend on what you actually do.",
      "Nothing in these terms limits liability for death or personal injury caused by our negligence, for fraud, or for anything else that cannot lawfully be limited. Subject to that, our total liability to you is limited to what you have paid us in the twelve months before the claim.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms as the app changes. The date at the top of this page always shows the current version.",
      "If a change materially affects your rights, we will tell you in the app or by email before it takes effect. Continuing to use BeFit AI after that means you accept the new version.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      `These terms are governed by the law of ${JURISDICTION}, and disputes will be heard by its courts. If you are a consumer, this does not remove any protection you have under the law of the country you live in.`,
    ],
  },
  {
    heading: "Contact",
    body: [
      <>
        Questions about these terms, your subscription, or your account:{" "}
        <L href={`mailto:${CONTACT}`}>{CONTACT}</L>. A person reads every
        message.
      </>,
    ],
  },
];

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Use"
      intro="What you can expect from BeFit AI, what we expect from you, and exactly how the subscription works — including when you are charged and how to stop it."
      updated={LAST_UPDATED}
    >
      <LegalSections sections={SECTIONS} />

      <p className="mt-8 text-sm leading-relaxed text-bone-dim">
        See also our <L href="/privacy">Privacy Policy</L> and{" "}
        <L href="/support">Support</L> pages.
      </p>
    </PageShell>
  );
}
