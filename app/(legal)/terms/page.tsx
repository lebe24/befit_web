import LegalShell from "../legal-shell";

export const metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use">
      {/* TODO: replace with the reviewed Terms of Use.
          Apple requires a working link to these before a subscription app
          passes review, and the text must cover auto-renewal, cancellation
          and refund handling. */}
      <p>
        Our Terms of Use are being finalised ahead of launch. In the meantime,
        if you have a question about how BeFit AI works or how subscriptions are
        billed, email{" "}
        <a href="mailto:support@befit.ai" className="text-acid underline underline-offset-4">
          support@befit.ai
        </a>{" "}
        and we will answer directly.
      </p>
      <p>
        Subscriptions purchased through the App Store renew automatically unless
        cancelled at least 24 hours before the end of the current period. You can
        manage or cancel a subscription at any time in your App Store account
        settings.
      </p>
    </LegalShell>
  );
}
