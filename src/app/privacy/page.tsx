export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="prose prose-invert opacity-80">
        <p className="text-lg">
          We are committed to protecting your privacy while providing
          transparent information about our practices.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Website Analytics</h2>
        <p>
          We use anonymous analytics to understand how visitors interact with
          our website. This data helps us improve our content and user
          experience. We use privacy-focused analytics that do not track
          individual users.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Extension Privacy</h2>
        <p>
          Our Form Accessibility Validator browser extension is completely open
          source and operates locally in your browser. We do not collect, store,
          or process any form data or personal information through the
          extension.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Cookies & Local Storage
        </h2>
        <p>
          We use essential cookies to remember your preferences and provide
          basic website functionality. You can control cookie settings through
          your browser preferences.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Email Communications
        </h2>
        <p>
          If you subscribe to our updates or documentation changes, we'll only
          use your email for the specified purpose. You can unsubscribe at any
          time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Data Sharing</h2>
        <p>
          We do not sell or share any personal information with third parties.
          Our project is open source, and all our practices are transparent
          through our GitHub repository.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Your Rights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Request access to your personal information</li>
          <li>Correct any information we hold about you</li>
          <li>Delete your information from our systems</li>
          <li>Opt-out of communications</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>For privacy-related questions or concerns, please:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Open an issue on our{" "}
            <a
              href="https://github.com/dmostoller/form-accessibility-validator"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              GitHub repository
            </a>
          </li>
          <li>Email us at privacy@formaccessibilityvalidator.com</li>
        </ul>

        <p className="text-sm mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </div>
  );
}
