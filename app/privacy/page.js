import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – InHue",
  description: "Privacy Policy for InHue, the mood tracking app.",
};

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-neutral-500 mb-12">Last updated: January 4, 2026</p>

        {/* Content */}
        <div className="prose prose-invert prose-neutral max-w-none">
          <p className="text-white/80 text-lg mb-6">
            <span className="text-white font-medium">InHue, LLC</span> ("InHue," "we," "us," or "our") operates the InHue mobile application (the "App"). This Privacy Policy explains how we collect, use, and protect your information when you use our App.
          </p>
          <p className="text-white/80 mb-8">
            By using InHue, you agree to the collection and use of information as described in this policy.
          </p>

          <Section title="Information We Collect">
            <Subsection title="Account Information">
              <p>When you create an account, we collect:</p>
              <ul>
                <li>Email address</li>
                <li>Display name</li>
                <li>Authentication data (if you sign in with Google or Apple)</li>
              </ul>
            </Subsection>

            <Subsection title="Mood Data">
              <p>When you use the App, we collect:</p>
              <ul>
                <li>Daily ratings (1-5)</li>
                <li>Notes you add to your ratings (optional)</li>
                <li>Tags you assign to your ratings</li>
              </ul>
            </Subsection>

            <Subsection title="Connections">
              <p>If you use the sharing feature, we collect:</p>
              <ul>
                <li>Information about who you connect with (user IDs and display names)</li>
                <li>"Thinking of You" messages sent and received</li>
              </ul>
            </Subsection>

            <Subsection title="Automatically Collected Information">
              <p>We may collect limited device information to support push notifications and app functionality.</p>
            </Subsection>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain the App</li>
              <li>Display your mood data and visualizations</li>
              <li>Enable sharing with people you choose to connect with</li>
              <li>Send push notifications (if you enable them)</li>
              <li>Improve the App and user experience</li>
            </ul>
          </Section>

          <Section title="How Your Information Is Shared">
            <Subsection title="With Your Connections">
              <p>If you invite someone to connect with you, they can see:</p>
              <ul>
                <li>Your daily rating colors</li>
                <li>Your display name</li>
              </ul>
              <p>
                They <span className="text-white font-medium">cannot</span> see:
              </p>
              <ul>
                <li>Your notes</li>
                <li>Your tags</li>
              </ul>
            </Subsection>

            <Subsection title="With Service Providers">
              <p>
                We use Firebase (Google) to provide authentication and data storage. Your data is stored securely on Firebase servers. See Google's privacy policy at{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </Subsection>

            <Subsection title="We Do NOT:">
              <ul>
                <li>Sell your personal information</li>
                <li>Share your data with advertisers</li>
                <li>Display ads in the App</li>
              </ul>
            </Subsection>
          </Section>

          <Section title="Data Retention">
            <p>
              Your data is retained as long as you maintain an active account. If you delete your account, your data will be permanently removed from our servers within 30 days.
            </p>
          </Section>

          <Section title="Your Choices">
            <Subsection title="Access and Update">
              <p>You can view and update your display name and account information within the App's Settings.</p>
            </Subsection>

            <Subsection title="Delete Your Account">
              <p>
                You can request account deletion by contacting us at{" "}
                <a href="mailto:support@inhue.io" className="text-cyan-300 hover:underline">
                  support@inhue.io
                </a>
                . This will permanently delete all your mood data and connections.
              </p>
            </Subsection>

            <Subsection title="Notifications">
              <p>You can enable or disable push notifications in the App's Settings or through your device settings.</p>
            </Subsection>
          </Section>

          <Section title="Data Security">
            <p>
              We take reasonable measures to protect your information from unauthorized access, loss, or misuse. Data is transmitted securely using encryption and stored on Firebase's secure infrastructure.
            </p>
            <p>
              However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              InHue is not intended for children under 13. We do not knowingly collect information from children under 13. If we learn we have collected such information, we will delete it promptly.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy in the App or on our website. Your continued use of the App after changes are posted constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>If you have questions about this Privacy Policy or your data, please contact us:</p>
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
      <div className="text-white/80 space-y-4">{children}</div>
    </section>
  );
}

function Subsection({ title, children }) {
  return (
    <div className="mb-4">
      <h3 className="text-white/60 font-medium mb-2">{title}</h3>
      <div className="text-white/80 space-y-3 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_p]:mb-0">
        {children}
      </div>
    </div>
  );
}

