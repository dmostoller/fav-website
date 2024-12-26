export default function UsageGuide() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Usage Guide</h1>

      <section className="prose prose-invert opacity-80">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
        <p className="mb-6">
          After installing the extension, Form Accessibility Validator
          automatically begins scanning your web forms for accessibility issues.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Basic Features</h2>
        <ul className="space-y-4">
          <li>
            <strong>Real-time Scanning:</strong>
            <p>
              Issues are highlighted as you browse with color-coded indicators
            </p>
          </li>
          <li>
            <strong>Quick Fixes:</strong>
            <p>Click the extension icon to see suggested improvements</p>
          </li>
          <li>
            <strong>Detailed Reports:</strong>
            <p>Generate comprehensive accessibility reports for any page</p>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Configuration</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <p>Right-click the extension icon</p>
          </li>
          <li>
            <p>Select "Options"</p>
          </li>
          <li>
            <p>Customize scanning rules and notification preferences</p>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Keyboard Shortcuts
        </h2>
        <div className="bg-zinc-800 p-4 rounded">
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

        <h2 className="text-2xl font-semibold mt-12 mb-4">Common Use Cases</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Form Analysis</h3>
            <p>
              Click the extension icon while on any page with forms to start
              analysis
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Generating Reports</h3>
            <p>
              Use the "Generate Report" button for detailed WCAG compliance
              information
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Implementing Fixes</h3>
            <p>Click on highlighted issues to see and apply suggested fixes</p>
          </div>
        </div>

        <div className="bg-amber-900/30 border border-amber-700/30 p-4 rounded mt-8">
          <h3 className="text-amber-400 font-semibold">Tips & Tricks</h3>
          <ul className="mt-2 space-y-2">
            <li>Pin the extension for quick access</li>
            <li>Use keyboard shortcuts for faster workflow</li>
            <li>Enable automatic scanning in the options</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
