export default function FeaturesGuide() {
  const features = [
    {
      title: "Real-time Form Analysis",
      description: "Automatically scans and validates forms as you browse",
      details: [
        "Instant feedback on accessibility issues",
        "Color-coded indicators for different severity levels",
        "Non-intrusive overlay highlighting",
      ],
    },
    {
      title: "WCAG Compliance Checking",
      description: "Validates specific WCAG 2.1 accessibility criteria",
      details: [
        "Form Control Labels (WCAG 1.3.1 Level A)",
        "Color Contrast (WCAG 1.4.3 Level AA)",
        "Focus Indicators (WCAG 2.4.7 Level AA)",
        "Form Field Groups (WCAG 1.3.1 Level A)",
        "Autocomplete Attributes (WCAG 1.3.5 Level AA)",
        "Error Handling (WCAG 3.3.1 Level A)",
        "Detailed violation reporting and guidance",
        "Note: Additional manual testing recommended for full compliance",
      ],
    },
    {
      title: "Quick Fix Suggestions",
      description: "One-click solutions for common issues",
      details: [
        "Auto-generated fix proposals",
        "Code snippet suggestions",
        "Best practice recommendations",
      ],
    },
    {
      title: "Comprehensive Validation Rules",
      description: "Complete set of accessibility checks for form elements",
      details: [
        "Label presence and association",
        "Color contrast ratios",
        "Focus visibility checks",
        "Fieldset and legend usage",
        "Autocomplete attributes",
        "Error message presentation",
        "Error state associations",
        "Severity-based prioritization",
      ],
    },
  ];
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Features</h1>

      <section className="prose dark:prose-invert opacity-80">
        <p className="text-lg mb-8 text-zinc-800 dark:text-zinc-200">
          Form Accessibility Validator comes packed with powerful features to
          help you create and maintain accessible web forms.
        </p>

        <div className="space-y-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
                {feature.title}
              </h2>
              <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                {feature.description}
              </p>

              <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
                Key Capabilities:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                {feature.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg mt-2 border border-zinc-200 dark:border-zinc-700">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
            Configuration Options
          </h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            Access these features through the extension popup or configuration
            panel:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Customize scanning rules</li>
            <li>Filter by severity levels</li>
            <li>Toggle highlight overylay visibility</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
