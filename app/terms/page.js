import Link from "next/link";

export const metadata = {
  title: "Terms of Service – InHue",
  description: "Terms of Service for InHue, the mood tracking app.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Terms of Service</h1>
        <p className="text-neutral-500 mb-12">Last updated: January 4, 2026</p>

        {/* Content */}
        <div className="prose prose-invert prose-neutral max-w-none">
          <Section title="1. Acceptance of Terms">
            <p>
              By downloading, accessing, or using the InHue mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
            <p>
              InHue is operated by <span className="text-white font-medium">InHue, LLC</span> ("InHue," "we," "us," or "our").
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>InHue is a mood tracking application that allows you to:</p>
            <ul>
              <li>Record daily mood ratings</li>
              <li>Add notes and tags to your entries</li>
              <li>Visualize your mood data over time</li>
              <li>Share your mood colors with people you invite</li>
            </ul>
          </Section>

          <Section title="3. Account Registration">
            <p>
              To use InHue, you must create an account using your email address or through Google or Apple sign-in. You agree to:
            </p>
            <ul>
              <li>Provide accurate information</li>
              <li>Keep your login credentials secure</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p>You are responsible for all activity that occurs under your account.</p>
          </Section>

          <Section title="4. User Content">
            <p>
              You retain ownership of any content you create in the App, including your mood ratings, notes, and tags ("User Content").
            </p>
            <p>
              By using the App, you grant InHue a limited license to store, process, and display your User Content solely for the purpose of providing the service to you and those you choose to share with.
            </p>
          </Section>

          <Section title="5. Sharing Features">
            <p>InHue allows you to share your mood colors with other users you invite. By using this feature:</p>
            <ul>
              <li>You control who can see your mood colors</li>
              <li>Your notes and tags remain private and are never shared</li>
              <li>You can remove connections at any time</li>
            </ul>
          </Section>

          <Section title="6. Acceptable Use">
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the App</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Impersonate any person or entity</li>
              <li>Upload malicious code or content</li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              The App, including its design, features, and content (excluding User Content), is owned by InHue, LLC and protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of the App.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              The App is provided "as is" and "as available" without warranties of any kind, either express or implied.
            </p>
            <div className="bg-amber-500/10 border-l-[3px] border-amber-500/50 rounded-r-lg px-5 py-4 my-4">
              <p className="text-white/90 mb-0">
                InHue is not a medical or mental health service. The App is intended for personal tracking and reflection only. If you are experiencing a mental health crisis, please contact a qualified healthcare professional or emergency services.
              </p>
            </div>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, InHue, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.
            </p>
            <p>
              Our total liability for any claim arising from these Terms or your use of the App shall not exceed the amount you paid to InHue in the 12 months preceding the claim, or $50, whichever is greater.
            </p>
          </Section>

          <Section title="10. Termination">
            <p>
              We may suspend or terminate your access to the App at any time, with or without cause, with or without notice.
            </p>
            <p>
              You may stop using the App at any time. To delete your account and data, contact us at{" "}
              <a href="mailto:support@inhue.io" className="text-cyan-300 hover:underline">
                support@inhue.io
              </a>
              .
            </p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>
              We may update these Terms from time to time. We will notify you of significant changes by posting the updated Terms in the App or on our website. Your continued use of the App after changes are posted constitutes acceptance of the new Terms.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of law provisions.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>If you have questions about these Terms, please contact us:</p>
            <div className="bg-white/5 rounded-xl p-6 mt-4">
              <p className="text-white font-medium mb-1">InHue, LLC</p>
              <p className="mb-0">
                Email:{" "}
                <a href="mailto:support@inhue.io" className="text-cyan-300 hover:underline">
                  support@inhue.io
                </a>
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="text-white/80 space-y-4 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}

