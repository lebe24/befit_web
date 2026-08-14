import LegalShell from "../legal-shell";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      {/* TODO: replace with the reviewed Privacy Policy. It must match the
          data-collection disclosures entered in App Store Connect. */}
      <p>
        Our full Privacy Policy is being finalised ahead of launch. If you want
        to know what BeFit AI stores about you, or you would like your account
        and its data deleted, email{" "}
        <a href="mailto:support@befit.ai" className="text-acid underline underline-offset-4">
          support@befit.ai
        </a>
        .
      </p>
      <p>
        Your training history is used to personalise your plan and coaching. It
        is not sold, and it is not shared with advertisers. Account deletion is
        available from inside the app and removes your data with it.
      </p>
    </LegalShell>
  );
}
