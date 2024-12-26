export default function FAQ() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <section className="prose prose-invert opacity-80">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">General</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  How does the extension detect accessibility issues?
                </h3>
                <p>
                  The extension uses static analysis and WCAG guidelines to
                  evaluate form elements in real-time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Which WCAG version is supported?
                </h3>
                <p className="mb-2">
                  Our tool currently validates the following WCAG 2.1 criteria:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Form Control Labels (WCAG 1.3.1 Level A)</li>
                  <li>Color Contrast (WCAG 1.4.3 Level AA)</li>
                  <li>Focus Indicators (WCAG 2.4.7 Level AA)</li>
                </ul>
                <p>
                  While these checks help with accessibility compliance, they do
                  not cover all WCAG 2.1 Level AA requirements. For complete
                  WCAG 2.1 Level AA compliance, additional manual testing is
                  recommended.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Do you support frameworks like React or Vue?
                </h3>
                <p>
                  Yes, the extension works with any web forms regardless of the
                  framework used.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Installation & Setup
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Can I use this on Firefox?
                </h3>
                <p>
                  Currently, the extension is only available for Chromium-based
                  browsers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Do I need to configure anything after installation?
                </h3>
                <p>
                  The extension works out of the box, but you can customize
                  settings through the options panel.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Features & Usage</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Can I export accessibility reports?
                </h3>
                <p>
                  Yes, you can export reports in PDF, JSON or Markdown formats
                  for documentation and tracking.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Does it work with password-protected pages?
                </h3>
                <p>
                  Yes, the extension works on any page you can access in your
                  browser.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Can I customize the scanning rules?
                </h3>
                <p>
                  Yes, you can enable/disable specific rules and filter by
                  severity levels.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Troubleshooting</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  The extension isn&apos;t detecting my forms
                </h3>
                <p>
                  Try refreshing the page or checking if the form elements are
                  properly rendered in the DOM.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  How do I report bugs?
                </h3>
                <p>
                  You can report issues through our GitHub repository or support
                  email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
