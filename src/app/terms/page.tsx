export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <section className="prose prose-invert opacity-80">
        <p className="text-lg">
          These terms govern your use of Form Accessibility Validator website
          and extension. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing our website or using our extension, you agree to these
          terms and our Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          2. Service Description
        </h2>
        <p>
          Form Accessibility Validator is an open-source tool that helps
          developers create more accessible web forms by:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Analyzing form elements for accessibility issues</li>
          <li>Providing real-time feedback and suggestions</li>
          <li>Checking WCAG compliance</li>
          <li>Simulating different user experiences</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          3. User Responsibilities
        </h2>
        <p>You agree to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use the service in compliance with applicable laws</li>
          <li>Not modify or reverse engineer the extension</li>
          <li>Report bugs and issues through appropriate channels</li>
          <li>Verify accessibility compliance independently</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          4. Intellectual Property
        </h2>
        <p>
          The extension is open-source under the MIT license. Website content,
          unless otherwise noted, is copyright protected.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Disclaimers</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>The service is provided &quot;as is&quot; without warranties</li>
          <li>We do not guarantee complete accessibility compliance</li>
          <li>
            Users remain responsible for their website&apos;s accessibility
          </li>
          <li>We are not liable for any damages arising from use</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          6. Changes to Service
        </h2>
        <p>
          We reserve the right to modify or discontinue any part of the service
          with reasonable notice. Major changes will be announced through our
          GitHub repository.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact</h2>
        <p>For questions about these terms, please:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Open an issue on our{" "}
            <a
              href="#"
              className="text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              GitHub repository
            </a>
          </li>
          <li>Email us at legal@formaccessibilityvalidator.com</li>
        </ul>

        <p className="text-sm mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </div>
  );
}
