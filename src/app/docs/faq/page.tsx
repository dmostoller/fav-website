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
                  evaluate form elements in real-time. Issues are highlighted as
                  you browse with color-coded indicators.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  What are the main features?
                </h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Real-time scanning of web forms</li>
                  <li>Quick fixes with suggested improvements</li>
                  <li>Comprehensive accessibility reports</li>
                  <li>Customizable scanning rules</li>
                </ul>
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
                  How do I configure the extension?
                </h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Right-click the extension icon</li>
                  <li>Select &quot;Options&quot;</li>
                  <li>Customize scanning rules and notification preferences</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  What keyboard shortcuts are available?
                </h3>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded">
                  <ul className="space-y-2">
                    <li>
                      <kbd>Alt</kbd> + <kbd>A</kbd> - Toggle extension
                    </li>
                    <li>
                      <kbd>Alt</kbd> + <kbd>R</kbd> - Generate report
                    </li>
                    <li>
                      <kbd>Alt</kbd> + <kbd>F</kbd> - Quick fix suggestions
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Any tips for getting started?
                </h3>
                <div className="bg-amber-100/30 dark:bg-amber-900/30 border border-amber-200/30 dark:border-amber-700/30 p-4 rounded">
                  <ul className="space-y-2 text-amber-900 dark:text-amber-100">
                    <li>Pin the extension for quick access</li>
                    <li>Enable automatic scanning in the options</li>
                    <li>Use keyboard shortcuts for faster workflow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
